self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("game-store").then(cache => {
      return cache.addAll([
        "index.html"
      ]);
    })
  );
});