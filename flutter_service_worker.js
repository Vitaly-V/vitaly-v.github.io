'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "382818f1e97317340a1373550cc6bb24",
"favicon.ico": "d719a49bbb2f0a6fe24cd4e801b9ae9c",
"index.html": "5782a1a169ddeaa3e6c874c4ea7b6b2c",
"/": "5782a1a169ddeaa3e6c874c4ea7b6b2c",
"privacy-policy.html": "1289804369c0b48b6b68e6967be4f6a1",
".firebase/hosting..cache": "e02d069fd62e8794063393aea7b3695c",
"main.dart.js": "f48be72e85d0898343c7d7d4f983c6a7",
"favicon.png": "209c1d37203b93d4e04cc5afd5e7c283",
"icons/icon.png": "c811fa978a65f84e2c5f07662a652b5e",
"manifest.json": "ce67a1c5b9a9487af240eb4518347f53",
"firebase.json": "6bcf42ed79fb26c537250453f0bdd183",
".git/config": "05698d59facb58f1a1014c2eba1916e0",
".git/objects/95/e7833df8ae93dd1d64ab149d5ae5d5e9fe83ef": "3c4a9c9768ca421bf8e0a73742b2f70c",
".git/objects/03/fd3d73c8b1e4cc3ac0df721b07011cbf1d6ed1": "cea55ea899632384ccb7cf862c676b77",
".git/objects/9b/0e8b6e61033fe621b1b590f98fb0496672cb65": "3fdf56920bb527b4813f74f7d0ae0f22",
".git/objects/9b/843319b9e6ef428246484f9e710c3385f983e2": "1583a3b4ab7acc7b9dfc1beb80da1d38",
".git/objects/9b/4f27738eda501d8fe543ee7c537d03ad95efed": "45e9a5a2d8f1535dbdaf507337a4d239",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b9e9bf610bdc7b6aa725dd5c84a88ad9d43bb4": "ff4743004ed0ac47c27bbde4229de23b",
".git/objects/67/666418b951504cb10c4e079761891ac817a0c6": "449d43d9ea10d92315d9d5e86cf679db",
".git/objects/0e/a163f35f3667649e430efc5bcd14eef2256a9d": "46848d545170ec3fe726c60cc8cd7df5",
".git/objects/60/ee0454be79e2d54b544e920917f372be07d3c8": "a69311e92532ddbfd2a2e2fb99977dd4",
".git/objects/34/72f3f8fee68626e60cdf28806e914d49c395c5": "32396dff5cc247e754a76d04f5734f5f",
".git/objects/a4/979c38bf2dbf61e0a914aa93f5b8e92896be8b": "c2c7f2c1f29dc70056544d75b7df7bd7",
".git/objects/a3/7e02ae897a5d50c90fb5366207530f9f6f7c9a": "8815db1066f27dfc65c8f9c8ffc1a946",
".git/objects/b3/a5ba87699cba65ceac1cd5ee5bf9d56e34acf8": "14358cd9e1f6e5fe9cbed91b6bd56b21",
".git/objects/df/0c010c2125c45aef11d21194ea8464032b0d81": "c462fa5a4e4c6e5f8c4975d683c09052",
".git/objects/a5/e38c23a0898fbf88b74ec2078690b7f7ca8866": "b524078e77b927e4e432ba667f2d6688",
".git/objects/ae/8ad7ece47c30cf05ebc317a5404a8e67ea09ea": "0fb744639a028bc7c78227300b5d27c8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/fe387ad50d6e9fb677edc2bb6041e1e731918b": "5ffbb38ba9aa6a749c5288829f6f847d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/f18c740e4f22a1caf433d722fb7229f8ff187f": "ae185c337138007783231d61e8ac8967",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/1de2ee95d14d9372687ebf2d634726ab963871": "560be740d305dd9be368b54d6db54678",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/fddb302a1a778642326607cc68c8929f74bbae": "5ea38bd96fb9bd9661cec284be7c2d1c",
".git/objects/21/b8f1edf768a8ec8fba9df44a2cf2af79576b8d": "365811a7ca0ea5724e9aa9761829c5bf",
".git/objects/2a/e0e69c22b290a269f7f8a3da810c24ba376f8e": "37a82a75e998cc1c07fd1b34fba4c4c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/6b4bfd1fc2c8a870e46c39dbbc15c9e0379a0f": "860e256ae93bbd4e5f326d41371c511f",
".git/objects/9a/a7d02ab38cb4007ee6d768a3e7b1b58eb6edfa": "554ab74bd9edb3964dee00ac82cbcc8c",
".git/objects/5d/28f490fb0ddfcc1554af5db4e44c63aa830717": "4d3acba87fd1e006078174d173144a2a",
".git/objects/31/648a06a021b49e0f1ae98bfe59eb1147fa1a29": "dc5a6e6b423bc53172e0cc6c8cea85b7",
".git/objects/31/ba3f76c9aad62f020242015692762a1676cf45": "6e93e165fd5c970b76b97296be99d1b0",
".git/objects/3a/0a89c83046f8a6a22a68ae205f7c4961b10136": "75b3554405e3e6b592855a2469533b67",
".git/objects/53/f524b94183a1f2c59508b586d8e45124790b16": "b02bd04d1d0e7841ad43d3f58429625d",
".git/objects/30/627a968004486b45d5920e4d8d439e5547a53b": "71b86e20d7971aa3ddce9ed01f5d202e",
".git/objects/5e/2128a9cb96ecaa5781d9a8817efa72e8467cda": "a917f767bc186ed7e92afb7ebf232fe8",
".git/objects/37/a6de992caed03c349e4cb998d60604be2cd04c": "0cb363a853e617e4b9349eccb8b6d366",
".git/objects/08/311ec8decffe2602fab5d371ff95f1c119415d": "bd8b65fb9c95ee99e2d8dd782462cbdf",
".git/objects/06/012df3d838f6c1e82d7c28d81b7674d5b21d70": "84eae43f5435086ff7cfd1e2da15bb37",
".git/objects/63/04e612abaaedf4964b4dbb31cdfd613d7da151": "96de0df3c4b205d1c9f9ab9c930db477",
".git/objects/0f/78900a4b392d23684116a0b7416ad2a746da81": "731d166d63749d1271707d9f945afad4",
".git/objects/bf/3ed937238b558f7b7c6524323cae7f3feeec7b": "d772051ad3a48bfb6433e22a613bf134",
".git/objects/b1/90f3c1d047cac449b745a3894f4d380eb4b650": "a86780db20d8032e2a5a1d07e1923311",
".git/objects/a9/aabb4a1d6ed3ee346cae31bb3c53a347d47464": "b79886c5fb494f82b46fdf019c904e97",
".git/objects/af/f7d1566f33493608ae5c196143535c42336192": "f1a30048e692b8d0cddf285f1b24bb20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/b0778093dd6808d29102d27e96f6274c03791c": "1f0b2a0b049bbd10dc7725b12abab1b5",
".git/objects/ff/69bd11a8d166f8a7eae69a53104963aace1558": "abab4684a48ef6169f94ffd51bc92e1c",
".git/objects/cb/7e9b76ffbe9437cae2952d59d0ff6c5e3b7c8e": "73d26c647ff473ef76882bca4a916bcd",
".git/objects/f8/8f31c72d3be6a4a8c96a3b940cc303fc76da38": "3ec07c267b97ca3f822a12e6926b2951",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/37c44fc38efa3756756424d93517d5d172b11f": "71da0c5642d6ef1b46e294a6600cd56d",
".git/objects/46/f18726c19c8c0209eacce426e47c93eb08792b": "0875d264c9f961396c71e9a95bede05f",
".git/objects/46/4fd4550616827e3cbc91e76fd0d31edbcceadd": "f96ce0ebfc160763b624c9fe82eea9d7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/4c480f357a5774f91e5e4a609b5e7503c23eb8": "78860ed5b86960d152c7116192912b44",
".git/objects/2b/729691b8c87907a7f1ece16d3bc48bb55c682d": "ba7e673e8a11e1a2753f5c9b36625192",
".git/objects/78/411c69459c7939ac31a1e0efddf4e47b4a38af": "2b4012287e1b5bca2a5da21387048cca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f5a02e7ec594d575bfa81e81623c7f72",
".git/logs/refs/heads/master": "f5a02e7ec594d575bfa81e81623c7f72",
".git/logs/refs/remotes/origin/master": "8848d8f5ca7310fde927d750d7706a85",
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
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d16013ae2c0f9b354c65e2ecb3ca23b6",
".git/refs/remotes/origin/master": "d16013ae2c0f9b354c65e2ecb3ca23b6",
".git/index": "4d34efd6417b04b9f28ef8eef69b2c16",
".git/COMMIT_EDITMSG": "6685ea973f10e79b06f87181eecc533d",
".git/FETCH_HEAD": "193010374f1ff8149770a36368a5b30c",
".git/sourcetreeconfig": "2a2c01e451f48013b7863cc7531f7da9",
"assets/AssetManifest.json": "20f0b4ef81a8c6ca010ca0d8dbb95465",
"assets/NOTICES": "3751fe12ed24da6adccd9935485f3312",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/winner.png": "767b839d1f4390eb5c3caa4f1061cfe1"
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
