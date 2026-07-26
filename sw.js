// Backlog Wallet — service worker
//
// Cel: dziala jak instalowalna aplikacja i otwiera sie tez bez sieci.
// Cache'ujemy WYLACZNIE statyczna powloke (HTML/CSS/JS/ikony/czcionki/
// biblioteki z CDN). Firebase Auth i zapytania do Firestore NIGDY nie sa
// przechwytywane tu ponizej - lecca zawsze prosto do sieci, bo to zywe
// dane uzytkownika, nie cos co wolno pokazac naklejone.
//
// WAZNE PRZY KAZDYM DEPLOYU ZMIENIAJACYM index.html / styles.css / app.js:
// podbij CACHE_VERSION ponizej o jeden. Bez tego przegladarki uzytkownikow
// moga przez jakis czas dostawac stara wersje z cache zamiast nowej.

const CACHE_VERSION = 'v3';
const CACHE_NAME = `backlog-wallet-${CACHE_VERSION}`;

// Wlasne pliki - musza byc zawsze aktualne wzgledem tego co faktycznie
// jest wdrozone. Sciezki wzgledne do korzenia strony.
const APP_SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png'
];

// Zewnetrzne biblioteki - warto je miec offline, ale to nie nasze pliki,
// wiec cache'ujemy je "najlepiej jak sie da" (stale-while-revalidate),
// bez wymagania ich obecnosci przy instalacji (zeby brak sieci przy pierwszej
// wizycie na wolnym laczu nie wywalil calej instalacji service workera).
const RUNTIME_CACHEABLE_HOSTS = [
  'cdn.jsdelivr.net',
  'www.gstatic.com',
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
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

  // stale-while-revalidate: oddaj od razu z cache jesli jest, a w tle
  // pobierz swiezsza wersje na nastepny raz. Offline -> zostaje cache.
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req)
          .then((res) => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    )
  );
});
