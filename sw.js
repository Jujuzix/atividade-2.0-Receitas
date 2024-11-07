let cacheName = "Atividade-2.0-Receitas";
let filesToCache = ["/", "/index.html", "index",
                            "/css/style1.css", "/js/main.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});