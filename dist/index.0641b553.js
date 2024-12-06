// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9w8YQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNKaB":[function(require,module,exports,__globalThis) {
// Import des composants
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _navbarJs = require("./components/navbar.js");
var _navbarJsDefault = parcelHelpers.interopDefault(_navbarJs);
var _homeJs = require("./components/Home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _recipesJs = require("./components/Recipes.js");
var _recipesJsDefault = parcelHelpers.interopDefault(_recipesJs);
var _aboutJs = require("./components/About.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _contactJs = require("./components/Contact.js");
var _contactJsDefault = parcelHelpers.interopDefault(_contactJs);
var _footerJs = require("./components/Footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
// Sélectionner l'élément racine où le contenu sera injecté
const root = document.getElementById('app');
// Fonction pour afficher une page
function renderPage(content) {
    root.innerHTML = `
    <div class="min-h-screen pb-16">
      ${(0, _navbarJsDefault.default)()}  <!-- Inclusion de la barre de navigation -->
      ${content}   <!-- Contenu dynamique -->
      ${(0, _footerJsDefault.default)()}  <!-- Inclusion du footer -->
    </div>
  `;
}
// Écouteurs d'événements pour gérer le changement de page au clic sur les liens
document.addEventListener('click', (event)=>{
    // Vérification du lien cliqué et affichage du contenu correspondant
    if (event.target.id === 'home-link') renderPage((0, _homeJsDefault.default)());
    else if (event.target.id === 'recipes-link') renderPage((0, _recipesJsDefault.default)());
    else if (event.target.id === 'about-link') renderPage((0, _aboutJsDefault.default)());
    else if (event.target.id === 'contact-link') renderPage((0, _contactJsDefault.default)());
});
// Chargement initial de la page d'accueil
renderPage((0, _homeJsDefault.default)());

},{"./components/navbar.js":"dtZi7","./components/Home.js":"hcu4N","./components/Recipes.js":"ikEl4","./components/About.js":"9R1Eu","./components/Contact.js":"cgAOG","./components/Footer.js":"8pPOA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtZi7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navbar);
function Navbar() {
    return `
    <nav class="bg-gradient-to-r from-red-900 via-yellow-900 to-red-900 text-yellow-100 p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Nom du Blog avec style marocain -->
        <h1 class="text-2xl font-bold tracking-wide">
          <span class="border-b-4 border-yellow-100">Kozintk</span>
        </h1>
        
        <!-- Liens stylis\xe9s -->
        <ul class="flex space-x-8 text-lg">
          <li>
            <a href="#" id="home-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">Home</a>
          </li>
          <li>
            <a href="#" id="recipes-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">Recipes</a>
          </li>
          <li>
            <a href="#" id="about-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">About</a>
          </li>
          <li>
            <a href="#" id="contact-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hcu4N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Home);
function Home() {
    return `
    <section 
      class="p-8 bg-cover bg-center text-black h-screen flex items-center"
      style="background-image: url('https://www.kamkamdunes.com/wp-content/uploads/2023/05/platillos-tipicos-de-marruecos-2.jpg');"
    >
      <div class="container mx-auto bg-yellow-50 text-yellow-900 bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h1 class="text-4xl  font-extrabold mb-4 text-center font-arabic">
          Welcome to the Moroccan Cuisine Blog
        </h1>
        <p class="text-lg leading-relaxed text-center  font-arabic">
          Welcome to <strong>Kozintk</strong>, your gateway to the rich and diverse world of Moroccan cuisine! 
          Here, we share authentic recipes from Morocco, covering traditional dishes such as tajines, couscous, pastilla, and more. 
          Each recipe includes a detailed list of ingredients and step-by-step preparation instructions, ensuring 
          that you can bring the flavors of Morocco into your own kitchen. 
          Dive in and explore the vibrant culinary heritage that has been passed down for generations.
        </p>
      </div>
    </section>
  `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ikEl4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Recipes);
function Recipes() {
    return `
    <section class="p-4 text-yellow-900 bg-yellow-50 " >
      <h1 class="text-4xl font-bold text-center my-4">Recipes</h1>
      <p class="text-center mb-8">Here you\u{2019}ll find a collection of traditional Moroccan recipes!</p>

      <!-- Cold Starters Section -->
      <div class="my-8  ">
        <h2 class="text-2xl font-semibold mb-4">Cold Starters</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="border p-4">
                  <img src="https://i.pinimg.com/736x/77/08/43/7708435421038086e2a2befb82cb7f4c.jpg" alt="Carrots with Chermoula" class="w-full h-48 object-cover mb-4">
                  <h3 class="font-bold text-xl">Carrots with Chermoula</h3>
                  <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                </div>
                <div class="border p-4">
                  <img src="https://i.pinimg.com/736x/f8/a6/c1/f8a6c1c1701ca4e5fdd60c1c728f354a.jpg" alt="Taktouka" class="w-full h-48 object-cover mb-4">
                  <h3 class="font-bold text-xl">Taktouka</h3>
                  <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                </div>
                <div class="border p-4">
                  <img src="https://i.pinimg.com/736x/45/b8/b7/45b8b7b2b4013484de48e8f2a43da15c.jpg" alt="Pastilla" class="w-full h-48 object-cover mb-4">
                  <h3 class="font-bold text-xl">Olives mcherml</h3>
                  <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                </div>
        </div>
      </div>

      <!-- Hot Starters Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Hot Starters</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/ce/1d/a2/ce1da224bd7a26d3c2a9414a185d10ac.jpg" alt="Bkoulah" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Bkoulah</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/a4/8e/77/a48e77fff7f25b3083cbbc13f40f279c.jpg" alt="Chicken Briouates" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Zaalouk</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/af/41/f5/af41f56da6294fbf7e474ac4abf86f63.jpg" alt="Harira" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Harira</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Savory Main Dishes Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Savory Main Dishes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/dd/86/c4/dd86c498ad068ef6db5001210f905c44.jpg" alt="Tagines" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">chicken tagine </h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/99/60/d8/9960d84fe464d20c1fe13b69623e1667.jpg" alt="Couscous" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">couscous l\xe9gumes marocain</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/25/20/94/2520941baa7c73b6100c671d1b4abda8.jpg" alt="Grilled Dishes" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Tanjia</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Sweet Main Dishes Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Sweet Main Dishes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/bb/48/55/bb4855189d61afd224e2cb3b88a05f54.jpg" alt="Prune or Apricot Tagine" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Prune or Apricot Tagine</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/474x/0f/ca/e7/0fcae77e1906582b0132d9d1d63cf08e.jpg" alt="Chicken with Almonds and Honey" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Couscous Tfaya</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/21/44/72/2144728d3fc6629c11a710ed687d54d6.jpg" alt="Couscous Tfaya" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Chicken Tagine with Onions & Raisins</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Sweet and Savory Dishes Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Sweet and Savory Dishes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/20/24/a3/2024a39c982316e2d8ca505bbe63cb66.jpg" alt="Chicken Pastilla" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Chicken Pastilla</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/28/66/fb/2866fb08ea0cfc05c9dae88e82ab6856.jpg" alt="Mrouzia" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Chicken with Dghmira</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/0c/5b/04/0c5b04bb60e023339f5dffa21af0bad9.jpg" alt="Vegetables Tagine or Couscous with Tfaya" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Vegetables Tagine or Couscous with Tfaya</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Desserts Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Desserts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/8c/0d/5f/8c0d5f13a4acb471f47c91002e5c1936.jpg" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Sellou</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/bc/7d/14/bc7d14e3f7f6d8d75c5ec79085f5588f.jpg" alt="Baghrir with Honey and Butter" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Mhencha</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/97/b3/6a/97b36ab6c945bd63a83f8c43ae954811.jpg" alt="Milk and Almond Pastilla" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Milk and Almond Pastilla</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Pastries Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Pastries</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/ff/51/92/ff51923499ead19b8e6da053ca2c73b0.jpg" alt="Kaab el Ghzal" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Kaab el Ghzal</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/dd/ec/a6/ddeca682fea802d34f92a3f9b3738a7a.jpg" alt="Ghriba" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Ghriba</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/34/32/05/34320576f0ba32f54ec69d402799d045.jpg" alt="Fekkas" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Fekkas</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Beverages Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Beverages</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/474x/43/61/c9/4361c9369f33fb9bbc10f2ab05ac3c9b.jpg" alt="Mint Tea" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Mint Tea</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/474x/3f/e8/26/3fe8267f3e986201d6fd942225264e10.jpg" alt="Herbal Teas" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Moroccan Coffee</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/8b/65/77/8b65778e442a569fde04cebb9be0c915.jpg" alt="Ra\xefb" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Ra\xefb</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

    </section>
  `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9R1Eu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>About);
function About() {
    return `
<section 
  class="text-brown-900 py-16 px-8" 
  style="background-image: url('https://i.pinimg.com/474x/b3/82/00/b382000b4d37f53c6783e67539c60cb0.jpg'); background-size: cover; background-position: center bg-opacity-90">
  <!-- \u{639}\u{646}\u{648}\u{627}\u{646} \u{627}\u{644}\u{642}\u{633}\u{645} -->
  <div class="bg-yellow-50 rounded-lg shadow-lg p-8 mb-12">
  <h1 class="text-5xl font-extrabold text-center my-8 text-yellow-900 ">About Kozintk</h1>
  <p class="text-lg text-center text-gray-700 mb-12">
    Learn more about Moroccan culture and its culinary heritage.
  </p>
  </div>

  <div class="bg-yellow-50 rounded-lg shadow-lg p-8 mb-12">
    <h2 class="text-4xl font-bold text-center text-yellow-900 mb-6">The History of Moroccan Cuisine</h2>
    <p class="text-lg text-gray-800 leading-relaxed">
      Moroccan cuisine is a blend of Berber, Arab, and Mediterranean influences, shaped over centuries by the country\u{2019}s
      diverse history and geography. From the spice markets of Marrakech to the sweet pastries of Fes, the flavors
      of Morocco tell a story of cultural exchange, regional diversity, and an appreciation for local ingredients.
    </p>
  </div>

      <div class=" bg-yellow-50  shadow-lg p-8 mb-12 bg-opacity-70 ">


        <!-- Mission of Kozintk -->

        <div class=" mb-12">
          <div class="bg-yellow-50  shadow-lg p-8 mb-12 bg-opacity-70  p-6">
            <h2 class="text-3xl font-semibold text-center text-yellow-900 mb-12 ">Our Mission</h2>
            <p class="text-lg text-yellow-900 leading-relaxed">
              At Kozintk, we aim to preserve and promote the rich culinary heritage of Morocco. Our mission is to bring
              traditional Moroccan recipes to a global audience, showcasing the diversity and richness of the country's food
              culture. We believe that food is not just about nourishment, but also about creating memories, telling stories,
              and bringing people together.
            </p>
          </div>
          </div>




      <!-- Meet the Authors Section -->
      <div class=" bg-yellow-50  shadow-lg p-8 mb-12 bg-opacity-70 ">
        <h2 class="text-3xl font-semibold text-center text-yellow-900 mb-6">Meet the Authors</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         
                        <div class="bg-yellow-50 rounded-lg overflow-hidden shadow-lg">
                        <img src="data:image/jpeg;base64,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" alt="Author 1" class="w-full h-48 object-cover">
                        <div class="p-4">
                          <h3 class="font-semibold text-xl mb-2 text-black">Ahmed El Amrani</h3>
                          <p class="text-black">A passionate food historian, Ahmed dives into the past to bring the flavors of Morocco to life.</p>
                        </div>
                        </div>
          
                      <div class="bg-yellow-50 rounded-lg overflow-hidden shadow-lg">
                      <img src="https://static.wixstatic.com/media/209c0b_3e68a48b4d914d7db8ef328473d939d8~mv2.jpg/v1/fill/w_900,h_642,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Chef%20Najat%20Kaanache.jpg" alt="Author 2" class="w-full h-48 object-cover">
                      <div class="p-4">
                        <h3 class="font-semibold text-xl mb-2 text-black">Najat Kaanache</h3>
                        <p class="text-black">Sara is a professional chef with a deep love for Moroccan cuisine. She shares her modern take on traditional dishes.</p>
                      </div>
                      </div>

                      <div class="bg-yellow-50 rounded-lg overflow-hidden shadow-lg">
                      <img src="https://th.bing.com/th/id/R.84cbd1c5a08441c76e84d3cfe0aad4dd?rik=%2bEYhigrYhiKQbQ&riu=http%3a%2f%2fig-wp-colunistas.s3.amazonaws.com%2fguilhermebarros%2fwp-content%2fuploads%2f2011%2f03%2fChef_Fatema_Hal-divulga%c3%a7%c3%a3o_.jpg&ehk=9NeJXfrLnGSrVaOMjSJaiUt6ll3dBVnBVH3O3tnfzNM%3d&risl=&pid=ImgRaw&r=0" alt="Author 3" class="w-full h-48 object-cover">
                      <div class="p-4">
                        <h3 class="font-semibold text-xl mb-2 text-black">Fatima Hal</h3>
                        <p class="text-black">Mounia is a food writer who explores the cultural significance of Moroccan dishes and their role in daily life.</p>
                      </div>
                      </div>

        </div>
        </div>

                        <!-- Contact Us Section -->
                        <div class="bg-yellow-50 rounded-lg shadow-lg p-8 mb-12">
                          <h2 class="text-3xl font-semibold text-center text-yellow-900 mb-6">Get In Touch</h2>
                          <p class="text-lg text-black leading-relaxed text-center mb-6">
                            We'd love to hear from you! If you have any questions, suggestions, or want to share your own Moroccan recipe, feel free to reach out to us.
                          </p>
                            <div class="flex justify-center">
                            <a href="mailto:contact@kozintk.com" class="bg-yellow-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">Contact Us</a>
                            </div>
      </div>

    </section>
  `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgAOG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Contact);
function Contact() {
    return `
    <section class="bg-yellow-50 text-yellow-100 py-16 px-8">
      <div class="max-w-3xl mx-auto bg-yellow-100 bg-opacity-80 rounded-lg p-8 shadow-lg">
        <!-- Titre -->
        <h1 class="text-4xl font-bold text-center text-yellow-900 mb-4">Contact Us</h1>
        <p class="text-lg text-center text-yellow-900 mb-8">We\u{2019}d love to hear from you! Please fill out the form below.</p>
        
        <!-- Formulaire -->
        <form class="space-y-6">
          <!-- Nom -->
          <div>
            <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" 
                   class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-yellow-50 " />
          
                   </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" 
                   class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-yellow-50" />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here"
                      class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-yellow-50 "></textarea>
          </div>

          <!-- Bouton -->
          <div class="text-center">
            <button type="submit" 
                    class="bg-yellow-900 text-yellow-100 px-6 py-3 rounded-lg shadow hover:red-100 focus:ring-4 focus:ring-red-100">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pPOA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Footer);
function Footer() {
    return `
    <footer class="bg-gradient-to-r from-red-900 via-yellow-900 to-red-900 text-yellow-100 text-center bottom-0 fixed p-5 shadow-lg w-full left-0  w-full z-0">
      <div class="container mx-auto">
        
        <!-- R\xe9seaux sociaux -->
        <div class="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-yellow-300">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="hover:text-yellow-300">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-yellow-300">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-sm">\xa9 2024 Moroccan Cuisine Blog - All Rights Reserved</p>
      </div>
    </footer>
  `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9w8YQ","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
