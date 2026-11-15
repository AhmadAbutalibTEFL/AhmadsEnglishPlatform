/* PassMyEnglish service worker.
   Static course site on GitHub Pages:
   - Only same-origin GET requests are handled; anything else goes straight to the network.
   - Navigations: network first, cached index.html when offline (the site is one page app).
   - Static assets (css/js/icons/audio/images/json): stale-while-revalidate - instant loads,
     fresh copy fetched in the background for next time. Audio is cached as it is played.
   - Versioned cache; old PassMyEnglish caches are deleted on activate. Bump VERSION on deploys. */
const VERSION = 'pme-v3';
const PRECACHE = [
  'index.html',
  'manifest.webmanifest',
  'favicon.ico',
  'favicon-16.png',
  'favicon-32.png',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('pme-') && k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== self.location.origin) return;

  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).catch(() => caches.match('index.html')));
    return;
  }

  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(r);
    const fresh = fetch(r).then(res => {
      if (res && res.ok) cache.put(r, res.clone());
      return res;
    }).catch(() => null);
    return hit || (await fresh) || Response.error();
  })());
});
