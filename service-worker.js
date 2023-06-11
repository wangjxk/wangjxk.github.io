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
    "revision": "510309aff9785a6a9c256314f75e469b"
  },
  {
    "url": "assets/css/0.styles.19232fe9.css",
    "revision": "96e2ea77df90accbb2edf020251f0734"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bc82d67b.js",
    "revision": "0002ee5027534185832d376db2075024"
  },
  {
    "url": "assets/js/11.ead9b8ca.js",
    "revision": "cbf6313201c3ff8ceac36b94eccb8c92"
  },
  {
    "url": "assets/js/12.a048ccaa.js",
    "revision": "716bdc1a5bbdcff4c6dae4d6884b08cf"
  },
  {
    "url": "assets/js/13.3e4cc077.js",
    "revision": "ed2462adace1a135a6840a1ccff500d2"
  },
  {
    "url": "assets/js/14.58cd0fa5.js",
    "revision": "0ca1ada0780b802ab6846e55d734ccc2"
  },
  {
    "url": "assets/js/15.98e26beb.js",
    "revision": "b7e002b6477fd5d2c821bcbdae5fcedb"
  },
  {
    "url": "assets/js/16.4cf1daea.js",
    "revision": "fb49032c9755f453d1cfe2c30e92133b"
  },
  {
    "url": "assets/js/17.c190a7fe.js",
    "revision": "434fc7e3ea3ae15d18ec90d6e55106ba"
  },
  {
    "url": "assets/js/18.89814285.js",
    "revision": "61eb7b3192a69d241f44c5b13743be69"
  },
  {
    "url": "assets/js/19.77f58842.js",
    "revision": "cb064deb26ad13f7327278a19ea9485b"
  },
  {
    "url": "assets/js/2.36bde0fd.js",
    "revision": "e581aadb1b4d0374dac8d6bbd9236a9c"
  },
  {
    "url": "assets/js/20.9920ac2c.js",
    "revision": "30f93c585ae7693028a65b3d26508d41"
  },
  {
    "url": "assets/js/21.6a8c9cfe.js",
    "revision": "95afb7059bbd5ea6731015d4e46bc280"
  },
  {
    "url": "assets/js/22.cfd89a61.js",
    "revision": "6e133563516e156881abed8a6eecdc54"
  },
  {
    "url": "assets/js/23.48f5d9f7.js",
    "revision": "9da43fa061bf0f3a3eca7286d24733d6"
  },
  {
    "url": "assets/js/24.a8c5ac10.js",
    "revision": "2615528979512a90c09923af18257775"
  },
  {
    "url": "assets/js/25.842b3853.js",
    "revision": "32a395af22445a71b380ce58a8777543"
  },
  {
    "url": "assets/js/26.9c5fe1dd.js",
    "revision": "f47205e81d25088ef568a0bb7740b560"
  },
  {
    "url": "assets/js/27.c4f0a52b.js",
    "revision": "bdfa03bfe3734f7a21f44a967019cc96"
  },
  {
    "url": "assets/js/28.ce11023f.js",
    "revision": "8d8bc46f52e619549a10a1a2a1c25df9"
  },
  {
    "url": "assets/js/29.9001ac2f.js",
    "revision": "28bb401c82f37e77026ecf2723259e40"
  },
  {
    "url": "assets/js/3.5a07e503.js",
    "revision": "ba3cf21b2ba2306cb6caa8ac50f24130"
  },
  {
    "url": "assets/js/30.5edf0dc1.js",
    "revision": "51b808fce9b51fd5063cd756173bcc41"
  },
  {
    "url": "assets/js/31.57d2aeed.js",
    "revision": "fd99f95b9e6c8512e8e4c356ffe44a5d"
  },
  {
    "url": "assets/js/32.db6f674e.js",
    "revision": "03f1ddc8cdba93a7a71478a07741df0c"
  },
  {
    "url": "assets/js/33.038cad31.js",
    "revision": "4eadb110bbe45d2dee3be3d1cded3372"
  },
  {
    "url": "assets/js/34.bff4a907.js",
    "revision": "dd780372b43fcfedad29a39048e3182d"
  },
  {
    "url": "assets/js/35.e9272942.js",
    "revision": "87550d16d3dee6e2eb984de6b92905f2"
  },
  {
    "url": "assets/js/36.896895d7.js",
    "revision": "7cf33e1be329b6a5be9aa8bab60e12c6"
  },
  {
    "url": "assets/js/37.91a5bb8c.js",
    "revision": "1196766e9641fa160c0ec1356eef5cb2"
  },
  {
    "url": "assets/js/38.3f6a6f29.js",
    "revision": "6da0333398f4a7921aae2edcd93c919a"
  },
  {
    "url": "assets/js/39.270d8c27.js",
    "revision": "e48eb0f4448065fef1fc16c7e3fa2634"
  },
  {
    "url": "assets/js/4.0800d99b.js",
    "revision": "6286a7e954145bb1217407d6926544da"
  },
  {
    "url": "assets/js/40.b379e318.js",
    "revision": "89a25161496d0c7fe1218efbe9211bcc"
  },
  {
    "url": "assets/js/41.f3073d82.js",
    "revision": "7c059f267119b539713e997e00ec89d2"
  },
  {
    "url": "assets/js/42.867935ca.js",
    "revision": "69cb7d7f2dd697e0a8d24d24325ed704"
  },
  {
    "url": "assets/js/43.30335621.js",
    "revision": "a15ca7a0d88a7cf06074ce2ce8ff8b3d"
  },
  {
    "url": "assets/js/44.993aea4e.js",
    "revision": "4e5c7e160c586aa0c85e4c8d8928f3f2"
  },
  {
    "url": "assets/js/45.60eb5226.js",
    "revision": "01aa85ab97f66a59b85e608a10c803da"
  },
  {
    "url": "assets/js/46.8501be1f.js",
    "revision": "6294c2817dc0e7e16ba85ce877442b5a"
  },
  {
    "url": "assets/js/47.ba2302fc.js",
    "revision": "00bf1a56b953a3dac69e92dc8ba07749"
  },
  {
    "url": "assets/js/48.e932482f.js",
    "revision": "97591a606c295c1a247a86c777604514"
  },
  {
    "url": "assets/js/49.c1af1af4.js",
    "revision": "dd00619c8e832620dffcbb831980af22"
  },
  {
    "url": "assets/js/5.1d8a5d7f.js",
    "revision": "77ffc7a89e605bf5a6fc0f47b475f65e"
  },
  {
    "url": "assets/js/50.e7715e10.js",
    "revision": "87d3e64d5c0fa89c2f431b88be85bdc4"
  },
  {
    "url": "assets/js/51.ab6021ba.js",
    "revision": "986ae37b28f1a35df49e7a3c444061b9"
  },
  {
    "url": "assets/js/52.c5c5c3ef.js",
    "revision": "bda6fb0c8fe1f9ea58149a52c83110e6"
  },
  {
    "url": "assets/js/53.7157cd05.js",
    "revision": "ee0ec2d1f75e3840ae69a8a4f1c22303"
  },
  {
    "url": "assets/js/54.f4abd89d.js",
    "revision": "80728b5128b8e7893ae690a0e8a7396b"
  },
  {
    "url": "assets/js/55.c86bbebc.js",
    "revision": "5bf95b1654df3d9853f3dfe5e9c7c240"
  },
  {
    "url": "assets/js/56.ee48a85c.js",
    "revision": "07f2a969f806f8c217887e62a2306731"
  },
  {
    "url": "assets/js/57.90d4c487.js",
    "revision": "3a2ebdfa0ae41ff5af8291a4d8a92894"
  },
  {
    "url": "assets/js/58.1d4866f8.js",
    "revision": "8fb94e37391a369763aa0f96f57ed8b7"
  },
  {
    "url": "assets/js/59.75c6bc90.js",
    "revision": "b58e4de3b790b7ab3accaff873249c02"
  },
  {
    "url": "assets/js/6.90059570.js",
    "revision": "5553d77bb8b7fc56a1a34b7542f9ab75"
  },
  {
    "url": "assets/js/60.c5e61798.js",
    "revision": "c239f91f8456e0e72b8769d4974156b0"
  },
  {
    "url": "assets/js/61.54457b0e.js",
    "revision": "1c118450dff7bba9aa9a6d0d4434ed79"
  },
  {
    "url": "assets/js/62.2e0af734.js",
    "revision": "461a852ad2fb5b98e594b27688630345"
  },
  {
    "url": "assets/js/63.07cece40.js",
    "revision": "6bc9881b140b3e63d425460aeecb4f16"
  },
  {
    "url": "assets/js/64.e6ab0174.js",
    "revision": "5fbd5005dca8e3da9c60d313e5e6cfd9"
  },
  {
    "url": "assets/js/65.663550a9.js",
    "revision": "fc7d471ee0606acc02dbda4648e472ea"
  },
  {
    "url": "assets/js/66.64ad9de7.js",
    "revision": "4cc77111815fc6d660548c11f1825686"
  },
  {
    "url": "assets/js/67.cc5c5ab3.js",
    "revision": "c5e86982eed41e7902a60d5c6468039b"
  },
  {
    "url": "assets/js/68.d76b1a45.js",
    "revision": "39d845fdf8dad2bd5b3b023e6c4aab29"
  },
  {
    "url": "assets/js/69.06c85095.js",
    "revision": "c9737faf76952e03e77b4db0837a6c10"
  },
  {
    "url": "assets/js/7.e0481b37.js",
    "revision": "6e7579ae25c0ff31c7da781d957821e0"
  },
  {
    "url": "assets/js/70.5fa17108.js",
    "revision": "db92108122b66c4917ebace960ad61cf"
  },
  {
    "url": "assets/js/71.ea8df0ea.js",
    "revision": "812e5f6f979cc48fbf404d25718c6f19"
  },
  {
    "url": "assets/js/72.12d99daf.js",
    "revision": "d8f60983fac82616838d667b55756646"
  },
  {
    "url": "assets/js/73.8b6c81cd.js",
    "revision": "83fadd96c571d283e2ae11b89c81b38e"
  },
  {
    "url": "assets/js/74.e089a7e8.js",
    "revision": "605b787ea9106c0a29c432db47c826f5"
  },
  {
    "url": "assets/js/75.eda86622.js",
    "revision": "f07f091171d5b70dcdc2117d63765ea1"
  },
  {
    "url": "assets/js/76.451d3bf2.js",
    "revision": "394cc1c6672dae7ddd0a88add69dae98"
  },
  {
    "url": "assets/js/77.5a71a520.js",
    "revision": "c026a7b3eb1c8976cc4482b404bb7231"
  },
  {
    "url": "assets/js/78.5e4673c6.js",
    "revision": "02e58ed6b7dc553c42296aac5bb54192"
  },
  {
    "url": "assets/js/79.f657e29d.js",
    "revision": "13cd94bb8d07ff80e5dd4e44ea96aee0"
  },
  {
    "url": "assets/js/8.e1e88656.js",
    "revision": "6a0297e2560fffa66bdf26314285c11c"
  },
  {
    "url": "assets/js/80.d7b2d65d.js",
    "revision": "e2e3a0f885c1837838d9b9de24054caf"
  },
  {
    "url": "assets/js/81.c9dc1609.js",
    "revision": "087f5dbbd75500a426b54d96130c2897"
  },
  {
    "url": "assets/js/82.2b309c6c.js",
    "revision": "20766ad414875e589d0ec9dc12da3cec"
  },
  {
    "url": "assets/js/9.54f76d53.js",
    "revision": "4fdfa3f386b338739df984e799933763"
  },
  {
    "url": "assets/js/app.9e441e61.js",
    "revision": "e87cffd9db82f22bd40f1e3f7d5ffd14"
  },
  {
    "url": "backend/ddd.html",
    "revision": "770e4be7eeb3fef2a306b84415de043f"
  },
  {
    "url": "backend/mybatis.html",
    "revision": "e3e9867bcaafa1ec02764c3c5863cb5d"
  },
  {
    "url": "backend/nginx.html",
    "revision": "093a8865b8425aee01d35036ebd02d8d"
  },
  {
    "url": "backend/springboot.html",
    "revision": "444fb6528aee536b16b34af28bd234e3"
  },
  {
    "url": "backend/uml.html",
    "revision": "849fcd29e71e79b81f3976ba554dfa19"
  },
  {
    "url": "frontend/algorithm/dp.html",
    "revision": "bacf622b0c43ebe8bf3cadf78ce6f9a2"
  },
  {
    "url": "frontend/algorithm/dpointer.html",
    "revision": "1c32e1caf6ce28120aca08ee5f419262"
  },
  {
    "url": "frontend/algorithm/graph.html",
    "revision": "ea111f4de1b1faa1e4678cd176533a12"
  },
  {
    "url": "frontend/algorithm/greed.html",
    "revision": "7a8c67b07ff2a15dd445814f850cf4fa"
  },
  {
    "url": "frontend/algorithm/leetcode.html",
    "revision": "710183b595aa2c387e9c3d5e2dcfd3c4"
  },
  {
    "url": "frontend/algorithm/Levenshtein.html",
    "revision": "ad813df39ff52db8daf27c60cb309f18"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "d77faa1694ee441f0d280cad1337b3de"
  },
  {
    "url": "frontend/else/ast.html",
    "revision": "2d2dec940fd666f9e5c39c76f52dabb4"
  },
  {
    "url": "frontend/else/canvas.html",
    "revision": "a02a73a7451d0c0580b9f7a42110801e"
  },
  {
    "url": "frontend/else/designMode.html",
    "revision": "706cf1d14f4bf4485cea842cfc624106"
  },
  {
    "url": "frontend/else/graph.html",
    "revision": "d289cb6304ae1e2a1a525158954c4481"
  },
  {
    "url": "frontend/else/micro-frontend.html",
    "revision": "6036c3916ca0668743b36442200c10be"
  },
  {
    "url": "frontend/else/security-control.html",
    "revision": "ae8ac8d472b028ae420d5270a884af9e"
  },
  {
    "url": "frontend/else/web3.html",
    "revision": "0a942c7cf59756e493b055d352c63177"
  },
  {
    "url": "frontend/hybrid/hybrid.html",
    "revision": "8632e61ac348ff04cb02972fabdaf8d4"
  },
  {
    "url": "frontend/interview/index.html",
    "revision": "cad8b8189dda15dfa2ce7e372c1edaae"
  },
  {
    "url": "frontend/interview/info1.html",
    "revision": "d124c52da3ed04f3028a2c49f7fad0eb"
  },
  {
    "url": "frontend/interview/info2.html",
    "revision": "96e7a9f5e017c057b65120c9cd35e612"
  },
  {
    "url": "frontend/interview/info3.html",
    "revision": "7b012ef88dff1ee6c4d26fd572b62371"
  },
  {
    "url": "frontend/js/browser.html",
    "revision": "df91459c2ffdc543887a735a9f4f02eb"
  },
  {
    "url": "frontend/js/ES6.html",
    "revision": "540f889e442dc225c428855482a56c77"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "e449b58d4425d00450c7469b66e34013"
  },
  {
    "url": "frontend/js/js_oop.html",
    "revision": "8fc60284674283bb2e3dbe56e0505d85"
  },
  {
    "url": "frontend/js/promise.html",
    "revision": "73bd6ff33ed31b8b4f1be88579f33499"
  },
  {
    "url": "frontend/js/this_chain.html",
    "revision": "14ff446e2b0414c78f137605f5f1a36e"
  },
  {
    "url": "frontend/js/typescript.html",
    "revision": "aa10b607a5e2a1cd077216e093845e26"
  },
  {
    "url": "frontend/lowcode/lowcode.html",
    "revision": "b4f75d693ffd8471aada18dcfea4de50"
  },
  {
    "url": "frontend/mini-program/index.html",
    "revision": "8eb9ffe39199d87cf496941323c838df"
  },
  {
    "url": "frontend/nodejs/http.html",
    "revision": "c1d6e9dec1aa2e24ca34ac102d69e8eb"
  },
  {
    "url": "frontend/nodejs/index.html",
    "revision": "361c17bf1f89f0e471061fad6f3670f6"
  },
  {
    "url": "frontend/nodejs/info.html",
    "revision": "18ad6aa256d25f22f573a454c0dce2bc"
  },
  {
    "url": "frontend/nodejs/module.html",
    "revision": "b6a1b45c36f09307c1d9ac90717c3315"
  },
  {
    "url": "frontend/performance/explorer.html",
    "revision": "5d2d88217af11626c002050f96d2f5c9"
  },
  {
    "url": "frontend/performance/performance.html",
    "revision": "0ba13f66591656d2f63e1453216c36a2"
  },
  {
    "url": "frontend/react/basic.html",
    "revision": "b988d7ff498b06b0f37313dfbb57b872"
  },
  {
    "url": "frontend/react/react-advance.html",
    "revision": "1436a10684e4543119bdb6fa1c4bd379"
  },
  {
    "url": "frontend/react/react-code.html",
    "revision": "c5d4c1136c2e6a66c66fdc39b00ee822"
  },
  {
    "url": "frontend/react/react-component.html",
    "revision": "e0739e37d392dcff7903aab60a3a8071"
  },
  {
    "url": "frontend/react/react-practice.html",
    "revision": "79cab2fe9a9601acfeb96bb5f3775945"
  },
  {
    "url": "frontend/react/react-router.html",
    "revision": "586f6e571a2b78d3c79cb0f633a54a50"
  },
  {
    "url": "frontend/react/react-ssr.html",
    "revision": "193077963d2d46ea02df233c48e34ed3"
  },
  {
    "url": "frontend/react/react-state.html",
    "revision": "f90a94e24263c9addc5bb1d117b25d5c"
  },
  {
    "url": "frontend/react/react.html",
    "revision": "f70093c4918e1201963d156506d6e81f"
  },
  {
    "url": "frontend/tools/ast.html",
    "revision": "b902dd3b333fc025bbdf1126391cfbd8"
  },
  {
    "url": "frontend/tools/autotest.html",
    "revision": "771c8d7f89623efce3292bda45f296ce"
  },
  {
    "url": "frontend/tools/babel.html",
    "revision": "b07d7537123f7034a95574eb125936bc"
  },
  {
    "url": "frontend/tools/js_module.html",
    "revision": "e46c6373fd7f1bdf52d26ecbba2cab06"
  },
  {
    "url": "frontend/tools/js_project.html",
    "revision": "3f3cb1f851455add90b789d0b9be60fc"
  },
  {
    "url": "frontend/tools/js_tools.html",
    "revision": "e83643989a5db2508d54783ca25168ab"
  },
  {
    "url": "frontend/tools/solution.html",
    "revision": "1ec8b09c9817137bd6d3fe5b6df9db8b"
  },
  {
    "url": "frontend/tools/webpack.html",
    "revision": "af94286f0b8d5fb504dee94a0139768a"
  },
  {
    "url": "frontend/ts/basics.html",
    "revision": "87b33279875cbcceb4d2cb93718acb32"
  },
  {
    "url": "frontend/ts/express-ts.html",
    "revision": "223ee15448c3bb3f26477cd57c8ead58"
  },
  {
    "url": "frontend/ts/project.html",
    "revision": "5e9c9c947dac075a5100eaa48f2d97e5"
  },
  {
    "url": "frontend/ts/react-ts.html",
    "revision": "bb938bd512e5c361444344434846af2f"
  },
  {
    "url": "frontend/vue/advance.html",
    "revision": "82a2499d19ff6577f77a1f53e14e95ce"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "b0799d173ace3805ab7a1c735990c98e"
  },
  {
    "url": "frontend/vue/vue_diff.html",
    "revision": "d3839d89223d510879b97a738b890e70"
  },
  {
    "url": "frontend/vue/vue_reactive.html",
    "revision": "935371bcfa92d4b932a16687082cdb6a"
  },
  {
    "url": "frontend/vue/vue_ssr.html",
    "revision": "09aba66e2588905d4a1a8d1861e3dfaa"
  },
  {
    "url": "frontend/vue/vue-cli.html",
    "revision": "ef22133aedb41c55c4ed1f16229fcc0f"
  },
  {
    "url": "frontend/vue/vue-compiler.html",
    "revision": "d9e527040988df40fe70c3cae6bd0d44"
  },
  {
    "url": "frontend/vue/vue-i18n.html",
    "revision": "e19ce154775f015b4a3f68b02e1ce4a3"
  },
  {
    "url": "frontend/vue/vue-life.html",
    "revision": "83d905405aed83a7cb473eba122942e1"
  },
  {
    "url": "frontend/vue/vue-loader.html",
    "revision": "479fe1701f4732bc09c189193a37d955"
  },
  {
    "url": "frontend/vue/vue-refs.html",
    "revision": "6a1a03e2d08f1f9027943b6868dc0cb5"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "a71a7672aec0249bf9f7263252308b9c"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "6d14c0395c8c2c6d75fa57dd806c9bce"
  },
  {
    "url": "img/canvas1.png",
    "revision": "9df5eb9361675a42efaa37322b20c298"
  },
  {
    "url": "img/ddd/1.png",
    "revision": "3db3f7326edeb8a3889bc6ed41d33385"
  },
  {
    "url": "img/ddd/10.png",
    "revision": "ed8b43548b156ebc35e94968281fe16d"
  },
  {
    "url": "img/ddd/11.png",
    "revision": "ae075b19d52e428b1f205f38c890f244"
  },
  {
    "url": "img/ddd/12.png",
    "revision": "d9064dff37038a1827554cb54aaa0beb"
  },
  {
    "url": "img/ddd/13.png",
    "revision": "fc7612d8e2faf028a0eca32b38ae03cc"
  },
  {
    "url": "img/ddd/14.png",
    "revision": "2087fadbea4140914e68debdb82b82d5"
  },
  {
    "url": "img/ddd/15.png",
    "revision": "c8c70ac17784fbc8d39a216a0fb02b0e"
  },
  {
    "url": "img/ddd/16.png",
    "revision": "6551a71b23854d7f608c26740c94ebb3"
  },
  {
    "url": "img/ddd/2.png",
    "revision": "6e64fcbdf4712f420439afb5d90bc37c"
  },
  {
    "url": "img/ddd/3.png",
    "revision": "90a76bab6a42d5e8b46168224992e796"
  },
  {
    "url": "img/ddd/4.png",
    "revision": "45a9d2013f39a405781ae11ed21abe88"
  },
  {
    "url": "img/ddd/5.png",
    "revision": "dbbced5abd50ede046d71383178ea4e6"
  },
  {
    "url": "img/ddd/6.png",
    "revision": "9d390ee489be9ace51aab0d721318c1d"
  },
  {
    "url": "img/ddd/7.png",
    "revision": "2c76a4c0ef9537531cb05a103b843b3e"
  },
  {
    "url": "img/ddd/8.png",
    "revision": "ff1d2f3df4eca84cfd60122c6d76b6ae"
  },
  {
    "url": "img/ddd/9.png",
    "revision": "a72284ccc7911c0cb112fc6ca2c9db8a"
  },
  {
    "url": "img/eslint.png",
    "revision": "0f00c5df23f2d570a7186833eb9c12c0"
  },
  {
    "url": "img/event.jpg",
    "revision": "3bb3973749c19f27a24ec6d36d982845"
  },
  {
    "url": "img/explorer.png",
    "revision": "10d95363f6bf1e886349f8d9699a161c"
  },
  {
    "url": "img/git.jpg",
    "revision": "634a1666bdeb790288fab874e64968cb"
  },
  {
    "url": "img/interface.png",
    "revision": "8ddea88763572b1dc67fc5d6f7a8ae47"
  },
  {
    "url": "img/jian.jpeg",
    "revision": "5455af686c6593c1614232a8c927fa45"
  },
  {
    "url": "img/jsBridge.png",
    "revision": "65df264bd40cb4bfb2840d4099a03d52"
  },
  {
    "url": "img/lowcode1.png",
    "revision": "e090e3828553cc5ba668246f240a6e90"
  },
  {
    "url": "img/lowcode2.png",
    "revision": "264df61cc31d7eaf32c6f5aae5068f92"
  },
  {
    "url": "img/lowcode3.png",
    "revision": "cd877ff9c24d45c294ab32d22284f69d"
  },
  {
    "url": "img/maxArea.png",
    "revision": "9e01356b2d2de0b263b9d235cf780888"
  },
  {
    "url": "img/minip-login.jpg",
    "revision": "2fcc9f3575982a8fc3f05f29ae2748c1"
  },
  {
    "url": "img/nginxconf.png",
    "revision": "5533082409e2d61cfb1915a8bfd57f18"
  },
  {
    "url": "img/performance-tti.png",
    "revision": "ba288fc4c9fba2a689b9ef5bdb280fe5"
  },
  {
    "url": "img/performance.png",
    "revision": "d9ced95d585c22a0e262448e08f0feab"
  },
  {
    "url": "img/prototype.png",
    "revision": "ab8a5c73cbde6c3f280460960893e5d7"
  },
  {
    "url": "img/pwa1.png",
    "revision": "824745b09be27203692b0af5c2fb9c00"
  },
  {
    "url": "img/pwa2.png",
    "revision": "d9643987c0b1aea30fba914bff34c5c1"
  },
  {
    "url": "img/pwa3.png",
    "revision": "1317923bfdb129167e75d6cc3b9eb35e"
  },
  {
    "url": "img/pwa4.png",
    "revision": "b433f47afed0c99cf131edde6ffb77b6"
  },
  {
    "url": "img/react-lifecycle.png",
    "revision": "959dce1f100f5ff318339c769d212afc"
  },
  {
    "url": "img/react-ssr.png",
    "revision": "0f0b5960eede5bd87493247debe75c2a"
  },
  {
    "url": "img/single-spa.png",
    "revision": "c25a2c5c8cd8eb11c85eb108ee86dd0a"
  },
  {
    "url": "img/suspense1.png",
    "revision": "08e9c4025772b2038747d27f6ae01915"
  },
  {
    "url": "img/suspense2.png",
    "revision": "d0e5afe314295a263a1eb8ea66d2f526"
  },
  {
    "url": "img/tcp-ip.png",
    "revision": "ff288cd81a6ba9792dda1ffcc36b761c"
  },
  {
    "url": "img/tcp-link.jpeg",
    "revision": "228dd0fa6f39b1fc5435bb3b41222464"
  },
  {
    "url": "img/trap.png",
    "revision": "644fabf311c6cbb91f1af77ee50e0add"
  },
  {
    "url": "img/ts-project.png",
    "revision": "45af347efa7648c0039cc0a25200465f"
  },
  {
    "url": "img/ts.png",
    "revision": "777eadd6082ba554aa5e76586f893f44"
  },
  {
    "url": "img/uml.png",
    "revision": "ffdf2f505bcf45a8f0f2ec6b795522ec"
  },
  {
    "url": "img/vue-lifecycle.png",
    "revision": "aaefcb5d89f8e91c2b6778a33fdb5ca6"
  },
  {
    "url": "img/vue-reactive.png",
    "revision": "109a7d4d959f58671068eb6a78f1b4b0"
  },
  {
    "url": "img/vue-ssr.png",
    "revision": "15723fca8cfcddc1031df0cf426d248e"
  },
  {
    "url": "img/webpack-hrm.png",
    "revision": "9ac8834c1cddcf3f592f3a501f76fbd2"
  },
  {
    "url": "img/zhuo.jpeg",
    "revision": "770c94a94c06319d761e7e647ef28fe0"
  },
  {
    "url": "index.html",
    "revision": "c4ecfad4d972fc63e2a1a68791b22fc6"
  },
  {
    "url": "jian_x192.png",
    "revision": "26935a46876bc1ac7e0541c5d482b640"
  },
  {
    "url": "jian_x48.png",
    "revision": "e4d35822fa7ba8013ddc7b2f04030f0b"
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
