const version = "06152025c";
const cacheName = `texi-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/apple-touch-icon.png',
        '/favicon-96x96.png',
        '/favicon.svg',
        '/index.html',
        '/manifest.json',
'/web-app-manifest-192x192.png',
'/web-app-manifest-512x512.png',
'/css/base.css',
'/css/columns.css',
'/img/1.png',
'/img/2.png',
'/img/3.png',
'/img/333.jpg',
'/img/4.png',
'/img/5.png',
'/img/6.png',
'/img/7.png',
'/img/am1.png',
'/img/am2.png',
'/img/am3.png',
'/img/am4.png',
'/img/am5.png',
'/img/am6.png',
'/img/centerprismhero.webp',
'/img/centerwave.webp',
'/img/fdev1.jpg',
'/img/fdev2.jpg',
'/img/fdev3.jpg',
'/img/fdev4.jpg',
'/img/fdev5.jpg',
'/img/fdev6.jpg',
'/img/fdev7.jpg',
'/img/fdev8.jpg',
'/img/iso1.png',
'/img/iso2.png',
'/img/iso3.png',
'/img/iso4.png',
'/img/iso5.png',
'/img/iso6.png',
'/img/iso7.png',
'/img/iso8.png',
'/img/iso9.png',
'/img/T1.webp',
'/img/T2.webp',
'/img/T3.webp',
'/img/T4.webp',
'/img/T5.webp',
'/img/T6.webp',
'/img/T7.webp',
'/img/T8.webp',
'/img/texi-logo.png',
'/img/texi-logo.webp',
'/js/Flip.min.js',
'/js/gsap.min.js',
'/js/imagesloaded.pkgd.min.js',
'/js/index.js',
'/js/lenis.min.js',
'/js/ScrollTrigger.min.js',
'/js/utils.js'
      ])
          .then(() => self.skipWaiting());
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});