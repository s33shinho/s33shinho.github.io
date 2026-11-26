// Cloudflare Worker behind https://backlogwallet.com/api/steam
//
// Reads the list of games on a public Steam account through the official Steam Web API,
// so the browser never sees the API key (and Steam's API sends no CORS headers anyway).
//
// Setup: Workers & Pages > Create > Import a repository > this repo, root directory
// tools/steam-worker (wrangler.toml there sets the name and the route backlogwallet.com/api/steam*).
// Then Worker > Settings > Variables and Secrets > Add > type Secret, name STEAM_KEY,
// value = the key from https://steamcommunity.com/dev/apikey.
//
// Request:  POST /api/steam   body {"profile": "<profile link, custom URL name or SteamID64>"}
// Response: {"steamid", "persona", "games": [{"appid", "name", "minutes"}]}
//           or {"error": "bad_input" | "not_found" | "private" | "games_private" | "busy" | "upstream" | ...}

const ALLOWED_ORIGINS = ['https://backlogwallet.com', 'https://www.backlogwallet.com'];
const API = 'https://api.steampowered.com';
const CACHE_SECONDS = 300;

export default {
    async fetch(request, env, ctx) {
        if (request.method !== 'POST') return reply({ error: 'method' }, 405);

        // only the site itself may use this key (a browser always sends Origin on a POST)
        const origin = request.headers.get('Origin') || '';
        if (!ALLOWED_ORIGINS.includes(origin)) return reply({ error: 'forbidden' }, 403);
        if (!env.STEAM_KEY) return reply({ error: 'not_configured' }, 503);

        let body;
        try { body = await request.json(); } catch (e) { return reply({ error: 'bad_input' }, 400); }
        const target = parseProfile(String((body && body.profile) || '').trim().slice(0, 200));
        if (!target) return reply({ error: 'bad_input' }, 400);

        try {
            let steamid = target.steamid;
            if (!steamid) {
                const r = await steam(env, `/ISteamUser/ResolveVanityURL/v1/?vanityurl=${encodeURIComponent(target.vanity)}`);
                if (!r.response || r.response.success !== 1 || !/^\d{17}$/.test(r.response.steamid || '')) return reply({ error: 'not_found' }, 404);
                steamid = r.response.steamid;
            }

            const cacheKey = new Request(`${new URL(request.url).origin}/api/steam-cache/${steamid}`);
            const cache = caches.default;
            const hit = await cache.match(cacheKey);
            if (hit) return reply(await hit.json());

            const sum = await steam(env, `/ISteamUser/GetPlayerSummaries/v2/?steamids=${steamid}`);
            const player = sum.response && Array.isArray(sum.response.players) ? sum.response.players[0] : null;
            if (!player) return reply({ error: 'not_found' }, 404);
            if (player.communityvisibilitystate !== 3) return reply({ error: 'private', persona: player.personaname || '' }, 403);

            const owned = await steam(env, `/IPlayerService/GetOwnedGames/v1/?steamid=${steamid}&include_appinfo=1&format=json`);
            const list = owned.response && Array.isArray(owned.response.games) ? owned.response.games : null;
            // a public profile with private game details answers with an empty response
            if (!list) return reply({ error: 'games_private', persona: player.personaname || '' }, 403);

            const seen = new Set();
            const games = [];
            for (const g of list) {
                const appid = Number(g.appid);
                if (!appid || seen.has(appid) || !g.name) continue;
                seen.add(appid);
                games.push({ appid, name: String(g.name).slice(0, 150), minutes: Number(g.playtime_forever) || 0 });
                if (games.length >= 10000) break;
            }
            const data = { steamid, persona: String(player.personaname || '').slice(0, 64), games };
            ctx.waitUntil(cache.put(cacheKey, new Response(JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json', 'Cache-Control': `max-age=${CACHE_SECONDS}` }
            })));
            return reply(data);
        } catch (e) {
            const code = (e && e.message) || 'upstream';
            return reply({ error: ['busy', 'bad_key', 'timeout'].includes(code) ? code : 'upstream', status: (e && e.status) || 0 }, 502);
        }
    }
};

// profile link, custom URL name or SteamID64 -> { steamid } or { vanity }
function parseProfile(input) {
    if (!input) return null;
    if (/^7656\d{13}$/.test(input)) return { steamid: input };
    const prof = /steamcommunity\.com\/profiles\/(7656\d{13})/i.exec(input);
    if (prof) return { steamid: prof[1] };
    const id = /steamcommunity\.com\/id\/([A-Za-z0-9_-]{2,32})/i.exec(input);
    if (id) return { vanity: id[1] };
    if (/^[A-Za-z0-9_-]{2,32}$/.test(input)) return { vanity: input };
    return null;
}

async function steam(env, path) {
    let res;
    try {
        res = await fetch(`${API}${path}&key=${encodeURIComponent(env.STEAM_KEY.trim())}`, { signal: AbortSignal.timeout(10000) });
    } catch (e) {
        throw Object.assign(new Error('timeout'), { status: 0 });
    }
    // Steam answers 401/403 when the key is wrong or revoked
    if (res.status === 401 || res.status === 403) throw Object.assign(new Error('bad_key'), { status: res.status });
    if (res.status === 429) throw Object.assign(new Error('busy'), { status: 429 });
    if (!res.ok) throw Object.assign(new Error('upstream'), { status: res.status });
    return res.json();
}

function reply(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
            'X-Content-Type-Options': 'nosniff'
        }
    });
}
