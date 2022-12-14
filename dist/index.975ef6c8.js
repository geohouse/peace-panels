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
        this
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
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>???? <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _lit = require("lit");
var _svgJs = require("@svgdotjs/svg.js");
// Need to add shuffler of order of objects within the array.
const peaceMessages = [
    {
        language: "English",
        message: "May peace prevail on earth",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Spanish",
        message: "Que la paz prevalezca en la tierra",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Japanese",
        message: "\u4E16\u754C\u4EBA\u985E\u304C\u5E73\u548C\u3067\u3042\u308A\u307E\u3059\u3088\u3046\u306B",
        direction: "ttob",
        displayMessage: true
    },
    {
        language: "Arabic",
        message: "\u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u0639\u0627\u0644\u0645 \u0623\u062C\u0645\u0639",
        direction: "rtol",
        displayMessage: true
    },
    {
        language: "Danish",
        message: "M\xe5 fred herske p\xe5 jorden",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Chinese",
        message: "\u6211\u5011\u7948\u79B1\u4E16\u754C\u4EBA\u985E\u7684\u548C\u5E73",
        direction: "ttob",
        displayMessage: true
    },
    {
        language: "Korean",
        message: "\uC138\uACC4\uC778\uB958\uC758 \uD3C9\uD654\uAC00 \uC774\uB8E9\uB418\uB3C4\uB85D",
        direction: "ttob",
        displayMessage: true
    },
    {
        language: "Persian",
        message: " \u0628\u0631\u0642\u0631\u0627\u0631 \u0628\u0627\u062F \u0635\u0644\u062D \u062F\u0631 \u0633\u0631\u0627\u0633\u0631 \u062C\u0647\u0627\u0646",
        direction: "rtol",
        displayMessage: true
    },
    {
        language: "Hebrew",
        message: " \u05D9\u05E9\u05E8\u05D4 \u05E9\u05DC\u05D5\u05DD \u05E2\u05DC\u05D9 \u05D0\u05D3\u05DE\u05D5\u05EA",
        direction: "rtol",
        displayMessage: true
    },
    {
        language: "Ukrainian",
        message: "\u0425\u0430\u0439 \u0431\u0443\u0434\u0435 \u043C\u0438\u0440 \u043B\u044E\u0434\u0441\u0442\u0432\u0443 \u0443 \u0432\u0441\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Russian",
        message: "\u0414\u0430 \u0431\u0443\u0434\u0435\u0442 \u043C\u0438\u0440 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u0443 \u0432\u043E \u0432\u0441\u0451\u043C \u043C\u0438\u0440\u0435",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Tamil",
        message: "\u0B89\u0BB2\u0B95\u0BBF\u0BB2\u0BCD \u0B85\u0BAE\u0BC8\u0BA4\u0BBF \u0BA8\u0BBF\u0BB2\u0BB5\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Serbo-Croatian",
        message: "Neka mirzavlada na zemliji",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Romansch",
        message: "Possia la pasch reger en il mund",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Hawaiian",
        message: "E Ho'omaluhia Me Ka Honua",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Icelandic",
        message: "Megi fri\xf0ur r\xedkja \xe1 j\xf6r\xf0",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Kikuyu",
        message: "Thay\xfa v\u0301iyv\u0301re thiine wa thi yothe",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Yoruba",
        message: "Al\xe0\xe1f\xed\xe0 f\xfan gbogbo \xe0gb\xe1y\xe9",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Vietnamese",
        message: "Nguy\u1EC7n xin h\xf2a b\xecnh \u0111\u1EBFn v\u1EDBi to\xe0n th\u1EC3 nh\xe2n lo\u1EA1i tr\xean th\u1EBF gi\u1EDBi",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Hopi",
        message: "Tuwa kwatsi es looma eyesni",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Afrikaans",
        message: "Mag Vrede Se\xebvier Op Aarde",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Algonquin",
        message: "Quenohteau Ohke woh aquen\xe9 omskauau",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Cherokee",
        message: "\u13A1\u13B6\u13AF\u13C3 \u13D9\u13AF\u13F1 \u13A8\u13CE\u13CD\u13D7",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Urdu",
        message: "\u062F\u0646\u06CC\u0627 \u0645\u06CC\u06BA \u0627\u0645\u0646 \u0642\u0627\u0626\u0645 \u0631\u06C1\u06D2",
        direction: "rtol",
        displayMessage: true
    },
    {
        language: "Filipino",
        message: "Sana'y Manatili ang Kapayap\xe1an sa Mundo",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "French",
        message: "Puisse la paix r\xe9gner dans le monde",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Hmong",
        message: "Kom kev thaj yeeb mauj rau ntiaj teb no",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Maori",
        message: "He maung\u0101rongo ki runga i te whenua",
        direction: "ltor",
        displayMessage: true
    },
    {
        language: "Quechua",
        message: "Kusi kausay kachun kay pachapi",
        direction: "ltor",
        displayMessage: true
    }, 
];
// Count up the number of LTOR messages
const sumLTORMessages = peaceMessages.reduce((total, current)=>{
    // console.log(current);
    if (current.direction === "ltor") {
        console.log("yes");
        console.log(total);
        total += 1;
    }
    return total;
}, 0);
console.log({
    sumLTORMessages
});
// Number of messages to keep out of the ltor pool, not including english
let numLTORMessagesToKeep = 9;
// Find the index number of the english entry (map converts the language entries in the objects to an array, then searches
// for the index of the english entry)
const indexOfEnglishEntry = peaceMessages.map((object)=>{
    return object.language;
}).indexOf("English");
//console.log({ indexOfEnglishEntry });
// There are more messages in ltor than will fix well on a screen. Randomly downsample them here,
// but keep all of the rtol and ttob messages. Randomly select 7 messages, and always include English for context.
function downsampleMessages(numLTORMessages, numToKeep) {
    let downsampleIndexes = [];
    // Start by adding the index of the english entry
    downsampleIndexes.push(indexOfEnglishEntry);
    for(let counter = 0; counter < numToKeep; counter++){
        // keeps the entry in the range [0,numLTORMessages]
        let currEntry = Math.floor(Math.random() * numLTORMessages);
        console.log({
            currEntry
        });
        // Ensure there are no duplicate index picks (re-randomize as needed to ensure this is the case)
        if (downsampleIndexes.includes(currEntry)) while(downsampleIndexes.includes(currEntry))//console.log("in while");
        currEntry = Math.floor(Math.random() * numLTORMessages);
        downsampleIndexes.push(currEntry);
    }
    console.log({
        downsampleIndexes
    });
    let sampledMessageHolder = [];
    let ltorCounter = 0;
    for (const message of peaceMessages){
        //console.log(message);
        if (message.direction === "rtol" || message.direction === "ttob") sampledMessageHolder.push(message);
        else if (message.direction === "ltor") {
            if (downsampleIndexes.includes(ltorCounter)) sampledMessageHolder.push(message);
            ltorCounter += 1;
        }
    }
    return sampledMessageHolder;
}
const sampledMessages = downsampleMessages(sumLTORMessages, numLTORMessagesToKeep);
function shuffleArray(inputMessageArray) {
    const shuffledOutput = [];
    let cutIndex = 0;
    // Shuffle by iterating through array, splicing out a random element (by index value) each time to add to the
    // output holder
    while(inputMessageArray.length > 0){
        //console.log(inputMessageArray.length);
        cutIndex = Math.floor(Math.random() * inputMessageArray.length);
        //console.log({ cutIndex });
        // splice returns a list of the removed element, so need to index into the list
        // to access the number before pushing to the output array.
        const removed = inputMessageArray.splice(cutIndex, 1)[0];
        //console.log({ removed });
        shuffledOutput.push(removed);
    }
    return shuffledOutput;
}
// Shuffle all of the messages so they appear in a different order each time.
const sampledMessagesShuffled = shuffleArray(sampledMessages);
class PeacePanel extends (0, _lit.LitElement) {
    // These are Class properties that are dynamic for Lit (i.e. it listens to changes in them and updates the
    // DOM automatically if they change). The static keyword only refers to the fact that they're defined
    // in the class as a whole and not in individual object instances of the class.
    // static properties = {
    //     // Will hold the peace language (key) and peace message (value)
    //     messageLanguage:{}
    // };
    static properties = {
        // This reads in object attached by JS to the HTML element, which contains the
        // information for the current peace panel.
        messageDetails: {
            type: Object
        },
        tester: {
            type: String
        }
    };
    static styles = (0, _lit.css)`
    .message {
      color: #222222;
    }
    .language {
      color: #777777;
    }
    p {
      background-color: bisque;
      text-align: center;
    }
  `;
    //   constructor() {
    //     super();
    //     console.log("in constructor");
    //     console.log(this.messageDetails);
    //     // Assign the input object passed to the class definition when creating a new Object so it's
    //     // accessible for correct message/language rendering.
    //     //this.messageDetails = inputObject;
    //     console.log(this);
    //   }
    // Toggle whether the displayMessage property is set to true/false.
    toggleMessage() {
        //console.log("in toggle");
        //console.log(this.messageDetails);
        // Toggle the boolean and re-assign
        this.messageDetails.displayMessage = !this.messageDetails.displayMessage;
        //console.log(this.messageDetails.displayMessage);
        this.requestUpdate();
    }
    render() {
        //console.log("in render");
        //console.log(this.messageDetails.language);
        //console.log(this.tester);
        // Make each peace-panel element have 2 classes: 1 for what is being shown, and the other for the text direction
        // which is needed to style them for correct text direction using the main CSS file. Easiest to define as
        // a variable before using in the template string construction.
        let classList = `${this.messageDetails.displayMessage ? "message" : "language"}`;
        classList = classList + " " + this.messageDetails.direction;
        //return html`<p>Testing</p>`;
        return (0, _lit.html)`
      <p class=${classList} @click=${()=>this.toggleMessage()}>
        ${this.messageDetails.displayMessage ? this.messageDetails.message : this.messageDetails.language}
      </p>
    `;
    }
}
customElements.define("peace-panel", PeacePanel);
// class TesterTester extends LitElement {
//   render() {
//     html`<p>TESTING here</p>`;
//   }
// }
// customElements.define("tester-tester", TesterTester);
// export class SimpleGreeting extends LitElement {
//   static styles = css`
//     p {
//       color: blue;
//     }
//   `;
//   static properties = {
//     name: { type: String },
//   };
//   constructor() {
//     super();
//     this.name = "Somebody";
//   }
//   render() {
//     return html`<p>Hello, ${this.name}!</p>`;
//   }
// }
// customElements.define("simple-greeting", SimpleGreeting);
// peaceMessages.forEach((message) => {
//   const newElement = document.createElement("simple-greeting");
//   document.querySelector(".banner-holder").appendChild(newElement);
// });
sampledMessagesShuffled.forEach((message)=>{
    //console.log(message);
    const newPeacePanel = document.createElement("peace-panel");
    // The name of this property added to the HTML node has to exactly match the name expected
    // in the static properties area of the PeacePanels class definition (this seems to be how it
    // can process multiple pieces of input information attached to the HTML and correctly assign them.)
    // These are named 'slots' that newPeacePanel is expecting based on our definition in the static properties
    // section. Can attach any other properties that I want to the peace-panel elements, but only the
    // ones with the names matching those expected from the properties definition of the class will
    // be available for use with the Lit web component.
    newPeacePanel.messageDetails = message;
    // newPeacePanel.tester = "Gussy!";
    //console.log("in setting up");
    //console.log(newPeacePanel.messageDetails);
    if (message.direction === "ttob") document.querySelector(".banner-ttob").appendChild(newPeacePanel);
    if (message.direction === "rtol") document.querySelector(".banner-rtol").appendChild(newPeacePanel);
    if (message.direction === "ltor") document.querySelector(".banner-ltor").appendChild(newPeacePanel);
});
//Get the window width and height every time it's resized (this is a workaround to set the
// window dimensions using percentages of the window size when the input size only accepts pixels)
// let windowWidth = window.innerWidth;
// let windowHeight = window.innerHeight;
let windowWidth = window.visualViewport.width;
let windowHeight = window.visualViewport.height;
// Set the width and height of the rendered peace sign when all of the panels are closed. In pixels.
const peaceSignWidthHeight = 200;
// const testSVG = SVG()
//   .addTo("body")
//   .size(windowWidth / 2, windowHeight);
// let rect = testSVG
//   .polygon(`0,0 100,100 150,150, 150,0 0,0`)
//   .attr({ fill: "#0f0", class: "svg" });
// function makeSVGContainer(width, height, className) {
//   return (svgContainer = SVG()
//     .addTo("body")
//     .size(width, height)
//     .addClass(className));
// }
const fullContainer = (0, _svgJs.SVG)().addTo(".banner-holder").size(windowWidth, windowHeight).addClass("full-container");
// Initialize to undefined. This is important in the render functions to tell whether a previous panel render exists or not.
let rtolSVG, ltorSVG, ttobSVG;
function renderSVG_full(renderLtor, renderRtol, renderTtob) {
    // Only render the panels with input parameters of true
    // All of these panel renders get their second class set to 'max' to indicate they're filling the full screen currently
    //Get the window dimensions to work with
    windowWidth = window.visualViewport.width;
    windowHeight = window.visualViewport.height;
    if (renderRtol) {
        if (rtolSVG != undefined) rtolSVG.remove();
        rtolSVG = fullContainer.polygon(`0,0 0,${windowHeight} ${windowWidth / 2},${windowHeight / 2} ${windowWidth / 2},0 0,0`).attr({
            fill: "#DD6B7F",
            class: `rtol-svg max`
        });
        // Set the click event handler to change the class to 'min' and render to the side when clicked
        rtolSVG.click(function() {
            console.log("fired");
            this.fill({
                color: "blue"
            });
            this.animate().move(-0.2 * windowWidth, 0);
            // this.node.classList[1] = min;
            renderSVG_side(false, true, false);
        });
    }
    if (renderTtob) {
        if (ttobSVG != undefined) ttobSVG.remove();
        ttobSVG = fullContainer.polygon(`0,${windowHeight} ${windowWidth},${windowHeight} ${windowWidth / 2},${windowHeight / 2}`).attr({
            fill: "#FFA500",
            class: `ttob-svg max`
        });
        ttobSVG.click(function() {
            console.log("fired");
            this.fill({
                color: "blue"
            });
            this.animate().move(0, 0.7 * windowHeight);
            renderSVG_side(false, false, true);
        });
    }
    if (renderLtor) {
        if (ltorSVG != undefined) ltorSVG.remove();
        ltorSVG = fullContainer.polygon(`${windowWidth},0 ${windowWidth},${windowHeight} ${windowWidth / 2},${windowHeight / 2} ${windowWidth / 2},0`).attr({
            fill: "#54B5FB",
            class: `ltor-svg max`
        });
        console.log(ltorSVG);
        // Add the click event handlers
        ltorSVG.click(function() {
            console.log("fired");
            this.fill({
                color: "blue"
            });
            this.animate().move(0.7 * windowWidth, 0);
            console.log(this);
            renderSVG_side(true, false, false);
        });
    }
    console.log("testing");
    console.log(ltorSVG);
    console.log(ltorSVG.node.classList.contains("max"));
    // Clear any previous peace sign element that exists. This prevents rendering additional images
    // if one panel is minimized then maximized again (with the other panels maximized)
    if (document.querySelector(".peace-svg")) document.querySelector(".peace-svg").remove();
    if (ltorSVG.node.classList.contains("max") && rtolSVG.node.classList.contains("max") && ttobSVG.node.classList.contains("max")) {
        const peaceSVG = document.createElement("img");
        // TO RENDER WITH PARCEL, MUST INCLUDE THE REQUIRE STATEMENT AROUND THE IMAGE PATH SO
        // PARCEL KNOWS TO BUNDLE THE IMAGE WITH THE OTHER SITE ASSETS, OTHERWISE
        // IMAGE DOESN'T APPEAR AND ONLY GIVES ALT TEXT AND A BROKEN LINK.
        // https://github.com/parcel-bundler/parcel/issues/3056
        peaceSVG.src = require("../img/peace-sign-plain.svg");
        peaceSVG.alt = "Peace symbol";
        peaceSVG.className = "peace-svg";
        console.log(peaceSVG);
        document.body.appendChild(peaceSVG);
        // Now need to apply dynamic layout styling to the peace sign.
        const peaceSVGRendered = document.querySelector(".peace-svg");
        // This is the position of the top of the peace sign, so need to offset based on its width/height
        // to center it at the intersection of the panels.
        // Adding back the windowHeight/200, windowWidth/200 factors is to dynamically offset the
        //'auto' margin for the top and right of the panel holder that otherwise prevents the peace sign
        // from being rendered exactly in the center of the screen. This seems to work well as a work-around.
        // The fix is to set the top and right positions to 0px, but then this breaks the ability to re-scale
        // the panels dynamically as the window size is changed.
        peaceSVGRendered.style.top = `${windowHeight / 2 - peaceSignWidthHeight / 2 + windowHeight / 200}px`;
        peaceSVGRendered.style.left = `${windowWidth / 2 - peaceSignWidthHeight / 2 + windowWidth / 200}px`;
        peaceSVGRendered.style.position = "absolute";
        peaceSVGRendered.style.width = `${peaceSignWidthHeight}px`;
        peaceSVGRendered.style.height = `${peaceSignWidthHeight}px`;
    }
}
function renderSVG_side(renderLtor, renderRtol, renderTtob) {
    // Only render the panels with input parameters of true
    // All of these panel renders get their second class set to 'min' to indicate they're on the side of the screen currently
    //Get the window dimensions to work with
    windowWidth = window.visualViewport.width;
    windowHeight = window.visualViewport.height;
    if (renderRtol) {
        // remove the panel if it already exists before re-rendering
        if (rtolSVG != undefined) rtolSVG.remove();
        rtolSVG = fullContainer.polygon(`${-0.2 * windowWidth},0 ${-0.2 * windowWidth},${windowHeight} ${windowWidth / 2 - 0.2 * windowWidth},${windowHeight / 2} ${windowWidth / 2 - 0.2 * windowWidth},0 0,0`).attr({
            fill: "#DD6B7F",
            class: `rtol-svg min`
        });
        // Set the click event handler to change the class to 'min' and render to the side when clicked
        rtolSVG.click(function() {
            console.log("fired");
            this.fill({
                color: "blue"
            });
            this.animate().move(0, 0);
            // this.node.classList[1] = min;
            renderSVG_full(false, true, false);
        });
    }
    if (renderTtob) {
        if (ttobSVG != undefined) ttobSVG.remove();
        ttobSVG = fullContainer.polygon(`0,${windowHeight + 0.1 * windowHeight} ${windowWidth},${windowHeight + 0.1 * windowHeight} ${windowWidth / 2},${0.6 * windowHeight}`).attr({
            fill: "#FFA500",
            class: `ttob-svg min`
        });
        ttobSVG.click(function() {
            console.log("fired");
            this.fill({
                color: "blue"
            });
            this.animate().move(0, 0.8 * windowHeight);
            renderSVG_full(false, false, true);
        });
    }
    if (renderLtor) {
        if (ltorSVG != undefined) ltorSVG.remove();
        ltorSVG = fullContainer.polygon(`${1.2 * windowWidth},0 ${1.2 * windowWidth},${windowHeight} ${windowWidth / 2 + 0.2 * windowWidth},${windowHeight / 2} ${windowWidth / 2 + 0.2 * windowWidth},0 ${1.2 * windowWidth},0`).attr({
            fill: "#54B5FB",
            class: `ltor-svg min`
        });
        console.log(ltorSVG);
        // Add the click event handlers
        ltorSVG.click(function() {
            console.log("fired");
            this.fill({
                color: "blue"
            });
            this.animate().move(0.8 * windowWidth, 0);
            console.log(this);
            renderSVG_full(true, false, false);
        });
    }
    // Clear the peace sign once all panels are minimized
    if (ltorSVG.node.classList.contains("min") && rtolSVG.node.classList.contains("min") && ttobSVG.node.classList.contains("min")) // Clear any previous peace sign element that exists
    {
        if (document.querySelector(".peace-svg")) document.querySelector(".peace-svg").remove();
    }
}
// Scales the SVG along with the window size.
function updateSVGSize(event) {
    console.log({
        event
    });
    let resized = false;
    if (event != "") resized = true;
    // Remove the previous rectangle and re-render with the new width/height dimensions
    // rect.remove();
    // rect = testSVG
    //   .rect(windowWidth / 10, windowHeight / 10)
    //   .attr({ fill: "#0f0", class: "svg" });
    // The background color panels are min/maxed based on their second class value.
    // Updating them with window size destroys the previous panels and their class state, so
    // need to capture their current class state here before removing them, and pass that to the
    // renderSVG function so that when they're re-sized, they keep their same min/max appearance.
    const currLTORSVG = document.querySelector(".ltor-svg");
    const currRTOLSVG = document.querySelector(".rtol-svg");
    const currTTOBSVG = document.querySelector(".ttob-svg");
    const currLTORClass = currLTORSVG.classList[1];
    const currRTOLClass = currRTOLSVG.classList[1];
    const currTTOBClass = currTTOBSVG.classList[1];
    // ltorSVG.remove();
    // ttobSVG.remove();
    // rtolSVG.remove();
    // re-render the full banners as needed
    renderSVG_full(currLTORClass === "max" ? true : false, currRTOLClass === "max" ? true : false, currTTOBClass === "max" ? true : false);
    // re-Render the banners currently off to the side as needed
    renderSVG_side(currLTORClass === "min" ? true : false, currRTOLClass === "min" ? true : false, currTTOBClass === "min" ? true : false);
}
// Initial SVG render of the background areas to the side
renderSVG_side(windowHeight, windowWidth, true, true, true);
// If the window size changes, re-calculate and re-render the background areas so they still fit correctly
// based on the new screen size.
window.addEventListener("resize", updateSVGSize); // // Can't use anonymous arrow functions for this callback (likely because it's not passing the correct value of 'this')
 // rect.click(function () {
 //   this.fill({ color: "blue" });
 //   this.animate().move(150, 150);
 // });
 // document.querySelector(".svg").addEventListener("click", function () {
 //   console.log("Clicked!");
 // });

},{"lit":"4antt","@svgdotjs/svg.js":"9S56O","../img/peace-sign-plain.svg":"agOyx"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>a);
parcelHelpers.export(exports, "defaultConverter", ()=>o);
parcelHelpers.export(exports, "notEqual", ()=>n);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window.trustedTypes, r = e ? e.emptyScript : "", h = window.reactiveElementPolyfillSupport, o = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? r : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s1 = t;
        switch(i){
            case Boolean:
                s1 = null !== t;
                break;
            case Number:
                s1 = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s1 = JSON.parse(t);
                } catch (t1) {
                    s1 = null;
                }
        }
        return s1;
    }
}, n = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: o,
    reflect: !1,
    hasChanged: n
};
class a extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        null !== (i = this.h) && void 0 !== i || (this.h = []), this.h.push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s2)=>{
            const e1 = this._$Ep(s2, i);
            void 0 !== e1 && (this._$Ev.set(e1, s2), t.push(e1));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s3 = "symbol" == typeof t ? Symbol() : "__" + t, e2 = this.getPropertyDescriptor(t, s3, i);
            void 0 !== e2 && Object.defineProperty(this.prototype, t, e2);
        }
    }
    static getPropertyDescriptor(t, i, s4) {
        return {
            get () {
                return this[i];
            },
            set (e3) {
                const r1 = this[t];
                this[i] = e3, this.requestUpdate(t, r1, s4);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s5 of i)this.createProperty(s5, t[s5]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s6 = [];
        if (Array.isArray(i)) {
            const e4 = new Set(i.flat(1 / 0).reverse());
            for (const i1 of e4)s6.unshift((0, _cssTagJs.getCompatibleStyle)(i1));
        } else void 0 !== i && s6.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s6;
    }
    static _$Ep(t, i) {
        const s7 = i.attribute;
        return !1 === s7 ? void 0 : "string" == typeof s7 ? s7 : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t2;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s8;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s8 = t.hostConnected) || void 0 === s8 || s8.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s9 = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s9, this.constructor.elementStyles), s9;
    }
    connectedCallback() {
        var t3;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t4;
        null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s10) {
        this._$AK(t, s10);
    }
    _$EO(t, i, s11 = l) {
        var e5, r2;
        const h1 = this.constructor._$Ep(t, s11);
        if (void 0 !== h1 && !0 === s11.reflect) {
            const n1 = (null !== (r2 = null === (e5 = s11.converter) || void 0 === e5 ? void 0 : e5.toAttribute) && void 0 !== r2 ? r2 : o.toAttribute)(i, s11.type);
            this._$El = t, null == n1 ? this.removeAttribute(h1) : this.setAttribute(h1, n1), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s12, e6;
        const r3 = this.constructor, h2 = r3._$Ev.get(t);
        if (void 0 !== h2 && this._$El !== h2) {
            const t = r3.getPropertyOptions(h2), n2 = t.converter, l1 = null !== (e6 = null !== (s12 = null == n2 ? void 0 : n2.fromAttribute) && void 0 !== s12 ? s12 : "function" == typeof n2 ? n2 : null) && void 0 !== e6 ? e6 : o.fromAttribute;
            this._$El = h2, this[h2] = l1(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s13) {
        let e7 = !0;
        void 0 !== t && (((s13 = s13 || this.constructor.getPropertyOptions(t)).hasChanged || n)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s13.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s13))) : e7 = !1), !this.isUpdatePending && e7 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t5) {
            Promise.reject(t5);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t6;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i2 = !1;
        const s14 = this._$AL;
        try {
            i2 = this.shouldUpdate(s14), i2 ? (this.willUpdate(s14), null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s14)) : this._$Ek();
        } catch (t) {
            throw i2 = !1, this._$Ek(), t;
        }
        i2 && this._$AE(s14);
    }
    willUpdate(t) {}
    _$AE(t7) {
        var i3;
        null === (i3 = this._$ES) || void 0 === i3 || i3.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t7)), this.updated(t7);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t8) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
a.finalized = !0, a.elementProperties = new Map, a.elementStyles = [], a.shadowRootOptions = {
    mode: "open"
}, null == h || h({
    ReactiveElement: a
}), (null !== (s = globalThis.reactiveElementVersions) && void 0 !== s ? s : globalThis.reactiveElementVersions = []).push("1.3.4");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>s);
parcelHelpers.export(exports, "adoptStyles", ()=>i);
parcelHelpers.export(exports, "css", ()=>r);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>S);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>t);
parcelHelpers.export(exports, "unsafeCSS", ()=>o);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e = Symbol(), n = new WeakMap;
class s {
    constructor(t1, n1, s1){
        if (this._$cssResult$ = !0, s1 !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t1, this.t = n1;
    }
    get styleSheet() {
        let e1 = this.o;
        const s2 = this.t;
        if (t && void 0 === e1) {
            const t2 = void 0 !== s2 && 1 === s2.length;
            t2 && (e1 = n.get(s2)), void 0 === e1 && ((this.o = e1 = new CSSStyleSheet).replaceSync(this.cssText), t2 && n.set(s2, e1));
        }
        return e1;
    }
    toString() {
        return this.cssText;
    }
}
const o = (t3)=>new s("string" == typeof t3 ? t3 : t3 + "", void 0, e), r = (t4, ...n2)=>{
    const o1 = 1 === t4.length ? t4[0] : n2.reduce((e2, n3, s3)=>e2 + ((t5)=>{
            if (!0 === t5._$cssResult$) return t5.cssText;
            if ("number" == typeof t5) return t5;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n3) + t4[s3 + 1], t4[0]);
    return new s(o1, t4, e);
}, i = (e3, n4)=>{
    t ? e3.adoptedStyleSheets = n4.map((t6)=>t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet) : n4.forEach((t7)=>{
        const n5 = document.createElement("style"), s4 = window.litNonce;
        void 0 !== s4 && n5.setAttribute("nonce", s4), n5.textContent = t7.cssText, e3.appendChild(n5);
    });
}, S = t ? (t8)=>t8 : (t9)=>t9 instanceof CSSStyleSheet ? ((t10)=>{
        let e4 = "";
        for (const n6 of t10.cssRules)e4 += n6.cssText;
        return o(e4);
    })(t9) : t9;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"1cmQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L);
parcelHelpers.export(exports, "html", ()=>$);
parcelHelpers.export(exports, "noChange", ()=>b);
parcelHelpers.export(exports, "nothing", ()=>w);
parcelHelpers.export(exports, "render", ()=>T);
parcelHelpers.export(exports, "svg", ()=>y);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var t;
const i = globalThis.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t1)=>t1
}) : void 0, e = `lit$${(Math.random() + "").slice(9)}$`, o = "?" + e, n = `<${o}>`, l = document, h = (t2 = "")=>l.createComment(t2), r = (t3)=>null === t3 || "object" != typeof t3 && "function" != typeof t3, d = Array.isArray, u = (t4)=>d(t4) || "function" == typeof (null == t4 ? void 0 : t4[Symbol.iterator]), c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), _ = /'/g, g = /"/g, m = /^(?:script|style|textarea|title)$/i, p = (t5)=>(i1, ...s1)=>({
            _$litType$: t5,
            strings: i1,
            values: s1
        }), $ = p(1), y = p(2), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), x = new WeakMap, T = (t7, i2, s2)=>{
    var e1, o1;
    const n1 = null !== (e1 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e1 ? e1 : i2;
    let l1 = n1._$litPart$;
    if (void 0 === l1) {
        const t6 = null !== (o1 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o1 ? o1 : null;
        n1._$litPart$ = l1 = new N(i2.insertBefore(h(), t6), t6, void 0, null != s2 ? s2 : {});
    }
    return l1._$AI(t7), l1;
}, A = l.createTreeWalker(l, 129, null, !1), E = (t8, i4)=>{
    const o2 = t8.length - 1, l2 = [];
    let h1, r1 = 2 === i4 ? "<svg>" : "", d1 = c;
    for(let i3 = 0; i3 < o2; i3++){
        const s3 = t8[i3];
        let o3, u1, p1 = -1, $1 = 0;
        for(; $1 < s3.length && (d1.lastIndex = $1, u1 = d1.exec(s3), null !== u1);)$1 = d1.lastIndex, d1 === c ? "!--" === u1[1] ? d1 = v : void 0 !== u1[1] ? d1 = a : void 0 !== u1[2] ? (m.test(u1[2]) && (h1 = RegExp("</" + u1[2], "g")), d1 = f) : void 0 !== u1[3] && (d1 = f) : d1 === f ? ">" === u1[0] ? (d1 = null != h1 ? h1 : c, p1 = -1) : void 0 === u1[1] ? p1 = -2 : (p1 = d1.lastIndex - u1[2].length, o3 = u1[1], d1 = void 0 === u1[3] ? f : '"' === u1[3] ? g : _) : d1 === g || d1 === _ ? d1 = f : d1 === v || d1 === a ? d1 = c : (d1 = f, h1 = void 0);
        const y1 = d1 === f && t8[i3 + 1].startsWith("/>") ? " " : "";
        r1 += d1 === c ? s3 + n : p1 >= 0 ? (l2.push(o3), s3.slice(0, p1) + "$lit$" + s3.slice(p1) + e + y1) : s3 + e + (-2 === p1 ? (l2.push(void 0), i3) : y1);
    }
    const u2 = r1 + (t8[o2] || "<?>") + (2 === i4 ? "</svg>" : "");
    if (!Array.isArray(t8) || !t8.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== s ? s.createHTML(u2) : u2,
        l2
    ];
};
class C {
    constructor({ strings: t9 , _$litType$: s4  }, n2){
        let l3;
        this.parts = [];
        let r2 = 0, d2 = 0;
        const u3 = t9.length - 1, c1 = this.parts, [v1, a1] = E(t9, s4);
        if (this.el = C.createElement(v1, n2), A.currentNode = this.el.content, 2 === s4) {
            const t10 = this.el.content, i5 = t10.firstChild;
            i5.remove(), t10.append(...i5.childNodes);
        }
        for(; null !== (l3 = A.nextNode()) && c1.length < u3;){
            if (1 === l3.nodeType) {
                if (l3.hasAttributes()) {
                    const t11 = [];
                    for (const i7 of l3.getAttributeNames())if (i7.endsWith("$lit$") || i7.startsWith(e)) {
                        const s5 = a1[d2++];
                        if (t11.push(i7), void 0 !== s5) {
                            const t12 = l3.getAttribute(s5.toLowerCase() + "$lit$").split(e), i8 = /([.?@])?(.*)/.exec(s5);
                            c1.push({
                                type: 1,
                                index: r2,
                                name: i8[2],
                                strings: t12,
                                ctor: "." === i8[1] ? M : "?" === i8[1] ? k : "@" === i8[1] ? H : S
                            });
                        } else c1.push({
                            type: 6,
                            index: r2
                        });
                    }
                    for (const i6 of t11)l3.removeAttribute(i6);
                }
                if (m.test(l3.tagName)) {
                    const t13 = l3.textContent.split(e), s6 = t13.length - 1;
                    if (s6 > 0) {
                        l3.textContent = i ? i.emptyScript : "";
                        for(let i9 = 0; i9 < s6; i9++)l3.append(t13[i9], h()), A.nextNode(), c1.push({
                            type: 2,
                            index: ++r2
                        });
                        l3.append(t13[s6], h());
                    }
                }
            } else if (8 === l3.nodeType) {
                if (l3.data === o) c1.push({
                    type: 2,
                    index: r2
                });
                else {
                    let t14 = -1;
                    for(; -1 !== (t14 = l3.data.indexOf(e, t14 + 1));)c1.push({
                        type: 7,
                        index: r2
                    }), t14 += e.length - 1;
                }
            }
            r2++;
        }
    }
    static createElement(t15, i) {
        const s7 = l.createElement("template");
        return s7.innerHTML = t15, s7;
    }
}
function P(t16, i14, s8 = t16, e2) {
    var o4, n3, l4, h2;
    if (i14 === b) return i14;
    let d3 = void 0 !== e2 ? null === (o4 = s8._$Cl) || void 0 === o4 ? void 0 : o4[e2] : s8._$Cu;
    const u4 = r(i14) ? void 0 : i14._$litDirective$;
    return (null == d3 ? void 0 : d3.constructor) !== u4 && (null === (n3 = null == d3 ? void 0 : d3._$AO) || void 0 === n3 || n3.call(d3, !1), void 0 === u4 ? d3 = void 0 : (d3 = new u4(t16), d3._$AT(t16, s8, e2)), void 0 !== e2 ? (null !== (l4 = (h2 = s8)._$Cl) && void 0 !== l4 ? l4 : h2._$Cl = [])[e2] = d3 : s8._$Cu = d3), void 0 !== d3 && (i14 = P(t16, d3._$AS(t16, i14.values), d3, e2)), i14;
}
class V {
    constructor(t17, i15){
        this.v = [], this._$AN = void 0, this._$AD = t17, this._$AM = i15;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t18) {
        var i16;
        const { el: { content: s9  } , parts: e3  } = this._$AD, o5 = (null !== (i16 = null == t18 ? void 0 : t18.creationScope) && void 0 !== i16 ? i16 : l).importNode(s9, !0);
        A.currentNode = o5;
        let n4 = A.nextNode(), h3 = 0, r3 = 0, d4 = e3[0];
        for(; void 0 !== d4;){
            if (h3 === d4.index) {
                let i17;
                2 === d4.type ? i17 = new N(n4, n4.nextSibling, this, t18) : 1 === d4.type ? i17 = new d4.ctor(n4, d4.name, d4.strings, this, t18) : 6 === d4.type && (i17 = new I(n4, this, t18)), this.v.push(i17), d4 = e3[++r3];
            }
            h3 !== (null == d4 ? void 0 : d4.index) && (n4 = A.nextNode(), h3++);
        }
        return o5;
    }
    m(t19) {
        let i18 = 0;
        for (const s10 of this.v)void 0 !== s10 && (void 0 !== s10.strings ? (s10._$AI(t19, s10, i18), i18 += s10.strings.length - 2) : s10._$AI(t19[i18])), i18++;
    }
}
class N {
    constructor(t20, i19, s11, e4){
        var o6;
        this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t20, this._$AB = i19, this._$AM = s11, this.options = e4, this._$C_ = null === (o6 = null == e4 ? void 0 : e4.isConnected) || void 0 === o6 || o6;
    }
    get _$AU() {
        var t21, i20;
        return null !== (i20 = null === (t21 = this._$AM) || void 0 === t21 ? void 0 : t21._$AU) && void 0 !== i20 ? i20 : this._$C_;
    }
    get parentNode() {
        let t22 = this._$AA.parentNode;
        const i21 = this._$AM;
        return void 0 !== i21 && 11 === t22.nodeType && (t22 = i21.parentNode), t22;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t23, i22 = this) {
        t23 = P(this, t23, i22), r(t23) ? t23 === w || null == t23 || "" === t23 ? (this._$AH !== w && this._$AR(), this._$AH = w) : t23 !== this._$AH && t23 !== b && this.T(t23) : void 0 !== t23._$litType$ ? this.$(t23) : void 0 !== t23.nodeType ? this.k(t23) : u(t23) ? this.S(t23) : this.T(t23);
    }
    j(t24, i23 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t24, i23);
    }
    k(t25) {
        this._$AH !== t25 && (this._$AR(), this._$AH = this.j(t25));
    }
    T(t26) {
        this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t26 : this.k(l.createTextNode(t26)), this._$AH = t26;
    }
    $(t27) {
        var i24;
        const { values: s12 , _$litType$: e5  } = t27, o7 = "number" == typeof e5 ? this._$AC(t27) : (void 0 === e5.el && (e5.el = C.createElement(e5.h, this.options)), e5);
        if ((null === (i24 = this._$AH) || void 0 === i24 ? void 0 : i24._$AD) === o7) this._$AH.m(s12);
        else {
            const t28 = new V(o7, this), i25 = t28.p(this.options);
            t28.m(s12), this.k(i25), this._$AH = t28;
        }
    }
    _$AC(t29) {
        let i26 = x.get(t29.strings);
        return void 0 === i26 && x.set(t29.strings, i26 = new C(t29)), i26;
    }
    S(t30) {
        d(this._$AH) || (this._$AH = [], this._$AR());
        const i27 = this._$AH;
        let s13, e6 = 0;
        for (const o8 of t30)e6 === i27.length ? i27.push(s13 = new N(this.j(h()), this.j(h()), this, this.options)) : s13 = i27[e6], s13._$AI(o8), e6++;
        e6 < i27.length && (this._$AR(s13 && s13._$AB.nextSibling, e6), i27.length = e6);
    }
    _$AR(t31 = this._$AA.nextSibling, i28) {
        var s14;
        for(null === (s14 = this._$AP) || void 0 === s14 || s14.call(this, !1, !0, i28); t31 && t31 !== this._$AB;){
            const i29 = t31.nextSibling;
            t31.remove(), t31 = i29;
        }
    }
    setConnected(t32) {
        var i30;
        void 0 === this._$AM && (this._$C_ = t32, null === (i30 = this._$AP) || void 0 === i30 || i30.call(this, t32));
    }
}
class S {
    constructor(t33, i31, s15, e7, o9){
        this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t33, this.name = i31, this._$AM = e7, this.options = o9, s15.length > 2 || "" !== s15[0] || "" !== s15[1] ? (this._$AH = Array(s15.length - 1).fill(new String), this.strings = s15) : this._$AH = w;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t34, i32 = this, s16, e9) {
        const o10 = this.strings;
        let n5 = !1;
        if (void 0 === o10) t34 = P(this, t34, i32, 0), n5 = !r(t34) || t34 !== this._$AH && t34 !== b, n5 && (this._$AH = t34);
        else {
            const e8 = t34;
            let l5, h4;
            for(t34 = o10[0], l5 = 0; l5 < o10.length - 1; l5++)h4 = P(this, e8[s16 + l5], i32, l5), h4 === b && (h4 = this._$AH[l5]), n5 || (n5 = !r(h4) || h4 !== this._$AH[l5]), h4 === w ? t34 = w : t34 !== w && (t34 += (null != h4 ? h4 : "") + o10[l5 + 1]), this._$AH[l5] = h4;
        }
        n5 && !e9 && this.P(t34);
    }
    P(t35) {
        t35 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t35 ? t35 : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    P(t36) {
        this.element[this.name] = t36 === w ? void 0 : t36;
    }
}
const R = i ? i.emptyScript : "";
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    P(t37) {
        t37 && t37 !== w ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t38, i33, s17, e10, o11){
        super(t38, i33, s17, e10, o11), this.type = 5;
    }
    _$AI(t39, i34 = this) {
        var s18;
        if ((t39 = null !== (s18 = P(this, t39, i34, 0)) && void 0 !== s18 ? s18 : w) === b) return;
        const e11 = this._$AH, o12 = t39 === w && e11 !== w || t39.capture !== e11.capture || t39.once !== e11.once || t39.passive !== e11.passive, n6 = t39 !== w && (e11 === w || o12);
        o12 && this.element.removeEventListener(this.name, this, e11), n6 && this.element.addEventListener(this.name, this, t39), this._$AH = t39;
    }
    handleEvent(t40) {
        var i35, s19;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s19 = null === (i35 = this.options) || void 0 === i35 ? void 0 : i35.host) && void 0 !== s19 ? s19 : this.element, t40) : this._$AH.handleEvent(t40);
    }
}
class I {
    constructor(t41, i36, s20){
        this.element = t41, this.type = 6, this._$AN = void 0, this._$AM = i36, this.options = s20;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t42) {
        P(this, t42);
    }
}
const L = {
    A: "$lit$",
    C: e,
    M: o,
    L: 1,
    R: E,
    V,
    D: u,
    I: P,
    H: N,
    N: S,
    U: k,
    B: H,
    F: M,
    W: I
}, z = window.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t = globalThis.litHtmlVersions) && void 0 !== t ? t : globalThis.litHtmlVersions = []).push("2.2.7");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_reactiveElement, exports);
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.2");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9S56O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>A);
parcelHelpers.export(exports, "Animator", ()=>Animator);
parcelHelpers.export(exports, "Array", ()=>SVGArray);
parcelHelpers.export(exports, "Box", ()=>Box);
parcelHelpers.export(exports, "Circle", ()=>Circle);
parcelHelpers.export(exports, "ClipPath", ()=>ClipPath);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "Container", ()=>Container);
parcelHelpers.export(exports, "Controller", ()=>Controller);
parcelHelpers.export(exports, "Defs", ()=>Defs);
parcelHelpers.export(exports, "Dom", ()=>Dom);
parcelHelpers.export(exports, "Ease", ()=>Ease);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "Ellipse", ()=>Ellipse);
parcelHelpers.export(exports, "EventTarget", ()=>EventTarget);
parcelHelpers.export(exports, "ForeignObject", ()=>ForeignObject);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "G", ()=>G);
parcelHelpers.export(exports, "Gradient", ()=>Gradient);
parcelHelpers.export(exports, "Image", ()=>Image);
parcelHelpers.export(exports, "Line", ()=>Line);
parcelHelpers.export(exports, "List", ()=>List);
parcelHelpers.export(exports, "Marker", ()=>Marker);
parcelHelpers.export(exports, "Mask", ()=>Mask);
parcelHelpers.export(exports, "Matrix", ()=>Matrix);
parcelHelpers.export(exports, "Morphable", ()=>Morphable);
parcelHelpers.export(exports, "NonMorphable", ()=>NonMorphable);
parcelHelpers.export(exports, "Number", ()=>SVGNumber);
parcelHelpers.export(exports, "ObjectBag", ()=>ObjectBag);
parcelHelpers.export(exports, "PID", ()=>PID);
parcelHelpers.export(exports, "Path", ()=>Path);
parcelHelpers.export(exports, "PathArray", ()=>PathArray);
parcelHelpers.export(exports, "Pattern", ()=>Pattern);
parcelHelpers.export(exports, "Point", ()=>Point);
parcelHelpers.export(exports, "PointArray", ()=>PointArray);
parcelHelpers.export(exports, "Polygon", ()=>Polygon);
parcelHelpers.export(exports, "Polyline", ()=>Polyline);
parcelHelpers.export(exports, "Queue", ()=>Queue);
parcelHelpers.export(exports, "Rect", ()=>Rect);
parcelHelpers.export(exports, "Runner", ()=>Runner);
parcelHelpers.export(exports, "SVG", ()=>SVG);
parcelHelpers.export(exports, "Shape", ()=>Shape);
parcelHelpers.export(exports, "Spring", ()=>Spring);
parcelHelpers.export(exports, "Stop", ()=>Stop);
parcelHelpers.export(exports, "Style", ()=>Style);
parcelHelpers.export(exports, "Svg", ()=>Svg);
parcelHelpers.export(exports, "Symbol", ()=>Symbol);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "TextPath", ()=>TextPath);
parcelHelpers.export(exports, "Timeline", ()=>Timeline);
parcelHelpers.export(exports, "TransformBag", ()=>TransformBag);
parcelHelpers.export(exports, "Tspan", ()=>Tspan);
parcelHelpers.export(exports, "Use", ()=>Use);
parcelHelpers.export(exports, "adopt", ()=>adopt);
parcelHelpers.export(exports, "assignNewId", ()=>assignNewId);
parcelHelpers.export(exports, "clearEvents", ()=>clearEvents);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "defaults", ()=>defaults);
parcelHelpers.export(exports, "dispatch", ()=>dispatch);
parcelHelpers.export(exports, "easing", ()=>easing);
parcelHelpers.export(exports, "eid", ()=>eid);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "find", ()=>baseFind);
parcelHelpers.export(exports, "getClass", ()=>getClass);
parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget);
parcelHelpers.export(exports, "getEvents", ()=>getEvents);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "makeInstance", ()=>makeInstance);
parcelHelpers.export(exports, "makeMorphable", ()=>makeMorphable);
parcelHelpers.export(exports, "mockAdopt", ()=>mockAdopt);
parcelHelpers.export(exports, "namespaces", ()=>namespaces);
parcelHelpers.export(exports, "nodeOrNew", ()=>nodeOrNew);
parcelHelpers.export(exports, "off", ()=>off);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "parser", ()=>parser);
parcelHelpers.export(exports, "regex", ()=>regex);
parcelHelpers.export(exports, "register", ()=>register);
parcelHelpers.export(exports, "registerMorphableType", ()=>registerMorphableType);
parcelHelpers.export(exports, "registerWindow", ()=>registerWindow);
parcelHelpers.export(exports, "restoreWindow", ()=>restoreWindow);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "saveWindow", ()=>saveWindow);
parcelHelpers.export(exports, "utils", ()=>utils);
parcelHelpers.export(exports, "windowEvents", ()=>windowEvents);
parcelHelpers.export(exports, "withWindow", ()=>withWindow);
parcelHelpers.export(exports, "wrapWithAttrCheck", ()=>wrapWithAttrCheck);
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
    if (Array.isArray(name)) {
        for (const _name of name)registerMethods(_name, m);
        return;
    }
    if (typeof name === "object") {
        for(const _name in name)registerMethods(_name, name[_name]);
        return;
    }
    addMethodNames(Object.getOwnPropertyNames(m));
    methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
    return methods$1[name] || {};
}
function getMethodNames() {
    return [
        ...new Set(names)
    ];
}
function addMethodNames(_names) {
    names.push(..._names);
}
// Map function
function map(array1, block) {
    let i1;
    const il1 = array1.length;
    const result = [];
    for(i1 = 0; i1 < il1; i1++)result.push(block(array1[i1]));
    return result;
} // Filter function
function filter(array2, block) {
    let i2;
    const il2 = array2.length;
    const result = [];
    for(i2 = 0; i2 < il2; i2++)if (block(array2[i2])) result.push(array2[i2]);
    return result;
} // Degrees to radians
function radians(d) {
    return d % 360 * Math.PI / 180;
} // Radians to degrees
function degrees(r) {
    return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase
function camelCase(s) {
    return s.toLowerCase().replace(/-(.)/g, function(m, g) {
        return g.toUpperCase();
    });
} // Convert camel cased string to dash separated
function unCamelCase(s) {
    return s.replace(/([A-Z])/g, function(m, g) {
        return "-" + g.toLowerCase();
    });
} // Capitalize first letter of a string
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary
function proportionalSize(element, width1, height1, box) {
    if (width1 == null || height1 == null) {
        box = box || element.bbox();
        if (width1 == null) width1 = box.width / box.height * height1;
        else if (height1 == null) height1 = box.height / box.width * width1;
    }
    return {
        width: width1,
        height: height1
    };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/ function getOrigin(o, element) {
    const origin = o.origin; // First check if origin is in ox or originX
    let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : "center";
    let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : "center"; // Then check if origin was used and overwrite in that case
    if (origin != null) [ox, oy] = Array.isArray(origin) ? origin : typeof origin === "object" ? [
        origin.x,
        origin.y
    ] : [
        origin,
        origin
    ];
     // Make sure to only call bbox when actually needed
    const condX = typeof ox === "string";
    const condY = typeof oy === "string";
    if (condX || condY) {
        const { height: height2 , width: width2 , x: x1 , y: y1  } = element.bbox(); // And only overwrite if string was passed for this specific axis
        if (condX) ox = ox.includes("left") ? x1 : ox.includes("right") ? x1 + width2 : x1 + width2 / 2;
        if (condY) oy = oy.includes("top") ? y1 : oy.includes("bottom") ? y1 + height2 : y1 + height2 / 2;
    } // Return the origin as it is if it wasn't a string
    return [
        ox,
        oy
    ];
}
var utils = {
    __proto__: null,
    map: map,
    filter: filter,
    radians: radians,
    degrees: degrees,
    camelCase: camelCase,
    unCamelCase: unCamelCase,
    capitalize: capitalize,
    proportionalSize: proportionalSize,
    getOrigin: getOrigin
};
// Default namespaces
const svg = "http://www.w3.org/2000/svg";
const html = "http://www.w3.org/1999/xhtml";
const xmlns = "http://www.w3.org/2000/xmlns/";
const xlink = "http://www.w3.org/1999/xlink";
const svgjs = "http://svgjs.dev/svgjs";
var namespaces = {
    __proto__: null,
    svg: svg,
    html: html,
    xmlns: xmlns,
    xlink: xlink,
    svgjs: svgjs
};
const globals = {
    window: typeof window === "undefined" ? null : window,
    document: typeof document === "undefined" ? null : document
};
function registerWindow(win = null, doc = null) {
    globals.window = win;
    globals.document = doc;
}
const save = {};
function saveWindow() {
    save.window = globals.window;
    save.document = globals.document;
}
function restoreWindow() {
    globals.window = save.window;
    globals.document = save.document;
}
function withWindow(win, fn) {
    saveWindow();
    registerWindow(win, win.document);
    fn(win, win.document);
    restoreWindow();
}
function getWindow() {
    return globals.window;
}
class Base {
}
const elements = {};
const root = "___SYMBOL___ROOT___"; // Method for element creation
function create(name, ns = svg) {
    // create element
    return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
    if (element instanceof Base) return element;
    if (typeof element === "object") return adopter(element);
    if (element == null) return new elements[root]();
    if (typeof element === "string" && element.charAt(0) !== "<") return adopter(globals.document.querySelector(element));
     // Make sure, that HTML elements are created with the correct namespace
    const wrapper = isHTML ? globals.document.createElement("div") : create("svg");
    wrapper.innerHTML = element; // We can use firstChild here because we know,
    // that the first char is < and thus an element
    element = adopter(wrapper.firstChild); // make sure, that element doesnt have its wrapper attached
    wrapper.removeChild(wrapper.firstChild);
    return element;
}
function nodeOrNew(name, node) {
    return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
} // Adopt existing svg elements
function adopt(node) {
    // check for presence of node
    if (!node) return null; // make sure a node isn't already adopted
    if (node.instance instanceof Base) return node.instance;
    if (node.nodeName === "#document-fragment") return new elements.Fragment(node);
     // initialize variables
    let className = capitalize(node.nodeName || "Dom"); // Make sure that gradients are adopted correctly
    if (className === "LinearGradient" || className === "RadialGradient") className = "Gradient"; // Fallback to Dom if element is not known
    else if (!elements[className]) className = "Dom";
    return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
    adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
    elements[name] = element;
    if (asRoot) elements[root] = element;
    addMethodNames(Object.getOwnPropertyNames(element.prototype));
    return element;
}
function getClass(name) {
    return elements[name];
} // Element id sequence
let did = 1000; // Get next named element id
function eid(name) {
    return "Svgjs" + capitalize(name) + did++;
} // Deep new id assignment
function assignNewId(node) {
    // do the same for SVG child nodes as well
    for(let i3 = node.children.length - 1; i3 >= 0; i3--)assignNewId(node.children[i3]);
    if (node.id) {
        node.id = eid(node.nodeName);
        return node;
    }
    return node;
} // Method for extending objects
function extend(modules, methods1) {
    let key, i4;
    modules = Array.isArray(modules) ? modules : [
        modules
    ];
    for(i4 = modules.length - 1; i4 >= 0; i4--)for(key in methods1)modules[i4].prototype[key] = methods1[key];
}
function wrapWithAttrCheck(fn) {
    return function(...args) {
        const o = args[args.length - 1];
        if (o && o.constructor === Object && !(o instanceof Array)) return fn.apply(this, args.slice(0, -1)).attr(o);
        else return fn.apply(this, args);
    };
}
function siblings() {
    return this.parent().children();
} // Get the current position siblings
function position() {
    return this.parent().index(this);
} // Get the next element (will return null if there is none)
function next() {
    return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)
function prev() {
    return this.siblings()[this.position() - 1];
} // Send given element one step forward
function forward() {
    const i5 = this.position();
    const p = this.parent(); // move node one step forward
    p.add(this.remove(), i5 + 1);
    return this;
} // Send given element one step backward
function backward() {
    const i6 = this.position();
    const p = this.parent();
    p.add(this.remove(), i6 ? i6 - 1 : 0);
    return this;
} // Send given element all the way to the front
function front() {
    const p = this.parent(); // Move node forward
    p.add(this.remove());
    return this;
} // Send given element all the way to the back
function back() {
    const p = this.parent(); // Move node back
    p.add(this.remove(), 0);
    return this;
} // Inserts a given element before the targeted element
function before(element) {
    element = makeInstance(element);
    element.remove();
    const i7 = this.position();
    this.parent().add(element, i7);
    return this;
} // Inserts a given element after the targeted element
function after(element) {
    element = makeInstance(element);
    element.remove();
    const i8 = this.position();
    this.parent().add(element, i8 + 1);
    return this;
}
function insertBefore(element) {
    element = makeInstance(element);
    element.before(this);
    return this;
}
function insertAfter(element) {
    element = makeInstance(element);
    element.after(this);
    return this;
}
registerMethods("Dom", {
    siblings,
    position,
    next,
    prev,
    forward,
    backward,
    front,
    back,
    before,
    after,
    insertBefore,
    insertAfter
});
// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value
const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value
const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id
const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain
const transforms = /\)\s*,?\s*/; // Whitespace
const whitespace = /\s/g; // Test hex value
const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value
const isRgb = /^rgb\(/; // Test for blank string
const isBlank = /^(\s+)?$/; // Test for numeric string
const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url
const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma
const delimiter = /[\s,]+/; // Test for path letter
const isPathLetter = /[MLHVCSQTAZ]/i;
var regex = {
    __proto__: null,
    numberAndUnit: numberAndUnit,
    hex: hex,
    rgb: rgb,
    reference: reference,
    transforms: transforms,
    whitespace: whitespace,
    isHex: isHex,
    isRgb: isRgb,
    isBlank: isBlank,
    isNumber: isNumber,
    isImage: isImage,
    delimiter: delimiter,
    isPathLetter: isPathLetter
};
function classes() {
    const attr1 = this.attr("class");
    return attr1 == null ? [] : attr1.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise
function hasClass(name) {
    return this.classes().indexOf(name) !== -1;
} // Add class to the node
function addClass(name) {
    if (!this.hasClass(name)) {
        const array3 = this.classes();
        array3.push(name);
        this.attr("class", array3.join(" "));
    }
    return this;
} // Remove class from the node
function removeClass(name) {
    if (this.hasClass(name)) this.attr("class", this.classes().filter(function(c) {
        return c !== name;
    }).join(" "));
    return this;
} // Toggle the presence of a class on the node
function toggleClass(name) {
    return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods("Dom", {
    classes,
    hasClass,
    addClass,
    removeClass,
    toggleClass
});
function css(style, val) {
    const ret = {};
    if (arguments.length === 0) {
        // get full style as object
        this.node.style.cssText.split(/\s*;\s*/).filter(function(el) {
            return !!el.length;
        }).forEach(function(el) {
            const t = el.split(/\s*:\s*/);
            ret[t[0]] = t[1];
        });
        return ret;
    }
    if (arguments.length < 2) {
        // get style properties as array
        if (Array.isArray(style)) {
            for (const name of style){
                const cased = camelCase(name);
                ret[name] = this.node.style[cased];
            }
            return ret;
        } // get style for property
        if (typeof style === "string") return this.node.style[camelCase(style)];
         // set styles in object
        if (typeof style === "object") for(const name in style)// set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? "" : style[name];
    } // set style for property
    if (arguments.length === 2) this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? "" : val;
    return this;
} // Show element
function show() {
    return this.css("display", "");
} // Hide element
function hide() {
    return this.css("display", "none");
} // Is element visible?
function visible() {
    return this.css("display") !== "none";
}
registerMethods("Dom", {
    css,
    show,
    hide,
    visible
});
function data(a, v, r) {
    if (a == null) // get an object of attributes
    return this.data(map(filter(this.node.attributes, (el)=>el.nodeName.indexOf("data-") === 0), (el)=>el.nodeName.slice(5)));
    else if (a instanceof Array) {
        const data1 = {};
        for (const key of a)data1[key] = this.data(key);
        return data1;
    } else if (typeof a === "object") for(v in a)this.data(v, a[v]);
    else if (arguments.length < 2) try {
        return JSON.parse(this.attr("data-" + a));
    } catch (e) {
        return this.attr("data-" + a);
    }
    else this.attr("data-" + a, v === null ? null : r === true || typeof v === "string" || typeof v === "number" ? v : JSON.stringify(v));
    return this;
}
registerMethods("Dom", {
    data
});
function remember(k, v) {
    // remember every item in an object individually
    if (typeof arguments[0] === "object") for(const key in k)this.remember(key, k[key]);
    else if (arguments.length === 1) // retrieve memory
    return this.memory()[k];
    else // store memory
    this.memory()[k] = v;
    return this;
} // Erase a given memory
function forget() {
    if (arguments.length === 0) this._memory = {};
    else for(let i9 = arguments.length - 1; i9 >= 0; i9--)delete this.memory()[arguments[i9]];
    return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object
function memory() {
    return this._memory = this._memory || {};
}
registerMethods("Dom", {
    remember,
    forget,
    memory
});
function sixDigitHex(hex1) {
    return hex1.length === 4 ? [
        "#",
        hex1.substring(1, 2),
        hex1.substring(1, 2),
        hex1.substring(2, 3),
        hex1.substring(2, 3),
        hex1.substring(3, 4),
        hex1.substring(3, 4)
    ].join("") : hex1;
}
function componentHex(component) {
    const integer = Math.round(component);
    const bounded = Math.max(0, Math.min(255, integer));
    const hex2 = bounded.toString(16);
    return hex2.length === 1 ? "0" + hex2 : hex2;
}
function is(object, space) {
    for(let i10 = space.length; i10--;){
        if (object[space[i10]] == null) return false;
    }
    return true;
}
function getParameters(a, b) {
    const params = is(a, "rgb") ? {
        _a: a.r,
        _b: a.g,
        _c: a.b,
        _d: 0,
        space: "rgb"
    } : is(a, "xyz") ? {
        _a: a.x,
        _b: a.y,
        _c: a.z,
        _d: 0,
        space: "xyz"
    } : is(a, "hsl") ? {
        _a: a.h,
        _b: a.s,
        _c: a.l,
        _d: 0,
        space: "hsl"
    } : is(a, "lab") ? {
        _a: a.l,
        _b: a.a,
        _c: a.b,
        _d: 0,
        space: "lab"
    } : is(a, "lch") ? {
        _a: a.l,
        _b: a.c,
        _c: a.h,
        _d: 0,
        space: "lch"
    } : is(a, "cmyk") ? {
        _a: a.c,
        _b: a.m,
        _c: a.y,
        _d: a.k,
        space: "cmyk"
    } : {
        _a: 0,
        _b: 0,
        _c: 0,
        space: "rgb"
    };
    params.space = b || params.space;
    return params;
}
function cieSpace(space) {
    if (space === "lab" || space === "xyz" || space === "lch") return true;
    else return false;
}
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
class Color {
    constructor(...inputs){
        this.init(...inputs);
    }
    static isColor(color) {
        return color && (color instanceof Color || this.isRgb(color) || this.test(color));
    }
    static isRgb(color) {
        return color && typeof color.r === "number" && typeof color.g === "number" && typeof color.b === "number";
    }
    /*
  Generating random colors
  */ static random(mode = "vibrant", t, u) {
        // Get the math modules
        const { random , round , sin , PI: pi  } = Math; // Run the correct generator
        if (mode === "vibrant") {
            const l = 24 * random() + 57;
            const c = 38 * random() + 45;
            const h = 360 * random();
            const color = new Color(l, c, h, "lch");
            return color;
        } else if (mode === "sine") {
            t = t == null ? random() : t;
            const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
            const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
            const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
            const color = new Color(r, g, b);
            return color;
        } else if (mode === "pastel") {
            const l = 8 * random() + 86;
            const c = 17 * random() + 9;
            const h = 360 * random();
            const color = new Color(l, c, h, "lch");
            return color;
        } else if (mode === "dark") {
            const l = 10 + 10 * random();
            const c = 50 * random() + 86;
            const h = 360 * random();
            const color = new Color(l, c, h, "lch");
            return color;
        } else if (mode === "rgb") {
            const r = 255 * random();
            const g = 255 * random();
            const b = 255 * random();
            const color = new Color(r, g, b);
            return color;
        } else if (mode === "lab") {
            const l = 100 * random();
            const a = 256 * random() - 128;
            const b = 256 * random() - 128;
            const color = new Color(l, a, b, "lab");
            return color;
        } else if (mode === "grey") {
            const grey = 255 * random();
            const color = new Color(grey, grey, grey);
            return color;
        } else throw new Error("Unsupported random color mode");
    }
    static test(color) {
        return typeof color === "string" && (isHex.test(color) || isRgb.test(color));
    }
    cmyk() {
        // Get the rgb values for the current color
        const { _a , _b , _c  } = this.rgb();
        const [r, g, b] = [
            _a,
            _b,
            _c
        ].map((v)=>v / 255); // Get the cmyk values in an unbounded format
        const k = Math.min(1 - r, 1 - g, 1 - b);
        if (k === 1) // Catch the black case
        return new Color(0, 0, 0, 1, "cmyk");
        const c = (1 - r - k) / (1 - k);
        const m = (1 - g - k) / (1 - k);
        const y2 = (1 - b - k) / (1 - k); // Construct the new color
        const color = new Color(c, m, y2, k, "cmyk");
        return color;
    }
    hsl() {
        // Get the rgb values
        const { _a , _b , _c  } = this.rgb();
        const [r, g, b] = [
            _a,
            _b,
            _c
        ].map((v)=>v / 255); // Find the maximum and minimum values to get the lightness
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2; // If the r, g, v values are identical then we are grey
        const isGrey = max === min; // Calculate the hue and saturation
        const delta = max - min;
        const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color
        const color = new Color(360 * h, 100 * s, 100 * l, "hsl");
        return color;
    }
    init(a = 0, b = 0, c = 0, d = 0, space = "rgb") {
        // This catches the case when a falsy value is passed like ''
        a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space
        if (this.space) for(const component in this.space)delete this[this.space[component]];
        if (typeof a === "number") {
            // Allow for the case that we don't need d...
            space = typeof d === "string" ? d : space;
            d = typeof d === "string" ? 0 : d; // Assign the values straight to the color
            Object.assign(this, {
                _a: a,
                _b: b,
                _c: c,
                _d: d,
                space
            }); // If the user gave us an array, make the color from it
        } else if (a instanceof Array) {
            this.space = b || (typeof a[3] === "string" ? a[3] : a[4]) || "rgb";
            Object.assign(this, {
                _a: a[0],
                _b: a[1],
                _c: a[2],
                _d: a[3] || 0
            });
        } else if (a instanceof Object) {
            // Set the object up and assign its values directly
            const values = getParameters(a, b);
            Object.assign(this, values);
        } else if (typeof a === "string") {
            if (isRgb.test(a)) {
                const noWhitespace = a.replace(whitespace, "");
                const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map((v)=>parseInt(v));
                Object.assign(this, {
                    _a,
                    _b,
                    _c,
                    _d: 0,
                    space: "rgb"
                });
            } else if (isHex.test(a)) {
                const hexParse = (v)=>parseInt(v, 16);
                const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
                Object.assign(this, {
                    _a,
                    _b,
                    _c,
                    _d: 0,
                    space: "rgb"
                });
            } else throw Error("Unsupported string format, can't construct Color");
        } // Now add the components as a convenience
        const { _a , _b , _c , _d  } = this;
        const components = this.space === "rgb" ? {
            r: _a,
            g: _b,
            b: _c
        } : this.space === "xyz" ? {
            x: _a,
            y: _b,
            z: _c
        } : this.space === "hsl" ? {
            h: _a,
            s: _b,
            l: _c
        } : this.space === "lab" ? {
            l: _a,
            a: _b,
            b: _c
        } : this.space === "lch" ? {
            l: _a,
            c: _b,
            h: _c
        } : this.space === "cmyk" ? {
            c: _a,
            m: _b,
            y: _c,
            k: _d
        } : {};
        Object.assign(this, components);
    }
    lab() {
        // Get the xyz color
        const { x: x2 , y: y3 , z  } = this.xyz(); // Get the lab components
        const l = 116 * y3 - 16;
        const a = 500 * (x2 - y3);
        const b = 200 * (y3 - z); // Construct and return a new color
        const color = new Color(l, a, b, "lab");
        return color;
    }
    lch() {
        // Get the lab color directly
        const { l , a , b  } = this.lab(); // Get the chromaticity and the hue using polar coordinates
        const c = Math.sqrt(a ** 2 + b ** 2);
        let h = 180 * Math.atan2(b, a) / Math.PI;
        if (h < 0) {
            h *= -1;
            h = 360 - h;
        } // Make a new color and return it
        const color = new Color(l, c, h, "lch");
        return color;
    }
    /*
  Conversion Methods
  */ rgb() {
        if (this.space === "rgb") return this;
        else if (cieSpace(this.space)) {
            // Convert to the xyz color space
            let { x: x3 , y: y4 , z  } = this;
            if (this.space === "lab" || this.space === "lch") {
                // Get the values in the lab space
                let { l , a , b  } = this;
                if (this.space === "lch") {
                    const { c , h  } = this;
                    const dToR = Math.PI / 180;
                    a = c * Math.cos(dToR * h);
                    b = c * Math.sin(dToR * h);
                } // Undo the nonlinear function
                const yL = (l + 16) / 116;
                const xL = a / 500 + yL;
                const zL = yL - b / 200; // Get the xyz values
                const ct = 16 / 116;
                const mx = 0.008856;
                const nm = 7.787;
                x3 = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
                y4 = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
                z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
            } // Convert xyz to unbounded rgb values
            const rU = x3 * 3.2406 + y4 * -1.5372 + z * -0.4986;
            const gU = x3 * -0.9689 + y4 * 1.8758 + z * 0.0415;
            const bU = x3 * 0.0557 + y4 * -0.204 + z * 1.0570; // Convert the values to true rgb values
            const pow = Math.pow;
            const bd = 0.0031308;
            const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
            const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
            const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color
            const color = new Color(255 * r, 255 * g, 255 * b);
            return color;
        } else if (this.space === "hsl") {
            // https://bgrins.github.io/TinyColor/docs/tinycolor.html
            // Get the current hsl values
            let { h , s , l  } = this;
            h /= 360;
            s /= 100;
            l /= 100; // If we are grey, then just make the color directly
            if (s === 0) {
                l *= 255;
                const color = new Color(l, l, l);
                return color;
            } // TODO I have no idea what this does :D If you figure it out, tell me!
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q; // Get the rgb values
            const r = 255 * hueToRgb(p, q, h + 1 / 3);
            const g = 255 * hueToRgb(p, q, h);
            const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color
            const color = new Color(r, g, b);
            return color;
        } else if (this.space === "cmyk") {
            // https://gist.github.com/felipesabino/5066336
            // Get the normalised cmyk values
            const { c , m , y: y5 , k  } = this; // Get the rgb values
            const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
            const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
            const b = 255 * (1 - Math.min(1, y5 * (1 - k) + k)); // Form the color and return it
            const color = new Color(r, g, b);
            return color;
        } else return this;
    }
    toArray() {
        const { _a , _b , _c , _d , space  } = this;
        return [
            _a,
            _b,
            _c,
            _d,
            space
        ];
    }
    toHex() {
        const [r, g, b] = this._clamped().map(componentHex);
        return `#${r}${g}${b}`;
    }
    toRgb() {
        const [rV, gV, bV] = this._clamped();
        const string = `rgb(${rV},${gV},${bV})`;
        return string;
    }
    toString() {
        return this.toHex();
    }
    xyz() {
        // Normalise the red, green and blue values
        const { _a: r255 , _b: g255 , _c: b255  } = this.rgb();
        const [r, g, b] = [
            r255,
            g255,
            b255
        ].map((v)=>v / 255); // Convert to the lab rgb space
        const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values
        const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
        const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
        const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding
        const x4 = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
        const y6 = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
        const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color
        const color = new Color(x4, y6, z, "xyz");
        return color;
    }
    /*
  Input and Output methods
  */ _clamped() {
        const { _a , _b , _c  } = this.rgb();
        const { max , min , round  } = Math;
        const format = (v)=>max(0, min(round(v), 255));
        return [
            _a,
            _b,
            _c
        ].map(format);
    }
}
class Point {
    // Initialize
    constructor(...args){
        this.init(...args);
    }
    clone() {
        return new Point(this);
    }
    init(x5, y7) {
        const base = {
            x: 0,
            y: 0
        }; // ensure source as object
        const source = Array.isArray(x5) ? {
            x: x5[0],
            y: x5[1]
        } : typeof x5 === "object" ? {
            x: x5.x,
            y: x5.y
        } : {
            x: x5,
            y: y7
        }; // merge source
        this.x = source.x == null ? base.x : source.x;
        this.y = source.y == null ? base.y : source.y;
        return this;
    }
    toArray() {
        return [
            this.x,
            this.y
        ];
    }
    transform(m) {
        return this.clone().transformO(m);
    }
    transformO(m) {
        if (!Matrix.isMatrixLike(m)) m = new Matrix(m);
        const { x: x6 , y: y8  } = this; // Perform the matrix multiplication
        this.x = m.a * x6 + m.c * y8 + m.e;
        this.y = m.b * x6 + m.d * y8 + m.f;
        return this;
    }
}
function point(x7, y9) {
    return new Point(x7, y9).transform(this.screenCTM().inverse());
}
function closeEnough(a, b, threshold) {
    return Math.abs(b - a) < (threshold || 1e-6);
}
class Matrix {
    constructor(...args){
        this.init(...args);
    }
    static formatTransforms(o) {
        // Get all of the parameters required to form the matrix
        const flipBoth = o.flip === "both" || o.flip === true;
        const flipX = o.flip && (flipBoth || o.flip === "x") ? -1 : 1;
        const flipY = o.flip && (flipBoth || o.flip === "y") ? -1 : 1;
        const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
        const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
        const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
        const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
        const shear = o.shear || 0;
        const theta = o.rotate || o.theta || 0;
        const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
        const ox = origin.x;
        const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. Thats why NaN
        const position1 = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
        const px = position1.x;
        const py = position1.y;
        const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
        const tx = translate.x;
        const ty = translate.y;
        const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
        const rx1 = relative.x;
        const ry1 = relative.y; // Populate all of the values
        return {
            scaleX,
            scaleY,
            skewX,
            skewY,
            shear,
            theta,
            rx: rx1,
            ry: ry1,
            tx,
            ty,
            ox,
            oy,
            px,
            py
        };
    }
    static fromArray(a) {
        return {
            a: a[0],
            b: a[1],
            c: a[2],
            d: a[3],
            e: a[4],
            f: a[5]
        };
    }
    static isMatrixLike(o) {
        return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
    }
    static matrixMultiply(l, r, o) {
        // Work out the product directly
        const a = l.a * r.a + l.c * r.b;
        const b = l.b * r.a + l.d * r.b;
        const c = l.a * r.c + l.c * r.d;
        const d = l.b * r.c + l.d * r.d;
        const e = l.e + l.a * r.e + l.c * r.f;
        const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same
        o.a = a;
        o.b = b;
        o.c = c;
        o.d = d;
        o.e = e;
        o.f = f;
        return o;
    }
    around(cx1, cy1, matrix) {
        return this.clone().aroundO(cx1, cy1, matrix);
    }
    aroundO(cx2, cy2, matrix) {
        const dx1 = cx2 || 0;
        const dy1 = cy2 || 0;
        return this.translateO(-dx1, -dy1).lmultiplyO(matrix).translateO(dx1, dy1);
    }
    clone() {
        return new Matrix(this);
    }
    decompose(cx3 = 0, cy3 = 0) {
        // Get the parameters from the matrix
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        const e = this.e;
        const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise
        const determinant = a * d - b * c;
        const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
        // and the rotation of the resulting matrix
        const sx = ccw * Math.sqrt(a * a + b * b);
        const thetaRad = Math.atan2(ccw * b, ccw * a);
        const theta = 180 / Math.PI * thetaRad;
        const ct = Math.cos(thetaRad);
        const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
        // two affine parameters directly from these parameters
        const lam = (a * c + b * d) / determinant;
        const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations
        const tx = e - cx3 + cx3 * ct * sx + cy3 * (lam * ct * sx - st * sy);
        const ty = f - cy3 + cx3 * st * sx + cy3 * (lam * st * sx + ct * sy); // Construct the decomposition and return it
        return {
            // Return the affine parameters
            scaleX: sx,
            scaleY: sy,
            shear: lam,
            rotate: theta,
            translateX: tx,
            translateY: ty,
            originX: cx3,
            originY: cy3,
            // Return the matrix parameters
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
        };
    }
    equals(other) {
        if (other === this) return true;
        const comp = new Matrix(other);
        return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
    }
    flip(axis, around) {
        return this.clone().flipO(axis, around);
    }
    flipO(axis, around) {
        return axis === "x" ? this.scaleO(-1, 1, around, 0) : axis === "y" ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
    }
    init(source) {
        const base = Matrix.fromArray([
            1,
            0,
            0,
            1,
            0,
            0
        ]); // ensure source as object
        source = source instanceof Element ? source.matrixify() : typeof source === "string" ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === "object" && Matrix.isMatrixLike(source) ? source : typeof source === "object" ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix
        this.a = source.a != null ? source.a : base.a;
        this.b = source.b != null ? source.b : base.b;
        this.c = source.c != null ? source.c : base.c;
        this.d = source.d != null ? source.d : base.d;
        this.e = source.e != null ? source.e : base.e;
        this.f = source.f != null ? source.f : base.f;
        return this;
    }
    inverse() {
        return this.clone().inverseO();
    }
    inverseO() {
        // Get the current parameters out of the matrix
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        const e = this.e;
        const f = this.f; // Invert the 2x2 matrix in the top left
        const det = a * d - b * c;
        if (!det) throw new Error("Cannot invert " + this); // Calculate the top 2x2 matrix
        const na = d / det;
        const nb = -b / det;
        const nc = -c / det;
        const nd = a / det; // Apply the inverted matrix to the top right
        const ne = -(na * e + nc * f);
        const nf = -(nb * e + nd * f); // Construct the inverted matrix
        this.a = na;
        this.b = nb;
        this.c = nc;
        this.d = nd;
        this.e = ne;
        this.f = nf;
        return this;
    }
    lmultiply(matrix) {
        return this.clone().lmultiplyO(matrix);
    }
    lmultiplyO(matrix) {
        const r = this;
        const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
        return Matrix.matrixMultiply(l, r, this);
    }
    multiply(matrix) {
        return this.clone().multiplyO(matrix);
    }
    multiplyO(matrix) {
        // Get the matrices
        const l = this;
        const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
        return Matrix.matrixMultiply(l, r, this);
    }
    rotate(r, cx4, cy4) {
        return this.clone().rotateO(r, cx4, cy4);
    }
    rotateO(r, cx5 = 0, cy5 = 0) {
        // Convert degrees to radians
        r = radians(r);
        const cos = Math.cos(r);
        const sin = Math.sin(r);
        const { a , b , c , d , e , f  } = this;
        this.a = a * cos - b * sin;
        this.b = b * cos + a * sin;
        this.c = c * cos - d * sin;
        this.d = d * cos + c * sin;
        this.e = e * cos - f * sin + cy5 * sin - cx5 * cos + cx5;
        this.f = f * cos + e * sin - cx5 * sin - cy5 * cos + cy5;
        return this;
    }
    scale(x, y, cx, cy) {
        return this.clone().scaleO(...arguments);
    }
    scaleO(x8, y10 = x8, cx6 = 0, cy6 = 0) {
        // Support uniform scaling
        if (arguments.length === 3) {
            cy6 = cx6;
            cx6 = y10;
            y10 = x8;
        }
        const { a , b , c , d , e , f  } = this;
        this.a = a * x8;
        this.b = b * y10;
        this.c = c * x8;
        this.d = d * y10;
        this.e = e * x8 - cx6 * x8 + cx6;
        this.f = f * y10 - cy6 * y10 + cy6;
        return this;
    }
    shear(a, cx7, cy7) {
        return this.clone().shearO(a, cx7, cy7);
    }
    shearO(lx, cx = 0, cy8 = 0) {
        const { a , b , c , d , e , f  } = this;
        this.a = a + b * lx;
        this.c = c + d * lx;
        this.e = e + f * lx - cy8 * lx;
        return this;
    }
    skew(x, y, cx, cy) {
        return this.clone().skewO(...arguments);
    }
    skewO(x9, y11 = x9, cx8 = 0, cy9 = 0) {
        // support uniformal skew
        if (arguments.length === 3) {
            cy9 = cx8;
            cx8 = y11;
            y11 = x9;
        } // Convert degrees to radians
        x9 = radians(x9);
        y11 = radians(y11);
        const lx = Math.tan(x9);
        const ly = Math.tan(y11);
        const { a , b , c , d , e , f  } = this;
        this.a = a + b * lx;
        this.b = b + a * ly;
        this.c = c + d * lx;
        this.d = d + c * ly;
        this.e = e + f * lx - cy9 * lx;
        this.f = f + e * ly - cx8 * ly;
        return this;
    }
    skewX(x10, cx9, cy10) {
        return this.skew(x10, 0, cx9, cy10);
    }
    skewY(y12, cx10, cy11) {
        return this.skew(0, y12, cx10, cy11);
    }
    toArray() {
        return [
            this.a,
            this.b,
            this.c,
            this.d,
            this.e,
            this.f
        ];
    }
    toString() {
        return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
    }
    transform(o) {
        // Check if o is a matrix and then left multiply it directly
        if (Matrix.isMatrixLike(o)) {
            const matrix = new Matrix(o);
            return matrix.multiplyO(this);
        } // Get the proposed transformations and the current transformations
        const t = Matrix.formatTransforms(o);
        const current = this;
        const { x: ox , y: oy  } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix
        const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there
        if (isFinite(t.px) || isFinite(t.py)) {
            const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
            // Doesnt work because t.px is also 0 if it wasnt passed
            const dx2 = isFinite(t.px) ? t.px - origin.x : 0;
            const dy2 = isFinite(t.py) ? t.py - origin.y : 0;
            transformer.translateO(dx2, dy2);
        } // Translate now after positioning
        transformer.translateO(t.tx, t.ty);
        return transformer;
    }
    translate(x11, y13) {
        return this.clone().translateO(x11, y13);
    }
    translateO(x12, y14) {
        this.e += x12 || 0;
        this.f += y14 || 0;
        return this;
    }
    valueOf() {
        return {
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
        };
    }
}
function ctm() {
    return new Matrix(this.node.getCTM());
}
function screenCTM() {
    /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */ if (typeof this.isRoot === "function" && !this.isRoot()) {
        const rect = this.rect(1, 1);
        const m = rect.node.getScreenCTM();
        rect.remove();
        return new Matrix(m);
    }
    return new Matrix(this.node.getScreenCTM());
}
register(Matrix, "Matrix");
function parser() {
    // Reuse cached element if possible
    if (!parser.nodes) {
        const svg1 = makeInstance().size(2, 0);
        svg1.node.style.cssText = [
            "opacity: 0",
            "position: absolute",
            "left: -100%",
            "top: -100%",
            "overflow: hidden"
        ].join(";");
        svg1.attr("focusable", "false");
        svg1.attr("aria-hidden", "true");
        const path = svg1.path().node;
        parser.nodes = {
            svg: svg1,
            path
        };
    }
    if (!parser.nodes.svg.node.parentNode) {
        const b = globals.document.body || globals.document.documentElement;
        parser.nodes.svg.addTo(b);
    }
    return parser.nodes;
}
function isNulledBox(box) {
    return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node1) {
    return node1 === globals.document || (globals.document.documentElement.contains || function(node) {
        // This is IE - it does not support contains() for top-level SVGs
        while(node.parentNode)node = node.parentNode;
        return node === globals.document;
    }).call(globals.document.documentElement, node1);
}
class Box {
    constructor(...args){
        this.init(...args);
    }
    addOffset() {
        // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
        this.x += globals.window.pageXOffset;
        this.y += globals.window.pageYOffset;
        return new Box(this);
    }
    init(source) {
        const base = [
            0,
            0,
            0,
            0
        ];
        source = typeof source === "string" ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === "object" ? [
            source.left != null ? source.left : source.x,
            source.top != null ? source.top : source.y,
            source.width,
            source.height
        ] : arguments.length === 4 ? [].slice.call(arguments) : base;
        this.x = source[0] || 0;
        this.y = source[1] || 0;
        this.width = this.w = source[2] || 0;
        this.height = this.h = source[3] || 0; // Add more bounding box properties
        this.x2 = this.x + this.w;
        this.y2 = this.y + this.h;
        this.cx = this.x + this.w / 2;
        this.cy = this.y + this.h / 2;
        return this;
    }
    isNulled() {
        return isNulledBox(this);
    }
    merge(box) {
        const x13 = Math.min(this.x, box.x);
        const y15 = Math.min(this.y, box.y);
        const width3 = Math.max(this.x + this.width, box.x + box.width) - x13;
        const height3 = Math.max(this.y + this.height, box.y + box.height) - y15;
        return new Box(x13, y15, width3, height3);
    }
    toArray() {
        return [
            this.x,
            this.y,
            this.width,
            this.height
        ];
    }
    toString() {
        return this.x + " " + this.y + " " + this.width + " " + this.height;
    }
    transform(m) {
        if (!(m instanceof Matrix)) m = new Matrix(m);
        let xMin = Infinity;
        let xMax = -Infinity;
        let yMin = Infinity;
        let yMax = -Infinity;
        const pts = [
            new Point(this.x, this.y),
            new Point(this.x2, this.y),
            new Point(this.x, this.y2),
            new Point(this.x2, this.y2)
        ];
        pts.forEach(function(p) {
            p = p.transform(m);
            xMin = Math.min(xMin, p.x);
            xMax = Math.max(xMax, p.x);
            yMin = Math.min(yMin, p.y);
            yMax = Math.max(yMax, p.y);
        });
        return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
    }
}
function getBox(el, getBBoxFn, retry) {
    let box;
    try {
        // Try to get the box with the provided function
        box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
        // by throwing an error here...
        if (isNulledBox(box) && !domContains(el.node)) throw new Error("Element not in the dom");
    } catch (e) {
        // ... and calling the retry handler here
        box = retry(el);
    }
    return box;
}
function bbox() {
    // Function to get bbox is getBBox()
    const getBBox = (node)=>node.getBBox(); // Take all measures so that a stupid browser renders the element
    // so we can get the bbox from it when we try again
    const retry = (el)=>{
        try {
            const clone = el.clone().addTo(parser().svg).show();
            const box = clone.node.getBBox();
            clone.remove();
            return box;
        } catch (e) {
            // We give up...
            throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
        }
    };
    const box1 = getBox(this, getBBox, retry);
    const bbox1 = new Box(box1);
    return bbox1;
}
function rbox(el1) {
    const getRBox = (node)=>node.getBoundingClientRect();
    const retry = (el)=>{
        // There is no point in trying tricks here because if we insert the element into the dom ourselves
        // it obviously will be at the wrong position
        throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
    };
    const box = getBox(this, getRBox, retry);
    const rbox1 = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element
    if (el1) return rbox1.transform(el1.screenCTM().inverseO());
     // Else we want it in absolute screen coordinates
    // Therefore we need to add the scrollOffset
    return rbox1.addOffset();
} // Checks whether the given point is inside the bounding box
function inside(x14, y16) {
    const box = this.bbox();
    return x14 > box.x && y16 > box.y && x14 < box.x + box.width && y16 < box.y + box.height;
}
registerMethods({
    viewbox: {
        viewbox (x15, y17, width4, height4) {
            // act as getter
            if (x15 == null) return new Box(this.attr("viewBox")); // act as setter
            return this.attr("viewBox", new Box(x15, y17, width4, height4));
        },
        zoom (level, point1) {
            // Its best to rely on the attributes here and here is why:
            // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
            // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
            //                        that means, their clientRect is always as big as the content.
            //                        Furthermore this size is incorrect if the element is further transformed by its parents
            // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
            // getBBox: returns the bounding box of its content - that doesnt help!
            let { width: width5 , height: height5  } = this.attr([
                "width",
                "height"
            ]); // Width and height is a string when a number with a unit is present which we can't use
            // So we try clientXYZ
            if (!width5 && !height5 || typeof width5 === "string" || typeof height5 === "string") {
                width5 = this.node.clientWidth;
                height5 = this.node.clientHeight;
            } // Giving up...
            if (!width5 || !height5) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
            const v = this.viewbox();
            const zoomX = width5 / v.width;
            const zoomY = height5 / v.height;
            const zoom = Math.min(zoomX, zoomY);
            if (level == null) return zoom;
            let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
            // The * 100 is a bit of wiggle room for the matrix transformation
            if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
            point1 = point1 || new Point(width5 / 2 / zoomX + v.x, height5 / 2 / zoomY + v.y);
            const box = new Box(v).transform(new Matrix({
                scale: zoomAmount,
                origin: point1
            }));
            return this.viewbox(box);
        }
    }
});
register(Box, "Box");
class List extends Array {
    constructor(arr = [], ...args){
        super(arr, ...args);
        if (typeof arr === "number") return this;
        this.length = 0;
        this.push(...arr);
    }
}
extend([
    List
], {
    each (fnOrMethodName, ...args) {
        if (typeof fnOrMethodName === "function") return this.map((el, i11, arr)=>{
            return fnOrMethodName.call(el, el, i11, arr);
        });
        else return this.map((el)=>{
            return el[fnOrMethodName](...args);
        });
    },
    toArray () {
        return Array.prototype.concat.apply([], this);
    }
});
const reserved = [
    "toArray",
    "constructor",
    "each"
];
List.extend = function(methods2) {
    methods2 = methods2.reduce((obj, name)=>{
        // Don't overwrite own methods
        if (reserved.includes(name)) return obj; // Don't add private methods
        if (name[0] === "_") return obj; // Relay every call to each()
        obj[name] = function(...attrs1) {
            return this.each(name, ...attrs1);
        };
        return obj;
    }, {});
    extend([
        List
    ], methods2);
};
function baseFind(query, parent) {
    return new List(map((parent || globals.document).querySelectorAll(query), function(node) {
        return adopt(node);
    }));
} // Scoped find method
function find(query) {
    return baseFind(query, this.node);
}
function findOne(query) {
    return adopt(this.node.querySelector(query));
}
let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
    let n = instance.getEventHolder(); // We dont want to save events in global space
    if (n === globals.window) n = windowEvents;
    if (!n.events) n.events = {};
    return n.events;
}
function getEventTarget(instance) {
    return instance.getEventTarget();
}
function clearEvents(instance) {
    let n = instance.getEventHolder();
    if (n === globals.window) n = windowEvents;
    if (n.events) n.events = {};
} // Add event binder in the SVG namespace
function on(node, events, listener, binding, options) {
    const l = listener.bind(binding || node);
    const instance = makeInstance(node);
    const bag = getEvents(instance);
    const n = getEventTarget(instance); // events can be an array of events or a string of events
    events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener
    if (!listener._svgjsListenerId) listener._svgjsListenerId = ++listenerId;
    events.forEach(function(event) {
        const ev = event.split(".")[0];
        const ns = event.split(".")[1] || "*"; // ensure valid object
        bag[ev] = bag[ev] || {};
        bag[ev][ns] = bag[ev][ns] || {}; // reference listener
        bag[ev][ns][listener._svgjsListenerId] = l; // add listener
        n.addEventListener(ev, l, options || false);
    });
} // Add event unbinder in the SVG namespace
function off(node, events, listener, options) {
    const instance = makeInstance(node);
    const bag = getEvents(instance);
    const n = getEventTarget(instance); // listener can be a function or a number
    if (typeof listener === "function") {
        listener = listener._svgjsListenerId;
        if (!listener) return;
    } // events can be an array of events or a string or undefined
    events = Array.isArray(events) ? events : (events || "").split(delimiter);
    events.forEach(function(event) {
        const ev = event && event.split(".")[0];
        const ns = event && event.split(".")[1];
        let namespace, l;
        if (listener) // remove listener reference
        {
            if (bag[ev] && bag[ev][ns || "*"]) {
                // removeListener
                n.removeEventListener(ev, bag[ev][ns || "*"][listener], options || false);
                delete bag[ev][ns || "*"][listener];
            }
        } else if (ev && ns) // remove all listeners for a namespaced event
        {
            if (bag[ev] && bag[ev][ns]) {
                for(l in bag[ev][ns])off(n, [
                    ev,
                    ns
                ].join("."), l);
                delete bag[ev][ns];
            }
        } else if (ns) // remove all listeners for a specific namespace
        for(event in bag){
            for(namespace in bag[event])if (ns === namespace) off(n, [
                event,
                ns
            ].join("."));
        }
        else if (ev) // remove all listeners for the event
        {
            if (bag[ev]) {
                for(namespace in bag[ev])off(n, [
                    ev,
                    namespace
                ].join("."));
                delete bag[ev];
            }
        } else {
            // remove all listeners on a given node
            for(event in bag)off(n, event);
            clearEvents(instance);
        }
    });
}
function dispatch(node, event, data2, options) {
    const n = getEventTarget(node); // Dispatch event
    if (event instanceof globals.window.Event) n.dispatchEvent(event);
    else {
        event = new globals.window.CustomEvent(event, {
            detail: data2,
            cancelable: true,
            ...options
        });
        n.dispatchEvent(event);
    }
    return event;
}
class EventTarget extends Base {
    addEventListener() {}
    dispatch(event, data3, options) {
        return dispatch(this, event, data3, options);
    }
    dispatchEvent(event) {
        const bag = this.getEventHolder().events;
        if (!bag) return true;
        const events = bag[event.type];
        for(const i12 in events)for(const j in events[i12])events[i12][j](event);
        return !event.defaultPrevented;
    }
    fire(event, data4, options) {
        this.dispatch(event, data4, options);
        return this;
    }
    getEventHolder() {
        return this;
    }
    getEventTarget() {
        return this;
    }
    off(event, listener, options) {
        off(this, event, listener, options);
        return this;
    }
    on(event, listener, binding, options) {
        on(this, event, listener, binding, options);
        return this;
    }
    removeEventListener() {}
}
register(EventTarget, "EventTarget");
function noop() {} // Default animation values
const timeline = {
    duration: 400,
    ease: ">",
    delay: 0
}; // Default attribute values
const attrs = {
    // fill and stroke
    "fill-opacity": 1,
    "stroke-opacity": 1,
    "stroke-width": 0,
    "stroke-linejoin": "miter",
    "stroke-linecap": "butt",
    fill: "#000000",
    stroke: "#000000",
    opacity: 1,
    // position
    x: 0,
    y: 0,
    cx: 0,
    cy: 0,
    // size
    width: 0,
    height: 0,
    // radius
    r: 0,
    rx: 0,
    ry: 0,
    // gradient
    offset: 0,
    "stop-opacity": 1,
    "stop-color": "#000000",
    // text
    "text-anchor": "start"
};
var defaults = {
    __proto__: null,
    noop: noop,
    timeline: timeline,
    attrs: attrs
};
class SVGArray extends Array {
    constructor(...args){
        super(...args);
        this.init(...args);
    }
    clone() {
        return new this.constructor(this);
    }
    init(arr) {
        // This catches the case, that native map tries to create an array with new Array(1)
        if (typeof arr === "number") return this;
        this.length = 0;
        this.push(...this.parse(arr));
        return this;
    }
    parse(array4 = []) {
        // If already is an array, no need to parse it
        if (array4 instanceof Array) return array4;
        return array4.trim().split(delimiter).map(parseFloat);
    }
    toArray() {
        return Array.prototype.concat.apply([], this);
    }
    toSet() {
        return new Set(this);
    }
    toString() {
        return this.join(" ");
    }
    valueOf() {
        const ret = [];
        ret.push(...this);
        return ret;
    }
}
class SVGNumber {
    // Initialize
    constructor(...args){
        this.init(...args);
    }
    convert(unit) {
        return new SVGNumber(this.value, unit);
    }
    divide(number) {
        number = new SVGNumber(number);
        return new SVGNumber(this / number, this.unit || number.unit);
    }
    init(value, unit) {
        unit = Array.isArray(value) ? value[1] : unit;
        value = Array.isArray(value) ? value[0] : value; // initialize defaults
        this.value = 0;
        this.unit = unit || ""; // parse value
        if (typeof value === "number") // ensure a valid numeric value
        this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -340000000000000000000000000000000000000 : 340000000000000000000000000000000000000 : value;
        else if (typeof value === "string") {
            unit = value.match(numberAndUnit);
            if (unit) {
                // make value numeric
                this.value = parseFloat(unit[1]); // normalize
                if (unit[5] === "%") this.value /= 100;
                else if (unit[5] === "s") this.value *= 1000;
                 // store unit
                this.unit = unit[5];
            }
        } else if (value instanceof SVGNumber) {
            this.value = value.valueOf();
            this.unit = value.unit;
        }
        return this;
    }
    minus(number) {
        number = new SVGNumber(number);
        return new SVGNumber(this - number, this.unit || number.unit);
    }
    plus(number) {
        number = new SVGNumber(number);
        return new SVGNumber(this + number, this.unit || number.unit);
    }
    times(number) {
        number = new SVGNumber(number);
        return new SVGNumber(this * number, this.unit || number.unit);
    }
    toArray() {
        return [
            this.value,
            this.unit
        ];
    }
    toJSON() {
        return this.toString();
    }
    toString() {
        return (this.unit === "%" ? ~~(this.value * 1e8) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
    }
    valueOf() {
        return this.value;
    }
}
const hooks = [];
function registerAttrHook(fn) {
    hooks.push(fn);
} // Set svg element attribute
function attr(attr2, val, ns) {
    // act as full getter
    if (attr2 == null) {
        // get an object of attributes
        attr2 = {};
        val = this.node.attributes;
        for (const node of val)attr2[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
        return attr2;
    } else if (attr2 instanceof Array) // loop through array and get all values
    return attr2.reduce((last, curr)=>{
        last[curr] = this.attr(curr);
        return last;
    }, {});
    else if (typeof attr2 === "object" && attr2.constructor === Object) // apply every attribute individually if an object is passed
    for(val in attr2)this.attr(val, attr2[val]);
    else if (val === null) // remove value
    this.node.removeAttribute(attr2);
    else if (val == null) {
        // act as a getter if the first and only argument is not an object
        val = this.node.getAttribute(attr2);
        return val == null ? attrs[attr2] : isNumber.test(val) ? parseFloat(val) : val;
    } else {
        // Loop through hooks and execute them to convert value
        val = hooks.reduce((_val, hook)=>{
            return hook(attr2, _val, this);
        }, val); // ensure correct numeric values (also accepts NaN and Infinity)
        if (typeof val === "number") val = new SVGNumber(val);
        else if (Color.isColor(val)) // ensure full hex color
        val = new Color(val);
        else if (val.constructor === Array) // Check for plain arrays and parse array values
        val = new SVGArray(val);
         // if the passed attribute is leading...
        if (attr2 === "leading") // ... call the leading method instead
        {
            if (this.leading) this.leading(val);
        } else // set given attribute on node
        typeof ns === "string" ? this.node.setAttributeNS(ns, attr2, val.toString()) : this.node.setAttribute(attr2, val.toString());
         // rebuild if required
        if (this.rebuild && (attr2 === "font-size" || attr2 === "x")) this.rebuild();
    }
    return this;
}
class Dom extends EventTarget {
    constructor(node, attrs2){
        super();
        this.node = node;
        this.type = node.nodeName;
        if (attrs2 && node !== attrs2) this.attr(attrs2);
    }
    add(element, i13) {
        element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces
        if (element.removeNamespace && this.node instanceof globals.window.SVGElement) element.removeNamespace();
        if (i13 == null) this.node.appendChild(element.node);
        else if (element.node !== this.node.childNodes[i13]) this.node.insertBefore(element.node, this.node.childNodes[i13]);
        return this;
    }
    addTo(parent, i14) {
        return makeInstance(parent).put(this, i14);
    }
    children() {
        return new List(map(this.node.children, function(node) {
            return adopt(node);
        }));
    }
    clear() {
        // remove children
        while(this.node.hasChildNodes())this.node.removeChild(this.node.lastChild);
        return this;
    }
    clone(deep = true) {
        // write dom data to the dom so the clone can pickup the data
        this.writeDataToDom(); // clone element and assign new id
        return new this.constructor(assignNewId(this.node.cloneNode(deep)));
    }
    each(block, deep) {
        const children = this.children();
        let i15, il3;
        for(i15 = 0, il3 = children.length; i15 < il3; i15++){
            block.apply(children[i15], [
                i15,
                children
            ]);
            if (deep) children[i15].each(block, deep);
        }
        return this;
    }
    element(nodeName, attrs3) {
        return this.put(new Dom(create(nodeName), attrs3));
    }
    first() {
        return adopt(this.node.firstChild);
    }
    get(i16) {
        return adopt(this.node.childNodes[i16]);
    }
    getEventHolder() {
        return this.node;
    }
    getEventTarget() {
        return this.node;
    }
    has(element) {
        return this.index(element) >= 0;
    }
    html(htmlOrFn, outerHTML) {
        return this.xml(htmlOrFn, outerHTML, html);
    }
    id(id) {
        // generate new id if no id set
        if (typeof id === "undefined" && !this.node.id) this.node.id = eid(this.type);
         // don't set directly with this.node.id to make `null` work correctly
        return this.attr("id", id);
    }
    index(element) {
        return [].slice.call(this.node.childNodes).indexOf(element.node);
    }
    last() {
        return adopt(this.node.lastChild);
    }
    matches(selector) {
        const el = this.node;
        const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
        return matcher && matcher.call(el, selector);
    }
    parent(type) {
        let parent = this; // check for parent
        if (!parent.node.parentNode) return null; // get parent element
        parent = adopt(parent.node.parentNode);
        if (!type) return parent; // loop trough ancestors if type is given
        do {
            if (typeof type === "string" ? parent.matches(type) : parent instanceof type) return parent;
        }while (parent = adopt(parent.node.parentNode));
        return parent;
    }
    put(element, i17) {
        element = makeInstance(element);
        this.add(element, i17);
        return element;
    }
    putIn(parent, i18) {
        return makeInstance(parent).add(this, i18);
    }
    remove() {
        if (this.parent()) this.parent().removeElement(this);
        return this;
    }
    removeElement(element) {
        this.node.removeChild(element.node);
        return this;
    }
    replace(element) {
        element = makeInstance(element);
        if (this.node.parentNode) this.node.parentNode.replaceChild(element.node, this.node);
        return element;
    }
    round(precision = 2, map1 = null) {
        const factor = 10 ** precision;
        const attrs4 = this.attr(map1);
        for(const i19 in attrs4)if (typeof attrs4[i19] === "number") attrs4[i19] = Math.round(attrs4[i19] * factor) / factor;
        this.attr(attrs4);
        return this;
    }
    svg(svgOrFn, outerSVG) {
        return this.xml(svgOrFn, outerSVG, svg);
    }
    toString() {
        return this.id();
    }
    words(text) {
        // This is faster than removing all children and adding a new one
        this.node.textContent = text;
        return this;
    }
    wrap(node) {
        const parent = this.parent();
        if (!parent) return this.addTo(node);
        const position2 = parent.index(this);
        return parent.put(node, position2).put(this);
    }
    writeDataToDom() {
        // dump variables recursively
        this.each(function() {
            this.writeDataToDom();
        });
        return this;
    }
    xml(xmlOrFn, outerXML, ns) {
        if (typeof xmlOrFn === "boolean") {
            ns = outerXML;
            outerXML = xmlOrFn;
            xmlOrFn = null;
        } // act as getter if no svg string is given
        if (xmlOrFn == null || typeof xmlOrFn === "function") {
            // The default for exports is, that the outerNode is included
            outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom
            this.writeDataToDom();
            let current = this; // An export modifier was passed
            if (xmlOrFn != null) {
                current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too
                if (outerXML) {
                    const result = xmlOrFn(current);
                    current = result || current; // The user does not want this node? Well, then he gets nothing
                    if (result === false) return "";
                } // Deep loop through all children and apply modifier
                current.each(function() {
                    const result = xmlOrFn(this);
                    const _this = result || this; // If modifier returns false, discard node
                    if (result === false) this.remove(); // If modifier returns new node, use it
                    else if (result && this !== _this) this.replace(_this);
                }, true);
            } // Return outer or inner content
            return outerXML ? current.node.outerHTML : current.node.innerHTML;
        } // Act as setter if we got a string
        // The default for import is, that the current node is not replaced
        outerXML = outerXML == null ? false : outerXML; // Create temporary holder
        const well = create("wrapper", ns);
        const fragment = globals.document.createDocumentFragment(); // Dump raw svg
        well.innerHTML = xmlOrFn; // Transplant nodes into the fragment
        for(let len = well.children.length; len--;)fragment.appendChild(well.firstElementChild);
        const parent = this.parent(); // Add the whole fragment at once
        return outerXML ? this.replace(fragment) && parent : this.add(fragment);
    }
}
extend(Dom, {
    attr,
    find,
    findOne
});
register(Dom, "Dom");
class Element extends Dom {
    constructor(node, attrs5){
        super(node, attrs5); // initialize data object
        this.dom = {}; // create circular reference
        this.node.instance = this;
        if (node.hasAttribute("svgjs:data")) // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
        this.setData(JSON.parse(node.getAttribute("svgjs:data")) || {});
    }
    center(x16, y18) {
        return this.cx(x16).cy(y18);
    }
    cx(x17) {
        return x17 == null ? this.x() + this.width() / 2 : this.x(x17 - this.width() / 2);
    }
    cy(y19) {
        return y19 == null ? this.y() + this.height() / 2 : this.y(y19 - this.height() / 2);
    }
    defs() {
        const root1 = this.root();
        return root1 && root1.defs();
    }
    dmove(x18, y20) {
        return this.dx(x18).dy(y20);
    }
    dx(x19 = 0) {
        return this.x(new SVGNumber(x19).plus(this.x()));
    }
    dy(y21 = 0) {
        return this.y(new SVGNumber(y21).plus(this.y()));
    }
    getEventHolder() {
        return this;
    }
    height(height6) {
        return this.attr("height", height6);
    }
    move(x20, y22) {
        return this.x(x20).y(y22);
    }
    parents(until = this.root()) {
        const isSelector = typeof until === "string";
        if (!isSelector) until = makeInstance(until);
        const parents = new List();
        let parent = this;
        while((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== "#document-fragment"){
            parents.push(parent);
            if (!isSelector && parent.node === until.node) break;
            if (isSelector && parent.matches(until)) break;
            if (parent.node === this.root().node) // We worked our way to the root and didn't match `until`
            return null;
        }
        return parents;
    }
    reference(attr3) {
        attr3 = this.attr(attr3);
        if (!attr3) return null;
        const m = (attr3 + "").match(reference);
        return m ? makeInstance(m[1]) : null;
    }
    root() {
        const p = this.parent(getClass(root));
        return p && p.root();
    }
    setData(o) {
        this.dom = o;
        return this;
    }
    size(width6, height7) {
        const p = proportionalSize(this, width6, height7);
        return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
    }
    width(width7) {
        return this.attr("width", width7);
    }
    writeDataToDom() {
        // remove previously set data
        this.node.removeAttribute("svgjs:data");
        if (Object.keys(this.dom).length) this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)); // see #428
        return super.writeDataToDom();
    }
    x(x21) {
        return this.attr("x", x21);
    }
    y(y23) {
        return this.attr("y", y23);
    }
}
extend(Element, {
    bbox,
    rbox,
    inside,
    point,
    ctm,
    screenCTM
});
register(Element, "Element");
const sugar = {
    stroke: [
        "color",
        "width",
        "opacity",
        "linecap",
        "linejoin",
        "miterlimit",
        "dasharray",
        "dashoffset"
    ],
    fill: [
        "color",
        "opacity",
        "rule"
    ],
    prefix: function(t, a) {
        return a === "color" ? t : t + "-" + a;
    }
} // Add sugar for fill and stroke
;
[
    "fill",
    "stroke"
].forEach(function(m) {
    const extension = {};
    let i20;
    extension[m] = function(o) {
        if (typeof o === "undefined") return this.attr(m);
        if (typeof o === "string" || o instanceof Color || Color.isRgb(o) || o instanceof Element) this.attr(m, o);
        else {
            // set all attributes from sugar.fill and sugar.stroke list
            for(i20 = sugar[m].length - 1; i20 >= 0; i20--)if (o[sugar[m][i20]] != null) this.attr(sugar.prefix(m, sugar[m][i20]), o[sugar[m][i20]]);
        }
        return this;
    };
    registerMethods([
        "Element",
        "Runner"
    ], extension);
});
registerMethods([
    "Element",
    "Runner"
], {
    // Let the user set the matrix directly
    matrix: function(mat, b, c, d, e, f) {
        // Act as a getter
        if (mat == null) return new Matrix(this);
         // Act as a setter, the user can pass a matrix or a set of numbers
        return this.attr("transform", new Matrix(mat, b, c, d, e, f));
    },
    // Map rotation to transform
    rotate: function(angle, cx11, cy12) {
        return this.transform({
            rotate: angle,
            ox: cx11,
            oy: cy12
        }, true);
    },
    // Map skew to transform
    skew: function(x22, y24, cx12, cy13) {
        return arguments.length === 1 || arguments.length === 3 ? this.transform({
            skew: x22,
            ox: y24,
            oy: cx12
        }, true) : this.transform({
            skew: [
                x22,
                y24
            ],
            ox: cx12,
            oy: cy13
        }, true);
    },
    shear: function(lam, cx13, cy14) {
        return this.transform({
            shear: lam,
            ox: cx13,
            oy: cy14
        }, true);
    },
    // Map scale to transform
    scale: function(x23, y25, cx14, cy15) {
        return arguments.length === 1 || arguments.length === 3 ? this.transform({
            scale: x23,
            ox: y25,
            oy: cx14
        }, true) : this.transform({
            scale: [
                x23,
                y25
            ],
            ox: cx14,
            oy: cy15
        }, true);
    },
    // Map translate to transform
    translate: function(x24, y26) {
        return this.transform({
            translate: [
                x24,
                y26
            ]
        }, true);
    },
    // Map relative translations to transform
    relative: function(x25, y27) {
        return this.transform({
            relative: [
                x25,
                y27
            ]
        }, true);
    },
    // Map flip to transform
    flip: function(direction = "both", origin = "center") {
        if ("xybothtrue".indexOf(direction) === -1) {
            origin = direction;
            direction = "both";
        }
        return this.transform({
            flip: direction,
            origin: origin
        }, true);
    },
    // Opacity
    opacity: function(value) {
        return this.attr("opacity", value);
    }
});
registerMethods("radius", {
    // Add x and y radius
    radius: function(x26, y28 = x26) {
        const type = (this._element || this).type;
        return type === "radialGradient" ? this.attr("r", new SVGNumber(x26)) : this.rx(x26).ry(y28);
    }
});
registerMethods("Path", {
    // Get path length
    length: function() {
        return this.node.getTotalLength();
    },
    // Get point at length
    pointAt: function(length1) {
        return new Point(this.node.getPointAtLength(length1));
    }
});
registerMethods([
    "Element",
    "Runner"
], {
    // Set font
    font: function(a, v) {
        if (typeof a === "object") {
            for(v in a)this.font(v, a[v]);
            return this;
        }
        return a === "leading" ? this.leading(v) : a === "anchor" ? this.attr("text-anchor", v) : a === "size" || a === "family" || a === "weight" || a === "stretch" || a === "variant" || a === "style" ? this.attr("font-" + a, v) : this.attr(a, v);
    }
}); // Add events to elements
const methods = [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mouseover",
    "mouseout",
    "mousemove",
    "mouseenter",
    "mouseleave",
    "touchstart",
    "touchmove",
    "touchleave",
    "touchend",
    "touchcancel"
].reduce(function(last, event) {
    // add event to Element
    const fn = function(f) {
        if (f === null) this.off(event);
        else this.on(event, f);
        return this;
    };
    last[event] = fn;
    return last;
}, {});
registerMethods("Element", methods);
function untransform() {
    return this.attr("transform", null);
} // merge the whole transformation chain into one matrix and returns it
function matrixify() {
    const matrix1 = (this.attr("transform") || "" // split transformations
    ).split(transforms).slice(0, -1).map(function(str1) {
        // generate key => value pairs
        const kv = str1.trim().split("(");
        return [
            kv[0],
            kv[1].split(delimiter).map(function(str) {
                return parseFloat(str);
            })
        ];
    }).reverse() // merge every transformation into one matrix
    .reduce(function(matrix, transform1) {
        if (transform1[0] === "matrix") return matrix.lmultiply(Matrix.fromArray(transform1[1]));
        return matrix[transform1[0]].apply(matrix, transform1[1]);
    }, new Matrix());
    return matrix1;
} // add an element to another parent without changing the visual representation on the screen
function toParent(parent, i21) {
    if (this === parent) return this;
    const ctm1 = this.screenCTM();
    const pCtm = parent.screenCTM().inverse();
    this.addTo(parent, i21).untransform().transform(pCtm.multiply(ctm1));
    return this;
} // same as above with parent equals root-svg
function toRoot(i22) {
    return this.toParent(this.root(), i22);
} // Add transformations
function transform(o, relative) {
    // Act as a getter if no object was passed
    if (o == null || typeof o === "string") {
        const decomposed = new Matrix(this).decompose();
        return o == null ? decomposed : decomposed[o];
    }
    if (!Matrix.isMatrixLike(o)) // Set the origin according to the defined transform
    o = {
        ...o,
        origin: getOrigin(o, this)
    };
     // The user can pass a boolean, an Element or an Matrix or nothing
    const cleanRelative = relative === true ? this : relative || false;
    const result = new Matrix(cleanRelative).transform(o);
    return this.attr("transform", result);
}
registerMethods("Element", {
    untransform,
    matrixify,
    toParent,
    toRoot,
    transform
});
class Container extends Element {
    flatten(parent = this, index) {
        this.each(function() {
            if (this instanceof Container) return this.flatten().ungroup();
        });
        return this;
    }
    ungroup(parent = this.parent(), index = parent.index(this)) {
        // when parent != this, we want append all elements to the end
        index = index === -1 ? parent.children().length : index;
        this.each(function(i23, children) {
            // reverse each
            return children[children.length - i23 - 1].toParent(parent, index);
        });
        return this.remove();
    }
}
register(Container, "Container");
class Defs extends Container {
    constructor(node, attrs6 = node){
        super(nodeOrNew("defs", node), attrs6);
    }
    flatten() {
        return this;
    }
    ungroup() {
        return this;
    }
}
register(Defs, "Defs");
class Shape extends Element {
}
register(Shape, "Shape");
function rx(rx2) {
    return this.attr("rx", rx2);
} // Radius y value
function ry(ry2) {
    return this.attr("ry", ry2);
} // Move over x-axis
function x$3(x27) {
    return x27 == null ? this.cx() - this.rx() : this.cx(x27 + this.rx());
} // Move over y-axis
function y$3(y29) {
    return y29 == null ? this.cy() - this.ry() : this.cy(y29 + this.ry());
} // Move by center over x-axis
function cx$1(x28) {
    return this.attr("cx", x28);
} // Move by center over y-axis
function cy$1(y30) {
    return this.attr("cy", y30);
} // Set width of element
function width$2(width8) {
    return width8 == null ? this.rx() * 2 : this.rx(new SVGNumber(width8).divide(2));
} // Set height of element
function height$2(height8) {
    return height8 == null ? this.ry() * 2 : this.ry(new SVGNumber(height8).divide(2));
}
var circled = {
    __proto__: null,
    rx: rx,
    ry: ry,
    x: x$3,
    y: y$3,
    cx: cx$1,
    cy: cy$1,
    width: width$2,
    height: height$2
};
class Ellipse extends Shape {
    constructor(node, attrs7 = node){
        super(nodeOrNew("ellipse", node), attrs7);
    }
    size(width9, height9) {
        const p = proportionalSize(this, width9, height9);
        return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
    }
}
extend(Ellipse, circled);
registerMethods("Container", {
    // Create an ellipse
    ellipse: wrapWithAttrCheck(function(width10 = 0, height10 = width10) {
        return this.put(new Ellipse()).size(width10, height10).move(0, 0);
    })
});
register(Ellipse, "Ellipse");
class Fragment extends Dom {
    constructor(node = globals.document.createDocumentFragment()){
        super(node);
    }
    xml(xmlOrFn, outerXML, ns) {
        if (typeof xmlOrFn === "boolean") {
            ns = outerXML;
            outerXML = xmlOrFn;
            xmlOrFn = null;
        } // because this is a fragment we have to put all elements into a wrapper first
        // before we can get the innerXML from it
        if (xmlOrFn == null || typeof xmlOrFn === "function") {
            const wrapper = new Dom(create("wrapper", ns));
            wrapper.add(this.node.cloneNode(true));
            return wrapper.xml(false, ns);
        } // Act as setter if we got a string
        return super.xml(xmlOrFn, false, ns);
    }
}
register(Fragment, "Fragment");
function from(x29, y31) {
    return (this._element || this).type === "radialGradient" ? this.attr({
        fx: new SVGNumber(x29),
        fy: new SVGNumber(y31)
    }) : this.attr({
        x1: new SVGNumber(x29),
        y1: new SVGNumber(y31)
    });
}
function to(x30, y32) {
    return (this._element || this).type === "radialGradient" ? this.attr({
        cx: new SVGNumber(x30),
        cy: new SVGNumber(y32)
    }) : this.attr({
        x2: new SVGNumber(x30),
        y2: new SVGNumber(y32)
    });
}
var gradiented = {
    __proto__: null,
    from: from,
    to: to
};
class Gradient extends Container {
    constructor(type, attrs8){
        super(nodeOrNew(type + "Gradient", typeof type === "string" ? null : type), attrs8);
    }
    attr(a, b, c) {
        if (a === "transform") a = "gradientTransform";
        return super.attr(a, b, c);
    }
    bbox() {
        return new Box();
    }
    targets() {
        return baseFind('svg [fill*="' + this.id() + '"]');
    }
    toString() {
        return this.url();
    }
    update(block) {
        // remove all stops
        this.clear(); // invoke passed block
        if (typeof block === "function") block.call(this, this);
        return this;
    }
    url() {
        return 'url("#' + this.id() + '")';
    }
}
extend(Gradient, gradiented);
registerMethods({
    Container: {
        // Create gradient element in defs
        gradient (...args) {
            return this.defs().gradient(...args);
        }
    },
    // define gradient
    Defs: {
        gradient: wrapWithAttrCheck(function(type, block) {
            return this.put(new Gradient(type)).update(block);
        })
    }
});
register(Gradient, "Gradient");
class Pattern extends Container {
    // Initialize node
    constructor(node, attrs9 = node){
        super(nodeOrNew("pattern", node), attrs9);
    }
    attr(a, b, c) {
        if (a === "transform") a = "patternTransform";
        return super.attr(a, b, c);
    }
    bbox() {
        return new Box();
    }
    targets() {
        return baseFind('svg [fill*="' + this.id() + '"]');
    }
    toString() {
        return this.url();
    }
    update(block) {
        // remove content
        this.clear(); // invoke passed block
        if (typeof block === "function") block.call(this, this);
        return this;
    }
    url() {
        return 'url("#' + this.id() + '")';
    }
}
registerMethods({
    Container: {
        // Create pattern element in defs
        pattern (...args) {
            return this.defs().pattern(...args);
        }
    },
    Defs: {
        pattern: wrapWithAttrCheck(function(width11, height11, block) {
            return this.put(new Pattern()).update(block).attr({
                x: 0,
                y: 0,
                width: width11,
                height: height11,
                patternUnits: "userSpaceOnUse"
            });
        })
    }
});
register(Pattern, "Pattern");
class Image extends Shape {
    constructor(node, attrs10 = node){
        super(nodeOrNew("image", node), attrs10);
    }
    load(url, callback) {
        if (!url) return this;
        const img = new globals.window.Image();
        on(img, "load", function(e) {
            const p = this.parent(Pattern); // ensure image size
            if (this.width() === 0 && this.height() === 0) this.size(img.width, img.height);
            if (p instanceof Pattern) // ensure pattern size if not set
            {
                if (p.width() === 0 && p.height() === 0) p.size(this.width(), this.height());
            }
            if (typeof callback === "function") callback.call(this, e);
        }, this);
        on(img, "load error", function() {
            // dont forget to unbind memory leaking events
            off(img);
        });
        return this.attr("href", img.src = url, xlink);
    }
}
registerAttrHook(function(attr4, val, _this) {
    // convert image fill and stroke to patterns
    if (attr4 === "fill" || attr4 === "stroke") {
        if (isImage.test(val)) val = _this.root().defs().image(val);
    }
    if (val instanceof Image) val = _this.root().defs().pattern(0, 0, (pattern)=>{
        pattern.add(val);
    });
    return val;
});
registerMethods({
    Container: {
        // create image element, load image and set its size
        image: wrapWithAttrCheck(function(source, callback) {
            return this.put(new Image()).size(0, 0).load(source, callback);
        })
    }
});
register(Image, "Image");
class PointArray extends SVGArray {
    // Get bounding box of points
    bbox() {
        let maxX = -Infinity;
        let maxY = -Infinity;
        let minX = Infinity;
        let minY = Infinity;
        this.forEach(function(el) {
            maxX = Math.max(el[0], maxX);
            maxY = Math.max(el[1], maxY);
            minX = Math.min(el[0], minX);
            minY = Math.min(el[1], minY);
        });
        return new Box(minX, minY, maxX - minX, maxY - minY);
    }
    move(x31, y33) {
        const box = this.bbox(); // get relative offset
        x31 -= box.x;
        y33 -= box.y; // move every point
        if (!isNaN(x31) && !isNaN(y33)) for(let i24 = this.length - 1; i24 >= 0; i24--)this[i24] = [
            this[i24][0] + x31,
            this[i24][1] + y33
        ];
        return this;
    }
    parse(array5 = [
        0,
        0
    ]) {
        const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths
        if (array5 instanceof Array) array5 = Array.prototype.concat.apply([], array5);
        else // Else, it is considered as a string
        // parse points
        array5 = array5.trim().split(delimiter).map(parseFloat);
         // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
        // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
        if (array5.length % 2 !== 0) array5.pop(); // wrap points in two-tuples
        for(let i25 = 0, len = array5.length; i25 < len; i25 = i25 + 2)points.push([
            array5[i25],
            array5[i25 + 1]
        ]);
        return points;
    }
    size(width12, height12) {
        let i26;
        const box = this.bbox(); // recalculate position of all points according to new size
        for(i26 = this.length - 1; i26 >= 0; i26--){
            if (box.width) this[i26][0] = (this[i26][0] - box.x) * width12 / box.width + box.x;
            if (box.height) this[i26][1] = (this[i26][1] - box.y) * height12 / box.height + box.y;
        }
        return this;
    }
    toLine() {
        return {
            x1: this[0][0],
            y1: this[0][1],
            x2: this[1][0],
            y2: this[1][1]
        };
    }
    toString() {
        const array6 = []; // convert to a poly point string
        for(let i27 = 0, il4 = this.length; i27 < il4; i27++)array6.push(this[i27].join(","));
        return array6.join(" ");
    }
    transform(m) {
        return this.clone().transformO(m);
    }
    transformO(m) {
        if (!Matrix.isMatrixLike(m)) m = new Matrix(m);
        for(let i28 = this.length; i28--;){
            // Perform the matrix multiplication
            const [x32, y34] = this[i28];
            this[i28][0] = m.a * x32 + m.c * y34 + m.e;
            this[i28][1] = m.b * x32 + m.d * y34 + m.f;
        }
        return this;
    }
}
const MorphArray = PointArray; // Move by left top corner over x-axis
function x$2(x33) {
    return x33 == null ? this.bbox().x : this.move(x33, this.bbox().y);
} // Move by left top corner over y-axis
function y$2(y35) {
    return y35 == null ? this.bbox().y : this.move(this.bbox().x, y35);
} // Set width of element
function width$1(width13) {
    const b = this.bbox();
    return width13 == null ? b.width : this.size(width13, b.height);
} // Set height of element
function height$1(height13) {
    const b = this.bbox();
    return height13 == null ? b.height : this.size(b.width, height13);
}
var pointed = {
    __proto__: null,
    MorphArray: MorphArray,
    x: x$2,
    y: y$2,
    width: width$1,
    height: height$1
};
class Line extends Shape {
    // Initialize node
    constructor(node, attrs11 = node){
        super(nodeOrNew("line", node), attrs11);
    }
    array() {
        return new PointArray([
            [
                this.attr("x1"),
                this.attr("y1")
            ],
            [
                this.attr("x2"),
                this.attr("y2")
            ]
        ]);
    }
    move(x34, y36) {
        return this.attr(this.array().move(x34, y36).toLine());
    }
    plot(x1, y1, x2, y2) {
        if (x1 == null) return this.array();
        else if (typeof y1 !== "undefined") x1 = {
            x1,
            y1,
            x2,
            y2
        };
        else x1 = new PointArray(x1).toLine();
        return this.attr(x1);
    }
    size(width14, height14) {
        const p = proportionalSize(this, width14, height14);
        return this.attr(this.array().size(p.width, p.height).toLine());
    }
}
extend(Line, pointed);
registerMethods({
    Container: {
        // Create a line element
        line: wrapWithAttrCheck(function(...args) {
            // make sure plot is called as a setter
            // x1 is not necessarily a number, it can also be an array, a string and a PointArray
            return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [
                0,
                0,
                0,
                0
            ]);
        })
    }
});
register(Line, "Line");
class Marker extends Container {
    // Initialize node
    constructor(node, attrs12 = node){
        super(nodeOrNew("marker", node), attrs12);
    }
    height(height15) {
        return this.attr("markerHeight", height15);
    }
    orient(orient) {
        return this.attr("orient", orient);
    }
    ref(x35, y37) {
        return this.attr("refX", x35).attr("refY", y37);
    }
    toString() {
        return "url(#" + this.id() + ")";
    }
    update(block) {
        // remove all content
        this.clear(); // invoke passed block
        if (typeof block === "function") block.call(this, this);
        return this;
    }
    width(width15) {
        return this.attr("markerWidth", width15);
    }
}
registerMethods({
    Container: {
        marker (...args) {
            // Create marker element in defs
            return this.defs().marker(...args);
        }
    },
    Defs: {
        // Create marker
        marker: wrapWithAttrCheck(function(width16, height16, block) {
            // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
            return this.put(new Marker()).size(width16, height16).ref(width16 / 2, height16 / 2).viewbox(0, 0, width16, height16).attr("orient", "auto").update(block);
        })
    },
    marker: {
        // Create and attach markers
        marker (marker, width17, height17, block) {
            let attr5 = [
                "marker"
            ]; // Build attribute name
            if (marker !== "all") attr5.push(marker);
            attr5 = attr5.join("-"); // Set marker attribute
            marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width17, height17, block);
            return this.attr(attr5, marker);
        }
    }
});
register(Marker, "Marker");
/***
Base Class
==========
The base stepper class that will be
***/ function makeSetterGetter(k, f) {
    return function(v) {
        if (v == null) return this[k];
        this[k] = v;
        if (f) f.call(this);
        return this;
    };
}
const easing = {
    "-": function(pos) {
        return pos;
    },
    "<>": function(pos) {
        return -Math.cos(pos * Math.PI) / 2 + 0.5;
    },
    ">": function(pos) {
        return Math.sin(pos * Math.PI / 2);
    },
    "<": function(pos) {
        return -Math.cos(pos * Math.PI / 2) + 1;
    },
    bezier: function(x1, y1, x2, y2) {
        // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
        return function(t) {
            if (t < 0) {
                if (x1 > 0) return y1 / x1 * t;
                else if (x2 > 0) return y2 / x2 * t;
                else return 0;
            } else if (t > 1) {
                if (x2 < 1) return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
                else if (x1 < 1) return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
                else return 1;
            } else return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
        };
    },
    // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
    steps: function(steps, stepPosition = "end") {
        // deal with "jump-" prefix
        stepPosition = stepPosition.split("-").reverse()[0];
        let jumps = steps;
        if (stepPosition === "none") --jumps;
        else if (stepPosition === "both") ++jumps;
         // The beforeFlag is essentially useless
        return (t, beforeFlag = false)=>{
            // Step is called currentStep in referenced url
            let step = Math.floor(t * steps);
            const jumping = t * step % 1 === 0;
            if (stepPosition === "start" || stepPosition === "both") ++step;
            if (beforeFlag && jumping) --step;
            if (t >= 0 && step < 0) step = 0;
            if (t <= 1 && step > jumps) step = jumps;
            return step / jumps;
        };
    }
};
class Stepper {
    done() {
        return false;
    }
}
/***
Easing Functions
================
***/ class Ease extends Stepper {
    constructor(fn = timeline.ease){
        super();
        this.ease = easing[fn] || fn;
    }
    step(from1, to1, pos) {
        if (typeof from1 !== "number") return pos < 1 ? from1 : to1;
        return from1 + (to1 - from1) * this.ease(pos);
    }
}
/***
Controller Types
================
***/ class Controller extends Stepper {
    constructor(fn){
        super();
        this.stepper = fn;
    }
    done(c) {
        return c.done;
    }
    step(current, target, dt, c) {
        return this.stepper(current, target, dt, c);
    }
}
function recalculate() {
    // Apply the default parameters
    const duration = (this._duration || 500) / 1000;
    const overshoot = this._overshoot || 0; // Calculate the PID natural response
    const eps = 1e-10;
    const pi = Math.PI;
    const os = Math.log(overshoot / 100 + eps);
    const zeta = -os / Math.sqrt(pi * pi + os * os);
    const wn = 3.9 / (zeta * duration); // Calculate the Spring values
    this.d = 2 * zeta * wn;
    this.k = wn * wn;
}
class Spring extends Controller {
    constructor(duration = 500, overshoot = 0){
        super();
        this.duration(duration).overshoot(overshoot);
    }
    step(current, target, dt, c) {
        if (typeof current === "string") return current;
        c.done = dt === Infinity;
        if (dt === Infinity) return target;
        if (dt === 0) return current;
        if (dt > 100) dt = 16;
        dt /= 1000; // Get the previous velocity
        const velocity = c.velocity || 0; // Apply the control to get the new position and store it
        const acceleration = -this.d * velocity - this.k * (current - target);
        const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity
        c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value
        c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
        return c.done ? target : newPosition;
    }
}
extend(Spring, {
    duration: makeSetterGetter("_duration", recalculate),
    overshoot: makeSetterGetter("_overshoot", recalculate)
});
class PID extends Controller {
    constructor(p = 0.1, i29 = 0.01, d = 0, windup = 1000){
        super();
        this.p(p).i(i29).d(d).windup(windup);
    }
    step(current, target, dt, c) {
        if (typeof current === "string") return current;
        c.done = dt === Infinity;
        if (dt === Infinity) return target;
        if (dt === 0) return current;
        const p = target - current;
        let i30 = (c.integral || 0) + p * dt;
        const d = (p - (c.error || 0)) / dt;
        const windup = this._windup; // antiwindup
        if (windup !== false) i30 = Math.max(-windup, Math.min(i30, windup));
        c.error = p;
        c.integral = i30;
        c.done = Math.abs(p) < 0.001;
        return c.done ? target : current + (this.P * p + this.I * i30 + this.D * d);
    }
}
extend(PID, {
    windup: makeSetterGetter("_windup"),
    p: makeSetterGetter("P"),
    i: makeSetterGetter("I"),
    d: makeSetterGetter("D")
});
const segmentParameters = {
    M: 2,
    L: 2,
    H: 1,
    V: 1,
    C: 6,
    S: 4,
    Q: 4,
    T: 2,
    A: 7,
    Z: 0
};
const pathHandlers = {
    M: function(c, p, p0) {
        p.x = p0.x = c[0];
        p.y = p0.y = c[1];
        return [
            "M",
            p.x,
            p.y
        ];
    },
    L: function(c, p) {
        p.x = c[0];
        p.y = c[1];
        return [
            "L",
            c[0],
            c[1]
        ];
    },
    H: function(c, p) {
        p.x = c[0];
        return [
            "H",
            c[0]
        ];
    },
    V: function(c, p) {
        p.y = c[0];
        return [
            "V",
            c[0]
        ];
    },
    C: function(c, p) {
        p.x = c[4];
        p.y = c[5];
        return [
            "C",
            c[0],
            c[1],
            c[2],
            c[3],
            c[4],
            c[5]
        ];
    },
    S: function(c, p) {
        p.x = c[2];
        p.y = c[3];
        return [
            "S",
            c[0],
            c[1],
            c[2],
            c[3]
        ];
    },
    Q: function(c, p) {
        p.x = c[2];
        p.y = c[3];
        return [
            "Q",
            c[0],
            c[1],
            c[2],
            c[3]
        ];
    },
    T: function(c, p) {
        p.x = c[0];
        p.y = c[1];
        return [
            "T",
            c[0],
            c[1]
        ];
    },
    Z: function(c, p, p0) {
        p.x = p0.x;
        p.y = p0.y;
        return [
            "Z"
        ];
    },
    A: function(c, p) {
        p.x = c[5];
        p.y = c[6];
        return [
            "A",
            c[0],
            c[1],
            c[2],
            c[3],
            c[4],
            c[5],
            c[6]
        ];
    }
};
const mlhvqtcsaz = "mlhvqtcsaz".split("");
for(let i = 0, il = mlhvqtcsaz.length; i < il; ++i)pathHandlers[mlhvqtcsaz[i]] = function(i31) {
    return function(c, p, p0) {
        if (i31 === "H") c[0] = c[0] + p.x;
        else if (i31 === "V") c[0] = c[0] + p.y;
        else if (i31 === "A") {
            c[5] = c[5] + p.x;
            c[6] = c[6] + p.y;
        } else for(let j = 0, jl = c.length; j < jl; ++j)c[j] = c[j] + (j % 2 ? p.y : p.x);
        return pathHandlers[i31](c, p, p0);
    };
}(mlhvqtcsaz[i].toUpperCase());
function makeAbsolut(parser1) {
    const command = parser1.segment[0];
    return pathHandlers[command](parser1.segment.slice(1), parser1.p, parser1.p0);
}
function segmentComplete(parser2) {
    return parser2.segment.length && parser2.segment.length - 1 === segmentParameters[parser2.segment[0].toUpperCase()];
}
function startNewSegment(parser3, token) {
    parser3.inNumber && finalizeNumber(parser3, false);
    const pathLetter = isPathLetter.test(token);
    if (pathLetter) parser3.segment = [
        token
    ];
    else {
        const lastCommand = parser3.lastCommand;
        const small = lastCommand.toLowerCase();
        const isSmall = lastCommand === small;
        parser3.segment = [
            small === "m" ? isSmall ? "l" : "L" : lastCommand
        ];
    }
    parser3.inSegment = true;
    parser3.lastCommand = parser3.segment[0];
    return pathLetter;
}
function finalizeNumber(parser4, inNumber) {
    if (!parser4.inNumber) throw new Error("Parser Error");
    parser4.number && parser4.segment.push(parseFloat(parser4.number));
    parser4.inNumber = inNumber;
    parser4.number = "";
    parser4.pointSeen = false;
    parser4.hasExponent = false;
    if (segmentComplete(parser4)) finalizeSegment(parser4);
}
function finalizeSegment(parser5) {
    parser5.inSegment = false;
    if (parser5.absolute) parser5.segment = makeAbsolut(parser5);
    parser5.segments.push(parser5.segment);
}
function isArcFlag(parser6) {
    if (!parser6.segment.length) return false;
    const isArc = parser6.segment[0].toUpperCase() === "A";
    const length2 = parser6.segment.length;
    return isArc && (length2 === 4 || length2 === 5);
}
function isExponential(parser7) {
    return parser7.lastToken.toUpperCase() === "E";
}
function pathParser(d, toAbsolute = true) {
    let index = 0;
    let token = "";
    const parser8 = {
        segment: [],
        inNumber: false,
        number: "",
        lastToken: "",
        inSegment: false,
        segments: [],
        pointSeen: false,
        hasExponent: false,
        absolute: toAbsolute,
        p0: new Point(),
        p: new Point()
    };
    while(parser8.lastToken = token, token = d.charAt(index++)){
        if (!parser8.inSegment) {
            if (startNewSegment(parser8, token)) continue;
        }
        if (token === ".") {
            if (parser8.pointSeen || parser8.hasExponent) {
                finalizeNumber(parser8, false);
                --index;
                continue;
            }
            parser8.inNumber = true;
            parser8.pointSeen = true;
            parser8.number += token;
            continue;
        }
        if (!isNaN(parseInt(token))) {
            if (parser8.number === "0" || isArcFlag(parser8)) {
                parser8.inNumber = true;
                parser8.number = token;
                finalizeNumber(parser8, true);
                continue;
            }
            parser8.inNumber = true;
            parser8.number += token;
            continue;
        }
        if (token === " " || token === ",") {
            if (parser8.inNumber) finalizeNumber(parser8, false);
            continue;
        }
        if (token === "-") {
            if (parser8.inNumber && !isExponential(parser8)) {
                finalizeNumber(parser8, false);
                --index;
                continue;
            }
            parser8.number += token;
            parser8.inNumber = true;
            continue;
        }
        if (token.toUpperCase() === "E") {
            parser8.number += token;
            parser8.hasExponent = true;
            continue;
        }
        if (isPathLetter.test(token)) {
            if (parser8.inNumber) finalizeNumber(parser8, false);
            else if (!segmentComplete(parser8)) throw new Error("parser Error");
            else finalizeSegment(parser8);
            --index;
        }
    }
    if (parser8.inNumber) finalizeNumber(parser8, false);
    if (parser8.inSegment && segmentComplete(parser8)) finalizeSegment(parser8);
    return parser8.segments;
}
function arrayToString(a) {
    let s = "";
    for(let i32 = 0, il5 = a.length; i32 < il5; i32++){
        s += a[i32][0];
        if (a[i32][1] != null) {
            s += a[i32][1];
            if (a[i32][2] != null) {
                s += " ";
                s += a[i32][2];
                if (a[i32][3] != null) {
                    s += " ";
                    s += a[i32][3];
                    s += " ";
                    s += a[i32][4];
                    if (a[i32][5] != null) {
                        s += " ";
                        s += a[i32][5];
                        s += " ";
                        s += a[i32][6];
                        if (a[i32][7] != null) {
                            s += " ";
                            s += a[i32][7];
                        }
                    }
                }
            }
        }
    }
    return s + " ";
}
class PathArray extends SVGArray {
    // Get bounding box of path
    bbox() {
        parser().path.setAttribute("d", this.toString());
        return new Box(parser.nodes.path.getBBox());
    }
    move(x36, y38) {
        // get bounding box of current situation
        const box = this.bbox(); // get relative offset
        x36 -= box.x;
        y38 -= box.y;
        if (!isNaN(x36) && !isNaN(y38)) // move every point
        for(let l, i33 = this.length - 1; i33 >= 0; i33--){
            l = this[i33][0];
            if (l === "M" || l === "L" || l === "T") {
                this[i33][1] += x36;
                this[i33][2] += y38;
            } else if (l === "H") this[i33][1] += x36;
            else if (l === "V") this[i33][1] += y38;
            else if (l === "C" || l === "S" || l === "Q") {
                this[i33][1] += x36;
                this[i33][2] += y38;
                this[i33][3] += x36;
                this[i33][4] += y38;
                if (l === "C") {
                    this[i33][5] += x36;
                    this[i33][6] += y38;
                }
            } else if (l === "A") {
                this[i33][6] += x36;
                this[i33][7] += y38;
            }
        }
        return this;
    }
    parse(d = "M0 0") {
        if (Array.isArray(d)) d = Array.prototype.concat.apply([], d).toString();
        return pathParser(d);
    }
    size(width18, height18) {
        // get bounding box of current situation
        const box = this.bbox();
        let i34, l; // If the box width or height is 0 then we ignore
        // transformations on the respective axis
        box.width = box.width === 0 ? 1 : box.width;
        box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size
        for(i34 = this.length - 1; i34 >= 0; i34--){
            l = this[i34][0];
            if (l === "M" || l === "L" || l === "T") {
                this[i34][1] = (this[i34][1] - box.x) * width18 / box.width + box.x;
                this[i34][2] = (this[i34][2] - box.y) * height18 / box.height + box.y;
            } else if (l === "H") this[i34][1] = (this[i34][1] - box.x) * width18 / box.width + box.x;
            else if (l === "V") this[i34][1] = (this[i34][1] - box.y) * height18 / box.height + box.y;
            else if (l === "C" || l === "S" || l === "Q") {
                this[i34][1] = (this[i34][1] - box.x) * width18 / box.width + box.x;
                this[i34][2] = (this[i34][2] - box.y) * height18 / box.height + box.y;
                this[i34][3] = (this[i34][3] - box.x) * width18 / box.width + box.x;
                this[i34][4] = (this[i34][4] - box.y) * height18 / box.height + box.y;
                if (l === "C") {
                    this[i34][5] = (this[i34][5] - box.x) * width18 / box.width + box.x;
                    this[i34][6] = (this[i34][6] - box.y) * height18 / box.height + box.y;
                }
            } else if (l === "A") {
                // resize radii
                this[i34][1] = this[i34][1] * width18 / box.width;
                this[i34][2] = this[i34][2] * height18 / box.height; // move position values
                this[i34][6] = (this[i34][6] - box.x) * width18 / box.width + box.x;
                this[i34][7] = (this[i34][7] - box.y) * height18 / box.height + box.y;
            }
        }
        return this;
    }
    toString() {
        return arrayToString(this);
    }
}
const getClassForType = (value)=>{
    const type = typeof value;
    if (type === "number") return SVGNumber;
    else if (type === "string") {
        if (Color.isColor(value)) return Color;
        else if (delimiter.test(value)) return isPathLetter.test(value) ? PathArray : SVGArray;
        else if (numberAndUnit.test(value)) return SVGNumber;
        else return NonMorphable;
    } else if (morphableTypes.indexOf(value.constructor) > -1) return value.constructor;
    else if (Array.isArray(value)) return SVGArray;
    else if (type === "object") return ObjectBag;
    else return NonMorphable;
};
class Morphable {
    constructor(stepper){
        this._stepper = stepper || new Ease("-");
        this._from = null;
        this._to = null;
        this._type = null;
        this._context = null;
        this._morphObj = null;
    }
    at(pos) {
        return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
    }
    done() {
        const complete = this._context.map(this._stepper.done).reduce(function(last, curr) {
            return last && curr;
        }, true);
        return complete;
    }
    from(val) {
        if (val == null) return this._from;
        this._from = this._set(val);
        return this;
    }
    stepper(stepper) {
        if (stepper == null) return this._stepper;
        this._stepper = stepper;
        return this;
    }
    to(val) {
        if (val == null) return this._to;
        this._to = this._set(val);
        return this;
    }
    type(type) {
        // getter
        if (type == null) return this._type;
         // setter
        this._type = type;
        return this;
    }
    _set(value) {
        if (!this._type) this.type(getClassForType(value));
        let result = new this._type(value);
        if (this._type === Color) result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
        if (this._type === ObjectBag) result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
        result = result.toConsumable();
        this._morphObj = this._morphObj || new this._type();
        this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function(o) {
            o.done = true;
            return o;
        });
        return result;
    }
}
class NonMorphable {
    constructor(...args){
        this.init(...args);
    }
    init(val) {
        val = Array.isArray(val) ? val[0] : val;
        this.value = val;
        return this;
    }
    toArray() {
        return [
            this.value
        ];
    }
    valueOf() {
        return this.value;
    }
}
class TransformBag {
    constructor(...args){
        this.init(...args);
    }
    init(obj) {
        if (Array.isArray(obj)) obj = {
            scaleX: obj[0],
            scaleY: obj[1],
            shear: obj[2],
            rotate: obj[3],
            translateX: obj[4],
            translateY: obj[5],
            originX: obj[6],
            originY: obj[7]
        };
        Object.assign(this, TransformBag.defaults, obj);
        return this;
    }
    toArray() {
        const v = this;
        return [
            v.scaleX,
            v.scaleY,
            v.shear,
            v.rotate,
            v.translateX,
            v.translateY,
            v.originX,
            v.originY
        ];
    }
}
TransformBag.defaults = {
    scaleX: 1,
    scaleY: 1,
    shear: 0,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    originX: 0,
    originY: 0
};
const sortByKey = (a, b)=>{
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};
class ObjectBag {
    constructor(...args){
        this.init(...args);
    }
    align(other) {
        const values = this.values;
        for(let i35 = 0, il6 = values.length; i35 < il6; ++i35){
            // If the type is the same we only need to check if the color is in the correct format
            if (values[i35 + 1] === other[i35 + 1]) {
                if (values[i35 + 1] === Color && other[i35 + 7] !== values[i35 + 7]) {
                    const space = other[i35 + 7];
                    const color = new Color(this.values.splice(i35 + 3, 5))[space]().toArray();
                    this.values.splice(i35 + 3, 0, ...color);
                }
                i35 += values[i35 + 2] + 2;
                continue;
            }
            if (!other[i35 + 1]) return this;
             // The types differ, so we overwrite the new type with the old one
            // And initialize it with the types default (e.g. black for color or 0 for number)
            const defaultObject = new other[i35 + 1]().toArray(); // Than we fix the values array
            const toDelete = values[i35 + 2] + 3;
            values.splice(i35, toDelete, other[i35], other[i35 + 1], other[i35 + 2], ...defaultObject);
            i35 += values[i35 + 2] + 2;
        }
        return this;
    }
    init(objOrArr) {
        this.values = [];
        if (Array.isArray(objOrArr)) {
            this.values = objOrArr.slice();
            return;
        }
        objOrArr = objOrArr || {};
        const entries = [];
        for(const i36 in objOrArr){
            const Type = getClassForType(objOrArr[i36]);
            const val = new Type(objOrArr[i36]).toArray();
            entries.push([
                i36,
                Type,
                val.length,
                ...val
            ]);
        }
        entries.sort(sortByKey);
        this.values = entries.reduce((last, curr)=>last.concat(curr), []);
        return this;
    }
    toArray() {
        return this.values;
    }
    valueOf() {
        const obj = {};
        const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {
        while(arr.length){
            const key = arr.shift();
            const Type = arr.shift();
            const num = arr.shift();
            const values = arr.splice(0, num);
            obj[key] = new Type(values); // .valueOf()
        }
        return obj;
    }
}
const morphableTypes = [
    NonMorphable,
    TransformBag,
    ObjectBag
];
function registerMorphableType(type = []) {
    morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
    extend(morphableTypes, {
        to (val) {
            return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
            .to(val);
        },
        fromArray (arr) {
            this.init(arr);
            return this;
        },
        toConsumable () {
            return this.toArray();
        },
        morph (from2, to2, pos, stepper, context) {
            const mapper = function(i37, index) {
                return stepper.step(i37, to2[index], pos, context[index], context);
            };
            return this.fromArray(from2.map(mapper));
        }
    });
}
class Path extends Shape {
    // Initialize node
    constructor(node, attrs13 = node){
        super(nodeOrNew("path", node), attrs13);
    }
    array() {
        return this._array || (this._array = new PathArray(this.attr("d")));
    }
    clear() {
        delete this._array;
        return this;
    }
    height(height19) {
        return height19 == null ? this.bbox().height : this.size(this.bbox().width, height19);
    }
    move(x37, y39) {
        return this.attr("d", this.array().move(x37, y39));
    }
    plot(d) {
        return d == null ? this.array() : this.clear().attr("d", typeof d === "string" ? d : this._array = new PathArray(d));
    }
    size(width19, height20) {
        const p = proportionalSize(this, width19, height20);
        return this.attr("d", this.array().size(p.width, p.height));
    }
    width(width20) {
        return width20 == null ? this.bbox().width : this.size(width20, this.bbox().height);
    }
    x(x38) {
        return x38 == null ? this.bbox().x : this.move(x38, this.bbox().y);
    }
    y(y40) {
        return y40 == null ? this.bbox().y : this.move(this.bbox().x, y40);
    }
} // Define morphable array
Path.prototype.MorphArray = PathArray; // Add parent method
registerMethods({
    Container: {
        // Create a wrapped path element
        path: wrapWithAttrCheck(function(d) {
            // make sure plot is called as a setter
            return this.put(new Path()).plot(d || new PathArray());
        })
    }
});
register(Path, "Path");
function array() {
    return this._array || (this._array = new PointArray(this.attr("points")));
} // Clear array cache
function clear() {
    delete this._array;
    return this;
} // Move by left top corner
function move$2(x39, y41) {
    return this.attr("points", this.array().move(x39, y41));
} // Plot new path
function plot(p) {
    return p == null ? this.array() : this.clear().attr("points", typeof p === "string" ? p : this._array = new PointArray(p));
} // Set element size to given width and height
function size$1(width21, height21) {
    const p = proportionalSize(this, width21, height21);
    return this.attr("points", this.array().size(p.width, p.height));
}
var poly = {
    __proto__: null,
    array: array,
    clear: clear,
    move: move$2,
    plot: plot,
    size: size$1
};
class Polygon extends Shape {
    // Initialize node
    constructor(node, attrs14 = node){
        super(nodeOrNew("polygon", node), attrs14);
    }
}
registerMethods({
    Container: {
        // Create a wrapped polygon element
        polygon: wrapWithAttrCheck(function(p) {
            // make sure plot is called as a setter
            return this.put(new Polygon()).plot(p || new PointArray());
        })
    }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, "Polygon");
class Polyline extends Shape {
    // Initialize node
    constructor(node, attrs15 = node){
        super(nodeOrNew("polyline", node), attrs15);
    }
}
registerMethods({
    Container: {
        // Create a wrapped polygon element
        polyline: wrapWithAttrCheck(function(p) {
            // make sure plot is called as a setter
            return this.put(new Polyline()).plot(p || new PointArray());
        })
    }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, "Polyline");
class Rect extends Shape {
    // Initialize node
    constructor(node, attrs16 = node){
        super(nodeOrNew("rect", node), attrs16);
    }
}
extend(Rect, {
    rx,
    ry
});
registerMethods({
    Container: {
        // Create a rect element
        rect: wrapWithAttrCheck(function(width22, height22) {
            return this.put(new Rect()).size(width22, height22);
        })
    }
});
register(Rect, "Rect");
class Queue {
    constructor(){
        this._first = null;
        this._last = null;
    }
    first() {
        return this._first && this._first.value;
    }
    last() {
        return this._last && this._last.value;
    }
    push(value) {
        // An item stores an id and the provided value
        const item = typeof value.next !== "undefined" ? value : {
            value: value,
            next: null,
            prev: null
        }; // Deal with the queue being empty or populated
        if (this._last) {
            item.prev = this._last;
            this._last.next = item;
            this._last = item;
        } else {
            this._last = item;
            this._first = item;
        } // Return the current item
        return item;
    }
    remove(item) {
        // Relink the previous item
        if (item.prev) item.prev.next = item.next;
        if (item.next) item.next.prev = item.prev;
        if (item === this._last) this._last = item.prev;
        if (item === this._first) this._first = item.next; // Invalidate item
        item.prev = null;
        item.next = null;
    }
    shift() {
        // Check if we have a value
        const remove = this._first;
        if (!remove) return null; // If we do, remove it and relink things
        this._first = remove.next;
        if (this._first) this._first.prev = null;
        this._last = this._first ? this._last : null;
        return remove.value;
    }
}
const Animator = {
    nextDraw: null,
    frames: new Queue(),
    timeouts: new Queue(),
    immediates: new Queue(),
    timer: ()=>globals.window.performance || globals.window.Date,
    transforms: [],
    frame (fn) {
        // Store the node
        const node = Animator.frames.push({
            run: fn
        }); // Request an animation frame if we don't have one
        if (Animator.nextDraw === null) Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
         // Return the node so we can remove it easily
        return node;
    },
    timeout (fn, delay) {
        delay = delay || 0; // Work out when the event should fire
        const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue
        const node = Animator.timeouts.push({
            run: fn,
            time: time
        }); // Request another animation frame if we need one
        if (Animator.nextDraw === null) Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
        return node;
    },
    immediate (fn) {
        // Add the immediate fn to the end of the queue
        const node = Animator.immediates.push(fn); // Request another animation frame if we need one
        if (Animator.nextDraw === null) Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
        return node;
    },
    cancelFrame (node) {
        node != null && Animator.frames.remove(node);
    },
    clearTimeout (node) {
        node != null && Animator.timeouts.remove(node);
    },
    cancelImmediate (node) {
        node != null && Animator.immediates.remove(node);
    },
    _draw (now) {
        // Run all the timeouts we can run, if they are not ready yet, add them
        // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
        let nextTimeout = null;
        const lastTimeout = Animator.timeouts.last();
        while(nextTimeout = Animator.timeouts.shift()){
            // Run the timeout if its time, or push it to the end
            if (now >= nextTimeout.time) nextTimeout.run();
            else Animator.timeouts.push(nextTimeout);
             // If we hit the last item, we should stop shifting out more items
            if (nextTimeout === lastTimeout) break;
        } // Run all of the animation frames
        let nextFrame = null;
        const lastFrame = Animator.frames.last();
        while(nextFrame !== lastFrame && (nextFrame = Animator.frames.shift()))nextFrame.run(now);
        let nextImmediate = null;
        while(nextImmediate = Animator.immediates.shift())nextImmediate();
         // If we have remaining timeouts or frames, draw until we don't anymore
        Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
    }
};
const makeSchedule = function(runnerInfo) {
    const start = runnerInfo.start;
    const duration = runnerInfo.runner.duration();
    const end = start + duration;
    return {
        start: start,
        duration: duration,
        end: end,
        runner: runnerInfo.runner
    };
};
const defaultSource = function() {
    const w = globals.window;
    return (w.performance || w.Date).now();
};
class Timeline extends EventTarget {
    // Construct a new timeline on the given element
    constructor(timeSource = defaultSource){
        super();
        this._timeSource = timeSource; // Store the timing variables
        this._startTime = 0;
        this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false
        this._persist = 0; // Keep track of the running animations and their starting parameters
        this._nextFrame = null;
        this._paused = true;
        this._runners = [];
        this._runnerIds = [];
        this._lastRunnerId = -1;
        this._time = 0;
        this._lastSourceTime = 0;
        this._lastStepTime = 0; // Make sure that step is always called in class context
        this._step = this._stepFn.bind(this, false);
        this._stepImmediate = this._stepFn.bind(this, true);
    }
    active() {
        return !!this._nextFrame;
    }
    finish() {
        // Go to end and pause
        this.time(this.getEndTimeOfTimeline() + 1);
        return this.pause();
    }
    getEndTime() {
        const lastRunnerInfo = this.getLastRunnerInfo();
        const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
        const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
        return lastStartTime + lastDuration;
    }
    getEndTimeOfTimeline() {
        const endTimes = this._runners.map((i38)=>i38.start + i38.runner.duration());
        return Math.max(0, ...endTimes);
    }
    getLastRunnerInfo() {
        return this.getRunnerInfoById(this._lastRunnerId);
    }
    getRunnerInfoById(id) {
        return this._runners[this._runnerIds.indexOf(id)] || null;
    }
    pause() {
        this._paused = true;
        return this._continue();
    }
    persist(dtOrForever) {
        if (dtOrForever == null) return this._persist;
        this._persist = dtOrForever;
        return this;
    }
    play() {
        // Now make sure we are not paused and continue the animation
        this._paused = false;
        return this.updateTime()._continue();
    }
    reverse(yes) {
        const currentSpeed = this.speed();
        if (yes == null) return this.speed(-currentSpeed);
        const positive = Math.abs(currentSpeed);
        return this.speed(yes ? -positive : positive);
    }
    schedule(runner, delay, when) {
        if (runner == null) return this._runners.map(makeSchedule);
         // The start time for the next animation can either be given explicitly,
        // derived from the current timeline time or it can be relative to the
        // last start time to chain animations directly
        let absoluteStartTime = 0;
        const endTime = this.getEndTime();
        delay = delay || 0; // Work out when to start the animation
        if (when == null || when === "last" || when === "after") // Take the last time and increment
        absoluteStartTime = endTime;
        else if (when === "absolute" || when === "start") {
            absoluteStartTime = delay;
            delay = 0;
        } else if (when === "now") absoluteStartTime = this._time;
        else if (when === "relative") {
            const runnerInfo = this.getRunnerInfoById(runner.id);
            if (runnerInfo) {
                absoluteStartTime = runnerInfo.start + delay;
                delay = 0;
            }
        } else if (when === "with-last") {
            const lastRunnerInfo = this.getLastRunnerInfo();
            const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
            absoluteStartTime = lastStartTime;
        } else throw new Error('Invalid value for the "when" parameter');
         // Manage runner
        runner.unschedule();
        runner.timeline(this);
        const persist = runner.persist();
        const runnerInfo = {
            persist: persist === null ? this._persist : persist,
            start: absoluteStartTime + delay,
            runner
        };
        this._lastRunnerId = runner.id;
        this._runners.push(runnerInfo);
        this._runners.sort((a, b)=>a.start - b.start);
        this._runnerIds = this._runners.map((info)=>info.runner.id);
        this.updateTime()._continue();
        return this;
    }
    seek(dt) {
        return this.time(this._time + dt);
    }
    source(fn) {
        if (fn == null) return this._timeSource;
        this._timeSource = fn;
        return this;
    }
    speed(speed) {
        if (speed == null) return this._speed;
        this._speed = speed;
        return this;
    }
    stop() {
        // Go to start and pause
        this.time(0);
        return this.pause();
    }
    time(time) {
        if (time == null) return this._time;
        this._time = time;
        return this._continue(true);
    }
    unschedule(runner) {
        const index = this._runnerIds.indexOf(runner.id);
        if (index < 0) return this;
        this._runners.splice(index, 1);
        this._runnerIds.splice(index, 1);
        runner.timeline(null);
        return this;
    }
    updateTime() {
        if (!this.active()) this._lastSourceTime = this._timeSource();
        return this;
    }
    _continue(immediateStep = false) {
        Animator.cancelFrame(this._nextFrame);
        this._nextFrame = null;
        if (immediateStep) return this._stepImmediate();
        if (this._paused) return this;
        this._nextFrame = Animator.frame(this._step);
        return this;
    }
    _stepFn(immediateStep = false) {
        // Get the time delta from the last time and update the time
        const time = this._timeSource();
        let dtSource = time - this._lastSourceTime;
        if (immediateStep) dtSource = 0;
        const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
        this._lastSourceTime = time; // Only update the time if we use the timeSource.
        // Otherwise use the current time
        if (!immediateStep) {
            // Update the time
            this._time += dtTime;
            this._time = this._time < 0 ? 0 : this._time;
        }
        this._lastStepTime = this._time;
        this.fire("time", this._time); // This is for the case that the timeline was seeked so that the time
        // is now before the startTime of the runner. Thats why we need to set
        // the runner to position 0
        // FIXME:
        // However, reseting in insertion order leads to bugs. Considering the case,
        // where 2 runners change the same attribute but in different times,
        // reseting both of them will lead to the case where the later defined
        // runner always wins the reset even if the other runner started earlier
        // and therefore should win the attribute battle
        // this can be solved by reseting them backwards
        for(let k = this._runners.length; k--;){
            // Get and run the current runner and ignore it if its inactive
            const runnerInfo = this._runners[k];
            const runner = runnerInfo.runner; // Make sure that we give the actual difference
            // between runner start time and now
            const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
            // and try to reset it
            if (dtToStart <= 0) runner.reset();
        } // Run all of the runners directly
        let runnersLeft = false;
        for(let i39 = 0, len = this._runners.length; i39 < len; i39++){
            // Get and run the current runner and ignore it if its inactive
            const runnerInfo = this._runners[i39];
            const runner = runnerInfo.runner;
            let dt = dtTime; // Make sure that we give the actual difference
            // between runner start time and now
            const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
            if (dtToStart <= 0) {
                runnersLeft = true;
                continue;
            } else if (dtToStart < dt) // Adjust dt to make sure that animation is on point
            dt = dtToStart;
            if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
            // frame, otherwise, remove the completed runner
            const finished = runner.step(dt).done;
            if (!finished) runnersLeft = true; // continue
            else if (runnerInfo.persist !== true) {
                // runner is finished. And runner might get removed
                const endTime = runner.duration() - runner.time() + this._time;
                if (endTime + runnerInfo.persist < this._time) {
                    // Delete runner and correct index
                    runner.unschedule();
                    --i39;
                    --len;
                }
            }
        } // Basically: we continue when there are runners right from us in time
        // when -->, and when runners are left from us when <--
        if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) this._continue();
        else {
            this.pause();
            this.fire("finished");
        }
        return this;
    }
}
registerMethods({
    Element: {
        timeline: function(timeline1) {
            if (timeline1 == null) {
                this._timeline = this._timeline || new Timeline();
                return this._timeline;
            } else {
                this._timeline = timeline1;
                return this;
            }
        }
    }
});
class Runner extends EventTarget {
    constructor(options){
        super(); // Store a unique id on the runner, so that we can identify it later
        this.id = Runner.id++; // Ensure a default value
        options = options == null ? timeline.duration : options; // Ensure that we get a controller
        options = typeof options === "function" ? new Controller(options) : options; // Declare all of the variables
        this._element = null;
        this._timeline = null;
        this.done = false;
        this._queue = []; // Work out the stepper and the duration
        this._duration = typeof options === "number" && options;
        this._isDeclarative = options instanceof Controller;
        this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change
        this._history = {}; // Store the state of the runner
        this.enabled = true;
        this._time = 0;
        this._lastTime = 0; // At creation, the runner is in reseted state
        this._reseted = true; // Save transforms applied to this runner
        this.transforms = new Matrix();
        this.transformId = 1; // Looping variables
        this._haveReversed = false;
        this._reverse = false;
        this._loopsDone = 0;
        this._swing = false;
        this._wait = 0;
        this._times = 1;
        this._frameId = null; // Stores how long a runner is stored after beeing done
        this._persist = this._isDeclarative ? true : null;
    }
    static sanitise(duration, delay, when) {
        // Initialise the default parameters
        let times = 1;
        let swing = false;
        let wait = 0;
        duration = duration || timeline.duration;
        delay = delay || timeline.delay;
        when = when || "last"; // If we have an object, unpack the values
        if (typeof duration === "object" && !(duration instanceof Stepper)) {
            delay = duration.delay || delay;
            when = duration.when || when;
            swing = duration.swing || swing;
            times = duration.times || times;
            wait = duration.wait || wait;
            duration = duration.duration || timeline.duration;
        }
        return {
            duration: duration,
            delay: delay,
            swing: swing,
            times: times,
            wait: wait,
            when: when
        };
    }
    active(enabled) {
        if (enabled == null) return this.enabled;
        this.enabled = enabled;
        return this;
    }
    /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */ addTransform(transform2, index) {
        this.transforms.lmultiplyO(transform2);
        return this;
    }
    after(fn) {
        return this.on("finished", fn);
    }
    animate(duration, delay, when) {
        const o = Runner.sanitise(duration, delay, when);
        const runner = new Runner(o.duration);
        if (this._timeline) runner.timeline(this._timeline);
        if (this._element) runner.element(this._element);
        return runner.loop(o).schedule(o.delay, o.when);
    }
    clearTransform() {
        this.transforms = new Matrix();
        return this;
    }
    clearTransformsFromQueue() {
        if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) this._queue = this._queue.filter((item)=>{
            return !item.isTransform;
        });
    }
    delay(delay) {
        return this.animate(0, delay);
    }
    duration() {
        return this._times * (this._wait + this._duration) - this._wait;
    }
    during(fn) {
        return this.queue(null, fn);
    }
    ease(fn) {
        this._stepper = new Ease(fn);
        return this;
    }
    /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */ element(element) {
        if (element == null) return this._element;
        this._element = element;
        element._prepareRunner();
        return this;
    }
    finish() {
        return this.step(Infinity);
    }
    loop(times, swing, wait) {
        // Deal with the user passing in an object
        if (typeof times === "object") {
            swing = times.swing;
            wait = times.wait;
            times = times.times;
        } // Sanitise the values and store them
        this._times = times || Infinity;
        this._swing = swing || false;
        this._wait = wait || 0; // Allow true to be passed
        if (this._times === true) this._times = Infinity;
        return this;
    }
    loops(p) {
        const loopDuration = this._duration + this._wait;
        if (p == null) {
            const loopsDone = Math.floor(this._time / loopDuration);
            const relativeTime = this._time - loopsDone * loopDuration;
            const position3 = relativeTime / this._duration;
            return Math.min(loopsDone + position3, this._times);
        }
        const whole = Math.floor(p);
        const partial = p % 1;
        const time = loopDuration * whole + this._duration * partial;
        return this.time(time);
    }
    persist(dtOrForever) {
        if (dtOrForever == null) return this._persist;
        this._persist = dtOrForever;
        return this;
    }
    position(p) {
        // Get all of the variables we need
        const x40 = this._time;
        const d = this._duration;
        const w = this._wait;
        const t = this._times;
        const s = this._swing;
        const r = this._reverse;
        let position4;
        if (p == null) {
            /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */ // Figure out the value without thinking about the start or end time
            const f = function(x41) {
                const swinging = s * Math.floor(x41 % (2 * (w + d)) / (w + d));
                const backwards = swinging && !r || !swinging && r;
                const uncliped = Math.pow(-1, backwards) * (x41 % (w + d)) / d + backwards;
                const clipped = Math.max(Math.min(uncliped, 1), 0);
                return clipped;
            }; // Figure out the value by incorporating the start time
            const endTime = t * (w + d) - w;
            position4 = x40 <= 0 ? Math.round(f(1e-5)) : x40 < endTime ? f(x40) : Math.round(f(endTime - 1e-5));
            return position4;
        } // Work out the loops done and add the position to the loops done
        const loopsDone = Math.floor(this.loops());
        const swingForward = s && loopsDone % 2 === 0;
        const forwards = swingForward && !r || r && swingForward;
        position4 = loopsDone + (forwards ? p : 1 - p);
        return this.loops(position4);
    }
    progress(p) {
        if (p == null) return Math.min(1, this._time / this.duration());
        return this.time(p * this.duration());
    }
    /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */ queue(initFn, runFn, retargetFn, isTransform) {
        this._queue.push({
            initialiser: initFn || noop,
            runner: runFn || noop,
            retarget: retargetFn,
            isTransform: isTransform,
            initialised: false,
            finished: false
        });
        const timeline2 = this.timeline();
        timeline2 && this.timeline()._continue();
        return this;
    }
    reset() {
        if (this._reseted) return this;
        this.time(0);
        this._reseted = true;
        return this;
    }
    reverse(reverse) {
        this._reverse = reverse == null ? !this._reverse : reverse;
        return this;
    }
    schedule(timeline3, delay, when) {
        // The user doesn't need to pass a timeline if we already have one
        if (!(timeline3 instanceof Timeline)) {
            when = delay;
            delay = timeline3;
            timeline3 = this.timeline();
        } // If there is no timeline, yell at the user...
        if (!timeline3) throw Error("Runner cannot be scheduled without timeline");
         // Schedule the runner on the timeline provided
        timeline3.schedule(this, delay, when);
        return this;
    }
    step(dt) {
        // If we are inactive, this stepper just gets skipped
        if (!this.enabled) return this; // Update the time and get the new position
        dt = dt == null ? 16 : dt;
        this._time += dt;
        const position5 = this.position(); // Figure out if we need to run the stepper in this frame
        const running = this._lastPosition !== position5 && this._time >= 0;
        this._lastPosition = position5; // Figure out if we just started
        const duration = this.duration();
        const justStarted = this._lastTime <= 0 && this._time > 0;
        const justFinished = this._lastTime < duration && this._time >= duration;
        this._lastTime = this._time;
        if (justStarted) this.fire("start", this);
         // Work out if the runner is finished set the done flag here so animations
        // know, that they are running in the last step (this is good for
        // transformations which can be merged)
        const declarative = this._isDeclarative;
        this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore
        this._reseted = false;
        let converged = false; // Call initialise and the run function
        if (running || declarative) {
            this._initialise(running); // clear the transforms on this runner so they dont get added again and again
            this.transforms = new Matrix();
            converged = this._run(declarative ? dt : position5);
            this.fire("step", this);
        } // correct the done flag here
        // declaritive animations itself know when they converged
        this.done = this.done || converged && declarative;
        if (justFinished) this.fire("finished", this);
        return this;
    }
    /*
  Runner animation methods
  ========================
  Control how the animation plays
  */ time(time) {
        if (time == null) return this._time;
        const dt = time - this._time;
        this.step(dt);
        return this;
    }
    timeline(timeline4) {
        // check explicitly for undefined so we can set the timeline to null
        if (typeof timeline4 === "undefined") return this._timeline;
        this._timeline = timeline4;
        return this;
    }
    unschedule() {
        const timeline5 = this.timeline();
        timeline5 && timeline5.unschedule(this);
        return this;
    }
    _initialise(running) {
        // If we aren't running, we shouldn't initialise when not declarative
        if (!running && !this._isDeclarative) return; // Loop through all of the initialisers
        for(let i40 = 0, len = this._queue.length; i40 < len; ++i40){
            // Get the current initialiser
            const current = this._queue[i40]; // Determine whether we need to initialise
            const needsIt = this._isDeclarative || !current.initialised && running;
            running = !current.finished; // Call the initialiser if we need to
            if (needsIt && running) {
                current.initialiser.call(this);
                current.initialised = true;
            }
        }
    }
    _rememberMorpher(method, morpher) {
        this._history[method] = {
            morpher: morpher,
            caller: this._queue[this._queue.length - 1]
        }; // We have to resume the timeline in case a controller
        // is already done without being ever run
        // This can happen when e.g. this is done:
        //    anim = el.animate(new SVG.Spring)
        // and later
        //    anim.move(...)
        if (this._isDeclarative) {
            const timeline6 = this.timeline();
            timeline6 && timeline6.play();
        }
    }
    // Run each run function for the position or dt given
    _run(positionOrDt) {
        // Run all of the _queue directly
        let allfinished = true;
        for(let i41 = 0, len = this._queue.length; i41 < len; ++i41){
            // Get the current function to run
            const current = this._queue[i41]; // Run the function if its not finished, we keep track of the finished
            // flag for the sake of declarative _queue
            const converged = current.runner.call(this, positionOrDt);
            current.finished = current.finished || converged === true;
            allfinished = allfinished && current.finished;
        } // We report when all of the constructors are finished
        return allfinished;
    }
    _tryRetarget(method, target, extra) {
        if (this._history[method]) {
            // if the last method wasnt even initialised, throw it away
            if (!this._history[method].caller.initialised) {
                const index = this._queue.indexOf(this._history[method].caller);
                this._queue.splice(index, 1);
                return false;
            } // for the case of transformations, we use the special retarget function
            // which has access to the outer scope
            if (this._history[method].caller.retarget) this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient
            else this._history[method].morpher.to(target);
            this._history[method].caller.finished = false;
            const timeline7 = this.timeline();
            timeline7 && timeline7.play();
            return true;
        }
        return false;
    }
}
Runner.id = 0;
class FakeRunner {
    constructor(transforms1 = new Matrix(), id = -1, done = true){
        this.transforms = transforms1;
        this.id = id;
        this.done = done;
    }
    clearTransformsFromQueue() {}
}
extend([
    Runner,
    FakeRunner
], {
    mergeWith (runner) {
        return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
    }
}); // FakeRunner.emptyRunner = new FakeRunner()
const lmultiply = (last, curr)=>last.lmultiplyO(curr);
const getRunnerTransform = (runner)=>runner.transforms;
function mergeTransforms() {
    // Find the matrix to apply to the element and apply it
    const runners = this._transformationRunners.runners;
    const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
    this.transform(netTransform);
    this._transformationRunners.merge();
    if (this._transformationRunners.length() === 1) this._frameId = null;
}
class RunnerArray {
    constructor(){
        this.runners = [];
        this.ids = [];
    }
    add(runner) {
        if (this.runners.includes(runner)) return;
        const id = runner.id + 1;
        this.runners.push(runner);
        this.ids.push(id);
        return this;
    }
    clearBefore(id) {
        const deleteCnt = this.ids.indexOf(id + 1) || 1;
        this.ids.splice(0, deleteCnt, 0);
        this.runners.splice(0, deleteCnt, new FakeRunner()).forEach((r)=>r.clearTransformsFromQueue());
        return this;
    }
    edit(id, newRunner) {
        const index = this.ids.indexOf(id + 1);
        this.ids.splice(index, 1, id + 1);
        this.runners.splice(index, 1, newRunner);
        return this;
    }
    getByID(id) {
        return this.runners[this.ids.indexOf(id + 1)];
    }
    length() {
        return this.ids.length;
    }
    merge() {
        let lastRunner = null;
        for(let i42 = 0; i42 < this.runners.length; ++i42){
            const runner = this.runners[i42];
            const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
             && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));
            if (condition) {
                // the +1 happens in the function
                this.remove(runner.id);
                const newRunner = runner.mergeWith(lastRunner);
                this.edit(lastRunner.id, newRunner);
                lastRunner = newRunner;
                --i42;
            } else lastRunner = runner;
        }
        return this;
    }
    remove(id) {
        const index = this.ids.indexOf(id + 1);
        this.ids.splice(index, 1);
        this.runners.splice(index, 1);
        return this;
    }
}
registerMethods({
    Element: {
        animate (duration, delay, when) {
            const o = Runner.sanitise(duration, delay, when);
            const timeline8 = this.timeline();
            return new Runner(o.duration).loop(o).element(this).timeline(timeline8.play()).schedule(o.delay, o.when);
        },
        delay (by, when) {
            return this.animate(0, by, when);
        },
        // this function searches for all runners on the element and deletes the ones
        // which run before the current one. This is because absolute transformations
        // overwfrite anything anyway so there is no need to waste time computing
        // other runners
        _clearTransformRunnersBefore (currentRunner) {
            this._transformationRunners.clearBefore(currentRunner.id);
        },
        _currentTransform (current) {
            return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
            // on the same runner which execute before the current transformation are
            // taken into account
            .filter((runner)=>runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
        },
        _addRunner (runner) {
            this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
            // all Animator functions. Thats why we use immediate here to execute
            // the merge right after all frames are run
            Animator.cancelImmediate(this._frameId);
            this._frameId = Animator.immediate(mergeTransforms.bind(this));
        },
        _prepareRunner () {
            if (this._frameId == null) this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
        }
    }
}); // Will output the elements from array A that are not in the array B
const difference = (a, b)=>a.filter((x42)=>!b.includes(x42));
extend(Runner, {
    attr (a, v) {
        return this.styleAttr("attr", a, v);
    },
    // Add animatable styles
    css (s, v) {
        return this.styleAttr("css", s, v);
    },
    styleAttr (type, nameOrAttrs, val) {
        if (typeof nameOrAttrs === "string") return this.styleAttr(type, {
            [nameOrAttrs]: val
        });
        let attrs17 = nameOrAttrs;
        if (this._tryRetarget(type, attrs17)) return this;
        let morpher = new Morphable(this._stepper).to(attrs17);
        let keys = Object.keys(attrs17);
        this.queue(function() {
            morpher = morpher.from(this.element()[type](keys));
        }, function(pos) {
            this.element()[type](morpher.at(pos).valueOf());
            return morpher.done();
        }, function(newToAttrs) {
            // Check if any new keys were added
            const newKeys = Object.keys(newToAttrs);
            const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher
            if (differences.length) {
                // Get the values
                const addedFromAttrs = this.element()[type](differences); // Get the already initialized values
                const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new
                Object.assign(oldFromAttrs, addedFromAttrs);
                morpher.from(oldFromAttrs);
            } // Get the object from the morpher
            const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes
            Object.assign(oldToAttrs, newToAttrs); // Change morpher target
            morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again
            keys = newKeys;
            attrs17 = newToAttrs;
        });
        this._rememberMorpher(type, morpher);
        return this;
    },
    zoom (level, point2) {
        if (this._tryRetarget("zoom", level, point2)) return this;
        let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
        this.queue(function() {
            morpher = morpher.from(this.element().zoom());
        }, function(pos) {
            this.element().zoom(morpher.at(pos), point2);
            return morpher.done();
        }, function(newLevel, newPoint) {
            point2 = newPoint;
            morpher.to(newLevel);
        });
        this._rememberMorpher("zoom", morpher);
        return this;
    },
    /**
   ** absolute transformations
   **/ //
    // M v -----|-----(D M v = F v)------|----->  T v
    //
    // 1. define the final state (T) and decompose it (once)
    //    t = [tx, ty, the, lam, sy, sx]
    // 2. on every frame: pull the current state of all previous transforms
    //    (M - m can change)
    //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
    // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
    //   - Note F(0) = M
    //   - Note F(1) = T
    // 4. Now you get the delta matrix as a result: D = F * inv(M)
    transform (transforms2, relative, affine) {
        // If we have a declarative function, we should retarget it if possible
        relative = transforms2.relative || relative;
        if (this._isDeclarative && !relative && this._tryRetarget("transform", transforms2)) return this;
         // Parse the parameters
        const isMatrix = Matrix.isMatrixLike(transforms2);
        affine = transforms2.affine != null ? transforms2.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type
        const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
        let origin;
        let element;
        let current;
        let currentAngle;
        let startTransform;
        function setup() {
            // make sure element and origin is defined
            element = element || this.element();
            origin = origin || getOrigin(transforms2, element);
            startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations
            element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute
            if (!relative) element._clearTransformRunnersBefore(this);
        }
        function run(pos) {
            // clear all other transforms before this in case something is saved
            // on this runner. We are absolute. We dont need these!
            if (!relative) this.clearTransform();
            const { x: x43 , y: y42  } = new Point(origin).transform(element._currentTransform(this));
            let target = new Matrix({
                ...transforms2,
                origin: [
                    x43,
                    y42
                ]
            });
            let start = this._isDeclarative && current ? current : startTransform;
            if (affine) {
                target = target.decompose(x43, y42);
                start = start.decompose(x43, y42); // Get the current and target angle as it was set
                const rTarget = target.rotate;
                const rCurrent = start.rotate; // Figure out the shortest path to rotate directly
                const possibilities = [
                    rTarget - 360,
                    rTarget,
                    rTarget + 360
                ];
                const distances = possibilities.map((a)=>Math.abs(a - rCurrent));
                const shortest = Math.min(...distances);
                const index = distances.indexOf(shortest);
                target.rotate = possibilities[index];
            }
            if (relative) {
                // we have to be careful here not to overwrite the rotation
                // with the rotate method of Matrix
                if (!isMatrix) target.rotate = transforms2.rotate || 0;
                if (this._isDeclarative && currentAngle) start.rotate = currentAngle;
            }
            morpher.from(start);
            morpher.to(target);
            const affineParameters = morpher.at(pos);
            currentAngle = affineParameters.rotate;
            current = new Matrix(affineParameters);
            this.addTransform(current);
            element._addRunner(this);
            return morpher.done();
        }
        function retarget(newTransforms) {
            // only get a new origin if it changed since the last call
            if ((newTransforms.origin || "center").toString() !== (transforms2.origin || "center").toString()) origin = getOrigin(newTransforms, element);
             // overwrite the old transformations with the new ones
            transforms2 = {
                ...newTransforms,
                origin
            };
        }
        this.queue(setup, run, retarget, true);
        this._isDeclarative && this._rememberMorpher("transform", morpher);
        return this;
    },
    // Animatable x-axis
    x (x44, relative) {
        return this._queueNumber("x", x44);
    },
    // Animatable y-axis
    y (y43) {
        return this._queueNumber("y", y43);
    },
    dx (x45 = 0) {
        return this._queueNumberDelta("x", x45);
    },
    dy (y44 = 0) {
        return this._queueNumberDelta("y", y44);
    },
    dmove (x46, y45) {
        return this.dx(x46).dy(y45);
    },
    _queueNumberDelta (method, to3) {
        to3 = new SVGNumber(to3); // Try to change the target if we have this method already registerd
        if (this._tryRetarget(method, to3)) return this; // Make a morpher and queue the animation
        const morpher = new Morphable(this._stepper).to(to3);
        let from3 = null;
        this.queue(function() {
            from3 = this.element()[method]();
            morpher.from(from3);
            morpher.to(from3 + to3);
        }, function(pos) {
            this.element()[method](morpher.at(pos));
            return morpher.done();
        }, function(newTo) {
            morpher.to(from3 + new SVGNumber(newTo));
        }); // Register the morpher so that if it is changed again, we can retarget it
        this._rememberMorpher(method, morpher);
        return this;
    },
    _queueObject (method, to4) {
        // Try to change the target if we have this method already registerd
        if (this._tryRetarget(method, to4)) return this; // Make a morpher and queue the animation
        const morpher = new Morphable(this._stepper).to(to4);
        this.queue(function() {
            morpher.from(this.element()[method]());
        }, function(pos) {
            this.element()[method](morpher.at(pos));
            return morpher.done();
        }); // Register the morpher so that if it is changed again, we can retarget it
        this._rememberMorpher(method, morpher);
        return this;
    },
    _queueNumber (method, value) {
        return this._queueObject(method, new SVGNumber(value));
    },
    // Animatable center x-axis
    cx (x47) {
        return this._queueNumber("cx", x47);
    },
    // Animatable center y-axis
    cy (y46) {
        return this._queueNumber("cy", y46);
    },
    // Add animatable move
    move (x48, y47) {
        return this.x(x48).y(y47);
    },
    // Add animatable center
    center (x49, y48) {
        return this.cx(x49).cy(y48);
    },
    // Add animatable size
    size (width23, height23) {
        // animate bbox based size for all other elements
        let box;
        if (!width23 || !height23) box = this._element.bbox();
        if (!width23) width23 = box.width / box.height * height23;
        if (!height23) height23 = box.height / box.width * width23;
        return this.width(width23).height(height23);
    },
    // Add animatable width
    width (width24) {
        return this._queueNumber("width", width24);
    },
    // Add animatable height
    height (height24) {
        return this._queueNumber("height", height24);
    },
    // Add animatable plot
    plot (a, b, c, d) {
        // Lines can be plotted with 4 arguments
        if (arguments.length === 4) return this.plot([
            a,
            b,
            c,
            d
        ]);
        if (this._tryRetarget("plot", a)) return this;
        const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
        this.queue(function() {
            morpher.from(this._element.array());
        }, function(pos) {
            this._element.plot(morpher.at(pos));
            return morpher.done();
        });
        this._rememberMorpher("plot", morpher);
        return this;
    },
    // Add leading method
    leading (value) {
        return this._queueNumber("leading", value);
    },
    // Add animatable viewbox
    viewbox (x50, y49, width25, height25) {
        return this._queueObject("viewbox", new Box(x50, y49, width25, height25));
    },
    update (o) {
        if (typeof o !== "object") return this.update({
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2]
        });
        if (o.opacity != null) this.attr("stop-opacity", o.opacity);
        if (o.color != null) this.attr("stop-color", o.color);
        if (o.offset != null) this.attr("offset", o.offset);
        return this;
    }
});
extend(Runner, {
    rx,
    ry,
    from,
    to
});
register(Runner, "Runner");
class Svg extends Container {
    constructor(node, attrs18 = node){
        super(nodeOrNew("svg", node), attrs18);
        this.namespace();
    }
    defs() {
        if (!this.isRoot()) return this.root().defs();
        return adopt(this.node.querySelector("defs")) || this.put(new Defs());
    }
    isRoot() {
        return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
    }
    namespace() {
        if (!this.isRoot()) return this.root().namespace();
        return this.attr({
            xmlns: svg,
            version: "1.1"
        }).attr("xmlns:xlink", xlink, xmlns).attr("xmlns:svgjs", svgjs, xmlns);
    }
    removeNamespace() {
        return this.attr({
            xmlns: null,
            version: null
        }).attr("xmlns:xlink", null, xmlns).attr("xmlns:svgjs", null, xmlns);
    }
    // If not, call root() from this element
    root() {
        if (this.isRoot()) return this;
        return super.root();
    }
}
registerMethods({
    Container: {
        // Create nested svg document
        nested: wrapWithAttrCheck(function() {
            return this.put(new Svg());
        })
    }
});
register(Svg, "Svg", true);
class Symbol extends Container {
    // Initialize node
    constructor(node, attrs19 = node){
        super(nodeOrNew("symbol", node), attrs19);
    }
}
registerMethods({
    Container: {
        symbol: wrapWithAttrCheck(function() {
            return this.put(new Symbol());
        })
    }
});
register(Symbol, "Symbol");
function plain(text) {
    // clear if build mode is disabled
    if (this._build === false) this.clear();
     // create text node
    this.node.appendChild(globals.document.createTextNode(text));
    return this;
} // Get length of text element
function length() {
    return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter
function x$1(x51, box = this.bbox()) {
    if (x51 == null) return box.x;
    return this.attr("x", this.attr("x") + x51 - box.x);
} // Move over y-axis
function y$1(y50, box = this.bbox()) {
    if (y50 == null) return box.y;
    return this.attr("y", this.attr("y") + y50 - box.y);
}
function move$1(x52, y51, box = this.bbox()) {
    return this.x(x52, box).y(y51, box);
} // Move center over x-axis
function cx(x53, box = this.bbox()) {
    if (x53 == null) return box.cx;
    return this.attr("x", this.attr("x") + x53 - box.cx);
} // Move center over y-axis
function cy(y52, box = this.bbox()) {
    if (y52 == null) return box.cy;
    return this.attr("y", this.attr("y") + y52 - box.cy);
}
function center(x54, y53, box = this.bbox()) {
    return this.cx(x54, box).cy(y53, box);
}
function ax(x55) {
    return this.attr("x", x55);
}
function ay(y54) {
    return this.attr("y", y54);
}
function amove(x56, y55) {
    return this.ax(x56).ay(y55);
} // Enable / disable build mode
function build(build1) {
    this._build = !!build1;
    return this;
}
var textable = {
    __proto__: null,
    plain: plain,
    length: length,
    x: x$1,
    y: y$1,
    move: move$1,
    cx: cx,
    cy: cy,
    center: center,
    ax: ax,
    ay: ay,
    amove: amove,
    build: build
};
class Text extends Shape {
    // Initialize node
    constructor(node, attrs20 = node){
        super(nodeOrNew("text", node), attrs20);
        this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding
        this._rebuild = true; // enable automatic updating of dy values
        this._build = false; // disable build mode for adding multiple lines
    }
    leading(value) {
        // act as getter
        if (value == null) return this.dom.leading;
         // act as setter
        this.dom.leading = new SVGNumber(value);
        return this.rebuild();
    }
    rebuild(rebuild) {
        // store new rebuild flag if given
        if (typeof rebuild === "boolean") this._rebuild = rebuild;
         // define position of all lines
        if (this._rebuild) {
            const self = this;
            let blankLineOffset = 0;
            const leading = this.dom.leading;
            this.each(function(i43) {
                const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue("font-size");
                const dy3 = leading * new SVGNumber(fontSize);
                if (this.dom.newLined) {
                    this.attr("x", self.attr("x"));
                    if (this.text() === "\n") blankLineOffset += dy3;
                    else {
                        this.attr("dy", i43 ? dy3 + blankLineOffset : 0);
                        blankLineOffset = 0;
                    }
                }
            });
            this.fire("rebuild");
        }
        return this;
    }
    setData(o) {
        this.dom = o;
        this.dom.leading = new SVGNumber(o.leading || 1.3);
        return this;
    }
    text(text) {
        // act as getter
        if (text === undefined) {
            const children = this.node.childNodes;
            let firstLine = 0;
            text = "";
            for(let i44 = 0, len = children.length; i44 < len; ++i44){
                // skip textPaths - they are no lines
                if (children[i44].nodeName === "textPath") {
                    if (i44 === 0) firstLine = 1;
                    continue;
                } // add newline if its not the first child and newLined is set to true
                if (i44 !== firstLine && children[i44].nodeType !== 3 && adopt(children[i44]).dom.newLined === true) text += "\n";
                 // add content of this node
                text += children[i44].textContent;
            }
            return text;
        } // remove existing content
        this.clear().build(true);
        if (typeof text === "function") // call block
        text.call(this, this);
        else {
            // store text and make sure text is not blank
            text = (text + "").split("\n"); // build new lines
            for(let j = 0, jl = text.length; j < jl; j++)this.newLine(text[j]);
        } // disable build mode and rebuild lines
        return this.build(false).rebuild();
    }
}
extend(Text, textable);
registerMethods({
    Container: {
        // Create text element
        text: wrapWithAttrCheck(function(text = "") {
            return this.put(new Text()).text(text);
        }),
        // Create plain text element
        plain: wrapWithAttrCheck(function(text = "") {
            return this.put(new Text()).plain(text);
        })
    }
});
register(Text, "Text");
class Tspan extends Shape {
    // Initialize node
    constructor(node, attrs21 = node){
        super(nodeOrNew("tspan", node), attrs21);
        this._build = false; // disable build mode for adding multiple lines
    }
    dx(dx3) {
        return this.attr("dx", dx3);
    }
    dy(dy4) {
        return this.attr("dy", dy4);
    }
    newLine() {
        // mark new line
        this.dom.newLined = true; // fetch parent
        const text = this.parent(); // early return in case we are not in a text element
        if (!(text instanceof Text)) return this;
        const i45 = text.index(this);
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue("font-size");
        const dy5 = text.dom.leading * new SVGNumber(fontSize); // apply new position
        return this.dy(i45 ? dy5 : 0).attr("x", text.x());
    }
    text(text) {
        if (text == null) return this.node.textContent + (this.dom.newLined ? "\n" : "");
        if (typeof text === "function") {
            this.clear().build(true);
            text.call(this, this);
            this.build(false);
        } else this.plain(text);
        return this;
    }
}
extend(Tspan, textable);
registerMethods({
    Tspan: {
        tspan: wrapWithAttrCheck(function(text = "") {
            const tspan = new Tspan(); // clear if build mode is disabled
            if (!this._build) this.clear();
             // add new tspan
            return this.put(tspan).text(text);
        })
    },
    Text: {
        newLine: function(text = "") {
            return this.tspan(text).newLine();
        }
    }
});
register(Tspan, "Tspan");
class Circle extends Shape {
    constructor(node, attrs22 = node){
        super(nodeOrNew("circle", node), attrs22);
    }
    radius(r) {
        return this.attr("r", r);
    }
    rx(rx3) {
        return this.attr("r", rx3);
    }
    ry(ry3) {
        return this.rx(ry3);
    }
    size(size1) {
        return this.radius(new SVGNumber(size1).divide(2));
    }
}
extend(Circle, {
    x: x$3,
    y: y$3,
    cx: cx$1,
    cy: cy$1,
    width: width$2,
    height: height$2
});
registerMethods({
    Container: {
        // Create circle element
        circle: wrapWithAttrCheck(function(size2 = 0) {
            return this.put(new Circle()).size(size2).move(0, 0);
        })
    }
});
register(Circle, "Circle");
class ClipPath extends Container {
    constructor(node, attrs23 = node){
        super(nodeOrNew("clipPath", node), attrs23);
    }
    remove() {
        // unclip all targets
        this.targets().forEach(function(el) {
            el.unclip();
        }); // remove clipPath from parent
        return super.remove();
    }
    targets() {
        return baseFind('svg [clip-path*="' + this.id() + '"]');
    }
}
registerMethods({
    Container: {
        // Create clipping element
        clip: wrapWithAttrCheck(function() {
            return this.defs().put(new ClipPath());
        })
    },
    Element: {
        // Distribute clipPath to svg element
        clipper () {
            return this.reference("clip-path");
        },
        clipWith (element) {
            // use given clip or create a new one
            const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask
            return this.attr("clip-path", 'url("#' + clipper.id() + '")');
        },
        // Unclip element
        unclip () {
            return this.attr("clip-path", null);
        }
    }
});
register(ClipPath, "ClipPath");
class ForeignObject extends Element {
    constructor(node, attrs24 = node){
        super(nodeOrNew("foreignObject", node), attrs24);
    }
}
registerMethods({
    Container: {
        foreignObject: wrapWithAttrCheck(function(width26, height26) {
            return this.put(new ForeignObject()).size(width26, height26);
        })
    }
});
register(ForeignObject, "ForeignObject");
function dmove(dx4, dy6) {
    this.children().forEach((child, i)=>{
        let bbox2; // We have to wrap this for elements that dont have a bbox
        // e.g. title and other descriptive elements
        try {
            // Get the childs bbox
            bbox2 = child.bbox();
        } catch (e) {
            return;
        } // Get childs matrix
        const m = new Matrix(child); // Translate childs matrix by amount and
        // transform it back into parents space
        const matrix = m.translate(dx4, dy6).transform(m.inverse()); // Calculate new x and y from old box
        const p = new Point(bbox2.x, bbox2.y).transform(matrix); // Move element
        child.move(p.x, p.y);
    });
    return this;
}
function dx(dx5) {
    return this.dmove(dx5, 0);
}
function dy(dy7) {
    return this.dmove(0, dy7);
}
function height(height27, box = this.bbox()) {
    if (height27 == null) return box.height;
    return this.size(box.width, height27, box);
}
function move(x57 = 0, y56 = 0, box = this.bbox()) {
    const dx6 = x57 - box.x;
    const dy8 = y56 - box.y;
    return this.dmove(dx6, dy8);
}
function size(width27, height28, box = this.bbox()) {
    const p = proportionalSize(this, width27, height28, box);
    const scaleX = p.width / box.width;
    const scaleY = p.height / box.height;
    this.children().forEach((child, i)=>{
        const o = new Point(box).transform(new Matrix(child).inverse());
        child.scale(scaleX, scaleY, o.x, o.y);
    });
    return this;
}
function width(width28, box = this.bbox()) {
    if (width28 == null) return box.width;
    return this.size(width28, box.height, box);
}
function x(x58, box = this.bbox()) {
    if (x58 == null) return box.x;
    return this.move(x58, box.y, box);
}
function y(y57, box = this.bbox()) {
    if (y57 == null) return box.y;
    return this.move(box.x, y57, box);
}
var containerGeometry = {
    __proto__: null,
    dmove: dmove,
    dx: dx,
    dy: dy,
    height: height,
    move: move,
    size: size,
    width: width,
    x: x,
    y: y
};
class G extends Container {
    constructor(node, attrs25 = node){
        super(nodeOrNew("g", node), attrs25);
    }
}
extend(G, containerGeometry);
registerMethods({
    Container: {
        // Create a group element
        group: wrapWithAttrCheck(function() {
            return this.put(new G());
        })
    }
});
register(G, "G");
class A extends Container {
    constructor(node, attrs26 = node){
        super(nodeOrNew("a", node), attrs26);
    }
    target(target) {
        return this.attr("target", target);
    }
    to(url) {
        return this.attr("href", url, xlink);
    }
}
extend(A, containerGeometry);
registerMethods({
    Container: {
        // Create a hyperlink element
        link: wrapWithAttrCheck(function(url) {
            return this.put(new A()).to(url);
        })
    },
    Element: {
        unlink () {
            const link = this.linker();
            if (!link) return this;
            const parent = link.parent();
            if (!parent) return this.remove();
            const index = parent.index(link);
            parent.add(this, index);
            link.remove();
            return this;
        },
        linkTo (url) {
            // reuse old link if possible
            let link = this.linker();
            if (!link) {
                link = new A();
                this.wrap(link);
            }
            if (typeof url === "function") url.call(link, link);
            else link.to(url);
            return this;
        },
        linker () {
            const link = this.parent();
            if (link && link.node.nodeName.toLowerCase() === "a") return link;
            return null;
        }
    }
});
register(A, "A");
class Mask extends Container {
    // Initialize node
    constructor(node, attrs27 = node){
        super(nodeOrNew("mask", node), attrs27);
    }
    remove() {
        // unmask all targets
        this.targets().forEach(function(el) {
            el.unmask();
        }); // remove mask from parent
        return super.remove();
    }
    targets() {
        return baseFind('svg [mask*="' + this.id() + '"]');
    }
}
registerMethods({
    Container: {
        mask: wrapWithAttrCheck(function() {
            return this.defs().put(new Mask());
        })
    },
    Element: {
        // Distribute mask to svg element
        masker () {
            return this.reference("mask");
        },
        maskWith (element) {
            // use given mask or create a new one
            const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask
            return this.attr("mask", 'url("#' + masker.id() + '")');
        },
        // Unmask element
        unmask () {
            return this.attr("mask", null);
        }
    }
});
register(Mask, "Mask");
class Stop extends Element {
    constructor(node, attrs28 = node){
        super(nodeOrNew("stop", node), attrs28);
    }
    update(o) {
        if (typeof o === "number" || o instanceof SVGNumber) o = {
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2]
        };
         // set attributes
        if (o.opacity != null) this.attr("stop-opacity", o.opacity);
        if (o.color != null) this.attr("stop-color", o.color);
        if (o.offset != null) this.attr("offset", new SVGNumber(o.offset));
        return this;
    }
}
registerMethods({
    Gradient: {
        // Add a color stop
        stop: function(offset, color, opacity) {
            return this.put(new Stop()).update(offset, color, opacity);
        }
    }
});
register(Stop, "Stop");
function cssRule(selector, rule) {
    if (!selector) return "";
    if (!rule) return selector;
    let ret = selector + "{";
    for(const i46 in rule)ret += unCamelCase(i46) + ":" + rule[i46] + ";";
    ret += "}";
    return ret;
}
class Style extends Element {
    constructor(node, attrs29 = node){
        super(nodeOrNew("style", node), attrs29);
    }
    addText(w = "") {
        this.node.textContent += w;
        return this;
    }
    font(name, src, params = {}) {
        return this.rule("@font-face", {
            fontFamily: name,
            src: src,
            ...params
        });
    }
    rule(selector, obj) {
        return this.addText(cssRule(selector, obj));
    }
}
registerMethods("Dom", {
    style (selector, obj) {
        return this.put(new Style()).rule(selector, obj);
    },
    fontface (name, src, params) {
        return this.put(new Style()).font(name, src, params);
    }
});
register(Style, "Style");
class TextPath extends Text {
    // Initialize node
    constructor(node, attrs30 = node){
        super(nodeOrNew("textPath", node), attrs30);
    }
    array() {
        const track = this.track();
        return track ? track.array() : null;
    }
    plot(d) {
        const track = this.track();
        let pathArray = null;
        if (track) pathArray = track.plot(d);
        return d == null ? pathArray : this;
    }
    track() {
        return this.reference("href");
    }
}
registerMethods({
    Container: {
        textPath: wrapWithAttrCheck(function(text, path) {
            // Convert text to instance if needed
            if (!(text instanceof Text)) text = this.text(text);
            return text.path(path);
        })
    },
    Text: {
        // Create path for text to run on
        path: wrapWithAttrCheck(function(track, importNodes = true) {
            const textPath = new TextPath(); // if track is a path, reuse it
            if (!(track instanceof Path)) // create path element
            track = this.defs().path(track);
             // link textPath to path and add content
            textPath.attr("href", "#" + track, xlink); // Transplant all nodes from text to textPath
            let node;
            if (importNodes) while(node = this.node.firstChild)textPath.node.appendChild(node);
             // add textPath element as child node and return textPath
            return this.put(textPath);
        }),
        // Get the textPath children
        textPath () {
            return this.findOne("textPath");
        }
    },
    Path: {
        // creates a textPath from this path
        text: wrapWithAttrCheck(function(text) {
            // Convert text to instance if needed
            if (!(text instanceof Text)) text = new Text().addTo(this.parent()).text(text);
             // Create textPath from text and path and return
            return text.path(this);
        }),
        targets () {
            return baseFind("svg textPath").filter((node)=>{
                return (node.attr("href") || "").includes(this.id());
            }); // Does not work in IE11. Use when IE support is dropped
        // return baseFind('svg textPath[*|href*="' + this.id() + '"]')
        }
    }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, "TextPath");
class Use extends Shape {
    constructor(node, attrs31 = node){
        super(nodeOrNew("use", node), attrs31);
    }
    use(element, file) {
        // Set lined element
        return this.attr("href", (file || "") + "#" + element, xlink);
    }
}
registerMethods({
    Container: {
        // Create a use element
        use: wrapWithAttrCheck(function(element, file) {
            return this.put(new Use()).use(element, file);
        })
    }
});
register(Use, "Use");
/* Optional Modules */ const SVG = makeInstance;
extend([
    Svg,
    Symbol,
    Image,
    Pattern,
    Marker
], getMethodsFor("viewbox"));
extend([
    Line,
    Polyline,
    Polygon,
    Path
], getMethodsFor("marker"));
extend(Text, getMethodsFor("Text"));
extend(Path, getMethodsFor("Path"));
extend(Defs, getMethodsFor("Defs"));
extend([
    Text,
    Tspan
], getMethodsFor("Tspan"));
extend([
    Rect,
    Ellipse,
    Gradient,
    Runner
], getMethodsFor("radius"));
extend(EventTarget, getMethodsFor("EventTarget"));
extend(Dom, getMethodsFor("Dom"));
extend(Element, getMethodsFor("Element"));
extend(Shape, getMethodsFor("Shape"));
extend([
    Container,
    Fragment
], getMethodsFor("Container"));
extend(Gradient, getMethodsFor("Gradient"));
extend(Runner, getMethodsFor("Runner"));
List.extend(getMethodNames());
registerMorphableType([
    SVGNumber,
    Color,
    Box,
    Matrix,
    SVGArray,
    PointArray,
    PathArray,
    Point
]);
makeMorphable();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agOyx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "peace-sign-plain.6dc3477d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire6a61")

//# sourceMappingURL=index.975ef6c8.js.map
