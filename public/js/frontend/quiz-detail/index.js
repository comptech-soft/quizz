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
/******/ 	return __webpack_require__(__webpack_require__.s = 275);
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

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(276);


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuizDetail__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuizDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_QuizDetail__);
window.Timer = __webpack_require__(277);



new window.Vue({

    el: '#quiz-detail',

    components: {
        'vue-quiz-detail': __WEBPACK_IMPORTED_MODULE_0__components_QuizDetail___default.a
    },

    name: 'frontend-quiz-detail'
});

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

/**
 * easytimer.js
 * Generated: 2018-03-26
 * Version: 2.2.1
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Timer = factory());
}(this, (function () { 'use strict';

  function leftPadding(string, padLength, character) {
    var i = void 0;
    var characters = '';

    if (string.length > padLength) {
      return string;
    }

    for (i = 0; i < padLength; i = i + 1) {
      characters += String(character);
    }

    return (characters + string).slice(-characters.length);
  }

  function TimeCounter() {
    this.secondTenths = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.days = 0;

    /**
     * [toString convert the counted values on a string]
     * @param  {[array]} units           [array with the units to display]
     * @param  {[string]} separator       [separator of the units]
     * @param  {[integer]} leftZeroPadding [number of zero padding]
     * @return {[string]}                 [result string]
     */
    this.toString = function (units, separator, leftZeroPadding) {
      units = units || ['hours', 'minutes', 'seconds'];
      separator = separator || ':';
      leftZeroPadding = leftZeroPadding || 2;

      var stringTime = void 0;
      var arrayTime = [];
      var i = void 0;

      for (i = 0; i < units.length; i = i + 1) {
        if (this[units[i]] !== undefined) {
          if (units[i] === 'secondTenths') {
            arrayTime.push(this[units[i]]);
          } else {
            arrayTime.push(leftPadding(this[units[i]], leftZeroPadding, '0'));
          }
        }
      }
      stringTime = arrayTime.join(separator);

      return stringTime;
    };
  }

  /*
  * Polyfill por IE9, IE10 and IE11
  */
  var CustomEvent$1 = typeof window !== 'undefined' ? window.CustomEvent : undefined;

  if (typeof window !== 'undefined' && typeof CustomEvent$1 !== 'function') {
    CustomEvent$1 = function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent$1.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent$1;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  /*
   * General functions, variables and constants
   */
  var SECOND_TENTHS_PER_SECOND = 10;
  var SECONDS_PER_MINUTE = 60;
  var MINUTES_PER_HOUR = 60;
  var HOURS_PER_DAY = 24;

  var SECOND_TENTHS_POSITION = 0;
  var SECONDS_POSITION = 1;
  var MINUTES_POSITION = 2;
  var HOURS_POSITION = 3;
  var DAYS_POSITION = 4;

  var SECOND_TENTHS = 'secondTenths';
  var SECONDS = 'seconds';
  var MINUTES = 'minutes';
  var HOURS = 'hours';
  var DAYS = 'days';

  var unitsInMilliseconds = {
    secondTenths: 100,
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000
  };

  var groupedUnits = {
    secondTenths: SECOND_TENTHS_PER_SECOND,
    seconds: SECONDS_PER_MINUTE,
    minutes: MINUTES_PER_HOUR,
    hours: HOURS_PER_DAY
  };

  var events = typeof module !== 'undefined' && module.exports && "function" === 'function' ? __webpack_require__(278) : undefined;

  function hasDOM() {
    return typeof document !== 'undefined';
  }

  function hasEventEmitter() {
    return events;
  }

  function mod(number, module) {
    return (number % module + module) % module;
  }

  /**
   * [Timer Timer/Chronometer/Countdown compatible with AMD and NodeJS.
   * Can update time values with different time intervals: tenth of seconds,
   * seconds, minutes and hours.]
   */
  function Timer() {
    /*
    * PRIVATE variables and Functions
    */
    var counters = new TimeCounter();
    var totalCounters = new TimeCounter();

    var intervalId = void 0;
    var eventEmitter = hasDOM() ? document.createElement('span') : hasEventEmitter() ? new events.EventEmitter() : undefined;
    var running = false;
    var paused = false;
    var precision = void 0;
    var timerTypeFactor = void 0;
    var customCallback = void 0;
    var timerConfig = {};
    var currentParams = void 0;
    var targetValues = void 0;
    var startValues = void 0;
    var countdown = void 0;
    var startingDate = void 0;
    var targetDate = void 0;
    var eventData = {
      detail: {
        timer: this
      }
    };

    function updateCounters(precision, roundedValue) {
      totalCounters[precision] = roundedValue;

      if (precision === DAYS) {
        counters[precision] = roundedValue;
      } else if (roundedValue >= 0) {
        counters[precision] = mod(roundedValue, groupedUnits[precision]);
      } else {
        counters[precision] = groupedUnits[precision] - mod(roundedValue, groupedUnits[precision]);
      }
    }

    function updateDays(value) {
      return updateUnitByPrecision(value, DAYS);
    }

    function updateHours(value) {
      return updateUnitByPrecision(value, HOURS);
    }

    function updateMinutes(value) {
      return updateUnitByPrecision(value, MINUTES);
    }

    function updateSeconds(value) {
      return updateUnitByPrecision(value, SECONDS);
    }

    function updateSecondTenths(value) {
      return updateUnitByPrecision(value, SECOND_TENTHS);
    }

    function updateUnitByPrecision(value, precision) {
      var previousValue = totalCounters[precision];
      updateCounters(precision, calculateIntegerUnitQuotient(value, unitsInMilliseconds[precision]));

      return totalCounters[precision] !== previousValue;
    }

    function stopTimerAndResetCounters() {
      stopTimer();
      resetCounters();
    }

    function stopTimer() {
      clearInterval(intervalId);
      intervalId = undefined;
      running = false;
      paused = false;
    }

    function setParamsAndStartTimer(params) {
      if (!isPaused()) {
        setParams(params);
      } else {
        startingDate = calculateStartingDate();
        targetValues = setTarget(currentParams.target);
      }

      startTimer();
    }

    function startTimer() {
      var interval = unitsInMilliseconds[precision];

      if (isTargetAchieved(roundTimestamp(Date.now()))) {
        return;
      }

      intervalId = setInterval(updateTimerAndDispatchEvents, interval);

      running = true;
      paused = false;
    }

    function calculateStartingDate() {
      return roundTimestamp(Date.now()) - totalCounters.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
    }

    function updateTimerAndDispatchEvents() {
      var currentTime = roundTimestamp(Date.now());
      var valuesUpdated = updateTimer();

      dispatchEvents(valuesUpdated);

      customCallback(eventData.detail.timer);
      if (isTargetAchieved(currentTime)) {
        stop();
        dispatchEvent('targetAchieved', eventData);
      }
    }

    function updateTimer() {
      var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : roundTimestamp(Date.now());

      var ellapsedTime = timerTypeFactor > 0 ? currentTime - startingDate : startingDate - currentTime;
      var valuesUpdated = {};

      valuesUpdated[SECOND_TENTHS] = updateSecondTenths(ellapsedTime);
      valuesUpdated[SECONDS] = updateSeconds(ellapsedTime);
      valuesUpdated[MINUTES] = updateMinutes(ellapsedTime);
      valuesUpdated[HOURS] = updateHours(ellapsedTime);
      valuesUpdated[DAYS] = updateDays(ellapsedTime);

      return valuesUpdated;
    }

    function roundTimestamp(timestamp) {
      return Math.floor(timestamp / unitsInMilliseconds[precision]) * unitsInMilliseconds[precision];
    }

    function dispatchEvents(valuesUpdated) {
      if (valuesUpdated[SECOND_TENTHS]) {
        dispatchEvent('secondTenthsUpdated', eventData);
      }
      if (valuesUpdated[SECONDS]) {
        dispatchEvent('secondsUpdated', eventData);
      }
      if (valuesUpdated[MINUTES]) {
        dispatchEvent('minutesUpdated', eventData);
      }
      if (valuesUpdated[HOURS]) {
        dispatchEvent('hoursUpdated', eventData);
      }
      if (valuesUpdated[DAYS]) {
        dispatchEvent('daysUpdated', eventData);
      }
    }

    function isTargetAchieved(currentDate) {
      return targetValues instanceof Array && currentDate >= targetDate;
    }

    function resetCounters() {
      for (var counter in counters) {
        if (counters.hasOwnProperty(counter) && typeof counters[counter] === 'number') {
          counters[counter] = 0;
        }
      }

      for (var _counter in totalCounters) {
        if (totalCounters.hasOwnProperty(_counter) && typeof totalCounters[_counter] === 'number') {
          totalCounters[_counter] = 0;
        }
      }
    }

    function setParams(params) {
      params = params || {};

      precision = typeof params.precision === 'string' ? params.precision : SECONDS;

      customCallback = typeof params.callback === 'function' ? params.callback : function () {};

      countdown = params.countdown === true;

      timerTypeFactor = countdown === true ? -1 : 1;

      if (_typeof(params.startValues) === 'object') {
        setStartValues(params.startValues);
      }
      startingDate = calculateStartingDate();

      updateTimer();

      if (_typeof(params.target) === 'object') {
        targetValues = setTarget(params.target);
      } else if (countdown) {
        params.target = { seconds: 0 };
        targetValues = setTarget(params.target);
      }

      timerConfig = {
        precision: precision,
        callback: customCallback,
        countdown: (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && params.countdown === true,
        target: targetValues,
        startValues: startValues
      };

      currentParams = params;
    }

    function configInputValues(inputValues) {
      var secondTenths = void 0,
          seconds = void 0,
          minutes = void 0,
          hours = void 0,
          days = void 0,
          values = void 0;
      if ((typeof inputValues === 'undefined' ? 'undefined' : _typeof(inputValues)) === 'object') {
        if (inputValues instanceof Array) {
          if (inputValues.length !== 5) {
            throw new Error('Array size not valid');
          }
          values = inputValues;
        } else {
          values = [inputValues.secondTenths || 0, inputValues.seconds || 0, inputValues.minutes || 0, inputValues.hours || 0, inputValues.days || 0];
        }
      }

      secondTenths = values[SECOND_TENTHS_POSITION];
      seconds = values[SECONDS_POSITION] + calculateIntegerUnitQuotient(secondTenths, SECOND_TENTHS_PER_SECOND);
      minutes = values[MINUTES_POSITION] + calculateIntegerUnitQuotient(seconds, SECONDS_PER_MINUTE);
      hours = values[HOURS_POSITION] + calculateIntegerUnitQuotient(minutes, MINUTES_PER_HOUR);
      days = values[DAYS_POSITION] + calculateIntegerUnitQuotient(hours, HOURS_PER_DAY);

      values[SECOND_TENTHS_POSITION] = secondTenths % SECOND_TENTHS_PER_SECOND;
      values[SECONDS_POSITION] = seconds % SECONDS_PER_MINUTE;
      values[MINUTES_POSITION] = minutes % MINUTES_PER_HOUR;
      values[HOURS_POSITION] = hours % HOURS_PER_DAY;
      values[DAYS_POSITION] = days;

      return values;
    }

    function calculateIntegerUnitQuotient(unit, divisor) {
      var quotient = unit / divisor;

      return quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
    }

    function setTarget(inputTarget) {
      if (!inputTarget) {
        return;
      }

      targetValues = configInputValues(inputTarget);
      var targetCounter = calculateTotalCounterFromFalues(targetValues);
      targetDate = startingDate + targetCounter.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;

      return targetValues;
    }

    function setStartValues(inputStartValues) {
      startValues = configInputValues(inputStartValues);
      counters.secondTenths = startValues[SECOND_TENTHS_POSITION];
      counters.seconds = startValues[SECONDS_POSITION];
      counters.minutes = startValues[MINUTES_POSITION];
      counters.hours = startValues[HOURS_POSITION];
      counters.days = startValues[DAYS_POSITION];

      totalCounters = calculateTotalCounterFromFalues(startValues, totalCounters);
    }

    function calculateTotalCounterFromFalues(values, outputCounter) {
      var total = outputCounter || {};

      total.days = values[DAYS_POSITION];
      total.hours = total.days * HOURS_PER_DAY + values[HOURS_POSITION];
      total.minutes = total.hours * MINUTES_PER_HOUR + values[MINUTES_POSITION];
      total.seconds = total.minutes * SECONDS_PER_MINUTE + values[SECONDS_POSITION];
      total.secondTenths = total.seconds * SECOND_TENTHS_PER_SECOND + values[[SECOND_TENTHS_POSITION]];

      return total;
    }

    /*
     * PUBLIC functions
     */

    /**
     * [stop stops the timer and resets the counters. Dispatch stopped event]
     */
    function stop() {
      stopTimerAndResetCounters();
      dispatchEvent('stopped', eventData);
    }

    /**
     * [stop stops and starts the timer. Dispatch stopped event]
     */
    function reset() {
      stopTimerAndResetCounters();
      setParamsAndStartTimer(currentParams);
      dispatchEvent('reset', eventData);
    }

    /**
     * [start starts the timer configured by the params object. Dispatch started event]
     * @param  {[object]} params [Configuration parameters]
     */
    function start(params) {
      if (isRunning()) {
        return;
      }

      setParamsAndStartTimer(params);
      dispatchEvent('started', eventData);
    }

    /**
     * [pause stops the timer without resetting the counters. The timer it can be restarted with start function.
     * Dispatch paused event]
     * @return {[type]} [description]
     */
    function pause() {
      stopTimer();
      paused = true;
      dispatchEvent('paused', eventData);
    }

    /**
     * [addEventListener Adds event listener to the timer]
     * @param {[string]} event      [event to listen]
     * @param {[function]} listener   [the event listener function]
     */
    function addEventListener(event, listener) {
      if (hasDOM()) {
        eventEmitter.addEventListener(event, listener);
      } else if (hasEventEmitter()) {
        eventEmitter.on(event, listener);
      }
    }

    /**
     * [removeEventListener Removes event listener to the timer]
     * @param  {[string]} event    [event to remove listener]
     * @param  {[function]} listener [listener to remove]
     */
    function removeEventListener(event, listener) {
      if (hasDOM()) {
        eventEmitter.removeEventListener(event, listener);
      } else if (hasEventEmitter()) {
        eventEmitter.removeListener(event, listener);
      }
    }

    /**
     * [dispatchEvent dispatchs an event]
     * @param  {string} event [event to dispatch]
     */
    function dispatchEvent(event, data) {
      if (hasDOM()) {
        eventEmitter.dispatchEvent(new CustomEvent(event, data));
      } else if (hasEventEmitter()) {
        eventEmitter.emit(event, data);
      }
    }

    /**
     * [isRunning return true if the timer is running]
     * @return {Boolean}
     */
    function isRunning() {
      return running;
    }

    /**
     * [isPaused returns true if the timer is paused]
     * @return {Boolean}
     */
    function isPaused() {
      return paused;
    }

    /**
     * [getTimeValues returns the counter with the current timer values]
     * @return {[TimeCounter]}
     */
    function getTimeValues() {
      return counters;
    }
    /**
     * [getTotalTimeValues returns the counter with the current timer total values]
     * @return {[TimeCounter]}
     */
    function getTotalTimeValues() {
      return totalCounters;
    }
    /**
     * [getConfig returns the configuration paramameters]
     * @return {[type]}
     */
    function getConfig() {
      return timerConfig;
    }
    /**
     * Public API
     * Definition of Timer instance public functions
     */
    if (typeof this !== 'undefined') {
      this.start = start;

      this.pause = pause;

      this.stop = stop;

      this.reset = reset;

      this.isRunning = isRunning;

      this.isPaused = isPaused;

      this.getTimeValues = getTimeValues;

      this.getTotalTimeValues = getTotalTimeValues;

      this.getConfig = getConfig;

      this.addEventListener = addEventListener;

      this.removeEventListener = removeEventListener;
    }
  }

  return Timer;

})));


/***/ }),

/***/ 278:
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(280)
/* template */
var __vue_template__ = __webpack_require__(301)
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\QuizDetail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67252d88", Component.options)
  } else {
    hotAPI.reload("data-v-67252d88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlayQuiz__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlayQuiz___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PlayQuiz__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'vue-play-quiz': __WEBPACK_IMPORTED_MODULE_0__PlayQuiz___default.a
    },

    props: {
        id: { required: true }
    },

    computed: {
        ready: function ready() {
            return Quizz.$store.getters.ready;
        },
        user: function user() {
            return Quizz.$store.getters.user;
        },
        questions: function questions() {
            return this.record.questions;
        }
    },

    data: function data() {
        return {
            record: null,
            loading: false,
            started: false,
            timer: null,
            clock: '00:00:00',
            current: 0,
            user_answers: []
        };
    },


    watch: {
        'current': function current(newCurrent, oldCurrent) {
            this.scroll();
        }
    },

    methods: {
        prev: function prev() {
            if (this.current > 0) {
                this.current--;
            }
        },
        next: function next() {
            if (this.current < this.questions.length - 1) {
                this.current++;
            }
        },
        onUserAnswer: function onUserAnswer(e) {
            for (var i = 0; i < this.user_answers.length; i++) {
                if (this.user_answers[i].question_id == e.question_id) {
                    this.user_answers[i] = {
                        question_id: e.question_id,
                        answer: e.answer
                    };
                    break;
                }
            }
            this.$forceUpdate();
        },
        prepareUserAnswers: function prepareUserAnswers() {
            var vm = this;
            _.each(this.record.questions, function (question) {

                var answer = null;
                switch (question.type) {
                    case 'text':
                    case 'radio':
                        answer = '';
                        break;
                    case 'check':
                    case 'match':
                        answer = [];
                        break;
                }

                vm.user_answers.push({
                    question_id: question.id,
                    answer: answer
                });
            });
        },
        scroll: function scroll() {
            var i = setInterval(function () {
                if ($('#quiz-detail-container').length == 1) {
                    clearInterval(i);
                    console.log('Scrollling...');
                    $.scrollTo('#quiz-detail-container', 500);
                }
            }, 10);
        },
        getRecord: function getRecord() {
            var vm = this;
            vm.loading = true;
            Requests.post('quiz-detail/get-record', { id: this.id }).then(function (r) {

                vm.record = r.data;
                vm.prepareUserAnswers();

                vm.timer = new Timer();
                vm.timer.start();
                vm.timer.addEventListener('secondsUpdated', function (e) {
                    vm.clock = vm.timer.getTimeValues().toString();
                });

                vm.loading = false;
                vm.scroll();
            });
        }
    },

    mounted: function mounted() {
        this.getRecord();
    },


    name: 'quiz-detail'
});

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(282)
/* template */
var __vue_template__ = __webpack_require__(300)
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\_PlayQuiz.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b49ecfc", Component.options)
  } else {
    hotAPI.reload("data-v-2b49ecfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Question__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Question__);
//
//
//
//
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
        'vue-question': __WEBPACK_IMPORTED_MODULE_0__Question___default.a
    },

    props: {
        record: { required: true },
        user_answers: { required: true },
        current: { required: true }
    },

    computed: {
        questions: function questions() {
            return this.record.questions;
        },
        current_question: function current_question() {
            return this.questions[this.current];
        },
        current_user_answer: function current_user_answer() {
            var _this = this;

            return _.find(this.user_answers, function (answer) {
                return answer.question_id == _this.current_question.id;
            });
        }
    },

    methods: {
        onUserAnswer: function onUserAnswer(e) {
            this.$emit('user-answer', e);
        }
    },

    name: 'play-quiz'
});

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(284)
/* template */
var __vue_template__ = __webpack_require__(299)
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\_Question.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4834773f", Component.options)
  } else {
    hotAPI.reload("data-v-4834773f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Check__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Match__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Text__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Text__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'vue-answer-radio': __WEBPACK_IMPORTED_MODULE_0__Radio___default.a,
        'vue-answer-check': __WEBPACK_IMPORTED_MODULE_1__Check___default.a,
        'vue-answer-match': __WEBPACK_IMPORTED_MODULE_2__Match___default.a,
        'vue-answer-text': __WEBPACK_IMPORTED_MODULE_3__Text___default.a
    },

    props: {
        question: { required: true },
        total: { required: true },
        user_answer: { required: true },
        current: { required: true }
    },

    computed: {
        percent: function percent() {
            var r = (this.current + 1) * 100 / this.total;
            return r.toFixed(2);
        }
    },

    methods: {
        onUserAnswer: function onUserAnswer(e) {
            this.$emit('user-answer', e);
        }
    },

    mounted: function mounted() {
        var i = setInterval(function () {
            if ($('#quiz-detail-container').length == 1) {
                clearInterval(i);
                $.scrollTo('#quiz-detail-container', 1000);
            }
        }, 10);
    },


    name: 'question'
});

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(286)
/* template */
var __vue_template__ = __webpack_require__(287)
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\__Radio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-115d7755", Component.options)
  } else {
    hotAPI.reload("data-v-115d7755", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 286:
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: { required: true },
        question: { required: true },
        user_answer: { required: true }
    },

    computed: {
        answers: function answers() {
            return this.question.answers;
        }
    },

    data: function data() {
        return {
            selected: '',
            icheck: null
        };
    },


    methods: {
        onRadioClick: function onRadioClick(jq_option) {
            var _this = this;

            var vm = this,
                id = jq_option.attr('id'),
                value = $('#' + vm.id + ' #' + id).val();
            setTimeout(function () {
                if (_this.selected == value) {
                    _this.selected = '';
                    $('#' + vm.id + ' #' + id).iCheck('uncheck');
                    $('#' + vm.id + ' #' + id).removeAttr('checked').iCheck('update');
                } else {
                    _this.selected = value;
                }
                _this.$emit('user-answer', {
                    question_id: _this.question.id,
                    answer: _this.selected
                });
            }, 10);
        },
        iCheck: function iCheck() {
            var vm = this,
                i = setInterval(function () {

                var selector = '#' + vm.id + ' label.radiobutton input';
                var jq = $(selector);
                console.log('iCheckRadio' + selector + ' (' + jq.length + ', ' + vm.answers.length + ')');
                if (jq.length == vm.answers.length) {
                    clearInterval(i);
                    vm.icheck = $('#' + vm.id + ' label.radiobutton input').iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue',
                        increaseArea: '20%'
                    }).on('ifClicked', function (event) {
                        vm.onRadioClick($(this));
                    });
                }
            }, 10);
        }
    },

    mounted: function mounted() {
        this.iCheck();
    },


    name: 'answers-radio'
});

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "radio-answer-container", attrs: { id: _vm.id } },
    [
      _c(
        "ul",
        { staticClass: "listview" },
        _vm._l(_vm.answers, function(answer) {
          return _c("li", [
            _c("label", { staticClass: "radiobutton checked" }, [
              _c("input", {
                attrs: {
                  name: "question-" + _vm.question.id,
                  id: "answer-" + answer.id,
                  type: "radio"
                },
                domProps: {
                  value: answer.value,
                  checked: answer.value == _vm.user_answer.answer
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "label-text" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(answer.caption) +
                    "\n                    "
                )
              ])
            ])
          ])
        })
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-115d7755", module.exports)
  }
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(289)
/* template */
var __vue_template__ = __webpack_require__(290)
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\__Check.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62f3f9e2", Component.options)
  } else {
    hotAPI.reload("data-v-62f3f9e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 289:
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: { required: true },
        question: { required: true },
        user_answer: { required: true }
    },

    computed: {
        answers: function answers() {
            return this.question.answers;
        },
        user_selected: function user_selected() {
            return this.user_answer.answer;
        }
    },

    data: function data() {
        return {
            selected: [],
            icheck: null
        };
    },


    methods: {
        existsInUserAnswer: function existsInUserAnswer(value, id) {
            var r = _.find(this.user_selected, function (item) {
                return item.selected == value && item.answer_id == id;
            });
            return r != undefined;
        },
        existsInSelected: function existsInSelected(value, id) {
            var r = _.find(this.selected, function (item) {
                return item.selected == value && item.answer_id == id;
            });
            return r != undefined;
        },
        addToSelected: function addToSelected(value, id) {
            if (!this.existsInSelected(value, id)) {
                this.selected.push({
                    answer_id: id,
                    selected: value
                });
            }
        },
        removeFromSelected: function removeFromSelected(value, id) {
            if (this.existsInSelected(value, id)) {
                _.remove(this.selected, function (item) {
                    return item.selected == value && item.answer_id == id;
                });
            }
            this.selected = this.selected;
        },
        onClickCheckbox: function onClickCheckbox(jqObject) {
            var _this = this;

            var id = jqObject.attr('id'),
                value = $('#' + id).val(),
                answer_id = jqObject.data('answer_id');
            setTimeout(function () {
                if (_this.existsInSelected(value, answer_id)) {
                    $('#' + id).iCheck('uncheck');
                    $('#' + id).removeAttr('checked').iCheck('update');
                    _this.removeFromSelected(value, answer_id);
                } else {
                    _this.addToSelected(value, answer_id);
                }
                _this.$emit('user-answer', {
                    question_id: _this.question.id,
                    answer: _this.selected
                });
            }, 10);
        },
        iCheck: function iCheck() {
            var vm = this,
                i = setInterval(function () {
                if ($('label.checkbutton input').length == vm.answers.length) {
                    clearInterval(i);
                    vm.icheck = $('label.checkbutton input').iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue',
                        increaseArea: '20%'
                    }).on('ifClicked', function (event) {
                        vm.onClickCheckbox($(this));
                    });
                }
            }, 10);
        }
    },

    mounted: function mounted() {
        this.iCheck();
    },


    name: 'answers-check'
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "check-answer-container", attrs: { id: _vm.id } },
    [
      _c(
        "ul",
        { staticClass: "listview" },
        _vm._l(_vm.answers, function(answer) {
          return _c("li", [
            _c("label", { staticClass: "checkbutton checked" }, [
              _c("input", {
                attrs: {
                  name: "question-" + _vm.question.id,
                  id: "answer-" + answer.id,
                  "data-answer_id": answer.id,
                  type: "checkbox"
                },
                domProps: {
                  value: answer.value,
                  checked: _vm.existsInUserAnswer(answer.value, answer.id)
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "label-text" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(answer.caption) +
                    " / " +
                    _vm._s(_vm.existsInUserAnswer(answer.value, answer.id)) +
                    "\n                    "
                )
              ])
            ])
          ])
        })
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62f3f9e2", module.exports)
  }
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(295)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6fcb481f"
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\__Match.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fcb481f", Component.options)
  } else {
    hotAPI.reload("data-v-6fcb481f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("295c1e74", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fcb481f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./__Match.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fcb481f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./__Match.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.is-draggable[data-v-6fcb481f] {\n  /*background-color: red;\n    color: #fff;*/\n}\n.is-droppable[data-v-6fcb481f] {\n  /*background-color: green;*/\n}\n.is-snaper[data-v-6fcb481f] {\n  /* height: 20px;\n    border:1px solid red;*/\n}\n.is-hovered[data-v-6fcb481f] {\n  /* border:2px solid #000;*/\n}\n.is-dropped[data-v-6fcb481f] {\n  /* border:2px solid yellow;*/\n}\n.is-activate[data-v-6fcb481f] {\n  /* background-color: yellow;*/\n}\n.is-dragged[data-v-6fcb481f] {\n  font-weight: bold;\n  color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ 294:
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: { required: true },
        question: { required: true },
        user_answer: { required: true }
    },

    computed: {
        answers: function answers() {
            return this.question.answers;
        }
    },

    data: function data() {
        return {
            // selected: '',
            // icheck: null,
            responses: [],
            dragged: null
        };
    },


    methods: {
        shuffleResponses: function shuffleResponses() {
            this.responses = _.shuffle(this.answers);
            _.each(this.responses, function (response) {
                response['status'] = 'initial';
            });
        },
        makeResponse: function makeResponse() {
            var r = [];
            $('li.has-response').each(function (i) {
                var jq = $(this).find('div'),
                    response_id = null;
                if (jq.length == 1) {
                    response_id = jq.data('response-id');
                }
                r.push({
                    answer_id: $(this).data('answer-id'),
                    response_id: response_id
                });
            });
            return r;
        },
        getAnswerUserResponse: function getAnswerUserResponse(answer) {
            var r = _.find(this.user_answer.answer, function (item) {
                return item.answer_id == answer.id;
            });
            if (r == undefined || r.response_id == null) {
                return null;
            }
            return _.find(this.question.answers, function (answer) {
                return answer.id == r.response_id;
            });
        },
        responseExists: function responseExists(response) {
            var r = _.find(this.user_answer.answer, function (item) {
                return item.response_id == response.id;
            });
            return r != undefined;
        },
        draggable: function draggable() {
            var vm = this;
            $('.is-draggable').draggable({
                containment: '#match-container',
                cursor: 'move',
                opacity: 0.5,
                zIndex: 100,
                helper: 'clone',
                revert: 'invalid',
                revertDuration: 500,
                start: function start(e, ui) {
                    vm.dragged = $(this).closest('li');
                    var response_id = $(this).data('response-id');
                    $(this).addClass('is-dragged');
                    var response = _.find(vm.responses, function (response) {
                        return response.id == response_id;
                    });
                    response.status = 'start';
                    vm.$forceUpdate();
                    console.log('(' + response.value + ', ' + response_id + ', start) >> ');
                },
                stop: function stop(e, ui) {
                    var response_id = $(this).data('response-id');
                    var response = _.find(vm.responses, function (response) {
                        return response.id == response_id;
                    });
                    $(this).removeClass('is-dragged');
                    if (response.status != 'drop') {
                        response.status = 'initial';
                    }
                    vm.$forceUpdate();
                    console.log('(' + response.value + ', ' + response_id + ', stop) >> ');
                },
                drag: function drag(e, ui) {}
            });
        },
        droppable: function droppable() {
            var vm = this;
            $('.is-droppable').droppable({
                accept: function accept(droppables) {
                    var id = $(this).attr('id');
                    var answer_id = $(this).data('answer-id');
                    var has_answer = $(this).find('div.is-draggable');
                    return has_answer.length == 0;
                },
                tolerance: 'pointer',
                hoverClass: 'is-hovered',
                activeClass: 'is-activate',

                drop: function drop(e, ui) {
                    var response_id = ui.draggable.data('response-id');
                    var response = _.find(vm.responses, function (response) {
                        return response.id == response_id;
                    });
                    response.status = 'drop';
                    vm.$forceUpdate();
                    console.log('(' + response.value + ', ' + response_id + ', drop) >> ');
                    $(this).removeClass('is-hovered').addClass('is-dropped').append(ui.draggable);
                    console.log('Destroy...');
                    $('.is-droppable').droppable('destroy');
                    vm.dragged.addClass('is-droppable');
                    setTimeout(function () {
                        console.log('Recreate...' + $('.is-droppable').length);
                        vm.droppable();
                        vm.$emit('user-answer', {
                            question_id: vm.question.id,
                            answer: vm.makeResponse()
                        });
                    }, 50);
                }
            });
        },
        makeDraggable: function makeDraggable() {
            var vm = this,
                i = setInterval(function () {
                if ($('.is-draggable').length && $('.is-droppable').length) {
                    clearInterval(i);
                    vm.draggable();
                    vm.droppable();
                }
            }, 100);
        }
    },

    mounted: function mounted() {
        this.shuffleResponses();
        this.makeDraggable();
    },


    name: 'answers-match'
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "match-container row", attrs: { id: "match-container" } },
    [
      _c(
        "div",
        { staticClass: "col-xs-12" },
        _vm._l(_vm.user_answer.answer, function(ua) {
          return _c(
            "div",
            {
              staticStyle: {
                "background-color": "blue",
                color: "yellow",
                "margin-bottom": "5px"
              }
            },
            [_vm._v("\n                " + _vm._s(ua) + "\n            ")]
          )
        })
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-sm-4" }, [
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.answers, function(answer) {
            return _c("li", { staticClass: "list-group-item" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(answer.caption) +
                  "\n                "
              )
            ])
          })
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-sm-4" }, [
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.answers, function(answer) {
            return _c(
              "li",
              {
                staticClass:
                  "list-group-item is-snaper is-droppable has-response",
                attrs: {
                  id: "is-droppable-" + answer.id,
                  "data-answer-id": answer.id
                }
              },
              [
                _vm.getAnswerUserResponse(answer) != null
                  ? _c(
                      "div",
                      {
                        staticClass: "is-draggable",
                        attrs: {
                          "data-response-id": _vm.getAnswerUserResponse(answer)
                            .id
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.getAnswerUserResponse(answer).value) +
                            "\n                    "
                        )
                      ]
                    )
                  : _vm._e()
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-sm-4" }, [
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.responses, function(response) {
            return _c("li", { staticClass: "list-group-item" }, [
              !_vm.responseExists(response)
                ? _c(
                    "div",
                    {
                      staticClass: "is-draggable",
                      attrs: { "data-response-id": response.id }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(response.value) +
                          "\n                    "
                      )
                    ]
                  )
                : _vm._e()
            ])
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-6fcb481f", module.exports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(297)
/* template */
var __vue_template__ = __webpack_require__(298)
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
Component.options.__file = "resources\\assets\\js\\frontend\\quiz-detail\\~components\\__Text.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-089aa2c3", Component.options)
  } else {
    hotAPI.reload("data-v-089aa2c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 297:
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: { required: true },
        question: { required: true },
        user_answer: { required: true }
    },

    computed: {
        answer: function answer() {
            return this.question.answers[0];
        },
        user_selected: function user_selected() {
            return this.user_answer.answer;
        }
    },

    data: function data() {
        return {
            value: ''
        };
    },


    methods: {
        onChangeValue: function onChangeValue(e) {
            this.$emit('user-answer', {
                question_id: this.question.id,
                answer: this.value
            });
        }
    },

    mounted: function mounted() {
        this.value = this.user_selected;
        var vm = this,
            i = setInterval(function () {
            if ($('div#' + vm.id + ' input').length == 1) {
                $('div#' + vm.id + ' input').focus();
            }
        }, 10);
    },


    name: 'answers-text'
});

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-answer-container", attrs: { id: _vm.id } },
    [
      _c("vue-textbox", {
        attrs: { field: "value", placeholder: _vm.answer.caption },
        on: { input: _vm.onChangeValue },
        model: {
          value: _vm.value,
          callback: function($$v) {
            _vm.value = $$v
          },
          expression: "value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-089aa2c3", module.exports)
  }
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "maincontent" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-8" }, [
          _c("h4", { staticClass: "question-number" }, [
            _vm._v(
              "\n                    Question " +
                _vm._s(_vm.question.order_no) +
                " of " +
                _vm._s(_vm.total) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-4 text-right" }, [
          _c("h4", [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.question.points) +
                " points\n                "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c("div", { staticClass: "progress" }, [
            _c(
              "div",
              {
                staticClass: "progress-bar",
                style: {
                  width: _vm.percent + "%"
                },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": _vm.percent,
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              },
              [_c("span", [_vm._v(_vm._s(_vm.percent) + " %")])]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "maincontent", attrs: { id: "question-text-section" } },
      [_c("p", { domProps: { innerHTML: _vm._s(_vm.question.question) } })]
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "maincontent", attrs: { id: "question-options" } },
      [
        _c("vue-answer-" + _vm.question.type, {
          key: "question-" + _vm.question.id,
          tag: "component",
          attrs: {
            id: "question-" + _vm.question.id,
            question: _vm.question,
            user_answer: _vm.user_answer
          },
          on: { "user-answer": _vm.onUserAnswer }
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-4834773f", module.exports)
  }
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vue-question", {
        attrs: {
          question: _vm.current_question,
          total: _vm.questions.length,
          current: _vm.current,
          user_answer: _vm.current_user_answer
        },
        on: { "user-answer": _vm.onUserAnswer }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b49ecfc", module.exports)
  }
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.ready && !_vm.loading
    ? _c("div", { attrs: { id: "quiz-detail-container" } }, [
        !_vm.loading && !_vm.started
          ? _c("div", { staticClass: "panel panel-default" }, [
              _c("div", { staticClass: "panel-heading" }, [
                _c("h3", { staticClass: "panel-title" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.record.title) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
                    _c("p", {
                      domProps: { innerHTML: _vm._s(_vm.record.description) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: "/" + _vm.record.image_url }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "panel-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        _vm.started = true
                      }
                    }
                  },
                  [_vm._v("\n                Start\n            ")]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && _vm.started
          ? _c("div", { staticClass: "panel panel-default" }, [
              _c("div", { staticClass: "panel-heading" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-8" }, [
                    _c("h3", { staticClass: "panel-title" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.record.title) +
                          "\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-4 text-right" }, [
                    _c("i", { staticClass: "fa fa-fw fa-clock-o" }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.clock) +
                        "\n                "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "panel-body" },
                [
                  _c("vue-play-quiz", {
                    attrs: {
                      record: _vm.record,
                      user_answers: _vm.user_answers,
                      current: _vm.current
                    },
                    on: { "user-answer": _vm.onUserAnswer }
                  }),
                  _vm._v(" "),
                  0
                    ? _c(
                        "div",
                        {
                          staticStyle: {
                            "background-color": "blue",
                            color: "yellow"
                          }
                        },
                        _vm._l(_vm.user_answers, function(answer) {
                          return _c(
                            "div",
                            {
                              staticStyle: { "border-bottom": "1px solid #fff" }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(answer) +
                                  "\n                "
                              )
                            ]
                          )
                        })
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-footer",
                  attrs: { id: "questions-actions" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-xs-12" }, [
                      _c("div", { staticClass: "btn-group pull-right" }, [
                        _vm.current > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                staticStyle: { "margin-right": "4px" },
                                attrs: {
                                  type: "button",
                                  disabled: _vm.current == 0
                                },
                                on: { click: _vm.prev }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw fa-chevron-left"
                                }),
                                _vm._v(
                                  "\n                            Previos\n                        "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: { click: _vm.next }
                          },
                          [
                            _vm._v(
                              "\n                            Next\n                            "
                            ),
                            _c("i", {
                              staticClass: "fa fa-fw fa-chevron-right"
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          : _vm._e()
      ])
    : _c("i", { staticClass: "fa fa-spinner fa-spin" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67252d88", module.exports)
  }
}

/***/ }),

/***/ 4:
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

/***/ 5:
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

var listToStyles = __webpack_require__(8)

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

/***/ 8:
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