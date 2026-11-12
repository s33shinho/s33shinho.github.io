// Backlog Wallet - service worker
//
// Goal: behave like an installable app and open without a network too.
// We cache ONLY the static shell (HTML/CSS/JS/icons/fonts/CDN libraries).
// Firebase Auth and Firestore requests are NEVER intercepted below - they
// always go straight to the network, because that is live user data and must
// not be served from a stale copy.
//
// IMPORTANT for every deploy that changes index.html / styles.css / app.js:
// bump CACHE_VERSION below by one. Without it, users' browsers may keep
// serving the old version from cache for a while.
//
// There is a second mechanism: styles.css and app.js are loaded from
// index.html with a "?v=" suffix (e.g. app.js?v=28). It gets around the
// host's edge cache (e.g. Cloudflare), which can keep an old copy of a file
// even when the service worker below already has a new CACHE_VERSION - that
// cache sits in front of the browser, not inside it. Whenever those two files
// change, bump BOTH numbers together: CACHE_VERSION here and "?v=" in the
// <script>/<link> tags in index.html (the paths in APP_SHELL below must match
// them exactly, otherwise the precache grabs the old version).

const CACHE_VERSION = 'v45';
const CACHE_NAME = `backlog-wallet-${CACHE_VERSION}`;

// Our own files - they must always match what is actually deployed.
// Paths are relative to the site root.
const APP_SHELL = [
  '/',
  '/index.html',
  '/styles.css?v=45',
  '/app.js?v=45',
  '/manifest.json',
  '/static.css?v=1',
  '/features/',
  '/faq/',
  '/privacy/',
  '/terms/',
  '/vendor/fontawesome/css/all.min.css',
  '/vendor/fontawesome/webfonts/fa-solid-900.woff2',
  '/vendor/fontawesome/webfonts/fa-regular-400.woff2',
  '/vendor/fonts/SourceSans3-var.woff',
  '/vendor/fonts/IBMPlexMono-Regular.woff',
  '/vendor/fonts/IBMPlexMono-Medium.woff',
  '/vendor/fonts/IBMPlexMono-SemiBold.woff',
  '/vendor/fonts/IBMPlexMono-Bold.woff',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/icons/og-banner.png'
];

// External libraries - worth having offline, but they are not our files, so we cache them
// on a best-effort basis (stale-while-revalidate) without requiring them at install time
// (so a missing network on the first visit does not break the whole service worker install).
const RUNTIME_CACHEABLE_HOSTS = [
  'cdn.jsdelivr.net',
  'www.gstatic.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

function isAppShellRequest(url) {
  return url.origin === self.location.origin;
}

function isRuntimeCacheableRequest(url) {
  return RUNTIME_CACHEABLE_HOSTS.includes(url.hostname);
}

// Firebase Auth/Firestore i wszystko inne spoza tych dwoch kategorii
// przechodzi obok service workera bez ingerencji - patrz komentarz na gorze.
function isNeverCached(url) {
  return url.hostname.includes('firebaseio.com') ||
         url.hostname.includes('googleapis.com') ||
         url.hostname.includes('firebaseapp.com') && url.pathname.includes('/__/auth');
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (isNeverCached(url)) return;
  if (!isAppShellRequest(url) && !isRuntimeCacheableRequest(url)) return;

  // stale-while-revalidate: answer from the cache right away if there is one, and fetch
  // a fresher copy in the background for next time. Offline -> the cache stays.
  // page loads like /?view=faq or /?source=pwa share one cached shell, so the query part is ignored
  const isPage = req.mode === 'navigate';
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(req, { ignoreSearch: isPage }).then((cached) => {
        const network = fetch(req)
          .then((res) => {
            if (res && res.status === 200 && !isPage) cache.put(req, res.clone());
            else if (res && res.status === 200 && !url.search) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached || (isPage ? cache.match('/index.html') : undefined));
        return cached || network;
      })
    )
  );
});
