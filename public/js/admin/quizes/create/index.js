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
/******/ 	return __webpack_require__(__webpack_require__.s = 359);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__vee_validate_locale__ro=e.__vee_validate_locale__ro||{},e.__vee_validate_locale__ro.js=n())}(this,function(){"use strict";var e,n={name:"ro",messages:{after:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]+"."},alpha_dash:function(e){return"Câmpul "+e+' poate conține caracter alfanumerice, cât și caracterele "-" sau "_".'},alpha_num:function(e){return"Câmpul "+e+" poate conține doar caracter alfanumerice."},alpha_spaces:function(e){return"Câmpul "+e+" poate conține literele alfabetului cât și spații."},alpha:function(e){return"Câmpul "+e+" poate conține doar literele alfabetului."},before:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]+"."},between:function(e,n){return"Câmpul "+e+" trebuie să fie între "+n[0]+" și "+n[1]+"."},confirmed:function(e){return"Câmpul "+e+" nu coincide."},credit_card:function(e){return"Câmpul "+e+" este invalid."},date_between:function(e,n){return"Câmpul "+e+" trebuie să fie între "+n[0]+" și "+n[1]+"."},date_format:function(e,n){return"Câmpul "+e+" trebuie să fie în următorul format "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var i=n[0];return void 0===i&&(i="*"),"Câmpul "+e+" trebuie să fie numberic și poate conține "+("*"===i?"":decimale)+" zecimale."},digits:function(e,n){return"Câmpul "+e+" trebuie să fie numeric și să conțină exact "+n[0]+" caractere."},dimensions:function(e,n){return"Câmpul "+e+" trebuie să fie "+n[0]+" pixeli lungime și "+n[1]+" pixeli înălțime."},email:function(e){return"Câmpul "+e+" trebuie să conțină un email valid."},ext:function(e){return"Câmpul "+e+" trebuie să fie un nume de fișier valid."},image:function(e){return"Câmpul "+e+" trebuie să fie o imagine."},in:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă."},ip:function(e){return"Câmpul "+e+" trebuie să conțină o adresa IP vaidă."},max:function(e,n){return"Câmpul "+e+" nu poate fi mai mare de "+n[0]+" caractere."},max_value:function(e,n){return"Câmpul "+e+" trebuie să fie maxim "+n[0]+"."},mimes:function(e){return"Câmpul "+e+" trebuie să conțină un fișier cu extensie validă."},min:function(e,n){return"Câmpul "+e+" trebuie să fie cel puțin "+n[0]+" caractere."},min_value:function(e,n){return"Câmpul "+e+"trebuie să fie cel puțin "+n[0]+"."},not_in:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă."},numeric:function(e){return"Câmpul "+e+" poate conține doar valori numerice."},regex:function(e){return"Formatul câmpului "+e+" este invalid."},required:function(e){return"Câmpul "+e+" este necesar."},size:function(e,n){var i,u,t,r=n[0];return"Câmpul "+e+" nu trebuie să depășească "+(i=r,u=1024,t=0==(i=Number(i)*u)?0:Math.floor(Math.log(i)/Math.log(u)),1*(i/Math.pow(u,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t])+"."},url:function(e){return"Câmpul "+e+" nu este un URL valid."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n});

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__vee_validate_locale__de=e.__vee_validate_locale__de||{},e.__vee_validate_locale__de.js=n())}(this,function(){"use strict";var e,n={name:"de",messages:{_default:function(e){return e+" ist ungültig."},after:function(e,n){return e+" muss nach "+n[0]+" liegen."},alpha_dash:function(e){return e+" darf alphanumerische Zeichen sowie Striche und Unterstriche enthalten."},alpha_num:function(e){return e+" darf nur alphanumerische Zeichen enthalten."},alpha:function(e){return e+" darf nur alphabetische Zeichen enthalten."},before:function(e,n){return e+" muss vor "+n[0]+" liegen."},between:function(e,n){return e+" muss zwischen "+n[0]+" und "+n[1]+" liegen."},confirmed:function(e,n){return e+" passt nicht zum Inhalt von "+n[0]+"."},date_between:function(e,n){return e+" muss zwischen "+n[0]+" und "+n[1]+" liegen."},date_format:function(e,n){return e+" muss das Format "+n[0]+" haben."},decimal:function(e,n){void 0===n&&(n=[]);var t=n[0];return void 0===t&&(t="*"),e+" muss numerisch sein und darf "+("*"===t?"":t)+" Dezimalpunkte enthalten."},digits:function(e,n){return e+" muss numerisch sein und exakt "+n[0]+" Ziffern enthalten."},dimensions:function(e,n){return e+" muss "+n[0]+" x "+n[1]+" Bildpunkte groß sein."},email:function(e){return e+" muss eine gültige E-Mail-Adresse sein."},ext:function(e){return e+" muss eine gültige Datei sein."},image:function(e){return e+" muss eine Grafik sein."},in:function(e){return e+" muss ein gültiger Wert sein."},ip:function(e){return e+" muss eine gültige IP-Adresse sein."},max:function(e,n){return e+" darf nicht länger als "+n[0]+" Zeichen sein."},mimes:function(e){return e+" muss einen gültigen Dateityp haben."},min:function(e,n){return e+" muss mindestens "+n[0]+" Zeichen lang sein."},not_in:function(e){return e+" muss ein gültiger Wert sein."},numeric:function(e){return e+" darf nur numerische Zeichen enthalten."},regex:function(e){return"Das Format von "+e+" ist ungültig."},required:function(e){return e+" ist ein Pflichtfeld."},size:function(e,n){var t,i,r,u=n[0];return e+" muss kleiner als "+(t=u,i=1024,r=0==(t=Number(t)*i)?0:Math.floor(Math.log(t)/Math.log(i)),1*(t/Math.pow(i,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+" sein."},url:function(e){return e+" ist keine gültige URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n});

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export install */
/* unused harmony export use */
/* unused harmony export directive */
/* unused harmony export mixin */
/* unused harmony export mapFields */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* unused harmony export ErrorBag */
/* unused harmony export Rules */
/* unused harmony export ErrorComponent */
/* unused harmony export version */
/**
  * vee-validate v2.0.9
  * (c) 2018 Abdelrahman Awad
  * @license MIT
  */
var supportsPassive = true;
var detectPassiveSupport = function () {
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassive = true;
            }
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (e) {
        supportsPassive = false;
    }
    return supportsPassive;
};
var addEventListener = function (el, eventName, cb) {
    el.addEventListener(eventName, cb, supportsPassive ? {
        passive: true
    } : false);
};
var isTextInput = function (el) { return ['text','number','password','search','email','tel',
    'url','textarea'].indexOf(el.type) !== -1; };
var isCheckboxOrRadioInput = function (el) { return ['radio','checkbox'].indexOf(el.type) !== -1; };
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };
var isNullOrUndefined = function (value) { return value === null || value === undefined; };
var createFlags = function () { return ({
    untouched: true,
    touched: false,
    dirty: false,
    pristine: true,
    valid: null,
    invalid: null,
    validated: false,
    pending: false,
    required: false,
    changed: false
}); };
var isEqual = function (lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
        return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length) 
            { return false; }
        for (var i = 0;i < lhs.length; i++) {
            if (!isEqual(lhs[i], rhs[i])) {
                return false;
            }
        }
        return true;
    }
    if (isObject(lhs) && isObject(rhs)) {
        return Object.keys(lhs).every(function (key) { return isEqual(lhs[key], rhs[key]); }) && Object.keys(rhs).every(function (key) { return isEqual(lhs[key], rhs[key]); });
    }
    return lhs === rhs;
};
var getScope = function (el) {
    var scope = getDataAttribute(el, 'scope');
    if (isNullOrUndefined(scope)) {
        var form = getForm(el);
        if (form) {
            scope = getDataAttribute(form, 'scope');
        }
    }
    return !isNullOrUndefined(scope) ? scope : null;
};
var getForm = function (el) {
    if (isNullOrUndefined(el)) 
        { return null; }
    if (el.tagName === "FORM") 
        { return el; }
    if (!isNullOrUndefined(el.form)) 
        { return el.form; }
    return !isNullOrUndefined(el.parentNode) ? getForm(el.parentNode) : null;
};
var getPath = function (path, target, def) {
    if ( def === void 0 ) def = undefined;

    if (!path || !target) 
        { return def; }
    var value = target;
    path.split('.').every(function (prop) {
        if (!Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
            value = def;
            return false;
        }
        value = value[prop];
        return true;
    });
    return value;
};
var hasPath = function (path, target) {
    var obj = target;
    return path.split('.').every(function (prop) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
        obj = obj[prop];
        return true;
    });
};
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (~rule.indexOf(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return {
        name: name,
        params: params
    };
};
var debounce = function (fn, wait, immediate, token) {
    if ( wait === void 0 ) wait = 0;
    if ( immediate === void 0 ) immediate = false;
    if ( token === void 0 ) token = {
    cancelled: false
};

    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var later = function () {
            timeout = null;
            if (!immediate && !token.cancelled) 
                { fn.apply(void 0, args); }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) 
            { fn.apply(void 0, args); }
    };
};
var normalizeRules = function (rules) {
    if (!rules) {
        return {};
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            } else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            } else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = params;
            }
            return prev;
        }, {});
    }
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return {};
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = parsedRule.params;
        return prev;
    }, {});
};
var warn = function (message) {
    console.warn(("[vee-validate] " + message));
};
var createError = function (message) { return new Error(("[vee-validate] " + message)); };
var isObject = function (obj) { return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj); };
var isCallable = function (func) { return typeof func === 'function'; };
var hasClass = function (el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    return !(!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)"))));
};
var addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
        return;
    }
    if (!hasClass(el, className)) {
        el.className += " " + className;
    }
};
var removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
        return;
    }
    if (hasClass(el, className)) {
        var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
        el.className = el.className.replace(reg, ' ');
    }
};
var toggleClass = function (el, className, status) {
    if (!el || !className) 
        { return; }
    if (Array.isArray(className)) {
        className.forEach(function (item) { return toggleClass(el, item, status); });
        return;
    }
    if (status) {
        return addClass(el, className);
    }
    removeClass(el, className);
};
var toArray = function (arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    var array = [];
    var length = arrayLike.length;
    for (var i = 0;i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
};
var assign = function (target) {
    var others = [], len = arguments.length - 1;
    while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

    if (isCallable(Object.assign)) {
        return Object.assign.apply(Object, [ target ].concat( others ));
    }
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    others.forEach(function (arg) {
        if (arg != null) {
            Object.keys(arg).forEach(function (key) {
                to[key] = arg[key];
            });
        }
    });
    return to;
};
var id = 0;
var idTemplate = '{id}';
var uniqId = function () {
    if (id >= 9999) {
        id = 0;
        idTemplate = idTemplate.replace('{id}', '_{id}');
    }
    id++;
    var newId = idTemplate.replace('{id}', String(id));
    return newId;
};
var find = function (arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    for (var i = 0;i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return undefined;
};
var isBuiltInComponent = function (vnode) {
    if (!vnode) {
        return false;
    }
    var tag = vnode.componentOptions.tag;
    return /keep-alive|transition|transition-group/.test(tag);
};
var makeEventsArray = function (events) { return typeof events === 'string' && events.length ? events.split('|') : []; };
var makeDelayObject = function (events, delay, delayConfig) {
    if (typeof delay === 'number') {
        return events.reduce(function (prev, e) {
            prev[e] = delay;
            return prev;
        }, {});
    }
    return events.reduce(function (prev, e) {
        if (typeof delay === 'object' && e in delay) {
            prev[e] = delay[e];
            return prev;
        }
        if (typeof delayConfig === 'number') {
            prev[e] = delayConfig;
            return prev;
        }
        prev[e] = delayConfig && delayConfig[e] || 0;
        return prev;
    }, {});
};
var deepParseInt = function (input) {
    if (typeof input === 'number') 
        { return input; }
    if (typeof input === 'string') 
        { return parseInt(input); }
    var map = {};
    for (var element in input) {
        map[element] = parseInt(input[element]);
    }
    return map;
};
var merge = function (target, source) {
    if (!(isObject(target) && isObject(source))) {
        return target;
    }
    Object.keys(source).forEach(function (key) {
        var obj, obj$1;

        if (isObject(source[key])) {
            if (!target[key]) {
                assign(target, ( obj = {}, obj[key] = {}, obj ));
            }
            merge(target[key], source[key]);
            return;
        }
        assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
    });
    return target;
};

var ErrorBag = function ErrorBag() {
    this.items = [];
};
ErrorBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
        var this$1 = this;

    var index = 0;
    return {
        next: function () { return ({
            value: this$1.items[index++],
            done: index > this$1.items.length
        }); }
    };
};
ErrorBag.prototype.add = function add (error) {
        var ref;

    if (arguments.length > 1) {
        error = {
            field: arguments[0],
            msg: arguments[1],
            rule: arguments[2],
            scope: !isNullOrUndefined(arguments[3]) ? arguments[3] : null,
            regenerate: null
        };
    }
    (ref = this.items).push.apply(ref, this._normalizeError(error));
};
ErrorBag.prototype._normalizeError = function _normalizeError (error) {
    if (Array.isArray(error)) {
        return error.map(function (e) {
            e.scope = !isNullOrUndefined(e.scope) ? e.scope : null;
            return e;
        });
    }
    error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
    return [error];
};
ErrorBag.prototype.regenerate = function regenerate () {
    this.items.forEach(function (i) {
        i.msg = isCallable(i.regenerate) ? i.regenerate() : i.msg;
    });
};
ErrorBag.prototype.update = function update (id, error) {
    var item = find(this.items, function (i) { return i.id === id; });
    if (!item) {
        return;
    }
    var idx = this.items.indexOf(item);
    this.items.splice(idx, 1);
    item.scope = error.scope;
    this.items.push(item);
};
ErrorBag.prototype.all = function all (scope) {
    if (isNullOrUndefined(scope)) {
        return this.items.map(function (e) { return e.msg; });
    }
    return this.items.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; });
};
ErrorBag.prototype.any = function any (scope) {
    if (isNullOrUndefined(scope)) {
        return !(!this.items.length);
    }
    return !(!this.items.filter(function (e) { return e.scope === scope; }).length);
};
ErrorBag.prototype.clear = function clear (scope) {
        var this$1 = this;

    if (isNullOrUndefined(scope)) {
        scope = null;
    }
    for (var i = 0;i < this.items.length; ++i) {
        if (this$1.items[i].scope === scope) {
            this$1.items.splice(i, 1);
            --i;
        }
    }
};
ErrorBag.prototype.collect = function collect (field, scope, map) {
        if ( map === void 0 ) map = true;

    if (!field) {
        var collection = {};
        this.items.forEach(function (e) {
            if (!collection[e.field]) {
                collection[e.field] = [];
            }
            collection[e.field].push(map ? e.msg : e);
        });
        return collection;
    }
    field = !isNullOrUndefined(field) ? String(field) : field;
    if (isNullOrUndefined(scope)) {
        return this.items.filter(function (e) { return e.field === field; }).map(function (e) { return map ? e.msg : e; });
    }
    return this.items.filter(function (e) { return e.field === field && e.scope === scope; }).map(function (e) { return map ? e.msg : e; });
};
ErrorBag.prototype.count = function count () {
    return this.items.length;
};
ErrorBag.prototype.firstById = function firstById (id) {
    var error = find(this.items, function (i) { return i.id === id; });
    return error ? error.msg : null;
};
ErrorBag.prototype.first = function first (field, scope) {
        var this$1 = this;
        if ( scope === void 0 ) scope = null;

    if (isNullOrUndefined(field)) {
        return null;
    }
    field = String(field);
    var selector = this._selector(field);
    var scoped = this._scope(field);
    if (scoped) {
        var result = this.first(scoped.name, scoped.scope);
        if (result) {
            return result;
        }
    }
    if (selector) {
        return this.firstByRule(selector.name, selector.rule, scope);
    }
    for (var i = 0;i < this.items.length; ++i) {
        if (this$1.items[i].field === field && this$1.items[i].scope === scope) {
            return this$1.items[i].msg;
        }
    }
    return null;
};
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
    var errors = this.collect(field, scope, false);
    return errors.length && errors[0].rule || null;
};
ErrorBag.prototype.has = function has (field, scope) {
        if ( scope === void 0 ) scope = null;

    return !(!this.first(field, scope));
};
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
        if ( scope === void 0 ) scope = null;

    var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];
    return error && error.msg || null;
};
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
        if ( rule === void 0 ) rule = 'required';
        if ( scope === void 0 ) scope = null;

    var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];
    return error && error.msg || null;
};
ErrorBag.prototype.removeById = function removeById (id) {
        var this$1 = this;

    if (Array.isArray(id)) {
        this.items = this.items.filter(function (i) { return id.indexOf(i.id) === -1; });
        return;
    }
    for (var i = 0;i < this.items.length; ++i) {
        if (this$1.items[i].id === id) {
            this$1.items.splice(i, 1);
            --i;
        }
    }
};
ErrorBag.prototype.remove = function remove (field, scope) {
        var this$1 = this;

    field = !isNullOrUndefined(field) ? String(field) : field;
    var removeCondition = function (e) {
        if (!isNullOrUndefined(scope)) {
            return e.field === field && e.scope === scope;
        }
        return e.field === field && e.scope === null;
    };
    for (var i = 0;i < this.items.length; ++i) {
        if (removeCondition(this$1.items[i])) {
            this$1.items.splice(i, 1);
            --i;
        }
    }
};
ErrorBag.prototype._selector = function _selector (field) {
    if (field.indexOf(':') > -1) {
        var ref = field.split(':');
            var name = ref[0];
            var rule = ref[1];
        return {
            name: name,
            rule: rule
        };
    }
    return null;
};
ErrorBag.prototype._scope = function _scope (field) {
    if (field.indexOf('.') > -1) {
        var ref = field.split('.');
            var scope = ref[0];
            var name = ref.slice(1);
        return {
            name: name.join('.'),
            scope: scope
        };
    }
    return null;
};

var LOCALE = 'en';
var Dictionary = function Dictionary(dictionary) {
    if ( dictionary === void 0 ) dictionary = {};

    this.container = {};
    this.merge(dictionary);
};

var prototypeAccessors = { locale: { configurable: true } };
prototypeAccessors.locale.get = function () {
    return LOCALE;
};
prototypeAccessors.locale.set = function (value) {
    LOCALE = value || 'en';
};
Dictionary.prototype.hasLocale = function hasLocale (locale) {
    return !(!this.container[locale]);
};
Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
    if (!this.container[locale]) {
        this.container[locale] = {};
    }
    this.container[locale].dateFormat = format;
};
Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
    if (!this.container[locale] || !this.container[locale].dateFormat) {
        return null;
    }
    return this.container[locale].dateFormat;
};
Dictionary.prototype.getMessage = function getMessage (locale, key, data) {
    var message = null;
    if (!this.hasMessage(locale, key)) {
        message = this._getDefaultMessage(locale);
    } else {
        message = this.container[locale].messages[key];
    }
    return isCallable(message) ? message.apply(void 0, data) : message;
};
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
    if (!this.hasLocale(locale)) {
        return this.getMessage(locale, key, data);
    }
    var dict = this.container[locale].custom && this.container[locale].custom[field];
    if (!dict || !dict[key]) {
        return this.getMessage(locale, key, data);
    }
    var message = dict[key];
    return isCallable(message) ? message.apply(void 0, data) : message;
};
Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
    if (this.hasMessage(locale, '_default')) {
        return this.container[locale].messages._default;
    }
    return this.container.en.messages._default;
};
Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
        if ( fallback === void 0 ) fallback = '';

    if (!this.hasAttribute(locale, key)) {
        return fallback;
    }
    return this.container[locale].attributes[key];
};
Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
    return !(!(this.hasLocale(locale) && this.container[locale].messages && this.container[locale].messages[key]));
};
Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
    return !(!(this.hasLocale(locale) && this.container[locale].attributes && this.container[locale].attributes[key]));
};
Dictionary.prototype.merge = function merge$1 (dictionary) {
    merge(this.container, dictionary);
};
Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
    if (!this.hasLocale(locale)) {
        this.container[locale] = {
            messages: {},
            attributes: {}
        };
    }
    this.container[locale].messages[key] = message;
};
Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
    if (!this.hasLocale(locale)) {
        this.container[locale] = {
            messages: {},
            attributes: {}
        };
    }
    this.container[locale].attributes[key] = attribute;
};

Object.defineProperties( Dictionary.prototype, prototypeAccessors );

var normalizeValue = function (value) {
    if (isObject(value)) {
        return Object.keys(value).reduce(function (prev, key) {
            prev[key] = normalizeValue(value[key]);
            return prev;
        }, {});
    }
    if (isCallable(value)) {
        return value('{0}', ['{1}','{2}','{3}']);
    }
    return value;
};
var normalizeFormat = function (locale) {
    var messages = normalizeValue(locale.messages);
    var custom = normalizeValue(locale.custom);
    return {
        messages: messages,
        custom: custom,
        attributes: locale.attributes,
        dateFormat: locale.dateFormat
    };
};
var I18nDictionary = function I18nDictionary(i18n, rootKey) {
    this.i18n = i18n;
    this.rootKey = rootKey;
};

var prototypeAccessors$1 = { locale: { configurable: true } };
prototypeAccessors$1.locale.get = function () {
    return this.i18n.locale;
};
prototypeAccessors$1.locale.set = function (value) {
    warn('Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead');
};
I18nDictionary.prototype.getDateFormat = function getDateFormat (locale) {
    return this.i18n.getDateTimeFormat(locale || this.locale);
};
I18nDictionary.prototype.setDateFormat = function setDateFormat (locale, value) {
    this.i18n.setDateTimeFormat(locale || this.locale, value);
};
I18nDictionary.prototype.getMessage = function getMessage (locale, key, data) {
    var path = (this.rootKey) + ".messages." + key;
    if (!this.i18n.te(path)) {
        return this.i18n.t(((this.rootKey) + ".messages._default"), locale, data);
    }
    return this.i18n.t(path, locale, data);
};
I18nDictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
        if ( fallback === void 0 ) fallback = '';

    var path = (this.rootKey) + ".attributes." + key;
    if (!this.i18n.te(path)) {
        return fallback;
    }
    return this.i18n.t(path, locale);
};
I18nDictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
    var path = (this.rootKey) + ".custom." + field + "." + key;
    if (this.i18n.te(path)) {
        return this.i18n.t(path);
    }
    return this.getMessage(locale, key, data);
};
I18nDictionary.prototype.merge = function merge$1 (dictionary) {
        var this$1 = this;

    Object.keys(dictionary).forEach(function (localeKey) {
            var obj;

        var clone = merge({}, getPath((localeKey + "." + (this$1.rootKey)), this$1.i18n.messages, {}));
        var locale = merge(clone, normalizeFormat(dictionary[localeKey]));
        this$1.i18n.mergeLocaleMessage(localeKey, ( obj = {}, obj[this$1.rootKey] = locale, obj ));
        if (locale.dateFormat) {
            this$1.i18n.setDateTimeFormat(localeKey, locale.dateFormat);
        }
    });
};
I18nDictionary.prototype.setMessage = function setMessage (locale, key, value) {
        var obj, obj$1;

    this.merge(( obj$1 = {}, obj$1[locale] = {
            messages: ( obj = {}, obj[key] = value, obj )
        }, obj$1 ));
};
I18nDictionary.prototype.setAttribute = function setAttribute (locale, key, value) {
        var obj, obj$1;

    this.merge(( obj$1 = {}, obj$1[locale] = {
            attributes: ( obj = {}, obj[key] = value, obj )
        }, obj$1 ));
};

Object.defineProperties( I18nDictionary.prototype, prototypeAccessors$1 );

var defaultConfig = {
    locale: 'en',
    delay: 0,
    errorBagName: 'errors',
    dictionary: null,
    strict: true,
    fieldsBagName: 'fields',
    classes: false,
    classNames: null,
    events: 'input|blur',
    inject: true,
    fastExit: true,
    aria: true,
    validity: false,
    i18n: null,
    i18nRootKey: 'validation'
};
var currentConfig = assign({}, defaultConfig);
var dependencies = {
    dictionary: new Dictionary({
        en: {
            messages: {},
            attributes: {},
            custom: {}
        }
    })
};
var Config = function Config () {};

var staticAccessors = { default: { configurable: true },current: { configurable: true } };

staticAccessors.default.get = function () {
    return defaultConfig;
};
staticAccessors.current.get = function () {
    return currentConfig;
};
Config.dependency = function dependency (key) {
    return dependencies[key];
};
Config.merge = function merge$$1 (config) {
    currentConfig = assign({}, currentConfig, config);
    if (currentConfig.i18n) {
        Config.register('dictionary', new I18nDictionary(currentConfig.i18n, currentConfig.i18nRootKey));
    }
};
Config.register = function register (key, value) {
    dependencies[key] = value;
};
Config.resolve = function resolve (context) {
    var selfConfig = getPath('$options.$_veeValidate', context, {});
    return assign({}, Config.current, selfConfig);
};

Object.defineProperties( Config, staticAccessors );

var Generator = function Generator () {};

Generator.generate = function generate (el, binding, vnode) {
    var model = Generator.resolveModel(binding, vnode);
    var options = Config.resolve(vnode.context);
    return {
        name: Generator.resolveName(el, vnode),
        el: el,
        listen: !binding.modifiers.disable,
        scope: Generator.resolveScope(el, binding, vnode),
        vm: Generator.makeVM(vnode.context),
        expression: binding.value,
        component: vnode.componentInstance,
        classes: options.classes,
        classNames: options.classNames,
        getter: Generator.resolveGetter(el, vnode, model),
        events: Generator.resolveEvents(el, vnode) || options.events,
        model: model,
        delay: Generator.resolveDelay(el, vnode, options),
        rules: Generator.resolveRules(el, binding),
        initial: !(!binding.modifiers.initial),
        validity: options.validity,
        aria: options.aria,
        initialValue: Generator.resolveInitialValue(vnode)
    };
};
Generator.getCtorConfig = function getCtorConfig (vnode) {
    if (!vnode.componentInstance) 
        { return null; }
    var config = getPath('componentInstance.$options.$_veeValidate', vnode);
    return config;
};
Generator.resolveRules = function resolveRules (el, binding) {
    if (!binding.value && (!binding || !binding.expression)) {
        return getDataAttribute(el, 'rules');
    }
    if (binding.value && ~['string','object'].indexOf(typeof binding.value.rules)) {
        return binding.value.rules;
    }
    return binding.value;
};
Generator.resolveInitialValue = function resolveInitialValue (vnode) {
    var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
    return model && model.value;
};
Generator.makeVM = function makeVM (vm) {
    return {
        get $el() {
            return vm.$el;
        },
        get $refs() {
            return vm.$refs;
        },
        $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
        $validator: vm.$validator ? {
            errors: vm.$validator.errors,
            validate: vm.$validator.validate.bind(vm.$validator),
            update: vm.$validator.update.bind(vm.$validator)
        } : null
    };
};
Generator.resolveDelay = function resolveDelay (el, vnode, options) {
    var delay = getDataAttribute(el, 'delay');
    var globalDelay = options && 'delay' in options ? options.delay : 0;
    if (!delay && vnode.componentInstance && vnode.componentInstance.$attrs) {
        delay = vnode.componentInstance.$attrs['data-vv-delay'];
    }
    if (!isObject(globalDelay)) {
        return deepParseInt(delay || globalDelay);
    }
    if (!isNullOrUndefined(delay)) {
        globalDelay.input = delay;
    }
    return deepParseInt(globalDelay);
};
Generator.resolveEvents = function resolveEvents (el, vnode) {
    var events = getDataAttribute(el, 'validate-on');
    if (!events && vnode.componentInstance && vnode.componentInstance.$attrs) {
        events = vnode.componentInstance.$attrs['data-vv-validate-on'];
    }
    if (!events && vnode.componentInstance) {
        var config = Generator.getCtorConfig(vnode);
        events = config && config.events;
    }
    return events;
};
Generator.resolveScope = function resolveScope (el, binding, vnode) {
        if ( vnode === void 0 ) vnode = {};

    var scope = null;
    if (vnode.componentInstance && isNullOrUndefined(scope)) {
        scope = vnode.componentInstance.$attrs && vnode.componentInstance.$attrs['data-vv-scope'];
    }
    return !isNullOrUndefined(scope) ? scope : getScope(el);
};
Generator.resolveModel = function resolveModel (binding, vnode) {
    if (binding.arg) {
        return {
            expression: binding.arg
        };
    }
    var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
    if (!model) {
        return null;
    }
    var watchable = !/[^\w.$]/.test(model.expression) && hasPath(model.expression, vnode.context);
    var lazy = !(!(model.modifiers && model.modifiers.lazy));
    if (!watchable) {
        return {
            expression: null,
            lazy: lazy
        };
    }
    return {
        expression: model.expression,
        lazy: lazy
    };
};
Generator.resolveName = function resolveName (el, vnode) {
    var name = getDataAttribute(el, 'name');
    if (!name && !vnode.componentInstance) {
        return el.name;
    }
    if (!name && vnode.componentInstance && vnode.componentInstance.$attrs) {
        name = vnode.componentInstance.$attrs['data-vv-name'] || vnode.componentInstance.$attrs['name'];
    }
    if (!name && vnode.componentInstance) {
        var config = Generator.getCtorConfig(vnode);
        if (config && isCallable(config.name)) {
            var boundGetter = config.name.bind(vnode.componentInstance);
            return boundGetter();
        }
        return vnode.componentInstance.name;
    }
    return name;
};
Generator.resolveGetter = function resolveGetter (el, vnode, model) {
    if (model && model.expression) {
        return function () { return getPath(model.expression, vnode.context); };
    }
    if (vnode.componentInstance) {
        var path = getDataAttribute(el, 'value-path') || vnode.componentInstance.$attrs && vnode.componentInstance.$attrs['data-vv-value-path'];
        if (path) {
            return function () { return getPath(path, vnode.componentInstance); };
        }
        var config = Generator.getCtorConfig(vnode);
        if (config && isCallable(config.value)) {
            var boundGetter = config.value.bind(vnode.componentInstance);
            return function () { return boundGetter(); };
        }
        return function () { return vnode.componentInstance.value; };
    }
    switch (el.type) {
        case 'checkbox':
            return function () {
                var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
                els = toArray(els).filter(function (el) { return el.checked; });
                if (!els.length) 
                    { return undefined; }
                return els.map(function (checkbox) { return checkbox.value; });
            };
        case 'radio':
            return function () {
                var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
                var elm = find(els, function (el) { return el.checked; });
                return elm && elm.value;
            };
        case 'file':
            return function (context) { return toArray(el.files); };
        case 'select-multiple':
            return function () { return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; }); };
        default:
            return function () { return el && el.value; };
    }
};

var DEFAULT_OPTIONS = {
    targetOf: null,
    initial: false,
    scope: null,
    listen: true,
    name: null,
    rules: {},
    vm: null,
    classes: false,
    validity: true,
    aria: true,
    events: 'input|blur',
    delay: 0,
    classNames: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty'
    }
};
var Field = function Field(options) {
    if ( options === void 0 ) options = {};

    this.id = uniqId();
    this.el = options.el;
    this.updated = false;
    this.dependencies = [];
    this.watchers = [];
    this.events = [];
    this.delay = 0;
    this.rules = {};
    this._cacheId(options);
    this.classNames = assign({}, DEFAULT_OPTIONS.classNames);
    options = assign({}, DEFAULT_OPTIONS, options);
    this._delay = !isNullOrUndefined(options.delay) ? options.delay : 0;
    this.validity = options.validity;
    this.aria = options.aria;
    this.flags = createFlags();
    this.vm = options.vm;
    this.component = options.component;
    this.ctorConfig = this.component ? getPath('$options.$_veeValidate', this.component) : undefined;
    this.update(options);
    this.initialValue = this.value;
    this.updated = false;
};

var prototypeAccessors$2 = { validator: { configurable: true },isRequired: { configurable: true },isDisabled: { configurable: true },alias: { configurable: true },value: { configurable: true },rejectsFalse: { configurable: true } };
prototypeAccessors$2.validator.get = function () {
    if (!this.vm || !this.vm.$validator) {
        warn('No validator instance detected.');
        return {
            validate: function () {}
        };
    }
    return this.vm.$validator;
};
prototypeAccessors$2.isRequired.get = function () {
    return !(!this.rules.required);
};
prototypeAccessors$2.isDisabled.get = function () {
    return !(!(this.component && this.component.disabled)) || !(!(this.el && this.el.disabled));
};
prototypeAccessors$2.alias.get = function () {
    if (this._alias) {
        return this._alias;
    }
    var alias = null;
    if (this.el) {
        alias = getDataAttribute(this.el, 'as');
    }
    if (!alias && this.component) {
        return this.component.$attrs && this.component.$attrs['data-vv-as'];
    }
    return alias;
};
prototypeAccessors$2.value.get = function () {
    if (!isCallable(this.getter)) {
        return undefined;
    }
    return this.getter();
};
prototypeAccessors$2.rejectsFalse.get = function () {
    if (this.component && this.ctorConfig) {
        return !(!this.ctorConfig.rejectsFalse);
    }
    if (!this.el) {
        return false;
    }
    return this.el.type === 'checkbox';
};
Field.prototype.matches = function matches (options) {
    if (!options) {
        return true;
    }
    if (options.id) {
        return this.id === options.id;
    }
    if (options.name === undefined && options.scope === undefined) {
        return true;
    }
    if (options.scope === undefined) {
        return this.name === options.name;
    }
    if (options.name === undefined) {
        return this.scope === options.scope;
    }
    return options.name === this.name && options.scope === this.scope;
};
Field.prototype._cacheId = function _cacheId (options) {
    if (this.el && !options.targetOf) {
        this.el._veeValidateId = this.id;
    }
};
Field.prototype.update = function update (options) {
    this.targetOf = options.targetOf || null;
    this.initial = options.initial || this.initial || false;
    if (!isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
        this.validator.update(this.id, {
            scope: options.scope
        });
    }
    this.scope = !isNullOrUndefined(options.scope) ? options.scope : !isNullOrUndefined(this.scope) ? this.scope : null;
    this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
    this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
    this.model = options.model || this.model;
    this.listen = options.listen !== undefined ? options.listen : this.listen;
    this.classes = (options.classes || this.classes || false) && !this.component;
    this.classNames = isObject(options.classNames) ? merge(this.classNames, options.classNames) : this.classNames;
    this.getter = isCallable(options.getter) ? options.getter : this.getter;
    this._alias = options.alias || this._alias;
    this.events = options.events ? makeEventsArray(options.events) : this.events;
    this.delay = makeDelayObject(this.events, options.delay || this.delay, this._delay);
    this.updateDependencies();
    this.addActionListeners();
    if (!this.name && !this.targetOf) {
        warn('A field is missing a "name" or "data-vv-name" attribute');
    }
    if (options.rules !== undefined) {
        this.flags.required = this.isRequired;
    }
    if (this.flags.validated && options.rules !== undefined && this.updated) {
        this.validator.validate(("#" + (this.id)));
    }
    this.updated = true;
    this.addValueListeners();
    if (!this.el) {
        return;
    }
    this.updateClasses();
    this.updateAriaAttrs();
};
Field.prototype.reset = function reset () {
        var this$1 = this;

    if (this._cancellationToken) {
        this._cancellationToken.cancelled = true;
        delete this._cancellationToken;
    }
    var defaults = createFlags();
    Object.keys(this.flags).filter(function (flag) { return flag !== 'required'; }).forEach(function (flag) {
        this$1.flags[flag] = defaults[flag];
    });
    this.addActionListeners();
    this.updateClasses();
    this.updateAriaAttrs();
    this.updateCustomValidity();
};
Field.prototype.setFlags = function setFlags (flags) {
        var this$1 = this;

    var negated = {
        pristine: 'dirty',
        dirty: 'pristine',
        valid: 'invalid',
        invalid: 'valid',
        touched: 'untouched',
        untouched: 'touched'
    };
    Object.keys(flags).forEach(function (flag) {
        this$1.flags[flag] = flags[flag];
        if (negated[flag] && flags[negated[flag]] === undefined) {
            this$1.flags[negated[flag]] = !flags[flag];
        }
    });
    if (flags.untouched !== undefined || flags.touched !== undefined || flags.dirty !== undefined || flags.pristine !== undefined) {
        this.addActionListeners();
    }
    this.updateClasses();
    this.updateAriaAttrs();
    this.updateCustomValidity();
};
Field.prototype.updateDependencies = function updateDependencies () {
        var this$1 = this;

    this.dependencies.forEach(function (d) { return d.field.destroy(); });
    this.dependencies = [];
    var fields = Object.keys(this.rules).reduce(function (prev, r) {
        if (Validator.isTargetRule(r)) {
            var selector = this$1.rules[r][0];
            if (r === 'confirmed' && !selector) {
                selector = (this$1.name) + "_confirmation";
            }
            prev.push({
                selector: selector,
                name: r
            });
        }
        return prev;
    }, []);
    if (!fields.length || !this.vm || !this.vm.$el) 
        { return; }
    fields.forEach(function (ref) {
            var selector = ref.selector;
            var name = ref.name;

        var el = null;
        if (selector[0] === '$') {
            var ref$1 = this$1.vm.$refs[selector.slice(1)];
            el = Array.isArray(ref$1) ? ref$1[0] : ref$1;
        } else {
            try {
                el = this$1.vm.$el.querySelector(selector);
            } catch (err) {
                el = null;
            }
        }
        if (!el) {
            try {
                el = this$1.vm.$el.querySelector(("input[name=\"" + selector + "\"]"));
            } catch (err) {
                el = null;
            }
        }
        if (!el) {
            return;
        }
        var options = {
            vm: this$1.vm,
            classes: this$1.classes,
            classNames: this$1.classNames,
            delay: this$1.delay,
            scope: this$1.scope,
            events: this$1.events.join('|'),
            initial: this$1.initial,
            targetOf: this$1.id
        };
        if (isCallable(el.$watch)) {
            options.component = el;
            options.el = el.$el;
            options.getter = Generator.resolveGetter(el.$el, {
                child: el
            });
        } else {
            options.el = el;
            options.getter = Generator.resolveGetter(el, {});
        }
        this$1.dependencies.push({
            name: name,
            field: new Field(options)
        });
    });
};
Field.prototype.unwatch = function unwatch (tag) {
        if ( tag === void 0 ) tag = null;

    if (!tag) {
        this.watchers.forEach(function (w) { return w.unwatch(); });
        this.watchers = [];
        return;
    }
    this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
    this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};
Field.prototype.updateClasses = function updateClasses () {
        var this$1 = this;

    if (!this.classes || this.isDisabled) 
        { return; }
    var applyClasses = function (el) {
        toggleClass(el, this$1.classNames.dirty, this$1.flags.dirty);
        toggleClass(el, this$1.classNames.pristine, this$1.flags.pristine);
        toggleClass(el, this$1.classNames.touched, this$1.flags.touched);
        toggleClass(el, this$1.classNames.untouched, this$1.flags.untouched);
        if (!isNullOrUndefined(this$1.flags.valid) && this$1.flags.validated) {
            toggleClass(el, this$1.classNames.valid, this$1.flags.valid);
        }
        if (!isNullOrUndefined(this$1.flags.invalid) && this$1.flags.validated) {
            toggleClass(el, this$1.classNames.invalid, this$1.flags.invalid);
        }
    };
    if (!isCheckboxOrRadioInput(this.el)) {
        applyClasses(this.el);
        return;
    }
    var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
    toArray(els).forEach(applyClasses);
};
Field.prototype.addActionListeners = function addActionListeners () {
        var this$1 = this;

    this.unwatch(/class/);
    if (!this.el) 
        { return; }
    var onBlur = function () {
        this$1.flags.touched = true;
        this$1.flags.untouched = false;
        if (this$1.classes) {
            toggleClass(this$1.el, this$1.classNames.touched, true);
            toggleClass(this$1.el, this$1.classNames.untouched, false);
        }
        this$1.unwatch(/^class_blur$/);
    };
    var inputEvent = isTextInput(this.el) ? 'input' : 'change';
    var onInput = function () {
        this$1.flags.dirty = true;
        this$1.flags.pristine = false;
        if (this$1.classes) {
            toggleClass(this$1.el, this$1.classNames.pristine, false);
            toggleClass(this$1.el, this$1.classNames.dirty, true);
        }
        this$1.unwatch(/^class_input$/);
    };
    if (this.component && isCallable(this.component.$once)) {
        this.component.$once('input', onInput);
        this.component.$once('blur', onBlur);
        this.watchers.push({
            tag: 'class_input',
            unwatch: function () {
                this$1.component.$off('input', onInput);
            }
        });
        this.watchers.push({
            tag: 'class_blur',
            unwatch: function () {
                this$1.component.$off('blur', onBlur);
            }
        });
        return;
    }
    if (!this.el) 
        { return; }
    addEventListener(this.el, inputEvent, onInput);
    var blurEvent = isCheckboxOrRadioInput(this.el) ? 'change' : 'blur';
    addEventListener(this.el, blurEvent, onBlur);
    this.watchers.push({
        tag: 'class_input',
        unwatch: function () {
            this$1.el.removeEventListener(inputEvent, onInput);
        }
    });
    this.watchers.push({
        tag: 'class_blur',
        unwatch: function () {
            this$1.el.removeEventListener(blurEvent, onBlur);
        }
    });
};
Field.prototype.checkValueChanged = function checkValueChanged () {
    if (this.initialValue === null && this.value === '' && isTextInput(this.el)) {
        return false;
    }
    return this.value !== this.initialValue;
};
Field.prototype.addValueListeners = function addValueListeners () {
        var this$1 = this;

    this.unwatch(/^input_.+/);
    if (!this.listen || !this.el) 
        { return; }
    var token = {
        cancelled: false
    };
    var fn = this.targetOf ? function () {
        this$1.flags.changed = this$1.checkValueChanged();
        this$1.validator.validate(("#" + (this$1.targetOf)));
    } : function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

        if (args.length === 0 || isCallable(Event) && args[0] instanceof Event || args[0] && args[0].srcElement) {
            args[0] = this$1.value;
        }
        this$1.flags.changed = this$1.checkValueChanged();
        this$1.validator.validate(("#" + (this$1.id)), args[0]);
    };
    var inputEvent = this.component || isTextInput(this.el) ? 'input' : 'change';
    inputEvent = this.model && this.model.lazy ? 'change' : inputEvent;
    var events = !this.events.length || this.component || isTextInput(this.el) ? this.events : ['change'];
    if (this.model && this.model.expression && events.indexOf(inputEvent) !== -1) {
        var debouncedFn = debounce(fn, this.delay[inputEvent], false, token);
        var unwatch = this.vm.$watch(this.model.expression, function () {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

            this$1.flags.pending = true;
            this$1._cancellationToken = token;
            debouncedFn.apply(void 0, args);
        });
        this.watchers.push({
            tag: 'input_model',
            unwatch: unwatch
        });
        events = events.filter(function (e) { return e !== inputEvent; });
    }
    events.forEach(function (e) {
        var debouncedFn = debounce(fn, this$1.delay[e], false, token);
        var validate = function () {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

            this$1.flags.pending = true;
            this$1._cancellationToken = token;
            debouncedFn.apply(void 0, args);
        };
        this$1._addComponentEventListener(e, validate);
        this$1._addHTMLEventListener(e, validate);
    });
};
Field.prototype._addComponentEventListener = function _addComponentEventListener (evt, validate) {
        var this$1 = this;

    if (!this.component) 
        { return; }
    this.component.$on(evt, validate);
    this.watchers.push({
        tag: 'input_vue',
        unwatch: function () {
            this$1.component.$off(evt, validate);
        }
    });
};
Field.prototype._addHTMLEventListener = function _addHTMLEventListener (evt, validate) {
        var this$1 = this;

    if (!this.el || this.component) 
        { return; }
    var addListener = function (el) {
        addEventListener(el, evt, validate);
        this$1.watchers.push({
            tag: 'input_native',
            unwatch: function () {
                el.removeEventListener(evt, validate);
            }
        });
    };
    addListener(this.el);
    if (!isCheckboxOrRadioInput(this.el)) {
        return;
    }
    var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
    toArray(els).forEach(function (el) {
        if (el._veeValidateId && el !== this$1.el) {
            return;
        }
        addListener(el);
    });
};
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
        var this$1 = this;

    if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) 
        { return; }
    var applyAriaAttrs = function (el) {
        el.setAttribute('aria-required', this$1.isRequired ? 'true' : 'false');
        el.setAttribute('aria-invalid', this$1.flags.invalid ? 'true' : 'false');
    };
    if (!isCheckboxOrRadioInput(this.el)) {
        applyAriaAttrs(this.el);
        return;
    }
    var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
    toArray(els).forEach(applyAriaAttrs);
};
Field.prototype.updateCustomValidity = function updateCustomValidity () {
    if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity) || !this.validator.errors) 
        { return; }
    this.el.setCustomValidity(this.flags.valid ? '' : this.validator.errors.firstById(this.id) || '');
};
Field.prototype.destroy = function destroy () {
    this.unwatch();
    this.dependencies.forEach(function (d) { return d.field.destroy(); });
    this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$2 );

var FieldBag = function FieldBag() {
    this.items = [];
};

var prototypeAccessors$3 = { length: { configurable: true } };
FieldBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
        var this$1 = this;

    var index = 0;
    return {
        next: function () { return ({
            value: this$1.items[index++],
            done: index > this$1.items.length
        }); }
    };
};
prototypeAccessors$3.length.get = function () {
    return this.items.length;
};
FieldBag.prototype.find = function find$1 (matcher) {
    return find(this.items, function (item) { return item.matches(matcher); });
};
FieldBag.prototype.filter = function filter (matcher) {
    if (Array.isArray(matcher)) {
        return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
    }
    return this.items.filter(function (item) { return item.matches(matcher); });
};
FieldBag.prototype.map = function map (mapper) {
    return this.items.map(mapper);
};
FieldBag.prototype.remove = function remove (matcher) {
    var item = null;
    if (matcher instanceof Field) {
        item = matcher;
    } else {
        item = this.find(matcher);
    }
    if (!item) 
        { return null; }
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    return item;
};
FieldBag.prototype.push = function push (item) {
    if (!(item instanceof Field)) {
        throw createError('FieldBag only accepts instances of Field that has an id defined.');
    }
    if (!item.id) {
        throw createError('Field id must be defined.');
    }
    if (this.find({
        id: item.id
    })) {
        throw createError(("Field with id " + (item.id) + " is already added."));
    }
    this.items.push(item);
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$3 );

var RULES = {};
var STRICT_MODE = true;
var TARGET_RULES = ['confirmed','after','before'];
var Validator = function Validator(validations, options) {
    var this$1 = this;
    if ( options === void 0 ) options = {
    fastExit: true
};

    this.strict = STRICT_MODE;
    this.errors = new ErrorBag();
    this.fields = new FieldBag();
    this.flags = {};
    this._createFields(validations);
    this.paused = false;
    this.fastExit = options.fastExit || false;
    this.ownerId = options.vm && options.vm._uid;
    this._localeListener = (function () {
        this$1.errors.regenerate();
    });
    if (this._vm) {
        this._vm.$on('localeChanged', this._localeListener);
    }
};

var prototypeAccessors$4 = { dictionary: { configurable: true },_vm: { configurable: true },locale: { configurable: true },rules: { configurable: true } };
var staticAccessors$1 = { dictionary: { configurable: true },locale: { configurable: true },rules: { configurable: true } };
prototypeAccessors$4.dictionary.get = function () {
    return Config.dependency('dictionary');
};
prototypeAccessors$4._vm.get = function () {
    return Config.dependency('vm');
};
staticAccessors$1.dictionary.get = function () {
    return Config.dependency('dictionary');
};
prototypeAccessors$4.locale.get = function () {
    return this.dictionary.locale;
};
prototypeAccessors$4.locale.set = function (value) {
    Validator.locale = value;
};
staticAccessors$1.locale.get = function () {
    return Validator.dictionary.locale;
};
staticAccessors$1.locale.set = function (value) {
    var hasChanged = value !== Validator.dictionary.locale;
    Validator.dictionary.locale = value;
    if (hasChanged && Config.dependency('vm')) {
        Config.dependency('vm').$emit('localeChanged');
    }
};
prototypeAccessors$4.rules.get = function () {
    return RULES;
};
staticAccessors$1.rules.get = function () {
    return RULES;
};
Validator.create = function create (validations, options) {
    return new Validator(validations, options);
};
Validator.extend = function extend (name, validator, options) {
        if ( options === void 0 ) options = {};

    Validator._guardExtend(name, validator);
    Validator._merge(name, validator);
    if (options && options.hasTarget) {
        TARGET_RULES.push(name);
    }
};
Validator.remove = function remove (name) {
    delete RULES[name];
    var idx = TARGET_RULES.indexOf(name);
    if (idx === -1) 
        { return; }
    TARGET_RULES.splice(idx, 1);
};
Validator.isTargetRule = function isTargetRule (name) {
    return TARGET_RULES.indexOf(name) !== -1;
};
Validator.setStrictMode = function setStrictMode (strictMode) {
        if ( strictMode === void 0 ) strictMode = true;

    STRICT_MODE = strictMode;
};
Validator.prototype.localize = function localize (lang, dictionary) {
    Validator.localize(lang, dictionary);
};
Validator.localize = function localize (lang, dictionary) {
        var obj;

    if (isObject(lang)) {
        Validator.dictionary.merge(lang);
        return;
    }
    if (dictionary) {
        var locale = lang || dictionary.name;
        dictionary = assign({}, dictionary);
        Validator.dictionary.merge(( obj = {}, obj[locale] = dictionary, obj ));
    }
    if (lang) {
        Validator.locale = lang;
    }
};
Validator.prototype.attach = function attach (field) {
    if (arguments.length > 1) {
        warn('This signature of the attach method has been deprecated, please consult the docs.');
        field = assign({}, {
            name: arguments[0],
            rules: arguments[1]
        }, arguments[2] || {
            vm: {
                $validator: this
            }
        });
    }
    var value = field.initialValue;
    if (!(field instanceof Field)) {
        field = new Field(field);
    }
    this.fields.push(field);
    if (field.initial) {
        this.validate(("#" + (field.id)), value || field.value);
    } else {
        this._validate(field, value || field.value, true).then(function (result) {
            field.flags.valid = result.valid;
            field.flags.invalid = !result.valid;
        });
    }
    this._addFlag(field, field.scope);
    return field;
};
Validator.prototype.flag = function flag (name, flags) {
    var field = this._resolveField(name);
    if (!field || !flags) {
        return;
    }
    field.setFlags(flags);
};
Validator.prototype.detach = function detach (name, scope) {
    var field = name instanceof Field ? name : this._resolveField(name, scope);
    if (!field) 
        { return; }
    field.destroy();
    this.errors.remove(field.name, field.scope, field.id);
    this.fields.remove(field);
    var flags = this.flags;
    if (!isNullOrUndefined(field.scope) && flags[("$" + (field.scope))]) {
        delete flags[("$" + (field.scope))][field.name];
    } else if (isNullOrUndefined(field.scope)) {
        delete flags[field.name];
    }
    this.flags = assign({}, flags);
};
Validator.prototype.extend = function extend (name, validator, options) {
        if ( options === void 0 ) options = {};

    Validator.extend(name, validator, options);
};
Validator.prototype.reset = function reset (matcher) {
    return new Promise((function ($return, $error) {
        return this._vm.$nextTick().then((function ($await_1) {
            try {
                return this._vm.$nextTick().then((function ($await_2) {
                        var this$1 = this;

                    try {
                        this.fields.filter(matcher).forEach(function (field) {
                            field.reset();
                            this$1.errors.remove(field.name, field.scope, field.id);
                        });
                        return $return();
                    } catch ($boundEx) {
                        return $error($boundEx);
                    }
                }).bind(this), $error);
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.update = function update (id, ref) {
        var scope = ref.scope;

    var field = this._resolveField(("#" + id));
    if (!field) 
        { return; }
    this.errors.update(id, {
        scope: scope
    });
    if (!isNullOrUndefined(field.scope) && this.flags[("$" + (field.scope))]) {
        delete this.flags[("$" + (field.scope))][field.name];
    } else if (isNullOrUndefined(field.scope)) {
        delete this.flags[field.name];
    }
    this._addFlag(field, scope);
};
Validator.prototype.remove = function remove (name) {
    Validator.remove(name);
};
Validator.prototype.validate = function validate (name, value, scope, silent) {
        if ( scope === void 0 ) scope = null;
        if ( silent === void 0 ) silent = false;

    var $args = arguments;
    return new Promise((function ($return, $error) {
        var matched, field, result;
        if (this.paused) 
            { return $return(Promise.resolve(true)); }
        if ($args.length === 0) {
            return $return(this.validateScopes());
        }
        if ($args.length === 1 && $args[0] === '*') {
            return $return(this.validateAll());
        }
        if ($args.length === 1 && typeof $args[0] === 'string' && /^(.+)\.\*$/.test($args[0])) {
            matched = $args[0].match(/^(.+)\.\*$/)[1];
            return $return(this.validateAll(matched));
        }
        field = this._resolveField(name, scope);
        if (!field) {
            return $return(this._handleFieldNotFound(name, scope));
        }
        if (!silent) 
            { field.flags.pending = true; }
        if ($args.length === 1) {
            value = field.value;
        }
        return this._validate(field, value).then((function ($await_3) {
            try {
                result = $await_3;
                if (!silent) {
                    this._handleValidationResults([result]);
                }
                return $return(result.valid);
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.pause = function pause () {
    this.paused = true;
    return this;
};
Validator.prototype.resume = function resume () {
    this.paused = false;
    return this;
};
Validator.prototype.validateAll = function validateAll (values, scope, silent) {
        if ( scope === void 0 ) scope = null;
        if ( silent === void 0 ) silent = false;

    return new Promise((function ($return, $error) {
            var this$1 = this;

        var results;
        var matcher, providedValues;
        if (this.paused) 
            { return $return(true); }
        matcher = null;
        providedValues = false;
        if (typeof values === 'string') {
            matcher = {
                scope: values
            };
        } else if (isObject(values)) {
            matcher = Object.keys(values).map(function (key) { return ({
                name: key,
                scope: scope
            }); });
            providedValues = true;
        } else if (Array.isArray(values)) {
            matcher = values.map(function (key) { return ({
                name: key,
                scope: scope
            }); });
        } else {
            matcher = {
                scope: scope
            };
        }
        return Promise.all(this.fields.filter(matcher).map(function (field) { return this$1._validate(field, providedValues ? values[field.name] : field.value); })).then((function ($await_4) {
            try {
                results = $await_4;
                if (!silent) {
                    this._handleValidationResults(results);
                }
                return $return(results.every(function (t) { return t.valid; }));
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.validateScopes = function validateScopes (silent) {
        if ( silent === void 0 ) silent = false;

    return new Promise((function ($return, $error) {
            var this$1 = this;

        var results;
        if (this.paused) 
            { return $return(true); }
        return Promise.all(this.fields.map(function (field) { return this$1._validate(field, field.value); })).then((function ($await_5) {
            try {
                results = $await_5;
                if (!silent) {
                    this._handleValidationResults(results);
                }
                return $return(results.every(function (t) { return t.valid; }));
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};
Validator.prototype.destroy = function destroy () {
    this._vm.$off('localeChanged', this._localeListener);
};
Validator.prototype._createFields = function _createFields (validations) {
        var this$1 = this;

    if (!validations) 
        { return; }
    Object.keys(validations).forEach(function (field) {
        var options = assign({}, {
            name: field,
            rules: validations[field]
        });
        this$1.attach(options);
    });
};
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
    var format = null;
    if (validations.date_format && Array.isArray(validations.date_format)) {
        format = validations.date_format[0];
    }
    return format || this.dictionary.getDateFormat(this.locale);
};
Validator.prototype._isADateRule = function _isADateRule (rule) {
    return !(!(~['after','before','date_between','date_format'].indexOf(rule)));
};
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
        if ( data === void 0 ) data = {};
        if ( targetName === void 0 ) targetName = null;

    var name = this._getFieldDisplayName(field);
    var params = this._getLocalizedParams(rule, targetName);
    return this.dictionary.getFieldMessage(this.locale, field.name, rule.name, [name,
        params,data]);
};
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
        if ( targetName === void 0 ) targetName = null;

    if (~TARGET_RULES.indexOf(rule.name) && rule.params && rule.params[0]) {
        var localizedName = targetName || this.dictionary.getAttribute(this.locale, rule.params[0], rule.params[0]);
        return [localizedName].concat(rule.params.slice(1));
    }
    return rule.params;
};
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
    return field.alias || this.dictionary.getAttribute(this.locale, field.name, field.name);
};
Validator.prototype._addFlag = function _addFlag (field, scope) {
        var obj, obj$1, obj$2;

        if ( scope === void 0 ) scope = null;
    if (isNullOrUndefined(scope)) {
        this.flags = assign({}, this.flags, ( obj = {}, obj[("" + (field.name))] = field.flags, obj ));
        return;
    }
    var scopeObj = assign({}, this.flags[("$" + scope)] || {}, ( obj$1 = {}, obj$1[("" + (field.name))] = field.flags, obj$1 ));
    this.flags = assign({}, this.flags, ( obj$2 = {}, obj$2[("$" + scope)] = scopeObj, obj$2 ));
};
Validator.prototype._test = function _test (field, value, rule) {
        var this$1 = this;

    var validator = RULES[rule.name];
    var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
    var targetName = null;
    if (!validator || typeof validator !== 'function') {
        throw createError(("No such validator '" + (rule.name) + "' exists."));
    }
    if (TARGET_RULES.indexOf(rule.name) !== -1) {
        var target = find(field.dependencies, function (d) { return d.name === rule.name; });
        if (target) {
            targetName = target.field.alias;
            params = [target.field.value].concat(params.slice(1));
        }
    } else if (rule.name === 'required' && field.rejectsFalse) {
        params = params.length ? params : [true];
    }
    if (this._isADateRule(rule.name)) {
        var dateFormat = this._getDateFormat(field.rules);
        if (rule.name !== 'date_format') {
            params.push(dateFormat);
        }
    }
    var result = validator(value, params);
    if (isCallable(result.then)) {
        return result.then(function (values) {
            var allValid = true;
            var data = {};
            if (Array.isArray(values)) {
                allValid = values.every(function (t) { return isObject(t) ? t.valid : t; });
            } else {
                allValid = isObject(values) ? values.valid : values;
                data = values.data;
            }
            return {
                valid: allValid,
                errors: allValid ? [] : [this$1._createFieldError(field, rule, data, targetName)]
            };
        });
    }
    if (!isObject(result)) {
        result = {
            valid: result,
            data: {}
        };
    }
    return {
        valid: result.valid,
        errors: result.valid ? [] : [this._createFieldError(field, rule, result.data, targetName)]
    };
};
Validator._merge = function _merge (name, validator) {
    if (isCallable(validator)) {
        RULES[name] = validator;
        return;
    }
    RULES[name] = validator.validate;
    if (validator.getMessage) {
        Validator.dictionary.setMessage(this.locale, name, validator.getMessage);
    }
};
Validator._guardExtend = function _guardExtend (name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (!isCallable(validator.validate)) {
        throw createError(("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method."));
    }
};
Validator.prototype._createFieldError = function _createFieldError (field, rule, data, targetName) {
        var this$1 = this;

    return {
        id: field.id,
        field: field.name,
        msg: this._formatErrorMessage(field, rule, data, targetName),
        rule: rule.name,
        scope: field.scope,
        regenerate: function () { return this$1._formatErrorMessage(field, rule, data, targetName); }
    };
};
Validator.prototype._resolveField = function _resolveField (name, scope) {
    if (!isNullOrUndefined(scope)) {
        return this.fields.find({
            name: name,
            scope: scope
        });
    }
    if (name[0] === '#') {
        return this.fields.find({
            id: name.slice(1)
        });
    }
    if (name.indexOf('.') > -1) {
        var ref = name.split('.');
            var fieldScope = ref[0];
            var fieldName = ref.slice(1);
        var field = this.fields.find({
            name: fieldName.join('.'),
            scope: fieldScope
        });
        if (field) {
            return field;
        }
    }
    return this.fields.find({
        name: name,
        scope: null
    });
};
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
    if (!this.strict) 
        { return true; }
    var fullName = isNullOrUndefined(scope) ? name : ("" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name);
    throw createError(("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first."));
};
Validator.prototype._handleValidationResults = function _handleValidationResults (results) {
    var matchers = results.map(function (result) { return ({
        id: result.id
    }); });
    this.errors.removeById(matchers.map(function (m) { return m.id; }));
    var allErrors = results.reduce(function (prev, curr) {
        prev.push.apply(prev, curr.errors);
        return prev;
    }, []);
    this.errors.add(allErrors);
    this.fields.filter(matchers).forEach(function (field) {
        var result = find(results, function (r) { return r.id === field.id; });
        field.setFlags({
            pending: false,
            valid: result.valid,
            validated: true
        });
    });
};
Validator.prototype._validate = function _validate (field, value) {
    return new Promise((function ($return, $error) {
            var this$1 = this;

        var promises, errors;
        var isExitEarly;
        if (field.isDisabled || !field.isRequired && (isNullOrUndefined(value) || value === '')) {
            return $return({
                valid: true,
                id: field.id,
                errors: []
            });
        }
        promises = [];
        errors = [];
        isExitEarly = false;
        Object.keys(field.rules).some(function (rule) {
            var result = this$1._test(field, value, {
                name: rule,
                params: field.rules[rule]
            });
            if (isCallable(result.then)) {
                promises.push(result);
            } else if (this$1.fastExit && !result.valid) {
                errors.push.apply(errors, result.errors);
                isExitEarly = true;
            } else {
                promises.push(new Promise(function (resolve) { return resolve(result); }));
            }
            return isExitEarly;
        });
        if (isExitEarly) {
            return $return({
                valid: false,
                errors: errors,
                id: field.id
            });
        }
        return Promise.all(promises).then((function ($await_6) {
            try {
                return $return($await_6.reduce(function (prev, v) {
                        var ref;

                    if (!v.valid) {
                        (ref = prev.errors).push.apply(ref, v.errors);
                    }
                    prev.valid = prev.valid && v.valid;
                    return prev;
                }, {
                    valid: true,
                    errors: errors,
                    id: field.id
                }));
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this));
};

Object.defineProperties( Validator.prototype, prototypeAccessors$4 );
Object.defineProperties( Validator, staticAccessors$1 );

var requestsValidator = function (injections) {
    if (isObject(injections) && injections.$validator) {
        return true;
    }
    return false;
};
var createValidator = function (vm, options) { return new Validator(null, {
    vm: vm,
    fastExit: options.fastExit
}); };
var mixin = {
    provide: function provide() {
        if (this.$validator && !isBuiltInComponent(this.$vnode)) {
            return {
                $validator: this.$validator
            };
        }
        return {};
    },
    beforeCreate: function beforeCreate() {
        if (isBuiltInComponent(this.$vnode)) {
            return;
        }
        if (!this.$parent) {
            Config.merge(this.$options.$_veeValidate || {});
        }
        var options = Config.resolve(this);
        var Vue = this.$options._base;
        if (this.$options.$validates) {
            warn('The ctor $validates option has been deprecated please set the $_veeValidate.validator option to "new" instead');
            this.$validator = createValidator(this, options);
        }
        if (!this.$parent || this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator)) {
            this.$validator = createValidator(this, options);
        }
        var requested = requestsValidator(this.$options.inject);
        if (!this.$validator && options.inject && !requested) {
            this.$validator = createValidator(this, options);
        }
        if (!requested && !this.$validator) {
            return;
        }
        if (!requested && this.$validator) {
            Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
            Vue.util.defineReactive(this.$validator, 'flags', this.$validator.flags);
        }
        if (!this.$options.computed) {
            this.$options.computed = {};
        }
        this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter() {
            return this.$validator.errors;
        };
        this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter() {
            return this.$validator.flags;
        };
    },
    beforeDestroy: function beforeDestroy() {
        if (isBuiltInComponent(this.$vnode)) 
            { return; }
        if (this.$validator && this.$validator.ownerId === this._uid) {
            this.$validator.pause();
            this.$validator.destroy();
        }
    }
}

function findField(el, context) {
    if (!context || !context.$validator) {
        return null;
    }
    return context.$validator.fields.find({
        id: el._veeValidateId
    });
}
var directive = {
    bind: function bind(el, binding, vnode) {
        var validator = vnode.context.$validator;
        if (!validator) {
            warn("No validator instance is present on vm, did you forget to inject '$validator'?");
            return;
        }
        var fieldOptions = Generator.generate(el, binding, vnode);
        validator.attach(fieldOptions);
    },
    inserted: function inserted(el, binding, vnode) {
        var field = findField(el, vnode.context);
        var scope = Generator.resolveScope(el, binding, vnode);
        if (!field || scope === field.scope) 
            { return; }
        field.update({
            scope: scope
        });
        field.updated = false;
    },
    update: function update(el, binding, vnode) {
        var field = findField(el, vnode.context);
        if (!field || field.updated && isEqual(binding.value, binding.oldValue)) 
            { return; }
        var scope = Generator.resolveScope(el, binding, vnode);
        var rules = Generator.resolveRules(el, binding);
        field.update({
            scope: scope,
            rules: rules
        });
    },
    unbind: function unbind(el, binding, ref) {
        var context = ref.context;

        var field = findField(el, context);
        if (!field) 
            { return; }
        context.$validator.detach(field);
    }
}

var Vue;
function install(_Vue, options) {
    if ( options === void 0 ) options = {};

    if (Vue && _Vue === Vue) {
        if (true) {
            warn('already installed, Vue.use(VeeValidate) should only be called once.');
        }
        return;
    }
    detectPassiveSupport();
    Vue = _Vue;
    var localVue = new Vue();
    Config.register('vm', localVue);
    Config.merge(options);
    var ref = Config.current;
    var dictionary = ref.dictionary;
    var i18n = ref.i18n;
    if (dictionary) {
        Validator.localize(dictionary);
    }
    if (i18n && i18n._vm && isCallable(i18n._vm.$watch)) {
        i18n._vm.$watch('locale', function () {
            localVue.$emit('localeChanged');
        });
    }
    if (!i18n && options.locale) {
        Validator.localize(options.locale);
    }
    Validator.setStrictMode(Config.current.strict);
    Vue.mixin(mixin);
    Vue.directive('validate', directive);
}

var formatFileSize = function (size) {
    var units = ['Byte','KB','MB','GB','TB','PB','EB','ZB','YB'];
    var threshold = 1024;
    size = Number(size) * threshold;
    var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
    return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};
var isDefinedGlobally = function () { return typeof VeeValidate !== 'undefined'; };

var obj;
var messages = {
    _default: function (field) { return ("The " + field + " value is not valid."); },
    after: function (field, ref) {
        var target = ref[0];
        var inclusion = ref[1];

        return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".");
},
    alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
    alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
    alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
    alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
    before: function (field, ref) {
        var target = ref[0];
        var inclusion = ref[1];

        return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".");
},
    between: function (field, ref) {
        var min = ref[0];
        var max = ref[1];

        return ("The " + field + " field must be between " + min + " and " + max + ".");
},
    confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
    credit_card: function (field) { return ("The " + field + " field is invalid."); },
    date_between: function (field, ref) {
        var min = ref[0];
        var max = ref[1];

        return ("The " + field + " must be between " + min + " and " + max + ".");
},
    date_format: function (field, ref) {
        var format = ref[0];

        return ("The " + field + " must be in the format " + format + ".");
},
    decimal: function (field, ref) {
        if ( ref === void 0 ) ref = [];
        var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';

        return ("The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.");
},
    digits: function (field, ref) {
        var length = ref[0];

        return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
    dimensions: function (field, ref) {
        var width = ref[0];
        var height = ref[1];

        return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
    email: function (field) { return ("The " + field + " field must be a valid email."); },
    ext: function (field) { return ("The " + field + " field must be a valid file."); },
    image: function (field) { return ("The " + field + " field must be an image."); },
    in: function (field) { return ("The " + field + " field must be a valid value."); },
    integer: function (field) { return ("The " + field + " field must be an integer."); },
    ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
    length: function (field, ref) {
        var length = ref[0];
        var max = ref[1];

        if (max) {
            return ("The " + field + " length must be between " + length + " and " + max + ".");
        }
        return ("The " + field + " length must be " + length + ".");
    },
    max: function (field, ref) {
        var length = ref[0];

        return ("The " + field + " field may not be greater than " + length + " characters.");
},
    max_value: function (field, ref) {
        var max = ref[0];

        return ("The " + field + " field must be " + max + " or less.");
},
    mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
    min: function (field, ref) {
        var length = ref[0];

        return ("The " + field + " field must be at least " + length + " characters.");
},
    min_value: function (field, ref) {
        var min = ref[0];

        return ("The " + field + " field must be " + min + " or more.");
},
    not_in: function (field) { return ("The " + field + " field must be a valid value."); },
    numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
    regex: function (field) { return ("The " + field + " field format is invalid."); },
    required: function (field) { return ("The " + field + " field is required."); },
    size: function (field, ref) {
        var size = ref[0];

        return ("The " + field + " size must be less than " + (formatFileSize(size)) + ".");
},
    url: function (field) { return ("The " + field + " field is not a valid URL."); }
};
var locale = {
    name: 'en',
    messages: messages,
    attributes: {}
};
if (isDefinedGlobally()) {
    VeeValidate.Validator.localize(( obj = {}, obj[locale.name] = locale, obj ));
}

function use(plugin, options) {
    if ( options === void 0 ) options = {};

    if (!isCallable(plugin)) {
        return warn('The plugin must be a callable function');
    }
    plugin({
        Validator: Validator,
        ErrorBag: ErrorBag,
        Rules: Validator.rules
    }, options);
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
    dateTimeDelimeter: /[T ]/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-])(\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function toDate(argument, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    if (argument === null) {
        return new Date(NaN);
    }
    var options = dirtyOptions || {};
    var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError('additionalDigits must be 0, 1 or 2');
    }
    if (argument instanceof Date) {
        return new Date(argument.getTime());
    } else if (typeof argument !== 'string') {
        return new Date(argument);
    }
    var dateStrings = splitDateString(argument);
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;
    var date = parseDate(restDateString, year);
    if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;
        if (dateStrings.time) {
            time = parseTime(dateStrings.time);
        }
        if (dateStrings.timezone) {
            offset = parseTimezone(dateStrings.timezone);
        } else {
            offset = new Date(timestamp + time).getTimezoneOffset();
            offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
        }
        return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
    } else {
        return new Date(argument);
    }
}

function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns.dateTimeDelimeter);
    var timeString;
    if (patterns.plainTime.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        } else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}

function parseYear(dateString, additionalDigits) {
    var patternYYY = patterns.YYY[additionalDigits];
    var patternYYYYY = patterns.YYYYY[additionalDigits];
    var token;
    token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
        var yearString = token[1];
        return {
            year: parseInt(yearString, 10),
            restDateString: dateString.slice(yearString.length)
        };
    }
    token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
        var centuryString = token[1];
        return {
            year: parseInt(centuryString, 10) * 100,
            restDateString: dateString.slice(centuryString.length)
        };
    }
    return {
        year: null
    };
}

function parseDate(dateString, year) {
    if (year === null) {
        return null;
    }
    var token;
    var date;
    var month;
    var week;
    if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
    }
    token = patterns.MM.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        date.setUTCFullYear(year, month);
        return date;
    }
    token = patterns.DDD.exec(dateString);
    if (token) {
        date = new Date(0);
        var dayOfYear = parseInt(token[1], 10);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
    }
    token = patterns.MMDD.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        var day = parseInt(token[2], 10);
        date.setUTCFullYear(year, month, day);
        return date;
    }
    token = patterns.Www.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        return dayOfISOYear(year, week);
    }
    token = patterns.WwwD.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        var dayOfWeek = parseInt(token[2], 10) - 1;
        return dayOfISOYear(year, week, dayOfWeek);
    }
    return null;
}

function parseTime(timeString) {
    var token;
    var hours;
    var minutes;
    token = patterns.HH.exec(timeString);
    if (token) {
        hours = parseFloat(token[1].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR;
    }
    token = patterns.HHMM.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }
    token = patterns.HHMMSS.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        var seconds = parseFloat(token[3].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }
    return null;
}

function parseTimezone(timezoneString) {
    var token;
    var absoluteOffset;
    token = patterns.timezoneZ.exec(timezoneString);
    if (token) {
        return 0;
    }
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60;
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    return 0;
}

function dayOfISOYear(isoYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
    var amount = Number(dirtyAmount);
    return new Date(timestamp + amount);
}

function cloneObject(dirtyObject) {
    dirtyObject = dirtyObject || {};
    var object = {};
    for (var property in dirtyObject) {
        if (dirtyObject.hasOwnProperty(property)) {
            object[property] = dirtyObject[property];
        }
    }
    return object;
}

var MILLISECONDS_IN_MINUTE$2 = 60000;
function addMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var amount = Number(dirtyAmount);
    return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions);
}

function isValid(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    return !isNaN(date);
}

var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === 'string') {
        result = formatDistanceLocale[token];
    } else if (count === 1) {
        result = formatDistanceLocale[token].one;
    } else {
        result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }
    if (options.addSuffix) {
        if (options.comparison > 0) {
            return 'in ' + result;
        } else {
            return result + ' ago';
        }
    }
    return result;
}

var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;
function buildShortLongFormat(format) {
    return format.replace(tokensToBeShortedPattern, function (token) {
        return token.slice(1);
    });
}

function buildFormatLongFn(obj) {
    var formatLongLocale = {
        LTS: obj.LTS,
        LT: obj.LT,
        L: obj.L,
        LL: obj.LL,
        LLL: obj.LLL,
        LLLL: obj.LLLL,
        l: obj.l || buildShortLongFormat(obj.L),
        ll: obj.ll || buildShortLongFormat(obj.LL),
        lll: obj.lll || buildShortLongFormat(obj.LLL),
        llll: obj.llll || buildShortLongFormat(obj.LLLL)
    };
    return function (token) {
        return formatLongLocale[token];
    };
}

var formatLong = buildFormatLongFn({
    LT: 'h:mm aa',
    LTS: 'h:mm:ss aa',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D YYYY',
    LLL: 'MMMM D YYYY h:mm aa',
    LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

var formatRelativeLocale = {
    lastWeek: '[last] dddd [at] LT',
    yesterday: '[yesterday at] LT',
    today: '[today at] LT',
    tomorrow: '[tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    other: 'L'
};
function formatRelative(token, date, baseDate, options) {
    return formatRelativeLocale[token];
}

function buildLocalizeFn(values, defaultType, indexCallback) {
    return function (dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        var valuesArray = values[type] || values[defaultType];
        var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
        return valuesArray[index];
    };
}

function buildLocalizeArrayFn(values, defaultType) {
    return function (dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        return values[type] || values[defaultType];
    };
}

var weekdayValues = {
    narrow: ['Su','Mo','Tu','We','Th','Fr','Sa'],
    short: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    long: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
};
var monthValues = {
    short: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    long: ['January','February','March','April','May','June','July','August','September',
        'October','November','December']
};
var timeOfDayValues = {
    uppercase: ['AM','PM'],
    lowercase: ['am','pm'],
    long: ['a.m.','p.m.']
};
function ordinalNumber(dirtyNumber, dirtyOptions) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
}

var localize = {
    ordinalNumber: ordinalNumber,
    weekday: buildLocalizeFn(weekdayValues, 'long'),
    weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
    month: buildLocalizeFn(monthValues, 'long'),
    months: buildLocalizeArrayFn(monthValues, 'long'),
    timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
        return hours / 12 >= 1 ? 1 : 0;
    }),
    timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
};

function buildMatchFn(patterns, defaultType) {
    return function (dirtyString, dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        var pattern = patterns[type] || patterns[defaultType];
        var string = String(dirtyString);
        return string.match(pattern);
    };
}

function buildParseFn(patterns, defaultType) {
    return function (matchResult, dirtyOptions) {
        var options = dirtyOptions || {};
        var type = options.type ? String(options.type) : defaultType;
        var patternsArray = patterns[type] || patterns[defaultType];
        var string = matchResult[1];
        return patternsArray.findIndex(function (pattern) {
            return pattern.test(string);
        });
    };
}

function buildMatchPatternFn(pattern) {
    return function (dirtyString) {
        var string = String(dirtyString);
        return string.match(pattern);
    };
}

function parseDecimal(matchResult) {
    return parseInt(matchResult[1], 10);
}

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;
var matchWeekdaysPatterns = {
    narrow: /^(su|mo|tu|we|th|fr|sa)/i,
    short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseWeekdayPatterns = {
    any: [/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]
};
var matchMonthsPatterns = {
    short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    any: [/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,
        /^n/i,/^d/i]
};
var matchTimesOfDayPatterns = {
    short: /^(am|pm)/i,
    long: /^([ap]\.?\s?m\.?)/i
};
var parseTimeOfDayPatterns = {
    any: [/^a/i,/^p/i]
};
var match = {
    ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
    ordinalNumber: parseDecimal,
    weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
    weekday: buildParseFn(parseWeekdayPatterns, 'any'),
    months: buildMatchFn(matchMonthsPatterns, 'long'),
    month: buildParseFn(parseMonthPatterns, 'any'),
    timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
    timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

var locale$1 = {
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};

var MILLISECONDS_IN_DAY$1 = 86400000;
function getUTCDayOfYear(dirtyDate, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1;
}

function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = 1;
    var date = toDate(dirtyDate, dirtyOptions);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
    var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
    return date;
}

var MILLISECONDS_IN_WEEK$2 = 604800000;
function getUTCISOWeek(dirtyDate, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}

var formatters = {
    'M': function (date) {
        return date.getUTCMonth() + 1;
    },
    'Mo': function (date, options) {
        var month = date.getUTCMonth() + 1;
        return options.locale.localize.ordinalNumber(month, {
            unit: 'month'
        });
    },
    'MM': function (date) {
        return addLeadingZeros(date.getUTCMonth() + 1, 2);
    },
    'MMM': function (date, options) {
        return options.locale.localize.month(date.getUTCMonth(), {
            type: 'short'
        });
    },
    'MMMM': function (date, options) {
        return options.locale.localize.month(date.getUTCMonth(), {
            type: 'long'
        });
    },
    'Q': function (date) {
        return Math.ceil((date.getUTCMonth() + 1) / 3);
    },
    'Qo': function (date, options) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        return options.locale.localize.ordinalNumber(quarter, {
            unit: 'quarter'
        });
    },
    'D': function (date) {
        return date.getUTCDate();
    },
    'Do': function (date, options) {
        return options.locale.localize.ordinalNumber(date.getUTCDate(), {
            unit: 'dayOfMonth'
        });
    },
    'DD': function (date) {
        return addLeadingZeros(date.getUTCDate(), 2);
    },
    'DDD': function (date) {
        return getUTCDayOfYear(date);
    },
    'DDDo': function (date, options) {
        return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), {
            unit: 'dayOfYear'
        });
    },
    'DDDD': function (date) {
        return addLeadingZeros(getUTCDayOfYear(date), 3);
    },
    'dd': function (date, options) {
        return options.locale.localize.weekday(date.getUTCDay(), {
            type: 'narrow'
        });
    },
    'ddd': function (date, options) {
        return options.locale.localize.weekday(date.getUTCDay(), {
            type: 'short'
        });
    },
    'dddd': function (date, options) {
        return options.locale.localize.weekday(date.getUTCDay(), {
            type: 'long'
        });
    },
    'd': function (date) {
        return date.getUTCDay();
    },
    'do': function (date, options) {
        return options.locale.localize.ordinalNumber(date.getUTCDay(), {
            unit: 'dayOfWeek'
        });
    },
    'E': function (date) {
        return date.getUTCDay() || 7;
    },
    'W': function (date) {
        return getUTCISOWeek(date);
    },
    'Wo': function (date, options) {
        return options.locale.localize.ordinalNumber(getUTCISOWeek(date), {
            unit: 'isoWeek'
        });
    },
    'WW': function (date) {
        return addLeadingZeros(getUTCISOWeek(date), 2);
    },
    'YY': function (date) {
        return addLeadingZeros(date.getUTCFullYear(), 4).substr(2);
    },
    'YYYY': function (date) {
        return addLeadingZeros(date.getUTCFullYear(), 4);
    },
    'GG': function (date) {
        return String(getUTCISOWeekYear(date)).substr(2);
    },
    'GGGG': function (date) {
        return getUTCISOWeekYear(date);
    },
    'H': function (date) {
        return date.getUTCHours();
    },
    'HH': function (date) {
        return addLeadingZeros(date.getUTCHours(), 2);
    },
    'h': function (date) {
        var hours = date.getUTCHours();
        if (hours === 0) {
            return 12;
        } else if (hours > 12) {
            return hours % 12;
        } else {
            return hours;
        }
    },
    'hh': function (date) {
        return addLeadingZeros(formatters['h'](date), 2);
    },
    'm': function (date) {
        return date.getUTCMinutes();
    },
    'mm': function (date) {
        return addLeadingZeros(date.getUTCMinutes(), 2);
    },
    's': function (date) {
        return date.getUTCSeconds();
    },
    'ss': function (date) {
        return addLeadingZeros(date.getUTCSeconds(), 2);
    },
    'S': function (date) {
        return Math.floor(date.getUTCMilliseconds() / 100);
    },
    'SS': function (date) {
        return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2);
    },
    'SSS': function (date) {
        return addLeadingZeros(date.getUTCMilliseconds(), 3);
    },
    'Z': function (date, options) {
        var originalDate = options._originalDate || date;
        return formatTimezone(originalDate.getTimezoneOffset(), ':');
    },
    'ZZ': function (date, options) {
        var originalDate = options._originalDate || date;
        return formatTimezone(originalDate.getTimezoneOffset());
    },
    'X': function (date, options) {
        var originalDate = options._originalDate || date;
        return Math.floor(originalDate.getTime() / 1000);
    },
    'x': function (date, options) {
        var originalDate = options._originalDate || date;
        return originalDate.getTime();
    },
    'A': function (date, options) {
        return options.locale.localize.timeOfDay(date.getUTCHours(), {
            type: 'uppercase'
        });
    },
    'a': function (date, options) {
        return options.locale.localize.timeOfDay(date.getUTCHours(), {
            type: 'lowercase'
        });
    },
    'aa': function (date, options) {
        return options.locale.localize.timeOfDay(date.getUTCHours(), {
            type: 'long'
        });
    }
};
function formatTimezone(offset, delimeter) {
    delimeter = delimeter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
}

function addLeadingZeros(number, targetLength) {
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function addUTCMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var amount = Number(dirtyAmount);
    date.setUTCMinutes(date.getUTCMinutes() + amount);
    return date;
}

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || locale$1;
    if (!locale.localize) {
        throw new RangeError('locale must contain localize property');
    }
    if (!locale.formatLong) {
        throw new RangeError('locale must contain formatLong property');
    }
    var localeFormatters = locale.formatters || {};
    var formattingTokensRegExp = locale.formattingTokensRegExp || defaultFormattingTokensRegExp;
    var formatLong = locale.formatLong;
    var originalDate = toDate(dirtyDate, options);
    if (!isValid(originalDate, options)) {
        return 'Invalid Date';
    }
    var timezoneOffset = originalDate.getTimezoneOffset();
    var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);
    var formatterOptions = cloneObject(options);
    formatterOptions.locale = locale;
    formatterOptions.formatters = formatters;
    formatterOptions._originalDate = originalDate;
    var result = formatStr.replace(longFormattingTokensRegExp, function (substring) {
        if (substring[0] === '[') {
            return substring;
        }
        if (substring[0] === '\\') {
            return cleanEscapedString(substring);
        }
        return formatLong(substring);
    }).replace(formattingTokensRegExp, function (substring) {
        var formatter = localeFormatters[substring] || formatters[substring];
        if (formatter) {
            return formatter(utcDate, formatterOptions);
        } else {
            return cleanEscapedString(substring);
        }
    });
    return result;
}

function cleanEscapedString(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function subMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var amount = Number(dirtyAmount);
    return addMinutes(dirtyDate, -amount, dirtyOptions);
}

function isAfter(dirtyDate, dirtyDateToCompare, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
    return date.getTime() > dateToCompare.getTime();
}

function isBefore(dirtyDate, dirtyDateToCompare, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
    return date.getTime() < dateToCompare.getTime();
}

function isEqual$1(dirtyLeftDate, dirtyRightDate, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
    var dateRight = toDate(dirtyRightDate, dirtyOptions);
    return dateLeft.getTime() === dateRight.getTime();
}

var patterns$1 = {
    'M': /^(1[0-2]|0?\d)/,
    'D': /^(3[0-1]|[0-2]?\d)/,
    'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    'W': /^(5[0-3]|[0-4]?\d)/,
    'YYYY': /^(\d{1,4})/,
    'H': /^(2[0-3]|[0-1]?\d)/,
    'm': /^([0-5]?\d)/,
    'Z': /^([+-])(\d{2}):(\d{2})/,
    'ZZ': /^([+-])(\d{2})(\d{2})/,
    singleDigit: /^(\d)/,
    twoDigits: /^(\d{2})/,
    threeDigits: /^(\d{3})/,
    fourDigits: /^(\d{4})/,
    anyDigits: /^(\d+)/
};
function parseDecimal$1(matchResult) {
    return parseInt(matchResult[1], 10);
}

var parsers = {
    'YY': {
        unit: 'twoDigitYear',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult);
        }
    },
    'YYYY': {
        unit: 'year',
        match: patterns$1.YYYY,
        parse: parseDecimal$1
    },
    'GG': {
        unit: 'isoYear',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) + 1900;
        }
    },
    'GGGG': {
        unit: 'isoYear',
        match: patterns$1.YYYY,
        parse: parseDecimal$1
    },
    'Q': {
        unit: 'quarter',
        match: patterns$1.singleDigit,
        parse: parseDecimal$1
    },
    'Qo': {
        unit: 'quarter',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'quarter'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'quarter'
            });
        }
    },
    'M': {
        unit: 'month',
        match: patterns$1.M,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) - 1;
        }
    },
    'Mo': {
        unit: 'month',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'month'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'month'
            }) - 1;
        }
    },
    'MM': {
        unit: 'month',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) - 1;
        }
    },
    'MMM': {
        unit: 'month',
        match: function (string, options) {
            return options.locale.match.months(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.month(matchResult, {
                type: 'short'
            });
        }
    },
    'MMMM': {
        unit: 'month',
        match: function (string, options) {
            return options.locale.match.months(string, {
                type: 'long'
            }) || options.locale.match.months(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.month(matchResult, {
                type: 'long'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.month(matchResult, {
                    type: 'short'
                });
            }
            return parseResult;
        }
    },
    'W': {
        unit: 'isoWeek',
        match: patterns$1.W,
        parse: parseDecimal$1
    },
    'Wo': {
        unit: 'isoWeek',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'isoWeek'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'isoWeek'
            });
        }
    },
    'WW': {
        unit: 'isoWeek',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'd': {
        unit: 'dayOfWeek',
        match: patterns$1.singleDigit,
        parse: parseDecimal$1
    },
    'do': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'dayOfWeek'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'dayOfWeek'
            });
        }
    },
    'dd': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.weekdays(string, {
                type: 'narrow'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.weekday(matchResult, {
                type: 'narrow'
            });
        }
    },
    'ddd': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.weekdays(string, {
                type: 'short'
            }) || options.locale.match.weekdays(string, {
                type: 'narrow'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.weekday(matchResult, {
                type: 'short'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.weekday(matchResult, {
                    type: 'narrow'
                });
            }
            return parseResult;
        }
    },
    'dddd': {
        unit: 'dayOfWeek',
        match: function (string, options) {
            return options.locale.match.weekdays(string, {
                type: 'long'
            }) || options.locale.match.weekdays(string, {
                type: 'short'
            }) || options.locale.match.weekdays(string, {
                type: 'narrow'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.weekday(matchResult, {
                type: 'long'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.weekday(matchResult, {
                    type: 'short'
                });
                if (parseResult == null) {
                    parseResult = options.locale.match.weekday(matchResult, {
                        type: 'narrow'
                    });
                }
            }
            return parseResult;
        }
    },
    'E': {
        unit: 'dayOfISOWeek',
        match: patterns$1.singleDigit,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult);
        }
    },
    'D': {
        unit: 'dayOfMonth',
        match: patterns$1.D,
        parse: parseDecimal$1
    },
    'Do': {
        unit: 'dayOfMonth',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'dayOfMonth'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'dayOfMonth'
            });
        }
    },
    'DD': {
        unit: 'dayOfMonth',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'DDD': {
        unit: 'dayOfYear',
        match: patterns$1.DDD,
        parse: parseDecimal$1
    },
    'DDDo': {
        unit: 'dayOfYear',
        match: function (string, options) {
            return options.locale.match.ordinalNumbers(string, {
                unit: 'dayOfYear'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.ordinalNumber(matchResult, {
                unit: 'dayOfYear'
            });
        }
    },
    'DDDD': {
        unit: 'dayOfYear',
        match: patterns$1.threeDigits,
        parse: parseDecimal$1
    },
    'A': {
        unit: 'timeOfDay',
        match: function (string, options) {
            return options.locale.match.timesOfDay(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            return options.locale.match.timeOfDay(matchResult, {
                type: 'short'
            });
        }
    },
    'aa': {
        unit: 'timeOfDay',
        match: function (string, options) {
            return options.locale.match.timesOfDay(string, {
                type: 'long'
            }) || options.locale.match.timesOfDay(string, {
                type: 'short'
            });
        },
        parse: function (matchResult, options) {
            var parseResult = options.locale.match.timeOfDay(matchResult, {
                type: 'long'
            });
            if (parseResult == null) {
                parseResult = options.locale.match.timeOfDay(matchResult, {
                    type: 'short'
                });
            }
            return parseResult;
        }
    },
    'H': {
        unit: 'hours',
        match: patterns$1.H,
        parse: parseDecimal$1
    },
    'HH': {
        unit: 'hours',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'h': {
        unit: 'timeOfDayHours',
        match: patterns$1.M,
        parse: parseDecimal$1
    },
    'hh': {
        unit: 'timeOfDayHours',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'm': {
        unit: 'minutes',
        match: patterns$1.m,
        parse: parseDecimal$1
    },
    'mm': {
        unit: 'minutes',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    's': {
        unit: 'seconds',
        match: patterns$1.m,
        parse: parseDecimal$1
    },
    'ss': {
        unit: 'seconds',
        match: patterns$1.twoDigits,
        parse: parseDecimal$1
    },
    'S': {
        unit: 'milliseconds',
        match: patterns$1.singleDigit,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) * 100;
        }
    },
    'SS': {
        unit: 'milliseconds',
        match: patterns$1.twoDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) * 10;
        }
    },
    'SSS': {
        unit: 'milliseconds',
        match: patterns$1.threeDigits,
        parse: parseDecimal$1
    },
    'Z': {
        unit: 'timezone',
        match: patterns$1.Z,
        parse: function (matchResult) {
            var sign = matchResult[1];
            var hours = parseInt(matchResult[2], 10);
            var minutes = parseInt(matchResult[3], 10);
            var absoluteOffset = hours * 60 + minutes;
            return sign === '+' ? absoluteOffset : -absoluteOffset;
        }
    },
    'ZZ': {
        unit: 'timezone',
        match: patterns$1.ZZ,
        parse: function (matchResult) {
            var sign = matchResult[1];
            var hours = parseInt(matchResult[2], 10);
            var minutes = parseInt(matchResult[3], 10);
            var absoluteOffset = hours * 60 + minutes;
            return sign === '+' ? absoluteOffset : -absoluteOffset;
        }
    },
    'X': {
        unit: 'timestamp',
        match: patterns$1.anyDigits,
        parse: function (matchResult) {
            return parseDecimal$1(matchResult) * 1000;
        }
    },
    'x': {
        unit: 'timestamp',
        match: patterns$1.anyDigits,
        parse: parseDecimal$1
    }
};
parsers['a'] = parsers['A'];

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var day = Number(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
    var day = Number(dirtyDay);
    if (day % 7 === 0) {
        day = day - 7;
    }
    var weekStartsOn = 1;
    var date = toDate(dirtyDate, dirtyOptions);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var isoWeek = Number(dirtyISOWeek);
    var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}

var MILLISECONDS_IN_DAY$3 = 86400000;
function setUTCISOWeekYear(dirtyDate, dirtyISOYear, dirtyOptions) {
    var date = toDate(dirtyDate, dirtyOptions);
    var isoYear = Number(dirtyISOYear);
    var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
    var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

var MILLISECONDS_IN_MINUTE$6 = 60000;
function setTimeOfDay(hours, timeOfDay) {
    var isAM = timeOfDay === 0;
    if (isAM) {
        if (hours === 12) {
            return 0;
        }
    } else {
        if (hours !== 12) {
            return 12 + hours;
        }
    }
    return hours;
}

var units = {
    twoDigitYear: {
        priority: 10,
        set: function (dateValues, value) {
            var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
            var year = century * 100 + value;
            dateValues.date.setUTCFullYear(year, 0, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    year: {
        priority: 10,
        set: function (dateValues, value) {
            dateValues.date.setUTCFullYear(value, 0, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    isoYear: {
        priority: 10,
        set: function (dateValues, value, options) {
            dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
            return dateValues;
        }
    },
    quarter: {
        priority: 20,
        set: function (dateValues, value) {
            dateValues.date.setUTCMonth((value - 1) * 3, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    month: {
        priority: 30,
        set: function (dateValues, value) {
            dateValues.date.setUTCMonth(value, 1);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    isoWeek: {
        priority: 40,
        set: function (dateValues, value, options) {
            dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
            return dateValues;
        }
    },
    dayOfWeek: {
        priority: 50,
        set: function (dateValues, value, options) {
            dateValues.date = setUTCDay(dateValues.date, value, options);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    dayOfISOWeek: {
        priority: 50,
        set: function (dateValues, value, options) {
            dateValues.date = setUTCISODay(dateValues.date, value, options);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    dayOfMonth: {
        priority: 50,
        set: function (dateValues, value) {
            dateValues.date.setUTCDate(value);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    dayOfYear: {
        priority: 50,
        set: function (dateValues, value) {
            dateValues.date.setUTCMonth(0, value);
            dateValues.date.setUTCHours(0, 0, 0, 0);
            return dateValues;
        }
    },
    timeOfDay: {
        priority: 60,
        set: function (dateValues, value, options) {
            dateValues.timeOfDay = value;
            return dateValues;
        }
    },
    hours: {
        priority: 70,
        set: function (dateValues, value, options) {
            dateValues.date.setUTCHours(value, 0, 0, 0);
            return dateValues;
        }
    },
    timeOfDayHours: {
        priority: 70,
        set: function (dateValues, value, options) {
            var timeOfDay = dateValues.timeOfDay;
            if (timeOfDay != null) {
                value = setTimeOfDay(value, timeOfDay);
            }
            dateValues.date.setUTCHours(value, 0, 0, 0);
            return dateValues;
        }
    },
    minutes: {
        priority: 80,
        set: function (dateValues, value) {
            dateValues.date.setUTCMinutes(value, 0, 0);
            return dateValues;
        }
    },
    seconds: {
        priority: 90,
        set: function (dateValues, value) {
            dateValues.date.setUTCSeconds(value, 0);
            return dateValues;
        }
    },
    milliseconds: {
        priority: 100,
        set: function (dateValues, value) {
            dateValues.date.setUTCMilliseconds(value);
            return dateValues;
        }
    },
    timezone: {
        priority: 110,
        set: function (dateValues, value) {
            dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$6);
            return dateValues;
        }
    },
    timestamp: {
        priority: 120,
        set: function (dateValues, value) {
            dateValues.date = new Date(value);
            return dateValues;
        }
    }
};

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE$7 = 60000;
var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
    if (arguments.length < 3) {
        throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
    }
    var dateString = String(dirtyDateString);
    var options = dirtyOptions || {};
    var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var locale = options.locale || locale$1;
    var localeParsers = locale.parsers || {};
    var localeUnits = locale.units || {};
    if (!locale.match) {
        throw new RangeError('locale must contain match property');
    }
    if (!locale.formatLong) {
        throw new RangeError('locale must contain formatLong property');
    }
    var formatString = String(dirtyFormatString).replace(longFormattingTokensRegExp$1, function (substring) {
        if (substring[0] === '[') {
            return substring;
        }
        if (substring[0] === '\\') {
            return cleanEscapedString$1(substring);
        }
        return locale.formatLong(substring);
    });
    if (formatString === '') {
        if (dateString === '') {
            return toDate(dirtyBaseDate, options);
        } else {
            return new Date(NaN);
        }
    }
    var subFnOptions = cloneObject(options);
    subFnOptions.locale = locale;
    var tokens = formatString.match(locale.parsingTokensRegExp || defaultParsingTokensRegExp);
    var tokensLength = tokens.length;
    var setters = [{
        priority: TIMEZONE_UNIT_PRIORITY,
        set: dateToSystemTimezone,
        index: 0
    }];
    var i;
    for (i = 0; i < tokensLength; i++) {
        var token = tokens[i];
        var parser = localeParsers[token] || parsers[token];
        if (parser) {
            var matchResult;
            if (parser.match instanceof RegExp) {
                matchResult = parser.match.exec(dateString);
            } else {
                matchResult = parser.match(dateString, subFnOptions);
            }
            if (!matchResult) {
                return new Date(NaN);
            }
            var unitName = parser.unit;
            var unit = localeUnits[unitName] || units[unitName];
            setters.push({
                priority: unit.priority,
                set: unit.set,
                value: parser.parse(matchResult, subFnOptions),
                index: setters.length
            });
            var substring = matchResult[0];
            dateString = dateString.slice(substring.length);
        } else {
            var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
            if (dateString.indexOf(head) === 0) {
                dateString = dateString.slice(head.length);
            } else {
                return new Date(NaN);
            }
        }
    }
    var uniquePrioritySetters = setters.map(function (setter) {
        return setter.priority;
    }).sort(function (a, b) {
        return a - b;
    }).filter(function (priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function (priority) {
        return setters.filter(function (setter) {
            return setter.priority === priority;
        }).reverse();
    }).map(function (setterArray) {
        return setterArray[0];
    });
    var date = toDate(dirtyBaseDate, options);
    if (isNaN(date)) {
        return new Date(NaN);
    }
    var utcDate = subMinutes(date, date.getTimezoneOffset());
    var dateValues = {
        date: utcDate
    };
    var settersLength = uniquePrioritySetters.length;
    for (i = 0; i < settersLength; i++) {
        var setter = uniquePrioritySetters[i];
        dateValues = setter.set(dateValues, setter.value, subFnOptions);
    }
    return dateValues.date;
}

function dateToSystemTimezone(dateValues) {
    var date = dateValues.date;
    var time = date.getTime();
    var offset = date.getTimezoneOffset();
    offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$7).getTimezoneOffset();
    dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$7);
    return dateValues;
}

function cleanEscapedString$1(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function parseDate$1(date, format$$1) {
    if (typeof date !== 'string') {
        return isValid(date) ? date : null;
    }
    var parsed = parse(date, format$$1, new Date());
    if (!isValid(parsed) || format(parsed, format$$1) !== date) {
        return null;
    }
    return parsed;
}

function after (value, ref) {
    var otherValue = ref[0];
    var inclusion = ref[1];
    var format$$1 = ref[2];

    if (typeof format$$1 === 'undefined') {
        format$$1 = inclusion;
        inclusion = false;
    }
    value = parseDate$1(value, format$$1);
    otherValue = parseDate$1(otherValue, format$$1);
    if (!value || !otherValue) {
        return false;
    }
    return isAfter(value, otherValue) || inclusion && isEqual$1(value, otherValue);
}

var alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validate = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); });
    }
    return (alpha[locale] || alpha.en).test(value);
};

var validate$1 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$1(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};

var validate$2 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$2(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var validate$3 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var locale = ref[0]; if ( locale === void 0 ) locale = null;

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$3(val, [locale]); });
    }
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

function before (value, ref) {
    var otherValue = ref[0];
    var inclusion = ref[1];
    var format$$1 = ref[2];

    if (typeof format$$1 === 'undefined') {
        format$$1 = inclusion;
        inclusion = false;
    }
    value = parseDate$1(value, format$$1);
    otherValue = parseDate$1(otherValue, format$$1);
    if (!value || !otherValue) {
        return false;
    }
    return isBefore(value, otherValue) || inclusion && isEqual$1(value, otherValue);
}

var validate$4 = function (value, ref) {
    var min = ref[0];
    var max = ref[1];

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$4(val, [min,max]); });
    }
    return Number(min) <= value && Number(max) >= value;
};

function confirmed (value, other) { return String(value) === String(other); }

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = assertString;
    function assertString(input) {
        var isString = typeof input === 'string' || input instanceof String;
        if (!isString) {
            throw new TypeError('This library (validator.js) validates strings only');
        }
    }
    
    module.exports = exports['default'];
});
var assertString = unwrapExports(assertString_1)

var assertString$1 = /*#__PURE__*/Object.freeze({
  default: assertString,
  __moduleExports: assertString_1
});

var _assertString = ( assertString$1 && assertString ) || assertString$1;

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isCreditCard;
    var _assertString2 = _interopRequireDefault(_assertString);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    function isCreditCard(str) {
        (0, _assertString2.default)(str);
        var sanitized = str.replace(/[- ]+/g, '');
        if (!creditCard.test(sanitized)) {
            return false;
        }
        var sum = 0;
        var digit = void 0;
        var tmpNum = void 0;
        var shouldDouble = void 0;
        for (var i = sanitized.length - 1;i >= 0; i--) {
            digit = sanitized.substring(i, i + 1);
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += tmpNum % 10 + 1;
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        return !(!(sum % 10 === 0 ? sanitized : false));
    }
    
    module.exports = exports['default'];
});
var isCreditCard = unwrapExports(isCreditCard_1)

function credit_card (value) { return isCreditCard(String(value)); }

var validate$5 = function (value, ref) {
    if ( ref === void 0 ) ref = [];
    var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';
    var separator = ref[1]; if ( separator === void 0 ) separator = '.';

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$5(val, [decimals,separator]); });
    }
    if (value === null || value === undefined || value === '') {
        return true;
    }
    if (Number(decimals) === 0) {
        return /^-?\d*$/.test(value);
    }
    var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
    var regex = new RegExp(("^-?\\d*(\\" + separator + "\\d" + regexPart + ")?$"));
    if (!regex.test(value)) {
        return false;
    }
    var parsedValue = parseFloat(value);
    return parsedValue === parsedValue;
};

function date_between (value, params) {
    var assign, assign$1;

    var min$$1;
    var max$$1;
    var format$$1;
    var inclusivity = '()';
    if (params.length > 3) {
        (assign = params, min$$1 = assign[0], max$$1 = assign[1], inclusivity = assign[2], format$$1 = assign[3]);
    } else {
        (assign$1 = params, min$$1 = assign$1[0], max$$1 = assign$1[1], format$$1 = assign$1[2]);
    }
    var minDate = parseDate$1(String(min$$1), format$$1);
    var maxDate = parseDate$1(String(max$$1), format$$1);
    var dateVal = parseDate$1(String(value), format$$1);
    if (!minDate || !maxDate || !dateVal) {
        return false;
    }
    if (inclusivity === '()') {
        return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
    }
    if (inclusivity === '(]') {
        return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
    }
    if (inclusivity === '[)') {
        return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
    }
    return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) || isBefore(dateVal, maxDate) && isAfter(dateVal, minDate);
}

function date_format (value, ref) {
	var format = ref[0];

	return !(!parseDate$1(value, format));
}

var validate$6 = function (value, ref) {
    var length = ref[0];

    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$6(val, [length]); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = (function () { return resolve({
            valid: false
        }); });
        image.onload = (function () { return resolve({
            valid: image.width === Number(width) && image.height === Number(height)
        }); });
        image.src = URL.createObjectURL(file);
    });
};
function dimensions (files, ref) {
    var width = ref[0];
    var height = ref[1];

    var list = [];
    for (var i = 0;i < files.length; i++) {
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return false;
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); }));
}

var merge_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = merge;
    function merge() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var defaults = arguments[1];
        for (var key in defaults) {
            if (typeof obj[key] === 'undefined') {
                obj[key] = defaults[key];
            }
        }
        return obj;
    }
    
    module.exports = exports['default'];
});
var merge$1 = unwrapExports(merge_1)

var merge$2 = /*#__PURE__*/Object.freeze({
  default: merge$1,
  __moduleExports: merge_1
});

var isByteLength_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    exports.default = isByteLength;
    var _assertString2 = _interopRequireDefault(_assertString);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    function isByteLength(str, options) {
        (0, _assertString2.default)(str);
        var min = void 0;
        var max = void 0;
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else {
            min = arguments[1];
            max = arguments[2];
        }
        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === 'undefined' || len <= max);
    }
    
    module.exports = exports['default'];
});
var isByteLength = unwrapExports(isByteLength_1)

var isByteLength$1 = /*#__PURE__*/Object.freeze({
  default: isByteLength,
  __moduleExports: isByteLength_1
});

var _merge = ( merge$2 && merge$1 ) || merge$2;

var isFQDN_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isFQDN;
    var _assertString2 = _interopRequireDefault(_assertString);
    var _merge2 = _interopRequireDefault(_merge);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var default_fqdn_options = {
        require_tld: true,
        allow_underscores: false,
        allow_trailing_dot: false
    };
    function isFQDN(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_fqdn_options);
        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
            str = str.substring(0, str.length - 1);
        }
        var parts = str.split('.');
        if (options.require_tld) {
            var tld = parts.pop();
            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
                return false;
            }
            if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
                return false;
            }
        }
        for (var part, i = 0;i < parts.length; i++) {
            part = parts[i];
            if (options.allow_underscores) {
                part = part.replace(/_/g, '');
            }
            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
                return false;
            }
            if (/[\uff01-\uff5e]/.test(part)) {
                return false;
            }
            if (part[0] === '-' || part[part.length - 1] === '-') {
                return false;
            }
        }
        return true;
    }
    
    module.exports = exports['default'];
});
var isFQDN = unwrapExports(isFQDN_1)

var isFQDN$1 = /*#__PURE__*/Object.freeze({
  default: isFQDN,
  __moduleExports: isFQDN_1
});

var _isByteLength = ( isByteLength$1 && isByteLength ) || isByteLength$1;

var _isFQDN = ( isFQDN$1 && isFQDN ) || isFQDN$1;

var isEmail_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isEmail;
    var _assertString2 = _interopRequireDefault(_assertString);
    var _merge2 = _interopRequireDefault(_merge);
    var _isByteLength2 = _interopRequireDefault(_isByteLength);
    var _isFQDN2 = _interopRequireDefault(_isFQDN);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var default_email_options = {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true
    };
    var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    function isEmail(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_email_options);
        if (options.require_display_name || options.allow_display_name) {
            var display_email = str.match(displayName);
            if (display_email) {
                str = display_email[1];
            } else if (options.require_display_name) {
                return false;
            }
        }
        var parts = str.split('@');
        var domain = parts.pop();
        var user = parts.join('@');
        var lower_domain = domain.toLowerCase();
        if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
            user = user.replace(/\./g, '').toLowerCase();
        }
        if (!(0, _isByteLength2.default)(user, {
            max: 64
        }) || !(0, _isByteLength2.default)(domain, {
            max: 254
        })) {
            return false;
        }
        if (!(0, _isFQDN2.default)(domain, {
            require_tld: options.require_tld
        })) {
            return false;
        }
        if (user[0] === '"') {
            user = user.slice(1, user.length - 1);
            return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
        }
        var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
        var user_parts = user.split('.');
        for (var i = 0;i < user_parts.length; i++) {
            if (!pattern.test(user_parts[i])) {
                return false;
            }
        }
        return true;
    }
    
    module.exports = exports['default'];
});
var isEmail = unwrapExports(isEmail_1)

var validate$7 = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return isEmail(String(val)); });
    }
    return isEmail(String(value));
};

function ext (files, extensions) {
    var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');
    return files.every(function (file) { return regex.test(file.name); });
}

function image (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }); }

var validate$8 = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$8(val, options); });
    }
    return !(!options.filter(function (option) { return option == value; }).length);
};

var isIP_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isIP;
    var _assertString2 = _interopRequireDefault(_assertString);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var ipv6Block = /^[0-9A-F]{1,4}$/i;
    function isIP(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        (0, _assertString2.default)(str);
        version = String(version);
        if (!version) {
            return isIP(str, 4) || isIP(str, 6);
        } else if (version === '4') {
            if (!ipv4Maybe.test(str)) {
                return false;
            }
            var parts = str.split('.').sort(function (a, b) {
                return a - b;
            });
            return parts[3] <= 255;
        } else if (version === '6') {
            var blocks = str.split(':');
            var foundOmissionBlock = false;
            var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
            var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;
            if (blocks.length > expectedNumberOfBlocks) {
                return false;
            }
            if (str === '::') {
                return true;
            } else if (str.substr(0, 2) === '::') {
                blocks.shift();
                blocks.shift();
                foundOmissionBlock = true;
            } else if (str.substr(str.length - 2) === '::') {
                blocks.pop();
                blocks.pop();
                foundOmissionBlock = true;
            }
            for (var i = 0;i < blocks.length; ++i) {
                if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
                    if (foundOmissionBlock) {
                        return false;
                    }
                    foundOmissionBlock = true;
                } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
                    return false;
                }
            }
            if (foundOmissionBlock) {
                return blocks.length >= 1;
            }
            return blocks.length === expectedNumberOfBlocks;
        }
        return false;
    }
    
    module.exports = exports['default'];
});
var isIP = unwrapExports(isIP_1)

function ip (value, ref) {
    if ( ref === void 0 ) ref = [];
    var version = ref[0]; if ( version === void 0 ) version = 4;

    if (isNullOrUndefined(value)) {
        value = '';
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return isIP(val, version); });
    }
    return isIP(value, version);
}

function is (value, ref) {
	if ( ref === void 0 ) ref = [];
	var other = ref[0];

	return value === other;
}

function is_not (value, ref) {
	if ( ref === void 0 ) ref = [];
	var other = ref[0];

	return value !== other;
}

var compare = function (value, length, max) {
    if (max === undefined) {
        return value.length === length;
    }
    max = Number(max);
    return value.length >= length && value.length <= max;
};
function length (value, ref) {
    var length = ref[0];
    var max = ref[1]; if ( max === void 0 ) max = undefined;

    length = Number(length);
    if (value === undefined || value === null) {
        return false;
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return compare(value, length, max);
}

function integer (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
}

function max$1 (value, ref) {
    var length = ref[0];

    if (value === undefined || value === null) {
        return length >= 0;
    }
    return String(value).length <= length;
}

function max_value (value, ref) {
    var max = ref[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }
    return Number(value) <= max;
}

function mimes (files, mimes) {
    var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');
    return files.every(function (file) { return regex.test(file.type); });
}

function min$1 (value, ref) {
    var length = ref[0];

    if (value === undefined || value === null) {
        return false;
    }
    return String(value).length >= length;
}

function min_value (value, ref) {
    var min = ref[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }
    return Number(value) >= min;
}

var validate$9 = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$9(val, options); });
    }
    return !options.filter(function (option) { return option == value; }).length;
};

function numeric (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^[0-9]+$/.test(String(val)); });
    }
    return /^[0-9]+$/.test(String(value));
}

function regex (value, ref) {
    var regex = ref[0];
    var flags = ref.slice(1);

    if (regex instanceof RegExp) {
        return regex.test(value);
    }
    return new RegExp(regex, flags).test(String(value));
}

function required (value, ref) {
    if ( ref === void 0 ) ref = [];
    var invalidateFalse = ref[0]; if ( invalidateFalse === void 0 ) invalidateFalse = false;

    if (Array.isArray(value)) {
        return !(!value.length);
    }
    if (value === false && invalidateFalse) {
        return false;
    }
    if (value === undefined || value === null) {
        return false;
    }
    return !(!String(value).trim().length);
}

function size (files, ref) {
    var size = ref[0];

    if (isNaN(size)) {
        return false;
    }
    var nSize = Number(size) * 1024;
    for (var i = 0;i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
}

var isURL_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isURL;
    var _assertString2 = _interopRequireDefault(_assertString);
    var _isFQDN2 = _interopRequireDefault(_isFQDN);
    var _isIP2 = _interopRequireDefault(isIP_1);
    var _merge2 = _interopRequireDefault(_merge);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    
    var default_url_options = {
        protocols: ['http','https','ftp'],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    }
    
    function checkHost(host, matches) {
        for (var i = 0;i < matches.length; i++) {
            var match = matches[i];
            if (host === match || isRegExp(match) && match.test(host)) {
                return true;
            }
        }
        return false;
    }
    
    function isURL(url, options) {
        (0, _assertString2.default)(url);
        if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
            return false;
        }
        if (url.indexOf('mailto:') === 0) {
            return false;
        }
        options = (0, _merge2.default)(options, default_url_options);
        var protocol = void 0, auth = void 0, host = void 0, hostname = void 0, port = void 0, port_str = void 0, split = void 0, ipv6 = void 0;
        split = url.split('#');
        url = split.shift();
        split = url.split('?');
        url = split.shift();
        split = url.split('://');
        if (split.length > 1) {
            protocol = split.shift();
            if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
                return false;
            }
        } else if (options.require_protocol) {
            return false;
        } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
            split[0] = url.substr(2);
        }
        url = split.join('://');
        if (url === '') {
            return false;
        }
        split = url.split('/');
        url = split.shift();
        if (url === '' && !options.require_host) {
            return true;
        }
        split = url.split('@');
        if (split.length > 1) {
            auth = split.shift();
            if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
                return false;
            }
        }
        hostname = split.join('@');
        port_str = null;
        ipv6 = null;
        var ipv6_match = hostname.match(wrapped_ipv6);
        if (ipv6_match) {
            host = '';
            ipv6 = ipv6_match[1];
            port_str = ipv6_match[2] || null;
        } else {
            split = hostname.split(':');
            host = split.shift();
            if (split.length) {
                port_str = split.join(':');
            }
        }
        if (port_str !== null) {
            port = parseInt(port_str, 10);
            if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
                return false;
            }
        }
        if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
            return false;
        }
        host = host || ipv6;
        if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
            return false;
        }
        if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
            return false;
        }
        return true;
    }
    
    module.exports = exports['default'];
});
var isURL = unwrapExports(isURL_1)

function url (value, ref) {
    if ( ref === void 0 ) ref = [];
    var requireProtocol = ref[0]; if ( requireProtocol === void 0 ) requireProtocol = false;

    var options = {
        require_protocol: !(!requireProtocol),
        allow_underscores: true
    };
    if (isNullOrUndefined(value)) {
        value = '';
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return isURL(val, options); });
    }
    return isURL(value, options);
}

var Rules = {
    after: after,
    alpha_dash: validate$1,
    alpha_num: validate$2,
    alpha_spaces: validate$3,
    alpha: validate,
    before: before,
    between: validate$4,
    confirmed: confirmed,
    credit_card: credit_card,
    date_between: date_between,
    date_format: date_format,
    decimal: validate$5,
    digits: validate$6,
    dimensions: dimensions,
    email: validate$7,
    ext: ext,
    image: image,
    in: validate$8,
    integer: integer,
    length: length,
    ip: ip,
    is_not: is_not,
    is: is,
    max: max$1,
    max_value: max_value,
    mimes: mimes,
    min: min$1,
    min_value: min_value,
    not_in: validate$9,
    numeric: numeric,
    regex: regex,
    required: required,
    size: size,
    url: url
}

var normalize = function (fields) {
    if (Array.isArray(fields)) {
        return fields.reduce(function (prev, curr) {
            if (~curr.indexOf('.')) {
                prev[curr.split('.')[1]] = curr;
            } else {
                prev[curr] = curr;
            }
            return prev;
        }, {});
    }
    return fields;
};
var combine = function (lhs, rhs) {
    var mapper = {
        pristine: function (lhs, rhs) { return lhs && rhs; },
        dirty: function (lhs, rhs) { return lhs || rhs; },
        touched: function (lhs, rhs) { return lhs || rhs; },
        untouched: function (lhs, rhs) { return lhs && rhs; },
        valid: function (lhs, rhs) { return lhs && rhs; },
        invalid: function (lhs, rhs) { return lhs || rhs; },
        pending: function (lhs, rhs) { return lhs || rhs; },
        required: function (lhs, rhs) { return lhs || rhs; },
        validated: function (lhs, rhs) { return lhs && rhs; }
    };
    return Object.keys(mapper).reduce(function (flags, flag) {
        flags[flag] = mapper[flag](lhs[flag], rhs[flag]);
        return flags;
    }, {});
};
var mapScope = function (scope, deep) {
    if ( deep === void 0 ) deep = true;

    return Object.keys(scope).reduce(function (flags, field) {
    if (!flags) {
        flags = assign({}, scope[field]);
        return flags;
    }
    var isScope = field.indexOf('$') === 0;
    if (deep && isScope) {
        return combine(mapScope(scope[field]), flags);
    } else if (!deep && isScope) {
        return flags;
    }
    flags = combine(flags, scope[field]);
    return flags;
}, null);
};
var mapFields = function (fields) {
    if (!fields) {
        return function () {
            return mapScope(this.$validator.flags);
        };
    }
    var normalized = normalize(fields);
    return Object.keys(normalized).reduce(function (prev, curr) {
        var field = normalized[curr];
        prev[curr] = function mappedField() {
            if (this.$validator.flags[field]) {
                return this.$validator.flags[field];
            }
            if (normalized[curr] === '*') {
                return mapScope(this.$validator.flags, false);
            }
            var index = field.indexOf('.');
            if (index <= 0) {
                return {};
            }
            var ref = field.split('.');
            var scope = ref[0];
            var name = ref.slice(1);
            scope = this.$validator.flags[("$" + scope)];
            name = name.join('.');
            if (name === '*' && scope) {
                return mapScope(scope);
            }
            if (scope && scope[name]) {
                return scope[name];
            }
            return {};
        };
        return prev;
    }, {});
};

var ErrorComponent = {
    name: 'vv-error',
    inject: ['$validator'],
    functional: true,
    props: {
        for: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: 'span'
        }
    },
    render: function render(createElement, ref) {
        var props = ref.props;
        var injections = ref.injections;

        return createElement(props.tag, injections.$validator.errors.first(props.for));
    }
};

var version = '2.0.9';
var rulesPlugin = function (ref) {
    var Validator$$1 = ref.Validator;

    Object.keys(Rules).forEach(function (rule) {
        Validator$$1.extend(rule, Rules[rule]);
    });
    Validator$$1.localize('en', locale);
};
use(rulesPlugin);
var index_esm = {
    install: install,
    use: use,
    directive: directive,
    mixin: mixin,
    mapFields: mapFields,
    Validator: Validator,
    ErrorBag: ErrorBag,
    ErrorComponent: ErrorComponent,
    Rules: Rules,
    version: version
}

/* unused harmony default export */ var _unused_webpack_default_export = (index_esm);



/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (Validator) {

	Validator.extend('truthy', {

		getMessage: function getMessage(field, params, data) {
			return 'The ' + field + ' value is not truthy.';
		},

		validate: function validate(value, params) {
			return !!value;
		}
	});

	Validator.extend('equal', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid field';
		},

		validate: function validate(value, params) {
			return value === $('#' + params[0]).val();
		}
	});

	Validator.extend('unique', {

		getMessage: function getMessage(field, params, data) {
			return 'The field ' + field + ' is already used';
		},

		validate: function validate(value, params) {

			if (!(value == undefined) && value) {
				return Requests.post('validation', {
					rule: 'unique',
					table: params[0],
					field: params[1],
					id: params.length == 3 ? params[2] : null,
					value: value
				}).then(function (r) {
					return r.data;
				}).catch(function (e) {
					return {
						valid: false
					};
				});
			}
			return true;
		}
	});

	Validator.extend('pro6pp', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid postalcode (four digits and two letters, for example: 5611BJ)';
		},

		validate: function validate(value, params) {

			if (value == undefined) {
				return true;
			}

			if (value.length != 6) {
				console.log('(' + value + ') Invalid length');
				return false;
			}
			var code = _.parseInt(value.substr(0, 4));
			if (code < 1000 || code > 9999) {
				console.log('(' + code + ') Invalid code');
				return false;
			}
			var letters = value.substr(4, 2);
			if (!/^[a-zA-Z]+$/.test(letters)) {
				console.log('(' + letters + ') Invalid letters');
				return false;
			}
			return true;
		}
	});

	/**
  * Dutch (NL) phone numbers have 10 digits (or 11 and start with +31).
  */
	Validator.extend('nlphone', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid phone number';
		},

		validate: function validate(value, params) {
			if (/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(value)) {
				return true;
			}
			if (/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(value)) {
				return true;
			}
			return false;
		}
	});

	Validator.extend('nltaxno', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid BTW Nummer';
		},

		validate: function validate(value, params) {
			return true;
		}
	});

	Validator.extend('nlcoc', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid KvK';
		},

		validate: function validate(value, params) {
			return true;
		}
	});

	Validator.extend('bic', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid BIC';
		},

		validate: function validate(value, params) {
			if (/([a-zA-Z]{4}[a-zA-Z]{2}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?)/.test(value)) {
				return true;
			}
			return false;
		}
	});

	Validator.extend('iban', {

		getMessage: function getMessage(field, params, data) {
			return 'Please specify valid IBAN';
		},

		validate: function validate(value, params) {

			if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(value)) {
				return false;
			}

			// check the country code and find the country specific format
			var iban = value.replace(/ /g, '').toUpperCase(); // remove spaces and to upper case
			var countrycode = iban.substring(0, 2);
			var bbancountrypatterns = {
				'AL': "\\d{8}[\\dA-Z]{16}",
				'AD': "\\d{8}[\\dA-Z]{12}",
				'AT': "\\d{16}",
				'AZ': "[\\dA-Z]{4}\\d{20}",
				'BE': "\\d{12}",
				'BH': "[A-Z]{4}[\\dA-Z]{14}",
				'BA': "\\d{16}",
				'BR': "\\d{23}[A-Z][\\dA-Z]",
				'BG': "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
				'CR': "\\d{17}",
				'HR': "\\d{17}",
				'CY': "\\d{8}[\\dA-Z]{16}",
				'CZ': "\\d{20}",
				'DK': "\\d{14}",
				'DO': "[A-Z]{4}\\d{20}",
				'EE': "\\d{16}",
				'FO': "\\d{14}",
				'FI': "\\d{14}",
				'FR': "\\d{10}[\\dA-Z]{11}\\d{2}",
				'GE': "[\\dA-Z]{2}\\d{16}",
				'DE': "\\d{18}",
				'GI': "[A-Z]{4}[\\dA-Z]{15}",
				'GR': "\\d{7}[\\dA-Z]{16}",
				'GL': "\\d{14}",
				'GT': "[\\dA-Z]{4}[\\dA-Z]{20}",
				'HU': "\\d{24}",
				'IS': "\\d{22}",
				'IE': "[\\dA-Z]{4}\\d{14}",
				'IL': "\\d{19}",
				'IT': "[A-Z]\\d{10}[\\dA-Z]{12}",
				'KZ': "\\d{3}[\\dA-Z]{13}",
				'KW': "[A-Z]{4}[\\dA-Z]{22}",
				'LV': "[A-Z]{4}[\\dA-Z]{13}",
				'LB': "\\d{4}[\\dA-Z]{20}",
				'LI': "\\d{5}[\\dA-Z]{12}",
				'LT': "\\d{16}",
				'LU': "\\d{3}[\\dA-Z]{13}",
				'MK': "\\d{3}[\\dA-Z]{10}\\d{2}",
				'MT': "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
				'MR': "\\d{23}",
				'MU': "[A-Z]{4}\\d{19}[A-Z]{3}",
				'MC': "\\d{10}[\\dA-Z]{11}\\d{2}",
				'MD': "[\\dA-Z]{2}\\d{18}",
				'ME': "\\d{18}",
				'NL': "[A-Z]{4}\\d{10}",
				'NO': "\\d{11}",
				'PK': "[\\dA-Z]{4}\\d{16}",
				'PS': "[\\dA-Z]{4}\\d{21}",
				'PL': "\\d{24}",
				'PT': "\\d{21}",
				'RO': "[A-Z]{4}[\\dA-Z]{16}",
				'SM': "[A-Z]\\d{10}[\\dA-Z]{12}",
				'SA': "\\d{2}[\\dA-Z]{18}",
				'RS': "\\d{18}",
				'SK': "\\d{20}",
				'SI': "\\d{15}",
				'ES': "\\d{20}",
				'SE': "\\d{20}",
				'CH': "\\d{5}[\\dA-Z]{12}",
				'TN': "\\d{20}",
				'TR': "\\d{5}[\\dA-Z]{17}",
				'AE': "\\d{3}\\d{16}",
				'GB': "[A-Z]{4}\\d{14}",
				'VG': "[\\dA-Z]{4}\\d{16}"
			};
			var bbanpattern = bbancountrypatterns[countrycode];
			if (typeof bbanpattern !== 'undefined') {
				var ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
				if (!ibanregexp.test(iban)) {
					return false; // invalid country specific format
				}
			}
			// now check the checksum, first convert to digits
			var ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4);
			var ibancheckdigits = "";
			var leadingZeroes = true;
			var charAt = void 0;
			for (var i = 0; i < ibancheck.length; i++) {
				charAt = ibancheck.charAt(i);
				if (charAt !== "0") {
					leadingZeroes = false;
				}
				if (!leadingZeroes) {
					ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
				}
			}
			// calculate the result of: ibancheckdigits % 97
			var cRest = '';
			var cOperator = '';
			for (var p = 0; p < ibancheckdigits.length; p++) {
				var cChar = ibancheckdigits.charAt(p);
				cOperator = '' + cRest + '' + cChar;
				cRest = cOperator % 97;
			}
			return cRest === 1;
		}
	});
});

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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuizCreate__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuizCreate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_QuizCreate__);
/*
| Crearea unui quiz
*/


new window.Vue({

    el: '#quiz-create',

    components: {
        'vue-quiz-create': __WEBPACK_IMPORTED_MODULE_0__components_QuizCreate___default.a
    },

    name: 'admin-quiz-create'
});

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(362)
/* template */
var __vue_template__ = __webpack_require__(436)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\QuizCreate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-636cc668", Component.options)
  } else {
    hotAPI.reload("data-v-636cc668", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Blocks_TabItem__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Blocks_TabItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Blocks_TabItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TabGeneralInfos__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TabGeneralInfos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TabGeneralInfos__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabQuestions__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabQuestions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TabQuestions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabSave__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabSave___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TabSave__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_modules_validation_Validation__ = __webpack_require__(8);
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


/*
Quiz Create Tab Container
=========================
*/








/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        'tab-item': __WEBPACK_IMPORTED_MODULE_0__Blocks_TabItem___default.a,
        'tab-general-infos': __WEBPACK_IMPORTED_MODULE_1__TabGeneralInfos___default.a,
        'tab-questions': __WEBPACK_IMPORTED_MODULE_2__TabQuestions___default.a,
        'tab-save': __WEBPACK_IMPORTED_MODULE_3__TabSave___default.a
    },

    props: {
        action: { type: String, required: true }
    },

    data: function data() {
        return {
            current_tab: 'general-infos',
            errors: null,
            general_infos_rules: {
                name: 'required',
                title: 'required',
                time: 'required|min_value:1',
                success_percentage: 'required|min_value:1|max_value:100',
                description: 'required'
            },
            quiz: {
                name: '',
                title: '',
                description: '',
                image_url: '',
                time: 0,
                success_percentage: 100,
                questions: []
            }
        };
    },


    computed: {
        general_infos: function general_infos() {
            return {
                name: this.quiz.name,
                title: this.quiz.title,
                description: this.quiz.description,
                time: this.quiz.time,
                success_percentage: this.quiz.success_percentage,
                image_url: this.quiz.image_url
            };
        }
    },

    methods: {
        showTab: function showTab(id) {
            var _this = this;

            var i = setInterval(function () {
                if ($('#_' + id).length == 1) {
                    _this.current_tab = id;
                    clearInterval(i);
                    $('#_' + id).tab('show');
                }
            }, 10);
        },
        onFocusGeneralInfos: function onFocusGeneralInfos(e) {
            this.showTab('general-infos');
        },
        onFocusQuestions: function onFocusQuestions(e) {
            var _this2 = this;

            this.errors = null;
            var generalInfosValidator = new __WEBPACK_IMPORTED_MODULE_4__boot_modules_validation_Validation__["a" /* default */](this.general_infos_rules);
            generalInfosValidator.validate(this.general_infos).then(function (valid) {
                if (valid) {
                    _this2.showTab('questions');
                } else {
                    _this2.errors = generalInfosValidator.getErrors();
                }
            });
        },
        onFocusReview: function onFocusReview(e) {
            var _this3 = this;

            this.errors = null;
            var generalInfosValidator = new __WEBPACK_IMPORTED_MODULE_4__boot_modules_validation_Validation__["a" /* default */](this.general_infos_rules);
            generalInfosValidator.validate(this.general_infos).then(function (valid) {
                if (valid) {
                    var questionsValidator = new __WEBPACK_IMPORTED_MODULE_4__boot_modules_validation_Validation__["a" /* default */]({
                        questions: 'required|min_value:1'
                    });
                    questionsValidator.validate({
                        questions: _this3.quiz.questions.length
                    }).then(function (valid) {
                        if (valid) {
                            _this3.showTab('save');
                        } else {
                            _this3.showTab('questions');
                        }
                    });
                } else {
                    _this3.showTab('general-infos');
                    _this3.errors = generalInfosValidator.getErrors();
                }
            });
        },
        onUpdateGeneralInfos: function onUpdateGeneralInfos(e) {
            this.quiz[e.field] = e.value;
        }
    },

    name: 'quiz-create-tabs-container'
});

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(364)
/* template */
var __vue_template__ = __webpack_require__(365)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\_Blocks\\TabItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f7869b4", Component.options)
  } else {
    hotAPI.reload("data-v-5f7869b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 364:
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: { type: String, required: true },
        href: { type: String, required: true },
        caption: { type: String, required: true },
        active: { type: Boolean, default: false }
    },

    computed: {},

    data: function data() {
        return {};
    },


    methods: {},

    name: 'tab-item'
});

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { class: { active: _vm.active } }, [
    _c(
      "a",
      {
        attrs: { id: _vm.id, href: _vm.href },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.$emit("click")
          }
        }
      },
      [
        _c("span", { class: { active: _vm.active } }, [
          _vm._v("\n                " + _vm._s(_vm.caption) + "\n            ")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f7869b4", module.exports)
  }
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(367)
/* template */
var __vue_template__ = __webpack_require__(368)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\TabGeneralInfos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e080a27", Component.options)
  } else {
    hotAPI.reload("data-v-1e080a27", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 367:
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

    props: {
        errors: { required: true }
    },

    data: function data() {
        return {
            name: '',
            title: '',
            description: '',
            image_url: '',
            time: 0,
            success_percentage: 100
        };
    },


    methods: {
        onInput: function onInput(field, value) {
            this.$emit('update', { field: field, value: value });
        }
    },

    name: 'tab-general-infos'
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-pane fade in active", attrs: { id: "general-infos" } },
    [
      _c("h3", { staticClass: "tab-header" }, [
        _vm._v("\n            General infos\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12" },
          [
            _c("vue-textbox", {
              attrs: {
                field: "name",
                placeholder: "Quiz Name",
                label: "Quiz Name",
                errors: _vm.errors
              },
              on: {
                input: function($event) {
                  _vm.onInput("name", $event)
                }
              },
              model: {
                value: _vm.name,
                callback: function($$v) {
                  _vm.name = $$v
                },
                expression: "name"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12" },
          [
            _c("vue-textbox", {
              attrs: {
                field: "title",
                placeholder: "Quiz Title",
                label: "Quiz Title",
                errors: _vm.errors
              },
              on: {
                input: function($event) {
                  _vm.onInput("title", $event)
                }
              },
              model: {
                value: _vm.title,
                callback: function($$v) {
                  _vm.title = $$v
                },
                expression: "title"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-6" },
          [
            _c("vue-number", {
              attrs: {
                field: "time",
                placeholder: "Time [min]",
                label: "Time [min]",
                maxlength: "3",
                autonumeric: {
                  digitGroupSeparator: "",
                  minimumValue: 0,
                  maximumValue: 999,
                  decimalPlaces: 0
                },
                errors: _vm.errors
              },
              on: {
                input: function($event) {
                  _vm.onInput("time", $event)
                }
              },
              model: {
                value: _vm.time,
                callback: function($$v) {
                  _vm.time = $$v
                },
                expression: "time"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-6" },
          [
            _c("vue-number", {
              attrs: {
                field: "success_percentage",
                placeholder: "Success percentage [%]",
                label: "Success percentage [%]",
                maxlength: "3",
                autonumeric: {
                  digitGroupSeparator: "",
                  minimumValue: 0,
                  maximumValue: 100,
                  decimalPlaces: 0
                },
                errors: _vm.errors
              },
              on: {
                input: function($event) {
                  _vm.onInput("success_percentage", $event)
                }
              },
              model: {
                value: _vm.success_percentage,
                callback: function($$v) {
                  _vm.success_percentage = $$v
                },
                expression: "success_percentage"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12" },
          [
            _c("vue-summernote", {
              attrs: {
                field: "description",
                label: "Descripton",
                errors: _vm.errors
              },
              on: {
                input: function($event) {
                  _vm.onInput("description", $event)
                }
              },
              model: {
                value: _vm.description,
                callback: function($$v) {
                  _vm.description = $$v
                },
                expression: "description"
              }
            })
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e080a27", module.exports)
  }
}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(370)
/* template */
var __vue_template__ = __webpack_require__(424)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\TabQuestions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11756bda", Component.options)
  } else {
    hotAPI.reload("data-v-11756bda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QuestionForm__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QuestionForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__QuestionForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuestionsList__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuestionsList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__QuestionsList__);
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

    components: {
        'question-form': __WEBPACK_IMPORTED_MODULE_0__QuestionForm___default.a,
        'questions-list': __WEBPACK_IMPORTED_MODULE_1__QuestionsList___default.a
    },

    data: function data() {
        return {
            questions: [],

            form: {
                visible: false,
                question: {
                    type: '',
                    order_no: 0,
                    points: 0,
                    question: '',
                    correct_answer: '',
                    answer_description: null,
                    answer_image_url: null,
                    answers: []
                }
            }
        };
    },


    methods: {
        onClickNewQuestion: function onClickNewQuestion() {
            if (!this.form.visible) {
                this.form.visible = true;
            }
        },
        addQuestion: function addQuestion(e) {
            this.questions.push(e);
            this.$emit('questions', this.questions);
            this.form.visible = false;
        }
    },

    name: 'tab-questions'
});

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(372)
/* template */
var __vue_template__ = __webpack_require__(406)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\_QuestionForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19022c1e", Component.options)
  } else {
    hotAPI.reload("data-v-19022c1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boot_modules_validation_Validation__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Text_AnswersText__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Text_AnswersText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Text_AnswersText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Radio_AnswersRadio__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Radio_AnswersRadio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Radio_AnswersRadio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Check_AnswersCheck__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Check_AnswersCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Check_AnswersCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Match_AnswersMatch__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Match_AnswersMatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Match_AnswersMatch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modules_Question__ = __webpack_require__(405);
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

    components: {
        'answers-text': __WEBPACK_IMPORTED_MODULE_1__Text_AnswersText___default.a,
        'answers-radio': __WEBPACK_IMPORTED_MODULE_2__Radio_AnswersRadio___default.a,
        'answers-check': __WEBPACK_IMPORTED_MODULE_3__Check_AnswersCheck___default.a,
        'answers-match': __WEBPACK_IMPORTED_MODULE_4__Match_AnswersMatch___default.a
    },

    props: {
        next_no: { required: true }
    },

    computed: {
        form_data: function form_data() {
            return {
                type: this.type,
                order_no: this.order_no,
                points: this.points,
                question: this.question
            };
        },
        errors: function errors() {
            if (this.vee_validator == null) {
                return null;
            }
            return this.vee_validator.getErrors();
        }
    },

    data: function data() {
        return {
            type: '-',
            order_no: 0,
            points: 0,
            question: '',
            correct_answer: '',
            answer_description: null,
            answer_image_url: null,
            answers: [],

            vee_validator: null,

            error_by_type: ''
        };
    },


    watch: {
        'type': function type(newValue, oldValue) {
            if (newValue != '-') {
                this.vee_validator.removeError('type');
            } else {
                this.vee_validator.validateField('type', newValue);
            }
            this.answers = [];
        },

        'order_no': function order_no(newValue, oldValue) {
            if (newValue > 0) {
                this.vee_validator.removeError('order_no');
            } else {
                this.vee_validator.validateField('order_no', newValue);
            }
        },

        'points': function points(newValue, oldValue) {
            if (newValue > 0) {
                this.vee_validator.removeError('points');
            } else {
                this.vee_validator.validateField('points', newValue);
            }
        },

        'question': function question(newValue, oldValue) {
            if (newValue.trim().length > 0) {
                this.vee_validator.removeError('question');
            } else {
                this.vee_validator.validateField('question', newValue);
            }
        }

    },

    methods: {
        onUpdateAnswers: function onUpdateAnswers(e) {
            this.answers = e.answers;
            var _question = new __WEBPACK_IMPORTED_MODULE_5__Modules_Question__["a" /* default */]({
                answers: this.answers,
                type: this.type,
                accepted_answers: e.accepted_answers,
                correct_answer: this.correct_answer
            });
            var r = _question.updateAnswers();
            this.correct_answer = r.correct_answer;
            this.error_by_type = r.error_by_type;
        },
        isValidByType: function isValidByType() {
            var _question = new __WEBPACK_IMPORTED_MODULE_5__Modules_Question__["a" /* default */]({
                answers: this.answers,
                type: this.type,
                accepted_answers: null,
                correct_answer: this.correct_answer
            });
            return _question.validateByType();
        },
        addQuestion: function addQuestion() {
            var _this = this;

            this.error_by_type = '';
            this.vee_validator.validate(this.form_data).then(function (valid) {
                if (valid) {
                    var valid_by_type = _this.isValidByType();
                    if (valid_by_type.valid) {
                        _this.$emit('add', {
                            type: _this.type,
                            order_no: _this.order_no,
                            points: _this.points,
                            question: _this.question,
                            correct_answer: _this.correct_answer,
                            answer_description: _this.answer_description,
                            answer_image_url: _this.answer_image_url,
                            answers: _this.answers
                        });
                    } else {
                        _this.error_by_type = valid_by_type.message;
                    }
                }
            });
        }
    },

    mounted: function mounted() {
        this.vee_validator = new __WEBPACK_IMPORTED_MODULE_0__boot_modules_validation_Validation__["a" /* default */]({
            type: 'not_in:-',
            order_no: 'min_value:1',
            points: 'min_value:1',
            question: 'required'
        });
        this.order_no = this.next_no;
    },


    name: 'question-form'
});

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(374)
/* template */
var __vue_template__ = __webpack_require__(380)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Text\\_AnswersText.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85528e32", Component.options)
  } else {
    hotAPI.reload("data-v-85528e32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__);
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

    components: {
        'accepted-answers': __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default.a
    },

    props: {
        error: { required: true }
    },

    data: function data() {
        return {
            caption: 'Type your answer',
            value: null,
            order_no: 1,
            accepted_answers: []
        };
    },


    methods: {
        update: function update() {
            this.$emit('update', {
                accepted_answers: this.accepted_answers,
                answers: [{
                    caption: this.caption,
                    value: this.value,
                    order_no: this.order_no
                }]
            });
        },
        onInput: function onInput() {
            this.update();
        },
        onUpdateAcceptedAnswers: function onUpdateAcceptedAnswers(e) {
            this.accepted_answers = e;
            this.update();
        }
    },

    name: 'definition-answers-text'
});

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(376)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(378)
/* template */
var __vue_template__ = __webpack_require__(379)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c61185a"
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Text\\AcceptedAnswers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c61185a", Component.options)
  } else {
    hotAPI.reload("data-v-2c61185a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(377);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("54d7f09d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c61185a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c61185a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.text-accepted-answers[data-v-2c61185a] {\n  border: 1px solid #ccc;\n  background-color: #FCFCFC;\n  padding: 6px;\n}\n.text-accepted-answers .alert[data-v-2c61185a] {\n    border-radius: 0px;\n    margin-bottom: 6px;\n}\n.text-accepted-answers .form-group[data-v-2c61185a] {\n    margin-bottom: 4px;\n}\n.text-accepted-answers .actions[data-v-2c61185a] {\n    margin-top: 20px;\n}\n.text-accepted-answers .list-group[data-v-2c61185a] {\n    margin-bottom: 0px;\n}\n.text-accepted-answers .list-group li[data-v-2c61185a] {\n      border-radius: 0px;\n}\n.text-accepted-answers i.fa-trash-o[data-v-2c61185a] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-trash-o[data-v-2c61185a]:hover {\n      color: red;\n}\n.text-accepted-answers i.fa-pencil[data-v-2c61185a] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-pencil[data-v-2c61185a]:hover {\n      color: #3d84e6;\n}\n", ""]);

// exports


/***/ }),

/***/ 378:
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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            accepted_answers: [],
            answer_item: '',

            action: 'insert',
            answer_old: ''
        };
    },


    methods: {
        update: function update() {
            this.$emit('update', this.accepted_answers);
        },
        addItem: function addItem() {
            var _this = this;

            if (this.answer_item) {
                if (this.action == 'insert') {
                    this.accepted_answers.push(this.answer_item);
                    this.answer_item = '';
                } else {
                    if (this.action == 'update') {
                        var items = this.accepted_answers;
                        this.accepted_answers = _.map(items, function (item) {
                            if (item == _this.answer_old) {
                                return _this.answer_item;
                            }
                            return item;
                        });
                        this.action = 'insert';
                        this.answer_old = '';
                        this.answer_item = '';
                    }
                }
                this.update();
                $('#answer_item').focus();
            }
        },
        deleteItem: function deleteItem(answer) {
            var items = this.accepted_answers;
            this.accepted_answers = [];
            var removed = _.remove(items, function (item) {
                return item === answer;
            });
            this.accepted_answers = items;
            this.update();
        },
        editItem: function editItem(answer) {
            this.action = 'update';
            this.answer_item = answer;
            this.answer_old = answer;
            $('#answer_item').focus();
        }
    },

    name: 'text-accepted-answers'
});

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-accepted-answers" }, [
    0 ? _c("div", { staticClass: "row" }, [_vm._m(0)]) : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-8" }, [
        _c("strong", [_vm._v("Accepted items list")]),
        _vm._v(" "),
        _vm.accepted_answers.length == 0
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n                No accepted answers items defined.\n            "
              )
            ])
          : _c("div", [
              _c(
                "ul",
                { staticClass: "list-group" },
                _vm._l(_vm.accepted_answers, function(answer, index) {
                  return _c(
                    "li",
                    { key: "item-" + index, staticClass: "list-group-item" },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(index + 1) +
                          ". " +
                          _vm._s(answer) +
                          "\n                        "
                      ),
                      _c("span", { staticClass: "pull-right" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-pencil",
                          attrs: { title: "Edit this item" },
                          on: {
                            click: function($event) {
                              _vm.editItem(answer)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-fw fa-trash-o",
                          attrs: { title: "Delete this item" },
                          on: {
                            click: function($event) {
                              _vm.deleteItem(answer)
                            }
                          }
                        })
                      ])
                    ]
                  )
                })
              )
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-4" }, [
        _c(
          "div",
          { staticClass: "actions" },
          [
            _c("vue-textbox", {
              attrs: { field: "answer_item", placeholder: "Answer Item" },
              model: {
                value: _vm.answer_item,
                callback: function($$v) {
                  _vm.answer_item = $$v
                },
                expression: "answer_item"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "button",
                  disabled: _vm.answer_item.length == 0
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addItem($event)
                  }
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.action == "insert" ? "Add" : "Save") +
                    "\n                "
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12" }, [
      _c("div", { staticClass: "alert alert-info" }, [
        _c("strong", [_c("i", { staticClass: "fa fa-info" })]),
        _vm._v(
          "\n                Here you can define the accepted answers!\n            "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c61185a", module.exports)
  }
}

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "answers-container answers-container-text" },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12" },
          [
            _c("vue-textbox", {
              attrs: {
                field: "caption",
                placeholder: "The caption before user answer",
                label: "The caption before user answer"
              },
              on: { input: _vm.onInput },
              model: {
                value: _vm.caption,
                callback: function($$v) {
                  _vm.caption = $$v
                },
                expression: "caption"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-accepted-answers" },
          [
            _c("accepted-answers", {
              on: { update: _vm.onUpdateAcceptedAnswers }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12" }, [
          _vm._v("\n                " + _vm._s(_vm.error) + "\n            ")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-85528e32", module.exports)
  }
}

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(382)
/* template */
var __vue_template__ = __webpack_require__(388)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Radio\\_AnswersRadio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8171354e", Component.options)
  } else {
    hotAPI.reload("data-v-8171354e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__);
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

    components: {
        'accepted-answers': __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default.a
    },

    props: {
        error: { required: true }
    },

    data: function data() {
        return {
            accepted_answers: []
        };
    },


    methods: {
        update: function update() {
            var answers = [];
            _.map(this.accepted_answers, function (answer, index) {
                var caption = answer.caption.toLowerCase();
                answers.push({
                    caption: caption.charAt(0).toUpperCase() + caption.slice(1),
                    value: caption,
                    order_no: index + 1
                });
            });
            var correct = _.find(this.accepted_answers, function (answer) {
                return answer.correct;
            });
            this.$emit('update', {
                accepted_answers: correct == undefined ? '' : correct.caption,
                answers: answers
            });
        },
        onUpdateAcceptedAnswers: function onUpdateAcceptedAnswers(e) {
            this.accepted_answers = e;
            this.update();
        }
    },

    name: 'definition-answers-radio'
});

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(384)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(386)
/* template */
var __vue_template__ = __webpack_require__(387)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8899e3fc"
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Radio\\AcceptedAnswers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8899e3fc", Component.options)
  } else {
    hotAPI.reload("data-v-8899e3fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("47aa19f3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8899e3fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8899e3fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.text-accepted-answers[data-v-8899e3fc] {\n  border: 1px solid #ccc;\n  background-color: #FCFCFC;\n  padding: 6px;\n}\n.text-accepted-answers .alert[data-v-8899e3fc] {\n    border-radius: 0px;\n    margin-bottom: 6px;\n}\n.text-accepted-answers .form-group[data-v-8899e3fc] {\n    margin-bottom: 4px;\n}\n.text-accepted-answers .actions[data-v-8899e3fc] {\n    margin-top: 20px;\n}\n.text-accepted-answers .list-group[data-v-8899e3fc] {\n    margin-bottom: 0px;\n}\n.text-accepted-answers .list-group li[data-v-8899e3fc] {\n      border-radius: 0px;\n}\n.text-accepted-answers i.fa-trash-o[data-v-8899e3fc] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-trash-o[data-v-8899e3fc]:hover {\n      color: red;\n}\n.text-accepted-answers i.fa-pencil[data-v-8899e3fc] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-pencil[data-v-8899e3fc]:hover {\n      color: #3d84e6;\n}\n.text-accepted-answers i.fa-thumbs-up[data-v-8899e3fc] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-thumbs-up[data-v-8899e3fc]:hover {\n      color: #2d8c0b !important;\n}\n.text-accepted-answers li.correct[data-v-8899e3fc] {\n    background-color: #effcea !important;\n}\n.text-accepted-answers span.correct[data-v-8899e3fc] {\n    color: #2d8c0b !important;\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ 386:
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
    data: function data() {
        return {
            accepted_answers: [],
            answer_item: '',

            action: 'insert',
            answer_old: ''
        };
    },


    methods: {
        update: function update() {
            this.$emit('update', this.accepted_answers);
        },
        addItem: function addItem() {
            var _this = this;

            if (this.answer_item) {
                if (this.action == 'insert') {
                    this.accepted_answers.push({ caption: Strings.capitalizeWords(this.answer_item), correct: false });
                    this.answer_item = '';
                } else {
                    if (this.action == 'update') {
                        var items = this.accepted_answers;
                        this.accepted_answers = _.map(items, function (item) {
                            if (item.caption == _this.answer_old) {
                                return { caption: Strings.capitalizeWords(_this.answer_item), correct: item.correct };
                            }
                            return item;
                        });
                        this.action = 'insert';
                        this.answer_old = '';
                        this.answer_item = '';
                    }
                }
                this.update();
                $('#answer_item').focus();
            }
        },
        deleteItem: function deleteItem(answer) {
            var items = this.accepted_answers;
            this.accepted_answers = [];
            var removed = _.remove(items, function (item) {
                return item.caption === answer.caption;
            });
            this.accepted_answers = items;
            this.update();
        },
        editItem: function editItem(answer) {
            this.action = 'update';
            this.answer_item = answer.caption;
            this.answer_old = answer.caption;
            this.update();
            $('#answer_item').focus();
        },
        makeCorrectItem: function makeCorrectItem(answer) {
            _.map(this.accepted_answers, function (item) {
                item.correct = false;
            });
            answer.correct = true;
            this.update();
        }
    },

    name: 'radio-accepted-answers'
});

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-accepted-answers" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-8" }, [
        _c("strong", [_vm._v("Options list")]),
        _vm._v(" "),
        _vm.accepted_answers.length == 0
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n                No options list items are defined.\n            "
              )
            ])
          : _c("div", [
              _c(
                "ul",
                { staticClass: "list-group" },
                _vm._l(_vm.accepted_answers, function(answer, index) {
                  return _c(
                    "li",
                    {
                      key: "item-" + index,
                      class: {
                        "list-group-item": true,
                        correct: answer.correct
                      }
                    },
                    [
                      _c("span", { class: { correct: answer.correct } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(index + 1) +
                            ". " +
                            _vm._s(answer.caption) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "pull-right" }, [
                        !answer.correct
                          ? _c("i", {
                              staticClass: "fa fa-fw fa-thumbs-up",
                              attrs: { title: "Make correct option" },
                              on: {
                                click: function($event) {
                                  _vm.makeCorrectItem(answer)
                                }
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-fw fa-pencil",
                          attrs: { title: "Edit this item" },
                          on: {
                            click: function($event) {
                              _vm.editItem(answer)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-fw fa-trash-o",
                          attrs: { title: "Delete this item" },
                          on: {
                            click: function($event) {
                              _vm.deleteItem(answer)
                            }
                          }
                        })
                      ])
                    ]
                  )
                })
              )
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-4" }, [
        _c(
          "div",
          { staticClass: "actions" },
          [
            _c("vue-textbox", {
              attrs: { field: "answer_item", placeholder: "Answer Item" },
              model: {
                value: _vm.answer_item,
                callback: function($$v) {
                  _vm.answer_item = $$v
                },
                expression: "answer_item"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "button",
                  disabled: _vm.answer_item.length == 0
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addItem($event)
                  }
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.action == "insert" ? "Add" : "Save") +
                    "\n                "
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8899e3fc", module.exports)
  }
}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "answers-container answers-container-radio" },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-accepted-answers" },
          [
            _c("accepted-answers", {
              on: { update: _vm.onUpdateAcceptedAnswers }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12" }, [
          _vm._v("\n                " + _vm._s(_vm.error) + "\n            ")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8171354e", module.exports)
  }
}

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(390)
/* template */
var __vue_template__ = __webpack_require__(396)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Check\\_AnswersCheck.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-647b209a", Component.options)
  } else {
    hotAPI.reload("data-v-647b209a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__);
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

    components: {
        'accepted-answers': __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default.a
    },

    props: {
        error: { required: true }
    },

    data: function data() {
        return {
            accepted_answers: []
        };
    },


    methods: {
        update: function update() {
            var answers = [];
            _.map(this.accepted_answers, function (answer, index) {
                var caption = answer.caption.toLowerCase();
                answers.push({
                    caption: caption.charAt(0).toUpperCase() + caption.slice(1),
                    value: caption,
                    order_no: index + 1
                });
            });
            var correct = _.filter(this.accepted_answers, function (answer) {
                return answer.correct;
            });
            this.$emit('update', {
                accepted_answers: correct,
                answers: answers
            });
        },
        onUpdateAcceptedAnswers: function onUpdateAcceptedAnswers(e) {
            this.accepted_answers = e;
            this.update();
        }
    },

    name: 'definition-answers-check'
});

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(392)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(394)
/* template */
var __vue_template__ = __webpack_require__(395)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5cd652e2"
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Check\\AcceptedAnswers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cd652e2", Component.options)
  } else {
    hotAPI.reload("data-v-5cd652e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a20b247e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5cd652e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5cd652e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.text-accepted-answers[data-v-5cd652e2] {\n  border: 1px solid #ccc;\n  background-color: #FCFCFC;\n  padding: 6px;\n}\n.text-accepted-answers .alert[data-v-5cd652e2] {\n    border-radius: 0px;\n    margin-bottom: 6px;\n}\n.text-accepted-answers .form-group[data-v-5cd652e2] {\n    margin-bottom: 4px;\n}\n.text-accepted-answers .actions[data-v-5cd652e2] {\n    margin-top: 20px;\n}\n.text-accepted-answers .list-group[data-v-5cd652e2] {\n    margin-bottom: 0px;\n}\n.text-accepted-answers .list-group li[data-v-5cd652e2] {\n      border-radius: 0px;\n}\n.text-accepted-answers i.fa-trash-o[data-v-5cd652e2] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-trash-o[data-v-5cd652e2]:hover {\n      color: red;\n}\n.text-accepted-answers i.fa-pencil[data-v-5cd652e2] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-pencil[data-v-5cd652e2]:hover {\n      color: #3d84e6;\n}\n.text-accepted-answers i.fa-thumbs-up[data-v-5cd652e2] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-thumbs-up[data-v-5cd652e2]:hover {\n      color: #2d8c0b !important;\n}\n.text-accepted-answers i.fa-thumbs-down[data-v-5cd652e2] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-thumbs-down[data-v-5cd652e2]:hover {\n      color: red !important;\n}\n.text-accepted-answers li.correct[data-v-5cd652e2] {\n    background-color: #effcea !important;\n}\n.text-accepted-answers span.correct[data-v-5cd652e2] {\n    color: #2d8c0b !important;\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ 394:
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
    data: function data() {
        return {
            accepted_answers: [],
            answer_item: '',

            action: 'insert',
            answer_old: ''
        };
    },


    methods: {
        update: function update() {
            this.$emit('update', this.accepted_answers);
        },
        addItem: function addItem() {
            var _this = this;

            if (this.answer_item) {
                if (this.action == 'insert') {
                    this.accepted_answers.push({ caption: Strings.capitalizeWords(this.answer_item), correct: false });
                    this.answer_item = '';
                } else {
                    if (this.action == 'update') {
                        var items = this.accepted_answers;
                        this.accepted_answers = _.map(items, function (item) {
                            if (item.caption == _this.answer_old) {
                                return { caption: Strings.capitalizeWords(_this.answer_item), correct: item.correct };
                            }
                            return item;
                        });
                        this.action = 'insert';
                        this.answer_old = '';
                        this.answer_item = '';
                    }
                }
                this.update();
                $('#answer_item').focus();
            }
        },
        deleteItem: function deleteItem(answer) {
            var items = this.accepted_answers;
            this.accepted_answers = [];
            var removed = _.remove(items, function (item) {
                return item.caption === answer.caption;
            });
            this.accepted_answers = items;
            this.update();
        },
        editItem: function editItem(answer) {
            this.action = 'update';
            this.answer_item = answer.caption;
            this.answer_old = answer.caption;
            this.update();
            $('#answer_item').focus();
        },
        makeCorrectItem: function makeCorrectItem(answer) {
            answer.correct = true;
            this.update();
        },
        makeInCorrectItem: function makeInCorrectItem(answer) {
            answer.correct = false;
            this.update();
        }
    },

    name: 'check-accepted-answers'
});

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-accepted-answers" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-8" }, [
        _c("strong", [_vm._v("Options list")]),
        _vm._v(" "),
        _vm.accepted_answers.length == 0
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n                No options list items are defined.\n            "
              )
            ])
          : _c("div", [
              _c(
                "ul",
                { staticClass: "list-group" },
                _vm._l(_vm.accepted_answers, function(answer, index) {
                  return _c(
                    "li",
                    {
                      key: "item-" + index,
                      class: {
                        "list-group-item": true,
                        correct: answer.correct
                      }
                    },
                    [
                      _c("span", { class: { correct: answer.correct } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(index + 1) +
                            ". " +
                            _vm._s(answer.caption) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "pull-right" }, [
                        !answer.correct
                          ? _c("i", {
                              staticClass: "fa fa-fw fa-thumbs-up",
                              attrs: { title: "Make correct option" },
                              on: {
                                click: function($event) {
                                  _vm.makeCorrectItem(answer)
                                }
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        answer.correct
                          ? _c("i", {
                              staticClass: "fa fa-fw fa-thumbs-down",
                              attrs: { title: "Make incorrect option" },
                              on: {
                                click: function($event) {
                                  _vm.makeInCorrectItem(answer)
                                }
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-fw fa-pencil",
                          attrs: { title: "Edit this item" },
                          on: {
                            click: function($event) {
                              _vm.editItem(answer)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-fw fa-trash-o",
                          attrs: { title: "Delete this item" },
                          on: {
                            click: function($event) {
                              _vm.deleteItem(answer)
                            }
                          }
                        })
                      ])
                    ]
                  )
                })
              )
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-4" }, [
        _c(
          "div",
          { staticClass: "actions" },
          [
            _c("vue-textbox", {
              attrs: { field: "answer_item", placeholder: "Answer Item" },
              model: {
                value: _vm.answer_item,
                callback: function($$v) {
                  _vm.answer_item = $$v
                },
                expression: "answer_item"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "button",
                  disabled: _vm.answer_item.length == 0
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addItem($event)
                  }
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.action == "insert" ? "Add" : "Save") +
                    "\n                "
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5cd652e2", module.exports)
  }
}

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "answers-container answers-container-radio" },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-accepted-answers" },
          [
            _c("accepted-answers", {
              on: { update: _vm.onUpdateAcceptedAnswers }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12" }, [
          _vm._v("\n            " + _vm._s(_vm.error) + "\n        ")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-647b209a", module.exports)
  }
}

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(398)
/* template */
var __vue_template__ = __webpack_require__(404)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Match\\_AnswersMatch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66d8dd6d", Component.options)
  } else {
    hotAPI.reload("data-v-66d8dd6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers__);
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

    components: {
        'accepted-answers': __WEBPACK_IMPORTED_MODULE_0__AcceptedAnswers___default.a
    },

    props: {
        error: { required: true }
    },

    data: function data() {
        return {
            accepted_answers: []
        };
    },


    methods: {
        update: function update() {
            var answers = [];
            _.map(this.accepted_answers, function (answer, index) {
                answers.push({
                    caption: Strings.capitalizeWords(answer.caption),
                    value: Strings.capitalizeWords(answer.value),
                    order_no: index + 1
                });
            });
            var correct = {};
            _.map(this.accepted_answers, function (answer, index) {
                correct[Strings.capitalizeWords(answer.caption)] = Strings.capitalizeWords(answer.value);
            });
            this.$emit('update', {
                accepted_answers: correct,
                answers: answers
            });
        },
        onUpdateAcceptedAnswers: function onUpdateAcceptedAnswers(e) {
            this.accepted_answers = e;
            this.update();
        }
    },

    name: 'definition-answers-match'
});

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(400)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(402)
/* template */
var __vue_template__ = __webpack_require__(403)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a8a0acc"
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Match\\AcceptedAnswers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a8a0acc", Component.options)
  } else {
    hotAPI.reload("data-v-4a8a0acc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(401);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e40717be", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a8a0acc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a8a0acc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AcceptedAnswers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.text-accepted-answers[data-v-4a8a0acc] {\n  border: 1px solid #ccc;\n  background-color: #FCFCFC;\n  padding: 6px;\n}\n.text-accepted-answers .alert[data-v-4a8a0acc] {\n    border-radius: 0px;\n    margin-bottom: 6px;\n}\n.text-accepted-answers .form-group[data-v-4a8a0acc] {\n    margin-bottom: 4px;\n}\n.text-accepted-answers .actions[data-v-4a8a0acc] {\n    margin-top: 20px;\n}\n.text-accepted-answers .list-group[data-v-4a8a0acc] {\n    margin-bottom: 0px;\n}\n.text-accepted-answers .list-group li[data-v-4a8a0acc] {\n      border-radius: 0px;\n}\n.text-accepted-answers i.fa-trash-o[data-v-4a8a0acc] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-trash-o[data-v-4a8a0acc]:hover {\n      color: red;\n}\n.text-accepted-answers i.fa-pencil[data-v-4a8a0acc] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-pencil[data-v-4a8a0acc]:hover {\n      color: #3d84e6;\n}\n.text-accepted-answers i.fa-thumbs-up[data-v-4a8a0acc] {\n    cursor: pointer;\n}\n.text-accepted-answers i.fa-thumbs-up[data-v-4a8a0acc]:hover {\n      color: #2d8c0b !important;\n}\n.text-accepted-answers li.correct[data-v-4a8a0acc] {\n    background-color: #effcea !important;\n}\n.text-accepted-answers span.correct[data-v-4a8a0acc] {\n    color: #2d8c0b !important;\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ 402:
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            accepted_answers: [],
            answer_item: '',
            answer_match: '',

            action: 'insert',
            answer_old: '',
            match_old: ''
        };
    },


    methods: {
        update: function update() {
            this.$emit('update', this.accepted_answers);
        },
        addItem: function addItem() {
            var _this = this;

            if (this.answer_item) {
                if (this.action == 'insert') {
                    this.accepted_answers.push({
                        caption: Strings.capitalizeWords(this.answer_item),
                        value: Strings.capitalizeWords(this.answer_match)
                    });
                    this.answer_item = '';
                    this.answer_match = '';
                } else {
                    if (this.action == 'update') {
                        var items = this.accepted_answers;
                        this.accepted_answers = _.map(items, function (item) {
                            if (item.caption == _this.answer_old && item.value == _this.match_old) {
                                return {
                                    caption: Strings.capitalizeWords(_this.answer_item),
                                    value: Strings.capitalizeWords(_this.answer_match)
                                };
                            }
                            return item;
                        });
                        this.action = 'insert';
                        this.answer_old = '';
                        this.answer_item = '';
                        this.match_old = '';
                        this.answer_match = '';
                    }
                }
                this.update();
                $('#answer_item').focus();
            }
        },
        deleteItem: function deleteItem(answer) {
            var items = this.accepted_answers;
            this.accepted_answers = [];
            var removed = _.remove(items, function (item) {
                return item.caption === answer.caption && item.value == answer.value;
            });
            this.accepted_answers = items;
            this.update();
        },
        editItem: function editItem(answer) {
            this.action = 'update';

            this.answer_item = answer.caption;
            this.answer_match = answer.value;

            this.answer_old = answer.caption;
            this.match_old = answer.value;

            this.update();
            $('#answer_item').focus();
        }
    },

    name: 'match-accepted-answers'
});

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-accepted-answers" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-8" }, [
        _c("strong", [_vm._v("Options list")]),
        _vm._v(" "),
        _vm.accepted_answers.length == 0
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v(
                "\n                No options list items are defined.\n            "
              )
            ])
          : _c("div", [
              _c(
                "ul",
                { staticClass: "list-group" },
                _vm._l(_vm.accepted_answers, function(answer, index) {
                  return _c(
                    "li",
                    {
                      key: "item-" + index,
                      class: { "list-group-item": true }
                    },
                    [
                      _c("span", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(index + 1) +
                            ". " +
                            _vm._s(answer.caption) +
                            " - " +
                            _vm._s(answer.value) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "pull-right" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-pencil",
                          attrs: { title: "Edit this item" },
                          on: {
                            click: function($event) {
                              _vm.editItem(answer)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-fw fa-trash-o",
                          attrs: { title: "Delete this item" },
                          on: {
                            click: function($event) {
                              _vm.deleteItem(answer)
                            }
                          }
                        })
                      ])
                    ]
                  )
                })
              )
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-4" }, [
        _c(
          "div",
          { staticClass: "actions" },
          [
            _c("vue-textbox", {
              attrs: { field: "answer_item", placeholder: "Answer Item" },
              model: {
                value: _vm.answer_item,
                callback: function($$v) {
                  _vm.answer_item = $$v
                },
                expression: "answer_item"
              }
            }),
            _vm._v(" "),
            _c("vue-textbox", {
              attrs: { field: "answer_match", placeholder: "Match Item" },
              model: {
                value: _vm.answer_match,
                callback: function($$v) {
                  _vm.answer_match = $$v
                },
                expression: "answer_match"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "button",
                  disabled:
                    _vm.answer_item.trim().length == 0 ||
                    _vm.answer_match.trim().length == 0
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addItem($event)
                  }
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.action == "insert" ? "Add" : "Save") +
                    "\n                "
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a8a0acc", module.exports)
  }
}

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "answers-container answers-container-radio" },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-accepted-answers" },
          [
            _c("accepted-answers", {
              on: { update: _vm.onUpdateAcceptedAnswers }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12" }, [
          _vm._v("\n            " + _vm._s(_vm.error) + "\n        ")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66d8dd6d", module.exports)
  }
}

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
	function Question(config) {
		_classCallCheck(this, Question);

		this.type = config.type;
		this.answers = config.answers;
		this.accepted_answers = config.accepted_answers;
		this.correct_answer = config.correct_answer;
	}

	_createClass(Question, [{
		key: 'updateAnswers',
		value: function updateAnswers() {
			return this['updateAnswers' + this.type]();
		}
	}, {
		key: 'updateAnswerstext',
		value: function updateAnswerstext() {
			var correct_answer = _.join(this.accepted_answers, ', ');
			var error_by_type = '';
			if (correct_answer.trim().length == 0) {
				error_by_type = 'Please complete accepted answers list';
			}
			return {
				correct_answer: correct_answer,
				error_by_type: error_by_type
			};
		}
	}, {
		key: 'updateAnswersradio',
		value: function updateAnswersradio() {
			var correct_answer = this.accepted_answers;
			var error_by_type = '';
			if (correct_answer.trim().length == 0) {
				error_by_type = 'Please check the correct option';
			}
			return {
				correct_answer: correct_answer,
				error_by_type: error_by_type
			};
		}
	}, {
		key: 'updateAnswerscheck',
		value: function updateAnswerscheck() {
			var correct_answer = this.accepted_answers;
			var error_by_type = '';
			if (correct_answer.length == 0) {
				this.error_by_type = 'Please check all correct options';
			}
			return {
				correct_answer: correct_answer,
				error_by_type: error_by_type
			};
		}
	}, {
		key: 'updateAnswersmatch',
		value: function updateAnswersmatch() {
			var correct_answer = this.accepted_answers;
			var error_by_type = '';
			if (_.keys(correct_answer).length == 0) {
				this.error_by_type = 'Please provide all matches options';
			}
			return {
				correct_answer: correct_answer,
				error_by_type: error_by_type
			};
		}
	}, {
		key: 'validateByType',
		value: function validateByType() {
			return this['validate' + this.type]();
		}
	}, {
		key: 'validatetext',
		value: function validatetext() {
			var valid = this.correct_answer.trim().length > 0;
			return {
				valid: valid,
				message: valid ? '' : 'Please complete accepted answers list'
			};
		}
	}, {
		key: 'validateradio',
		value: function validateradio() {
			var valid = this.answers.length > 0;
			if (!valid) {
				return {
					valid: false,
					message: 'Please define the options list'
				};
			}
			valid = this.correct_answer.trim().length > 0;
			return {
				valid: valid,
				message: valid ? '' : 'Please check the correct option'
			};
		}
	}, {
		key: 'validatecheck',
		value: function validatecheck() {
			var valid = this.answers.length > 0;
			if (!valid) {
				return {
					valid: false,
					message: 'Please define the options list'
				};
			}
			valid = this.correct_answer.length > 0;
			return {
				valid: valid,
				message: valid ? '' : 'Please check all correct options'
			};
		}
	}, {
		key: 'validatematch',
		value: function validatematch() {
			var valid = this.answers.length > 0;
			if (!valid) {
				return {
					valid: false,
					message: 'Please define the options list'
				};
			}
			valid = _.keys(this.correct_answer).length > 0;
			return {
				valid: valid,
				message: valid ? '' : 'Please provide all matches options'
			};
		}
	}]);

	return Question;
}();

/* harmony default export */ __webpack_exports__["a"] = (Question);

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "question-form" }, [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xs-12 col-sm-4" },
            [
              _c("vue-select-simple", {
                attrs: {
                  field: "type",
                  label: "Question type",
                  items: [
                    { id: "-", label: "-" },
                    { id: "text", label: "Text Question" },
                    { id: "radio", label: "One Choice Question" },
                    { id: "check", label: "Multiple Choice Question" },
                    { id: "match", label: "Matching Question" }
                  ],
                  selected_value: _vm.type,
                  errors: _vm.errors
                },
                on: {
                  input: function($event) {
                    _vm.type = $event
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-12 col-sm-4" },
            [
              _c("vue-number", {
                attrs: {
                  field: "order_no",
                  placeholder: "Order position",
                  label: "Order position",
                  maxlength: "4",
                  autonumeric: {
                    digitGroupSeparator: "",
                    minimumValue: 0,
                    maximumValue: 9999,
                    decimalPlaces: 0
                  },
                  errors: _vm.errors
                },
                model: {
                  value: _vm.order_no,
                  callback: function($$v) {
                    _vm.order_no = $$v
                  },
                  expression: "order_no"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-12 col-sm-4" },
            [
              _c("vue-number", {
                attrs: {
                  field: "points",
                  placeholder: "Points",
                  label: "Points",
                  maxlength: "2",
                  autonumeric: {
                    digitGroupSeparator: "",
                    minimumValue: 0,
                    maximumValue: 99,
                    decimalPlaces: 0
                  },
                  errors: _vm.errors
                },
                model: {
                  value: _vm.points,
                  callback: function($$v) {
                    _vm.points = $$v
                  },
                  expression: "points"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xs-12" },
            [
              _c("vue-summernote", {
                attrs: {
                  field: "question",
                  label: "Question body",
                  errors: _vm.errors
                },
                model: {
                  value: _vm.question,
                  callback: function($$v) {
                    _vm.question = $$v
                  },
                  expression: "question"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.type != "-"
          ? _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-xs-12" },
                [
                  _c("answers-" + _vm.type, {
                    tag: "component",
                    attrs: { error: _vm.error_by_type },
                    on: { update: _vm.onUpdateAnswers }
                  })
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.type != "-"
          ? _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-xs-12 col-answer-description" },
                [
                  _c("vue-summernote", {
                    attrs: {
                      field: "answer_description",
                      label: "Answer Description"
                    },
                    model: {
                      value: _vm.answer_description,
                      callback: function($$v) {
                        _vm.answer_description = $$v
                      },
                      expression: "answer_description"
                    }
                  })
                ],
                1
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-footer" }, [
        _c(
          "div",
          { staticClass: "btn-group pull-right", attrs: { role: "group" } },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button" },
                on: { click: _vm.addQuestion }
              },
              [_vm._v("\n                        Add\n                    ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.$emit("cancel")
                  }
                }
              },
              [_vm._v("\n                        Cancel\n                    ")]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix" })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19022c1e", module.exports)
  }
}

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(408)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(410)
/* template */
var __vue_template__ = __webpack_require__(423)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15606f67"
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\_QuestionsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15606f67", Component.options)
  } else {
    hotAPI.reload("data-v-15606f67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("064fa756", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15606f67\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./_QuestionsList.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15606f67\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./_QuestionsList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.question-list-item[data-v-15606f67] {\n  margin-bottom: 10px;\n  border: 1px solid #b3b3b3;\n  background-color: #f7f7f7;\n  padding: 10px;\n}\n.question-list-item .question-body-col[data-v-15606f67] {\n    margin-top: 10px;\n}\n.question-list-item[data-v-15606f67]:last-child {\n  margin-bottom: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Text_ListAnswer__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Text_ListAnswer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Text_ListAnswer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_ListAnswer__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_ListAnswer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Radio_ListAnswer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Check_ListAnswer__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Check_ListAnswer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Check_ListAnswer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Match_ListAnswer__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Match_ListAnswer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Match_ListAnswer__);
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

    components: {
        'vue-list-text-answer': __WEBPACK_IMPORTED_MODULE_0__Text_ListAnswer___default.a,
        'vue-list-radio-answer': __WEBPACK_IMPORTED_MODULE_1__Radio_ListAnswer___default.a,
        'vue-list-check-answer': __WEBPACK_IMPORTED_MODULE_2__Check_ListAnswer___default.a,
        'vue-list-match-answer': __WEBPACK_IMPORTED_MODULE_3__Match_ListAnswer___default.a
    },

    props: {
        questions: { require: true }
    },

    data: function data() {
        return {};
    },


    name: 'questions-list'
});

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(412)
/* template */
var __vue_template__ = __webpack_require__(413)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Text\\ListAnswer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b377420", Component.options)
  } else {
    hotAPI.reload("data-v-4b377420", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
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


/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    question: { required: true }
  },

  computed: {},

  data: function data() {
    return {};
  },


  methods: {},

  name: 'list-answers-text-item'
});

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "list-answer" }, [
    _c("strong", [_vm._v("Accepted answers")]),
    _vm._v(" "),
    _c("div", [_vm._v("\n\t\t" + _vm._s(_vm.question.correct_answer) + "\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b377420", module.exports)
  }
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(415)
/* template */
var __vue_template__ = __webpack_require__(416)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Radio\\ListAnswer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-edc6d510", Component.options)
  } else {
    hotAPI.reload("data-v-edc6d510", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
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


/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    question: { required: true }
  },

  computed: {},

  data: function data() {
    return {};
  },


  methods: {},

  name: 'list-answers-radio-item'
});

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "list-answer" }, [
    _c("strong", [_vm._v("Accepted answers")]),
    _vm._v(" "),
    _c("div", [_vm._v("\n\t\t" + _vm._s(_vm.question.correct_answer) + "\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-edc6d510", module.exports)
  }
}

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(418)
/* template */
var __vue_template__ = __webpack_require__(419)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Check\\ListAnswer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ece2e6a", Component.options)
  } else {
    hotAPI.reload("data-v-1ece2e6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 418:
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


/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    question: { required: true }
  },

  computed: {},

  data: function data() {
    return {};
  },


  methods: {},

  name: 'list-answers-radio-item'
});

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "list-answer" }, [
    _c("strong", [_vm._v("Accepted answers")]),
    _vm._v(" "),
    _c("div", [_vm._v("\n\t\t" + _vm._s(_vm.question.correct_answer) + "\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ece2e6a", module.exports)
  }
}

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(421)
/* template */
var __vue_template__ = __webpack_require__(422)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\Match\\ListAnswer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d19426e", Component.options)
  } else {
    hotAPI.reload("data-v-3d19426e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 421:
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


/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    question: { required: true }
  },

  computed: {},

  data: function data() {
    return {};
  },


  methods: {},

  name: 'list-answers-radio-item'
});

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "list-answer" }, [
    _c("strong", [_vm._v("Accepted answers")]),
    _vm._v(" "),
    _c("div", [_vm._v("\n\t\t" + _vm._s(_vm.question.correct_answer) + "\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d19426e", module.exports)
  }
}

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.questions.length == 0
    ? _c("div", { staticClass: "alert alert-info" }, [
        _vm._v("\n    No questions\n")
      ])
    : _c(
        "div",
        _vm._l(_vm.questions, function(question, index) {
          return _c(
            "div",
            {
              key: "question-list-item-" + index,
              staticClass: "question-list-item"
            },
            [
              _c("div", { staticClass: "row question-header-row" }, [
                _c("div", { staticClass: "col-xs-6" }, [
                  _vm._v(
                    "\n                Question " +
                      _vm._s(index + 1) +
                      " from " +
                      _vm._s(_vm.questions.length) +
                      " \n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6" }, [
                  _c("div", { staticClass: "pull-right" }, [
                    _vm._v("\n                    Order: "),
                    _c("span", { staticClass: "label label-primary" }, [
                      _vm._v(_vm._s(question.order_no))
                    ]),
                    _vm._v(" \n                    Type: "),
                    _c("span", { staticClass: "label label-primary" }, [
                      _vm._v(_vm._s(question.type))
                    ]),
                    _vm._v("\n                    Points: "),
                    _c("span", { staticClass: "label label-success" }, [
                      _vm._v(_vm._s(question.points))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row-question-body row" }, [
                _c("div", { staticClass: "col-xs-12 question-body-col" }, [
                  _c("strong", [_vm._v("Question")]),
                  _vm._v(" "),
                  _c("div", {
                    domProps: { innerHTML: _vm._s(question.question) }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row-answers-body row" }, [
                _c(
                  "div",
                  { staticClass: "col-xs-12 answers-body-col" },
                  [
                    _c("vue-list-" + question.type + "-answer", {
                      tag: "component",
                      attrs: { question: question }
                    })
                  ],
                  1
                )
              ])
            ]
          )
        })
      )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15606f67", module.exports)
  }
}

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-pane fade", attrs: { id: "questions" } },
    [
      !_vm.form.visible
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-6" }, [
              _c("label", { staticClass: "number-of-questions" }, [
                _vm._v(
                  "\n                    Number of questions: \n                    "
                ),
                _c("strong", [
                  _vm._v(
                    _vm._s(_vm.questions.length) + "\n                    "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-6" }, [
              _c(
                "div",
                {
                  staticClass: "btn-group toolbar pull-right",
                  attrs: { role: "group" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.onClickNewQuestion }
                    },
                    [
                      _vm._v(
                        "\n                        New\n                    "
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.form.visible
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c(
                "div",
                { attrs: { id: "question-form-container" } },
                [
                  _c("question-form", {
                    attrs: { next_no: _vm.questions.length + 1 },
                    on: {
                      add: _vm.addQuestion,
                      cancel: function($event) {
                        _vm.form.visible = false
                      }
                    }
                  })
                ],
                1
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.form.visible
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xs-12" },
              [_c("questions-list", { attrs: { questions: _vm.questions } })],
              1
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11756bda", module.exports)
  }
}

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(426)
/* template */
var __vue_template__ = __webpack_require__(435)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\TabSave.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e77f427", Component.options)
  } else {
    hotAPI.reload("data-v-6e77f427", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QuizSummary__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QuizSummary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__QuizSummary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuizQuestionsSummary__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuizQuestionsSummary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__QuizQuestionsSummary__);
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

    components: {
        'quiz-summary': __WEBPACK_IMPORTED_MODULE_0__QuizSummary___default.a,
        'quiz-questions-summary': __WEBPACK_IMPORTED_MODULE_1__QuizQuestionsSummary___default.a
    },

    props: {
        quiz: { type: Object, required: true }
    },

    computed: {},

    data: function data() {
        return {};
    },


    methods: {
        saveQuiz: function saveQuiz() {
            Requests.post('/admin/quizes/insert', { quiz: this.quiz }).then(function (r) {
                console.log(r);
            });
        }
    },

    name: 'tab-save'
});

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(428)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(430)
/* template */
var __vue_template__ = __webpack_require__(431)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75bea96d"
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\_QuizSummary.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75bea96d", Component.options)
  } else {
    hotAPI.reload("data-v-75bea96d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4b56815e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75bea96d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./_QuizSummary.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75bea96d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./_QuizSummary.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\ndiv.panel-heading strong[data-v-75bea96d] {\n  color: #3d84e6;\n}\n#description-container[data-v-75bea96d], #parameters-container[data-v-75bea96d] {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 430:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		quiz: { required: true }
	},

	name: 'quiz-summary'
});

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("strong", [
        _vm._v("\n            \t" + _vm._s(_vm.quiz.name) + "\n            ")
      ]),
      _vm._v("\n            . General infos \n        ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c("div", [
        _c("strong", [_vm._v("Title")]),
        _vm._v(" "),
        _c("div", { domProps: { innerHTML: _vm._s(_vm.quiz.title) } })
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "description-container" } }, [
        _c("strong", [_vm._v("Description")]),
        _vm._v(" "),
        _c("div", { domProps: { innerHTML: _vm._s(_vm.quiz.description) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row", attrs: { id: "parameters-container" } }, [
        _c("div", { staticClass: "col-xs-6" }, [
          _c("div", [
            _c("strong", [_vm._v("Time")]),
            _vm._v(" "),
            _c("span", { staticClass: "badge" }, [
              _vm._v(_vm._s(_vm.quiz.time) + " min")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6" }, [
          _c("div", [
            _c("strong", [_vm._v("Success percentage")]),
            _vm._v(" "),
            _c("span", { staticClass: "badge" }, [
              _vm._v(_vm._s(_vm.quiz.success_percentage) + " %")
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75bea96d", module.exports)
  }
}

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(433)
/* template */
var __vue_template__ = __webpack_require__(434)
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
Component.options.__file = "resources\\assets\\js\\admin\\quizes\\create\\~components\\_QuizQuestionsSummary.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec07e33c", Component.options)
  } else {
    hotAPI.reload("data-v-ec07e33c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 433:
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        quiz: { required: true }
    },

    name: 'quiz-questions-summary'
});

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("strong", [_vm._v(_vm._s(_vm.quiz.name))]),
      _vm._v(". Questions \n        ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _vm._v("\n            " + _vm._s(_vm.quiz.questions) + "\n        ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ec07e33c", module.exports)
  }
}

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tab-pane fade", attrs: { id: "save" } }, [
    _c("h3", { staticClass: "tab-header" }, [_vm._v("Review and Save")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xs-12" },
        [_c("quiz-summary", { attrs: { quiz: _vm.quiz } })],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", attrs: { id: "questions-row" } }, [
      _c(
        "div",
        { staticClass: "col-xs-12" },
        [_c("quiz-questions-summary", { attrs: { quiz: _vm.quiz } })],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", attrs: { id: "actions-row" } }, [
      _c("div", { staticClass: "col-xs-12" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.saveQuiz } },
          [_vm._v("\n                    Save the quiz\n                ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e77f427", module.exports)
  }
}

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "quiz-create-container" } }, [
    _c(
      "ul",
      { staticClass: "nav nav-tabs" },
      [
        _c("tab-item", {
          attrs: {
            id: "_general-infos",
            href: "#general-infos",
            caption: "1. General Infos",
            active: _vm.current_tab == "general-infos"
          },
          on: { click: _vm.onFocusGeneralInfos }
        }),
        _vm._v(" "),
        _c("tab-item", {
          attrs: {
            id: "_questions",
            href: "#questions",
            caption: "2. Questions",
            active: _vm.current_tab == "questions"
          },
          on: { click: _vm.onFocusQuestions }
        }),
        _vm._v(" "),
        _c("tab-item", {
          attrs: {
            id: "_save",
            href: "#save",
            caption: "3. Review and Save",
            active: _vm.current_tab == "save"
          },
          on: { click: _vm.onFocusReview }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tab-content" },
      [
        _c("tab-general-infos", {
          attrs: { errors: _vm.errors },
          on: { update: _vm.onUpdateGeneralInfos }
        }),
        _vm._v(" "),
        _c("tab-questions", {
          on: {
            questions: function($event) {
              _vm.quiz.questions = $event
            }
          }
        }),
        _vm._v(" "),
        _c("tab-save", { attrs: { quiz: _vm.quiz } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-636cc668", module.exports)
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


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate_dist_locale_ro__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate_dist_locale_ro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vee_validate_dist_locale_ro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate_dist_locale_de__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate_dist_locale_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate_dist_locale_de__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VeeExtender_js__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







Object(__WEBPACK_IMPORTED_MODULE_3__VeeExtender_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* Validator */]);

var Validation = function () {
    function Validation(rules, locale) {
        _classCallCheck(this, Validation);

        var files = {
            'ro': __WEBPACK_IMPORTED_MODULE_0_vee_validate_dist_locale_ro___default.a,
            'de': __WEBPACK_IMPORTED_MODULE_1_vee_validate_dist_locale_de___default.a
        };
        if (locale != undefined && locale != 'en') {
            __WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* Validator */].localize(locale, files[locale]);
        }
        this.validator = new __WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* Validator */](rules);
    }

    _createClass(Validation, [{
        key: 'validate',
        value: function validate(data) {
            return this.validator.validateAll(data);
        }

        /*
        | return Promise
        */

    }, {
        key: 'validateField',
        value: function validateField(field, value) {
            return this.validator.validate(field, value);
        }
    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.validator.errors;
        }
    }, {
        key: 'removeError',
        value: function removeError(field) {
            return this.validator.errors.remove(field);
        }
    }, {
        key: 'removeErrors',
        value: function removeErrors() {
            return this.validator.errors.clear();
        }
    }]);

    return Validation;
}();

/* harmony default export */ __webpack_exports__["a"] = (Validation);

/***/ })

/******/ });