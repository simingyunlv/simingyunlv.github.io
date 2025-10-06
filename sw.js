// 轻量 Service Worker（可选）
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  // 网络优先，失败回退缓存（简化）
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});

