'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f99e7cf6b811f7acf95423276bd713da",
"loading-buffering.gif": "cac6f4f6ddbe92403ef75aab346d1f59",
"index.html": "a3f6722080430a8054c8c64e1bbe22b8",
"/": "a3f6722080430a8054c8c64e1bbe22b8",
"styles.css": "4926b1dca869ea30c3ceccabf6a54f25",
"main.dart.js": "fa6c002f59046e06a50adf3ead033470",
"README.md": "2f7bbd92e75962e9e11b5c6ced03fa15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19b72f4fac6c1ef5796eb27d63e20b00",
".git/config": "a9d758aeeae365f974cfe38c0dcf44e8",
".git/objects/59/c2a6a3f15282f8712e885b285f2b31ac28f45f": "b4dab58a0a2b68675090b8880809f885",
".git/objects/66/bd42a1a7a5090e3fbf582770b96160de897af4": "f06c2c5289f61fdb0c8b0c58a2064f66",
".git/objects/57/a547239b6be09663921f66af0384a33daa6840": "1bff0ca8773a33439e2745a41ef478ca",
".git/objects/9b/4a12ff1e9f26e5a725ae781810988a4334b686": "0aa2b81cd3363ba487ed23c141056218",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/0f00b55ef467377c2a3f059082e396fca8a823": "abaa9de85373f8e821bd89ff6e0b8251",
".git/objects/9c/66434ccd04292e44b4cac9d91919abf2cd8773": "42c6671e914cb11ea75a5acbda2ec4cd",
".git/objects/d7/9edf75c50890755452002c297ef224f6aee824": "83a77a6d05e7a025b521d0580f375cdc",
".git/objects/a5/4ad4b93dea7fefe7b6f30ec7470eb7c8e41159": "0c2070fa9dc2539927f0038e3e047332",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/a9b87c1aaa3f883ba6fa6fa0d7c8043497c5ec": "588e6ce8d0518f0d088a6f05c0ab0544",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/f6c4ca7719297fcb78b61b0f631558383f8841": "ee90a172f0b23499d2e8fb6250d3dc92",
".git/objects/7c/447c08629d8dbc2b39389121b07b0a56daaba5": "5a94a1cfcaa10cd65498c2e3489a6769",
".git/objects/42/9733064407d35fc2af4624a5ac2202a9944f8e": "dde995c2cf597cc9bf3147d9d0da7465",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/59e2366fa75a9eab8ac20fb6fce6f380836a9d": "2b53b92d4976c250defcfc19f09e5e13",
".git/objects/3f/973e5f7e154be51d34c2535c801c5f19a341c7": "00ee0964279048d4146e35608b40a9a7",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/01/39db8715432ebed93d7a48d23333567c9ea5c2": "45adc7f0b7aa542b1ceb165061ee18ae",
".git/objects/63/c9eb0b1150925d1d0b5148de2b8a7efe3a8eaf": "9818eee0572148401c6da56d07fb3fb6",
".git/objects/b8/56fbb2911808a66b69307dbafe5afdbcfb73f1": "58f1dd5394156e640e397e43e8019f8d",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/dc/ba35dab39444ccd10e388fcd2397993c1106cd": "55207726644f84adafb6da95a4a4ec12",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/a2b476f69f94a6d1fc249d43d17c0b56a9dce6": "7e5412cba1ab940768d5b6380d6fb230",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ce2ff5d02b23b60e4747389a2cb1917edb6fe9": "55a603ec4229dd730393e7ff11599fc2",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e6/40bac0a04ac4e2208bd83601645fc579d838e2": "3c847c523e6c8a5271ecd24db3c960a0",
".git/objects/c5/ef2975db04e92233cf76ab598c7fa96fa6bcef": "5c38a1e97dcbc7143c1f4a85870ba297",
".git/objects/e9/06c8848beb1964b5d88efeafcafcb02b91a05a": "d332f3236fb7aa1f3762b7c2bfe702e6",
".git/objects/e0/787a471023fa6434e39dc3c09c2117de3aa9a4": "7dfa04223ab30ef5c6cf06b2f2987b0b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/2e/a1b2b6f74428458e13bcc1a978ed7ef6087efe": "1884380788077f49c28f4091f2c9c65d",
".git/objects/8e/389c9961e189cc18e8385678024ee1a5a622e3": "44e298ca276e8479c9b83d8b444ef91e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a470deb3bfe7eecf2ed1fcdcfa1ce45f",
".git/logs/refs/heads/main": "b14b018c39269a6b418569251b6097e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "d7b220316aaee7d0b8b32c6f07f7811b",
".git/index": "27c88d993703ca97fad1ad49655bdfd4",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "e786e247935c2afeb44d2024cdb7864f",
"assets/NOTICES": "a4a82918428ea82721f0f33dcfb183b3",
"assets/FontManifest.json": "776eda94374388a13bb1988739e11a3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/daewu_profile.jpg": "2d4dff6c434f63b9d350c72a810cb676",
"assets/assets/docs/DaewuGusBintaraPutra-Resume.pdf": "fc94469cd93e8494b38639579a40c38b",
"assets/assets/fonts/TitilliumWeb-Regular.ttf": "ed1d014bf2b8b72f27d6af65c69f710a",
"assets/assets/translations/id-ID.json": "90e52efaf62f9f1f8d3c4b6660da28bd",
"assets/assets/translations/en-US.json": "1a559a81f7f0b960ddbee28816e16197"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
