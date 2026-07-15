const CACHE_NAME = 'urtsentr-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/images/hero.jpg',
    '/images/family.jpg',
    '/images/work.jpg',
    '/images/car.jpg',
    '/images/house.jpg',
    '/images/shop.jpg',
    '/images/court.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) return response;
                return fetch(event.request);
            })
    );
});
