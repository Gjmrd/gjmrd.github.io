"use strict";var precacheConfig=[["/index.html","3e50a21872dd0e5834bd3b3396de2dd0"],["/static/css/main.5e1f7143.css","c5cec9d434e98abf875fd5e0b221f52c"],["/static/js/main.b0159f9a.js","bc326365f0dbb9a0e9582462061a5bea"],["/static/media/4pda.3dd1e90a.png","3dd1e90a4e930fd3ba951278bac66882"],["/static/media/BattleNet.323deab6.ico","323deab69b853b61e24a8409b8b1bd01"],["/static/media/SF-UI-Display-Regular.3f37c5de.otf","3f37c5de154bb3ccd811f2f92854139b"],["/static/media/Thumbs.6c2fdc65.db","6c2fdc65479f736cd1511e142f5b8612"],["/static/media/anilist.cacf4bc6.png","cacf4bc6177a354ad9122d81737f0edb"],["/static/media/discord.7f1a4a7f.png","7f1a4a7f4d20ff8d50f1f654faa92696"],["/static/media/github.9ac279f9.png","9ac279f97fd30bde7b19709196d0a23c"],["/static/media/gmail.847c083c.png","847c083cc09040091439e3c05d1fedde"],["/static/media/instagram.4a8c2347.png","4a8c23476a7c20c5bee2a752a6f96e9e"],["/static/media/kitsu.d7862976.png","d7862976d9b755e9ea3a42d824abd028"],["/static/media/pikabu.fd8a56f1.png","fd8a56f1b0ac44ee47f62d825d275ea7"],["/static/media/reddit.87e970e4.png","87e970e47c8dd6f7c96045788018a758"],["/static/media/sm SFNSDisplay-Bold.a9e4f259.ttf","a9e4f259deea0220b6c83a6bf626c06f"],["/static/media/steam.0c1bf7f4.png","0c1bf7f4f3fefc9136aaf505ce474570"],["/static/media/telegram.473b9e3e.png","473b9e3ebdd7e4a177c1d6144b90b4c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});