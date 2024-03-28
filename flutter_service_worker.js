'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c256864c1602ff3349aa15f454d40165",
".git/config": "de54bc740b31474679ca91fc74639129",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d8cd85069cb6eb458ecfcaa72632fff8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08d4bed4189913c4f9a2a4fae51be721",
".git/logs/refs/heads/main": "08d4bed4189913c4f9a2a4fae51be721",
".git/logs/refs/remotes/origin/main": "60e44e0183e4f6705f90786c9686dfd0",
".git/objects/05/5ad2205d2e347de1e62ec158ffce28e90a5e26": "42b9f22403253c14f7113f894c22be59",
".git/objects/07/8cb8dc47706d4823076473fd505b5a6ec625fa": "98d6aca1ddfa9e78f266c29383d909da",
".git/objects/0a/7247be5a41cc39e01e0f5c9e71b5a9bec4aeeb": "f72fbe08100c04f970283e465f66cf87",
".git/objects/0f/fc7b9a18acfa31c5f69851c0f6193e1f1c3680": "b29ba6df987b41a635beb6e34324e41b",
".git/objects/13/ca03e1329900832d04343a03aeba26cca08f2f": "1066c7a7f41405e544997e31a521101f",
".git/objects/15/52bf8f21ecf1debf4a1b36911a8b880e134563": "891a4c3b3695e2fa999e6f45691647bc",
".git/objects/16/4f6843b88ec353c54f59a46fcc62f75955cc1e": "2afbd017039df49ee22168fd1cf28af3",
".git/objects/1a/9693d97fe25e8635691463d9d51a63ecd32aa0": "df97a98f30fd3b38bdb9da2598f2bffc",
".git/objects/1b/01965598dc048b874df555ed5e50f6e505dfe9": "96ce2b2c63a0d1116d38c3d441785cbb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/6f86b86070f3ed4665fa8808689ca3fc0319b7": "ad444b7966d4e9fc7c477b8628f5ad89",
".git/objects/26/4bd36ebe06d7a367482b36bc0eaf1a59649d8e": "91a5d97fdd84a76f16f54626633634bc",
".git/objects/26/f657de75ab7bc14f3cdf47825e861d5523cecb": "414d3a19b2f559fb8715d0b2edb2408e",
".git/objects/28/f71ee09bd80dcdb616f46b46fb713ea1247ce6": "5c9a7c5f36507c07154218ebda33b59f",
".git/objects/2a/14513736aa0d7cc10faae99673f5256b5b77a4": "0278e9cde60c7ad34c3f6d27d95306f0",
".git/objects/2c/c74feaf69f61ee8e4fc581ec24109d91a92c84": "61de57e0132544042873547a15d2dff5",
".git/objects/34/17ebdb4fa6f4615fa337fb6393aa96232f5867": "bd9fb75748c88d5800987c712c014c17",
".git/objects/3b/1e1903613de0b31200199367ca3f6efe139629": "833b458770b0f4a4347e59c81dbae0e6",
".git/objects/3d/790e9e63ca416d94fa40534bfdeec31c0ca183": "6acefb251cfbf8a0faf3e48284afd568",
".git/objects/3f/1d0e59d98752fa50c7ed5114bb81c97851c37c": "d25e257bf4a925555c512a48125c6a6a",
".git/objects/40/f755958bfc8e56d187f810fde952b022052a17": "af9c8aa73fbd44b54e3e256e0b401563",
".git/objects/44/3772074110f589976a324348e480970284347a": "220299067e38efe8be8c62ca4907ad73",
".git/objects/45/ec5b52d9a16310e653a35ac2c34db9e1598221": "bdec37181d1b111a20ac601fcb4eae57",
".git/objects/48/c830eba6a95f003d53993470f03fde9c403d43": "a0a4c7c24a8f400114e1abbba35b876f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/03f75e13ccefff9666f7b3204a443ea0064d12": "6a23dcd69c5b6f128e8d9fa42d0a694d",
".git/objects/50/77d0ad4f20cdda17c9bc4e3316a1ba0e75999b": "ce29597e4b140ae13dc5fcf626f49be9",
".git/objects/52/3904da0c3f6f57dd46fd7fdf3475cf3d60a3e6": "f82e19ec0432d7c150150ba95fecf0dd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/8ec775263d4328a7560a8fb9775eebb26172cd": "bff26e062640fed690d71810922e87dd",
".git/objects/59/5ddda975d9f58ffc3ae56163a499084b2bd177": "fc2b3157b5bd3f6127dc594aa59ea0b8",
".git/objects/59/c0fef11cde60cb0229aa0b26ebbe89d1affaaf": "b0265e5eac2c3859113eee3caa52b507",
".git/objects/5a/8cb68b190ac317e3002c36e300b148c018bd04": "dee1cd4eb5de17c6c1c5301f1ffa8fed",
".git/objects/5b/52e456a995e9b368cff46d2ee06d867eee09bf": "0b5ac1af0de381f6e0d2a17698dd0da0",
".git/objects/5e/b96a0e57568763195a5b0fe50fc481044ed27d": "7c1bd7254db52eac676b0b51deefe8fe",
".git/objects/62/36e86c9ff4cabae51b794a802b4c5b9a69f0ce": "ab50fffbab6eb6d0f88a02b27d9aa128",
".git/objects/63/25fa8e1785dc451ac40b080beef5ed4b099d6c": "2bfab1134fbf81be31cfb2fd8c381403",
".git/objects/69/a9a09a7e0500b001ff0434339f6913e5c56629": "5bbfb334120543cdb1e3edcbe0506c70",
".git/objects/6c/e234b09f48173d32692377079d400f170f57de": "4bec76fc72d7d6281c8c4d3d97a2e777",
".git/objects/76/b027a04e86b109c1e6c749df4536a90d1f4c91": "9a37bca78e7e40cd250658be93a0a2f3",
".git/objects/7e/6c70f92985afefab61f66599a5823f8a608624": "8ce544374b47cf7070529acbdefb1e11",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/597f2d4ccd2a8668dce0e9a9b5a21817fdf5a4": "6a5145e8809538619df6674fd204c967",
".git/objects/8a/5a50ab637b310495a60bbae22e20ab76d09ce9": "2ad0d528ad29aa2aa9715cde110e14f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7b632f9c05c3da44447cc0773d355e45f442c0": "761f334eff235ec7caa6d10cf574a36a",
".git/objects/8c/d6e8fe66f91ced7a0470ddc08d1b1228941720": "3a7f3aa8b0bdef3ef67787d0fc391318",
".git/objects/8d/93c4b7bec048e4b27f0c2cc34043a64f3d0796": "2f3e471b63e57e138b1cf82b58582fdb",
".git/objects/90/0fa0af4ec21aba86fdc8327a5966b159a6c163": "e7c94dac78ff755e8f66bfe00cdfb209",
".git/objects/93/620691f915190e7fa8a32dcae9f4af57d66896": "fefff6e104135fe99deed32658dbfeb1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/7916ee3b65b1ac6780fc6ba78e0a8ef31f0e50": "792c744358f7c58539c8f555cf3840b3",
".git/objects/b1/ce6209039840b59d8c7a31e48820f365b17619": "b7253ae8a955826d611dddf11854abe2",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6c36c89b3b819761f6374c24d1a39d228658a9": "3d178a116a66ab16bb0f07afacac81a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/41a8bd54e0af6c4499e6181530fa331b0ed9d7": "b17ad0e81fefdc9c51cc3fbd5873ba9b",
".git/objects/c8/fd1e87436f17fc463092840e989fe13488ace4": "64cce065989dcdfd27e107abed3ea7aa",
".git/objects/c9/7bd4259b1c9f0ee16be605fd7e575e0f0375e1": "8073b14373c2b5b6d9282e6f94746f04",
".git/objects/c9/f438bd29b6cb1a86155d8bf81fe5fc19b31a58": "9f9fff8ad147130a2335ec480793c2f8",
".git/objects/d2/994fb914c6117da2b93864fb56aa7b863aabdc": "934950f894f4745ae083cd2d9ee1e6aa",
".git/objects/d3/0aafa0103dd5e402d27cd484ab72811d48b213": "3581393645d4d887bb26cb5aea47d1bf",
".git/objects/d4/31736475421e7abecf0ffb7f1c37b3b423869c": "0c7f5afaf4c79652f6047662e00fc5e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/64c69478fb75b964c0c694c499eef7b5d07ed1": "00621b1354b087c057821c1d33837999",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/ac357e6cfd193aa4696e83a2aa5d6ba8705798": "1c60305cbb3d715922a04776a0c08d6e",
".git/objects/e5/a08e4e3da8cf5ebe44fc71a21aacbff82669ee": "168543e8619ab725e650ee88fd95a7be",
".git/objects/e6/0d02c53fd2506a774ff80a8d82692d118d11cc": "31dca56719fa3846b1c9d8ac558a50b6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c9437df78b26a61e48259e7fd8ccd17256d744": "8265bd8a949b805d88ffb620cdf0d8d4",
".git/objects/ed/6d34097cc1fc3d76d133795c57236377cd5095": "03d0787c03d0aa47b97117a7d4806108",
".git/objects/ee/1baa6851ac1908c1177e52e94003189250da7a": "f1d857b3afd3c62e5e9bc355386a7b94",
".git/objects/ef/f1e1f9d77f1c46bf9d8d11aa45642bf7daa767": "f02062e24f9e5630286d7e1537db29e4",
".git/objects/f0/bd59588f551324bdc1f6bf56eb1aec70dd8af8": "5ed8e2929dd1079b99224f31222b4b2c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/27d682c2fb7d3b4d76132d242f699691073238": "55eb6f8684ad95507231059daae56579",
".git/objects/f9/45998d16926fce11e88722ac83a1fd7cd97182": "ecefd4d9f7e8b6f128f3f019f88a12e5",
".git/objects/fa/aa4463afd94fa3eaa56a2f5b851d2f0e4c2637": "ae443a1ce7bed25fa571d3d565d2d4f5",
".git/objects/fb/b41c7f0fa9faebdcec5949c1667510809146f5": "1318d68ffb4fe99918884c66ca3805d8",
".git/refs/heads/main": "f47a45f1b695ef6895300eb269c7c6c1",
".git/refs/remotes/origin/main": "b887acdce23e31db0e501dd793db6956",
"assets/AssetManifest.bin": "7b4d2dc278fa6cb5e667d27888d31837",
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
"flutter_bootstrap.js": "9c51e96d1343f23c9d92c749010e831e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d7bc31590b8f84cb3e53b057fce3ff22",
"/": "d7bc31590b8f84cb3e53b057fce3ff22",
"main.dart.js": "4711e0a9cd7e7e5ea20c95a7d9572930",
"manifest.json": "134fc422e1ad64ac71e6e241d4654640",
"README.md": "4f84cb77ca509bee0d73d932d93fe425",
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
