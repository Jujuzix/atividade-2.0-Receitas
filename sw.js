let cacheName = "Atividade-2.0-Receitas";
let filesToCache = ["/", "/index.html", "index","pagCarnes","pagDoces","pagMassas",
                            "/receitasC/receita1","/receitasC/receita2","/receitasC/receita3","/receitasC/receita4","/receitasC/receita5",
                            "/receitasC/receita6","/receitasD/receita1","/receitasD/receita2","/receitasD/receita3","/receitasD/receita4",
                            "/receitasD/receita5","/receitasD/receita6","/receitasM/receita1","/receitasM/receita2","/receitasM/receita3",
                            "/receitasM/receita4","/receitasM/receita5","/receitasM/receita6","/css/style1.css","/css/style2.css", "/css/style3.css","/css/style4.css","/css/style5.css", 
                            "images/carne1.webp","images/carne2.webp","images/carne3.webp","images/carne4.webp","images/carne5.webp","images/carne6.webp","images/doce1.jpeg","images/doce2.webp",
                            "images/doce3.webp","images/doce4.jpeg","images/doce5.webp","images/doce6.webp","images/logo.png","images/LogoPDM.png","images/massas1.webp","images/massas2.webp","images/massas3.jpg","images/massas4.webp","images/massas5.webp","images/massas6.webp","/js/main.js"];

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