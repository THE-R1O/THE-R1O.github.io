'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7b4d2dc278fa6cb5e667d27888d31837",
"assets/AssetManifest.bin.json": "b0bc85adb86bdfb020bfd645ed08e282",
"assets/AssetManifest.json": "a948a2753ba60354e71f62fe3944324f",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-Black.ttf": "6472ad4c9147424f24f3e8a55b465917",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-Bold.ttf": "2c44adc1ebd36820fd75012412e6f550",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-ExtraBold.ttf": "38782544ee0ed1c813100e5539b0f469",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-ExtraLight.ttf": "626e627134876a88ac0c78b5ab4b011f",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-Light.ttf": "4c63608980b784c679bbadeb18d9acf4",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-Medium.ttf": "25a584c850368872045297c0792b06ea",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-Regular.ttf": "2100b4a02ebb94c0aa18cabd642ee507",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-SemiBold.ttf": "6d45e0660b0afedcada3169150a497e4",
"assets/assets/fonts/Roboto_Slab/RobotoSlab-Thin.ttf": "16a0802d0b44dbd71bdf2d332db4d661",
"assets/assets/fonts/Rubik/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/Rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/Rubik/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/Rubik/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Rubik/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/images/Hand_card.webp": "3ba8a38691b276915d70f705a40cfa51",
"assets/assets/images/heart.svg": "feaf724de46a94319288fec8ce98c1a0",
"assets/assets/images/logo-svg-la.svg": "4a5a42936924048d1a656b1e10ca39d5",
"assets/assets/images/logo-svg.svg": "db2f673fb24cef5573cadb7c8a1b0530",
"assets/assets/images/logo.png": "a47db085ca3a4c94df0d44123f81ee0d",
"assets/assets/images/logo.svg": "40c43d6b5f8e7c994a4611e54aa788ba",
"assets/assets/images/noise-light.png": "0cbc22197feed9b2fa3056109d9fd5ca",
"assets/assets/images/noise-max-%2520shrink.png": "6fb24d875bfcf616ffd6c344cba9d291",
"assets/assets/images/noise-min1.png": "fe3d230d693c6b633035b5ddda377ff8",
"assets/assets/images/noise-min2-shrink.png": "440208e83447e0fdacaa4ed03f271da4",
"assets/assets/images/noise-min2.png": "d21f1e1ae77c9a59326dcd656ed26bfc",
"assets/assets/images/perlin-noise-semisoft.png": "6dc4455e0abd06eb6d6b7776a880866c",
"assets/assets/images/perlin-noise-sharp.png": "e37c87f46f3a1a81a630fbc9a0fde68a",
"assets/assets/images/perlin-noise-soft.png": "2eec25302c5c1c2bc2bf6777496b3040",
"assets/assets/images/poligraphy.webp": "5d5204ce57c75af5ea273a1e56548c88",
"assets/assets/images/T-shirt.webp": "e1f87be4fee87d1e8d2c6195a66d536f",
"assets/assets/images/Wide-format_printer.webp": "0d70fcc4baa990219d87f702e6996961",
"assets/FontManifest.json": "09eabada47937e9d8f83c704e60017cf",
"assets/fonts/MaterialIcons-Regular.otf": "8035d40c05a87b83b82362e8085abfc2",
"assets/NOTICES": "d7977a49bcc9d41ffacf2d414e0c87be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "9f3ec51152264bb934742f7ab3182998",
"canvaskit/canvaskit.wasm": "0649e48f371f130a43640e2fc071f5c0",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "81e4e248569fa8a3f066e1cb0cc50758",
"canvaskit/chromium/canvaskit.wasm": "1678832a723be79d6e4037e9b8f4fbb1",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "603ce4294d44261217986ef913d5f266",
"canvaskit/skwasm.wasm": "6ea61703abbea6435662c461c051cea7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cfc4c9371f7825e29835669492ff2ddf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01636453277f3332d4a1c9fad336e9d6",
"/": "01636453277f3332d4a1c9fad336e9d6",
"main.dart.js": "4711e0a9cd7e7e5ea20c95a7d9572930",
"manifest.json": "134fc422e1ad64ac71e6e241d4654640",
"version.json": "f8eefa5493a8423ed6649cdbcbab11c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
