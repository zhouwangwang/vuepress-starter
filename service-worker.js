/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "58e41b0016f9fb902862b539a657db50"
  },
  {
    "url": "about.html",
    "revision": "d3ad43afcc3500d754c1766d5e365943"
  },
  {
    "url": "assets/css/0.styles.e4d8b86b.css",
    "revision": "41d77a9ad6b8cb8e4c1b61ff3f996001"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "00aeb76a4bc71094bd1428657e145173"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.27f890e5.js",
    "revision": "f26a4e47f583e4b7bcdca5478ae365f6"
  },
  {
    "url": "assets/js/3.91649984.js",
    "revision": "6a2db33e7dd0498bd64142ab3d6bbff9"
  },
  {
    "url": "assets/js/4.bba4ef46.js",
    "revision": "9bb06616eedc280dc19a67869c3dbddd"
  },
  {
    "url": "assets/js/5.9e16d84f.js",
    "revision": "ca1b97b125d91b8c2b0b8582f3ccbd45"
  },
  {
    "url": "assets/js/6.8779df89.js",
    "revision": "7d46cd0a513757947fb0af312ba6faf5"
  },
  {
    "url": "assets/js/7.81efe74a.js",
    "revision": "f4696e93bdf981e81457c82edffe7a6a"
  },
  {
    "url": "assets/js/8.b2a53d8c.js",
    "revision": "49b8b9fd5eea1f7c0fcd0d20d3d10fee"
  },
  {
    "url": "assets/js/9.1c0dc941.js",
    "revision": "e30f2ea0d8e6ee225e98f772990fc827"
  },
  {
    "url": "assets/js/app.f19cf743.js",
    "revision": "070e78f61a0f8f6870d5bc556dd6864c"
  },
  {
    "url": "hero.png",
    "revision": "20031fd797fca3f86e8dbd1e1d89e33a"
  },
  {
    "url": "icons/android-icon-192x192-seochecker-manifest-320.png",
    "revision": "53d338ee059c22dfe9372a288425b03d"
  },
  {
    "url": "icons/apple-icon-114x114-seochecker-manifest-320.png",
    "revision": "5936848135509f80b75984b31b1f2b0e"
  },
  {
    "url": "icons/apple-icon-120x120-seochecker-manifest-320.png",
    "revision": "c01f5318be8a73d8184ced4ec37980e3"
  },
  {
    "url": "icons/apple-icon-144x144-seochecker-manifest-320.png",
    "revision": "e3f10aa807ba57a17316a0455db99031"
  },
  {
    "url": "icons/apple-icon-152x152-seochecker-manifest-320.png",
    "revision": "d9720f27e32d76f88429e054a551d11f"
  },
  {
    "url": "icons/apple-icon-180x180-seochecker-manifest-320.png",
    "revision": "60055f5f71011df90375a90e71916a77"
  },
  {
    "url": "icons/apple-icon-57x57-seochecker-manifest-320.png",
    "revision": "c33a9f9804a6b259669fa7733a2280a5"
  },
  {
    "url": "icons/apple-icon-60x60-seochecker-manifest-320.png",
    "revision": "057e4ec5fc64113b364f28e262861090"
  },
  {
    "url": "icons/apple-icon-72x72-seochecker-manifest-320.png",
    "revision": "f3f02cd999b86da69c771279d32bf266"
  },
  {
    "url": "icons/apple-icon-76x76-seochecker-manifest-320.png",
    "revision": "b265ce54e22c539500b98a8a71f07a45"
  },
  {
    "url": "icons/favicon-16x16-seochecker-manifest-320.png",
    "revision": "9cf621eeca93c7893fa4cee096692bc7"
  },
  {
    "url": "icons/favicon-32x32-seochecker-manifest-320.png",
    "revision": "ec0814ca7583d062633e39f923593423"
  },
  {
    "url": "icons/favicon-96x96-seochecker-manifest-320.png",
    "revision": "221b1878ffbe56299cf6f390fc6acb31"
  },
  {
    "url": "index.html",
    "revision": "af5a51938cf3e017d6067266062a807d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
