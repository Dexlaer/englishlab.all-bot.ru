const CACHE_NAME = "englishlab-cache-v2";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./pronouns.html",
  "./app.js",
  "./phrase-switch.html",
  "./phrase-switch.css",
  "./phrase-switch.js",
  "./do-play-go.html",
  "./do-play-go.css",
  "./do-play-go.js",
  "./confusing-forms.html",
  "./confusing-forms.css",
  "./confusing-forms.js",
  "./manifest.webmanifest",
  "./icons/favicon-32.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
