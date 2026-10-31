// Floorplan Studio PWA: cache only application assets, never user project JSON.
const CACHE = 'floorplan-studio-v3.2.3';
const APP_ASSETS = ['./', './index.html', './mobile.html', './manifest.webmanifest', './favicon.ico', './favicon.png', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('floorplan-studio-') && key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
 const req=event.request;
 if(req.method!=='GET' || new URL(req.url).origin!==self.location.origin) return;
 // Network-first on app pages: users should get new releases, not stale HTML.
 if(req.mode==='navigate') {
  event.respondWith(fetch(req).then(response=>{if(response.ok){const saved=response.clone();caches.open(CACHE).then(cache=>cache.put(req,saved)).catch(()=>{});}return response;}).catch(()=>caches.match(req).then(hit=>hit||caches.match('./mobile.html'))));
 } else {
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(response=>{if(response.ok){const saved=response.clone();caches.open(CACHE).then(cache=>cache.put(req,saved)).catch(()=>{});}return response;})));
 }
});
