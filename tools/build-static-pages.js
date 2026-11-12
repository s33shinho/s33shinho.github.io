#!/usr/bin/env node
// Builds the static, crawlable pages (features, faq, privacy, terms), static.css and sitemap.xml.
// FAQ, Privacy and Terms are taken from the strings in app.js, so they stay in sync with the app.
// Run from the repo root after changing those texts:  node tools/build-static-pages.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const SITE = 'https://backlogwallet.com';
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function str(key) {
    const m = app.match(new RegExp(key + ': ("(?:[^"\\\\]|\\\\.)*")'));
    if (!m) throw new Error('missing translation ' + key);
    return JSON.parse(m[1]);
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const plain = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

const NAV = [['/', 'App'], ['/features/', 'Features'], ['/faq/', 'FAQ'], ['/privacy/', 'Privacy'], ['/terms/', 'Terms']];

function page({ slug, title, desc, h1, body, jsonld }) {
    const url = SITE + '/' + (slug ? slug + '/' : '');
    const nav = NAV.map(([href, label]) => {
        const cur = href === '/' + (slug ? slug + '/' : '') ? ' aria-current="page"' : '';
        return `<a href="${href}"${cur}>${label}</a>`;
    }).join('\n            ');
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Backlog Wallet">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE}/icons/og-banner.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#12151b">
    <link rel="icon" type="image/png" href="/icons/icon-192.png">
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.json">
    <script>if (localStorage.getItem('theme') === 'light') document.documentElement.setAttribute('data-theme', 'light');</script>
    <link rel="stylesheet" href="/static.css?v=1">${jsonld ? '\n    <script type="application/ld+json">' + JSON.stringify(jsonld) + '</script>' : ''}
</head>
<body>
    <a class="skip-link" href="#content">Skip to content</a>
    <header class="site-head">
        <a class="brand" href="/"><span class="brand-mark">BW</span> Backlog Wallet</a>
        <nav aria-label="Main">
            ${nav}
        </nav>
    </header>
    <main id="content" tabindex="-1">
        <h1>${esc(h1)}</h1>
${body}
    </main>
    <footer class="site-foot">
        <a href="/">Open the app</a> · <a href="/privacy/">Privacy Policy</a> · <a href="/terms/">Terms &amp; Conditions</a> · <a href="mailto:info@backlogwallet.com">info@backlogwallet.com</a>
        <div>Built by one person, updated when I get to it.</div>
    </footer>
</body>
</html>
`;
}

const cta = `<p class="cta"><a class="btn" href="/">Open Backlog Wallet</a></p>`;

// ---------- features
const features = [
    ['Purchases', 'Log the title, price, currency, store, date and whether you own it digitally or physically. Add games one at a time, paste a whole list, or use Smart import on a Steam purchase history and review the result before anything is saved.'],
    ['Statuses', 'Mark each game as completed, in progress, not completed, endless or one you will not play. Set statuses in bulk for many games at once.'],
    ['Currencies', 'Prices stay exactly as you paid them. Totals can be shown in any of 20+ currencies using live exchange rates, with saved rates as a fallback when you are offline.'],
    ['Spending charts', 'Spending per month, per year and per store, digital versus physical, and year-over-year comparison. Every chart can be saved as a PNG.'],
    ['Cost insights', 'Cost per completed game, the value of your unplayed backlog, and how this year compares with the same period last year.'],
    ['Year in Review', 'A summary of your year in games: total spent, number of purchases, favorite platform, most active month and priciest purchase, with a purchase heatmap and slides you can download as images.'],
    ['Savings goals', 'Save up for a game you want and track how far along you are.'],
    ['Virtual shelf, achievements and What to play?', 'See your library as a shelf of generated covers, unlock badges as it grows, or let the app pick something from your backlog when you cannot decide.'],
    ['Sync and backup', 'Your library lives in your account, so it is the same on your phone and your computer. Changes made on two devices are merged. Export to JSON or CSV whenever you like.'],
    ['Installable and works offline', 'Backlog Wallet can be installed like an app from your browser and opens without a network connection.'],
    ['Private by design', 'Only your account can read your library. You can share a read-only public link if you choose to, take part in the optional ranking, and delete your account and all data at any time.']
];
const featuresBody = '        <p class="lead">A ledger for the games you buy. Log what you paid, where you bought it and when. Backlog Wallet adds it up, converts it to your currency and shows how much of your library is still unplayed. It is free.</p>\n' +
    features.map(([t, d]) => `        <section class="feature"><h2>${esc(t)}</h2><p>${esc(d)}</p></section>`).join('\n') + '\n        ' + cta;

// ---------- faq
const faqHtml = str('faqHtml');
const faqItems = [];
faqHtml.replace(/<h3>(.*?)<\/h3><p>(.*?)<\/p>/g, (_, q, a) => { faqItems.push([plain(q), plain(a)]); return ''; });
const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

// ---------- privacy / terms (strip in-app handlers)
const clean = (h) => h.replace(/<a href='#' onclick="showView\('privacy'\); return false;">/g, '<a href="/privacy/">')
    .replace(/right here: <a href='#' onclick='clearLocalData\(\); return false;'>/g, 'from the Privacy Policy inside the app: <a href="/?view=privacy">');

const pages = [
    { slug: 'features', title: 'Backlog Wallet - Features', h1: 'What Backlog Wallet does',
      desc: 'Track your game purchases, see what your library cost you, convert 20+ currencies, and get a Year in Review. Free.',
      body: featuresBody, jsonld: { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Backlog Wallet', url: SITE + '/', applicationCategory: 'FinanceApplication', operatingSystem: 'Any (web browser)', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'A ledger for the games you buy: track purchases, spending, currencies and backlog progress.' } },
    { slug: 'faq', title: 'Backlog Wallet - FAQ', h1: 'Frequently asked questions',
      desc: 'Answers about Backlog Wallet: is it free, importing Steam purchases, currencies, where your data is stored and deleting your account.',
      body: '        ' + faqHtml.replace(/<h3>/g, '<h2>').replace(/<\/h3>/g, '</h2>') + '\n        ' + cta, jsonld: faqLd },
    { slug: 'privacy', title: 'Backlog Wallet - Privacy Policy', h1: 'Privacy Policy',
      desc: 'What Backlog Wallet stores, why, where, and how you can export or delete your data.',
      body: '        ' + clean(str('privacyHtml')).replace(/<h3>/g, '<h2>').replace(/<\/h3>/g, '</h2>') },
    { slug: 'terms', title: 'Backlog Wallet - Terms & Conditions', h1: 'Terms & Conditions',
      desc: 'The terms for using Backlog Wallet.',
      body: '        ' + clean(str('termsHtml')).replace(/<h3>/g, '<h2>').replace(/<\/h3>/g, '</h2>') }
];
pages.forEach((p) => {
    fs.mkdirSync(path.join(root, p.slug), { recursive: true });
    fs.writeFileSync(path.join(root, p.slug, 'index.html'), page(p));
});

// ---------- shared stylesheet (same tokens as the app)
fs.writeFileSync(path.join(root, 'static.css'), `/* Styles for the static pages (features, faq, privacy, terms). Generated by tools/build-static-pages.js */
@font-face { font-family: 'Source Sans 3'; font-weight: 200 900; font-display: swap; src: url('/vendor/fonts/SourceSans3-var.woff') format('woff'); }
@font-face { font-family: 'IBM Plex Mono'; font-weight: 500; font-display: swap; src: url('/vendor/fonts/IBMPlexMono-Medium.woff') format('woff'); }
:root { --bg: #12151b; --panel: #181c23; --border: #2a303a; --text: #a8b2c4; --dim: #8791a8; --white: #f2f5fa; --blue: #5fb4ee; --btn: #3a78c2; color-scheme: dark; }
:root[data-theme="light"] { --bg: #f5f5f8; --panel: #ffffff; --border: #e2e3ea; --text: #4b5162; --dim: #5d6477; --white: #0e1119; --blue: #2b64ad; --btn: #2b64ad; color-scheme: light; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font: 16px/1.65 'Source Sans 3', system-ui, sans-serif; }
a { color: var(--blue); }
a:focus-visible, .btn:focus-visible, #content:focus { outline: 2px solid var(--blue); outline-offset: 2px; }
#content:focus { outline: none; }
.skip-link { position: fixed; top: 8px; left: 8px; z-index: 10; padding: 10px 16px; background: var(--blue); color: #0b1017; font-weight: 700; border-radius: 4px; text-decoration: none; transform: translateY(-200%); }
.skip-link:focus { transform: none; }
.site-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px 24px; padding: 12px max(16px, calc((100% - 828px) / 2)); background: var(--panel); border-bottom: 1px solid var(--border); }
.brand { display: inline-flex; align-items: center; gap: 10px; color: var(--white); font-weight: 700; font-size: 18px; text-decoration: none; }
.brand-mark { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 4px; background: #f0a33c; color: #12151b; font: 500 12px 'IBM Plex Mono', ui-monospace, monospace; }
.site-head nav { display: flex; flex-wrap: wrap; gap: 4px 18px; }
.site-head nav a { color: var(--text); text-decoration: none; padding: 4px 0; border-bottom: 2px solid transparent; }
.site-head nav a:hover, .site-head nav a[aria-current="page"] { color: var(--white); border-bottom-color: var(--blue); }
main { max-width: 860px; margin: 0 auto; padding: 32px 16px 48px; }
h1 { color: var(--white); font-size: 32px; line-height: 1.2; margin: 0 0 18px; letter-spacing: -0.01em; }
h2, h3 { color: var(--white); line-height: 1.3; margin: 28px 0 8px; }
h2 { font-size: 21px; }
p, ul { margin: 0 0 14px; }
ul { padding-left: 22px; }
.lead { font-size: 18px; }
.feature { border-top: 1px solid var(--border); }
.policy-summary { border: 1px solid var(--border); border-left: 3px solid var(--blue); background: var(--panel); padding: 12px 16px; margin: 12px 0 18px; border-radius: 6px; }
.policy-summary ul { margin: 6px 0 8px 18px; }
.policy-summary p { margin: 0; color: var(--dim); font-size: 14px; }
.cta { margin-top: 28px; }
.btn { display: inline-block; padding: 10px 18px; border-radius: 5px; background: var(--btn); color: #fff; font-weight: 600; text-decoration: none; }
.btn:hover { opacity: 0.9; }
.site-foot { max-width: 860px; margin: 0 auto; padding: 20px 16px 40px; border-top: 1px solid var(--border); color: var(--dim); font-size: 14px; }
.site-foot div { margin-top: 6px; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
`);

// ---------- sitemap + robots
const urls = [['/', '1.0'], ['/features/', '0.8'], ['/faq/', '0.7'], ['/privacy/', '0.4'], ['/terms/', '0.3']];
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(([u, p]) => `  <url><loc>${SITE}${u}</loc><lastmod>${BUILD_DATE}</lastmod><priority>${p}</priority></url>`).join('\n') + `\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log('built', pages.map((p) => p.slug).join(', '), '+ static.css, sitemap.xml, robots.txt');
