/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 330);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Welcome__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Welcome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Welcome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Ranking__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Ranking___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Ranking__);



new window.Vue({

    el: '#head',
    components: {
        'vue-welcome': __WEBPACK_IMPORTED_MODULE_0__components_Welcome___default.a
    },
    name: 'frontend-welcome-entry-point'

});

new window.Vue({

    el: '#ranking',
    components: {
        'vue-ranking': __WEBPACK_IMPORTED_MODULE_1__components_Ranking___default.a
    },
    name: 'frontend-ranking-entry-point'

});

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(333)
/* template */
var __vue_template__ = __webpack_require__(334)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\frontend\\visitors\\welcome\\~components\\Welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13f0e084", Component.options)
  } else {
    hotAPI.reload("data-v-13f0e084", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {
        ready: function ready() {
            return Quizz.$store.getters.ready;
        }
    },

    data: function data() {
        return {
            slides: ['mars01.jpg', 'mars02.jpg', 'mars03.jpg', 'mars04.jpg']
        };
    },


    methods: {
        applyCamera: function applyCamera() {
            var vm = this,
                i = setInterval(function () {
                if ($('#camera_wrap_4').length == 1) {
                    if ($('.camera-items').length = vm.slides.length) {
                        clearInterval(i);
                        $('#camera_wrap_4').camera({
                            transPeriod: 500,
                            time: 3000,
                            height: '600',
                            loader: 'false',
                            pagination: true,
                            thumbnails: false,
                            hover: false,
                            playPause: false,
                            navigation: false,
                            opacityOnGrid: false,
                            imagePath: 'images/'
                        });

                        $('.start-quiz').click(function (e) {
                            location.href = '/play-quiz';
                        });
                    }
                }
            }, 100);
        }
    },

    mounted: function mounted() {
        this.applyCamera();
    },


    name: 'welcome'
});

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.ready
    ? _c("div", { staticClass: "welcome-container" }, [
        _c("div", { staticClass: "heading-text" }, [
          _c("h1", { staticClass: "animated flipInY delay1 start-quiz" }, [
            _c("div", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("welcome.header")) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { domProps: { innerHTML: _vm._s(_vm.$t("welcome.info")) } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fluid_container" }, [
          _c(
            "div",
            {
              staticClass: "camera_wrap camera_emboss pattern_1",
              attrs: { id: "camera_wrap_4" }
            },
            _vm._l(_vm.slides, function(image) {
              return _c("div", {
                staticClass: "camera-items",
                attrs: {
                  "data-thumb": "/images/slides/thumbs/" + image,
                  "data-src": "/images/slides/" + image
                }
              })
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-13f0e084", module.exports)
  }
}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(336)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(338)
/* template */
var __vue_template__ = __webpack_require__(339)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f35cf150"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\frontend\\visitors\\welcome\\~components\\Ranking.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f35cf150", Component.options)
  } else {
    hotAPI.reload("data-v-f35cf150", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("365dd0ef", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f35cf150\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ranking.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f35cf150\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ranking.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\nh4[data-v-f35cf150] {\n  margin: 5px auto;\n}\n#ranking-list-container[data-v-f35cf150] {\n  margin-top: 20px;\n  text-align: left;\n}\n#ranking-list-container .record-item[data-v-f35cf150] {\n    margin: 5px 0px;\n    padding: 5px;\n}\n#ranking-list-container .user-info[data-v-f35cf150], #ranking-list-container .user-points[data-v-f35cf150] {\n    float: left;\n}\n#ranking-list-container .user-info[data-v-f35cf150] {\n    width: 70%;\n}\n#ranking-list-container .user-points[data-v-f35cf150] {\n    width: 30%;\n    text-align: right;\n}\n#ranking-list-container .user-points .points[data-v-f35cf150] {\n      height: auto;\n      margin: 0px 0px 0px auto;\n      font-size: 16px;\n      font-weight: bold;\n      background-color: #3d84e6;\n      color: #fff;\n      border-radius: 20px;\n      text-align: center;\n}\n#ranking-list-container .user-points .times[data-v-f35cf150] {\n      height: auto;\n      margin: 0px 0px 0px auto;\n      font-size: 14px;\n      font-weight: bold;\n      border-radius: 20px;\n      text-align: center;\n}\n.row-navigation .col-prev[data-v-f35cf150] {\n  text-align: left;\n}\n.row-navigation .col-next[data-v-f35cf150] {\n  text-align: right;\n}\n.row-navigation p[data-v-f35cf150] {\n  margin-bottom: 0px;\n}\n.row-navigation p a[data-v-f35cf150] {\n    background-color: #426876;\n    color: #fff;\n    padding: 6px 12px;\n}\n.row-navigation p a[data-v-f35cf150]:hover {\n      opacity: 0.7;\n}\n", ""]);

// exports


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {
        ready: function ready() {
            return Quizz.$store.getters.ready;
        },
        records: function records() {
            if (this.data == null) {
                return [];
            }
            return this.data.data;
        },
        total: function total() {
            if (this.data == null) {
                return 0;
            }
            return this.data.total;
        }
    },

    data: function data() {
        return {

            loading: false,

            data: null,
            page: 1

        };
    },


    methods: {
        difference: function difference(record) {
            var r = DateTime.difference(record.finished_at, record.start_at);
            return _.padStart(r.hours, 2, '0') + ':' + _.padStart(r.minutes, 2, '0') + ':' + _.padStart(r.seconds, 2, '0');
        },
        getRanking: function getRanking() {
            var _this = this;

            var vm = this;
            this.loading = true;
            Requests.post('get-ranking?page=' + this.page, {}).then(function (r) {
                _this.data = r.data;
                _this.loading = false;
            });
        },
        next: function next() {
            this.page++;
            this.getRanking();
        },
        prev: function prev() {
            this.page--;
            this.getRanking();
        }
    },

    mounted: function mounted() {
        this.getRanking();
    },


    name: 'ranking'
});

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.ready
    ? _c("div", { staticClass: "ranking-container" }, [
        _c("div", { staticClass: "grey-box-icon" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("h4", [
            _vm._v(
              "\n                " +
                _vm._s(_vm.$t("ranking.total", { total: _vm.total }, 2)) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("h4", [
            _vm._v(
              "\n                " +
                _vm._s(_vm.$t("ranking.title")) +
                "                \n            "
            )
          ]),
          _vm._v(" "),
          _vm.data != null
            ? _c(
                "div",
                { attrs: { id: "ranking-list-container" } },
                _vm._l(_vm.records, function(record, index) {
                  return _c(
                    "div",
                    {
                      class: {
                        "record-item": true
                      }
                    },
                    [
                      _c("div", { staticClass: "user-info" }, [
                        _c("strong", [
                          _vm._v(
                            "#" +
                              _vm._s(
                                (_vm.data.current_page - 1) *
                                  _vm.data.per_page +
                                  index +
                                  1
                              )
                          )
                        ]),
                        _vm._v(
                          ". \n                        " +
                            _vm._s(record.user.first_name) +
                            ", " +
                            _vm._s(record.user.last_name)
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.$t("ranking.class", {
                                class: record.user.class
                              })
                            ) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-points" }, [
                        _c("div", { staticClass: "points" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(record.points) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "times" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.difference(record)) +
                              "\n                        "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" })
                    ]
                  )
                })
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data != null
            ? _c("div", { staticClass: "row row-navigation" }, [
                _c("div", { staticClass: "col-xs-4 col-prev" }, [
                  _vm.page > 1
                    ? _c("p", [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.prev($event)
                              }
                            }
                          },
                          [
                            _c("em", [
                              _vm.loading
                                ? _c("i", {
                                    staticClass: "fa fa-spinner fa-spin"
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-fw fa-chevron-left"
                              })
                            ])
                          ]
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-4" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.page) +
                      " / " +
                      _vm._s(_vm.data.last_page) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-4 col-next" }, [
                  _vm.page < _vm.data.last_page
                    ? _c("p", [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.next($event)
                              }
                            }
                          },
                          [
                            _c("em", [
                              _c("i", {
                                staticClass: "fa fa-fw fa-chevron-right"
                              }),
                              _vm._v(" "),
                              _vm.loading
                                ? _c("i", {
                                    staticClass: "fa fa-spinner fa-spin"
                                  })
                                : _vm._e()
                            ])
                          ]
                        )
                      ])
                    : _vm._e()
                ])
              ])
            : _vm._e()
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-box-top grey-box-icon-pos" }, [
      _c("img", { attrs: { src: "/images/1.png", alt: "" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f35cf150", module.exports)
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ });