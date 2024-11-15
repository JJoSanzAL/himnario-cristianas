self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('himnario-cache').then((cache) => {
      return cache.addAll([
        '/docs/',
        '/docs/index.html',
        '/docs/styles.css',
        '/docs/scripts.js',
        // Lista de archivos adicionales que quieras cachear
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});