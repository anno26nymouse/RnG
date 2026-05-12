const CACHE_NAME = 'hunter-gen-v1';
const ASSETS = [
  './',
  './index.html',
  // Tambahkan path CSS/JS eksternal jika ada di file terpisah
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetching Assets
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
