const CACHE_NAME = 'af-portal-cache-v7';
const urlsToCache = [
  '/paid_portal/index.html',
  '/paid_portal/pending.html',
  '/paid_portal/paid.html',
  '/paid_portal/favicon_io/favicon.ico',
  '/paid_portal/favicon_io/favicon-16x16.png',
  '/paid_portal/favicon_io/favicon-32x32.png',
  '/paid_portal/favicon_io/apple-touch-icon.png',
  '/paid_portal/favicon_io/android-chrome-192x192.png',
  '/paid_portal/favicon_io/android-chrome-512x512.png',
  '/paid_portal/favicon_io/site.webmanifest',
  // Add more assets (CSS, JS, images) as needed
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Notify clients when a new service worker is installed
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'NEW_VERSION_AVAILABLE' });
      });
    })
  );
}); 