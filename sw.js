let cacheName = "Atividade-2.0-Receitas";
let filesToCache = ["/", "/index.html", "index","pagCarnes.html","pagCarnes","pagDoces.html","pagDoces","pagMassas.html","pagMassas",
                            "/receitasC/receita1.html","/receitasC/receita2.html", "/receitasC/receita3.html", "/receitasC/receita4.html",
                            "/receitasC/receita5.html", "/receitasC/receita6.html","/receitasD/receita1.html","/receitasD/receita2.html",
                            "/receitasD/receita3.html", "/receitasD/receita4.html", "/receitasD/receita5.html", "/receitasD/receita6.html",
                            "/receitasM/receita1.html","/receitasM/receita2.html","/receitasM/receita3.html", "/receitasM/receita4.html",
                            "/receitasC/receita1","/receitasC/receita2","/receitasC/receita3","/receitasC/receita4","/receitasC/receita5",
                            "/receitasC/receita6","/receitasD/receita1","/receitasD/receita2","/receitasD/receita3","/receitasD/receita4",
                            "/receitasD/receita5","/receitasD/receita6","/receitasM/receita1","/receitasM/receita2","/receitasM/receita3",
                            "/receitasM/receita4","/receitasM/receita5","/receitasM/receita6","/receitasM/receita5.html", "/receitasM/receita6.html",
                            "/css/style1.css","/css/style2.css", "/css/style3.css","/css/style4.css","/css/style5.css", "/js/main.js"];

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