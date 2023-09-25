;
const CACHE_NAME = 'v1_cache_curriculum',
urlsToCache = [
    'https://chazzt-2049.github.io/curriculum-pwa/',
    'https://chazzt-2049.github.io/curriculum-pwa/index.html',
    'https://chazzt-2049.github.io/curriculum-pwa/css/style.css',
    'https://chazzt-2049.github.io/curriculum-pwa/script.js',
    'https://chazzt-2049.github.io/curriculum-pwa/fetch.js',
    'https://chazzt-2049.github.io/curriculum-pwa/imagenes/borreload.png'
]

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>{
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(error => console.log(error))
    )
})
self.addEventListener('activate', event =>{
    const cacheWhitelist = [CACHE_NAME]
    event.waitUntil(
        caches.keys()
            .then(cachesNames =>{
                cachesNames.map(cacheName =>{
                    if(cacheWhitelist.indexOf(cacheName)=== -1){
                        return caches.delete(cacheName)
                    }
                })
            })
            .then(() => self.clients.claim())
    )
})
self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(res){
                return res
            }
            
            return fetch(event.request)
        })
    )
})
