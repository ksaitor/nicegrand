(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsonld-signatures"] = factory();
	else
		root["jsonld-signatures"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var api = {};
module.exports = api;

// define setImmediate and nextTick
//// nextTick implementation with browser-compatible fallback ////
// from https://github.com/caolan/async/blob/master/lib/async.js

// capture the global reference to guard against fakeTimer mocks
var _setImmediate = typeof setImmediate === 'function' && setImmediate;

var _delay = _setImmediate ?
// not a direct alias (for IE10 compatibility)
function (fn) {
  return _setImmediate(fn);
} : function (fn) {
  return setTimeout(fn, 0);
};

if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof process.nextTick === 'function') {
  api.nextTick = process.nextTick;
} else {
  api.nextTick = _delay;
}
api.setImmediate = _setImmediate ? _delay : api.nextTick;

/**
 * Clones a value. If the value is an array or an object it will be deep cloned.
 *
 * @param value the value to clone.
 *
 * @return the cloned value.
 */
api.deepClone = function (value) {
  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var rval = void 0;
    if (Array.isArray(value)) {
      rval = new Array(value.length);
      for (var i = 0; i < rval.length; ++i) {
        rval[i] = api.deepClone(value[i]);
      }
    } else {
      rval = {};
      for (var j in value) {
        rval[j] = api.deepClone(value[j]);
      }
    }
    return rval;
  }
  return value;
};

/**
 * Converts the given date into W3C datetime format (eg: 2011-03-09T21:55:41Z).
 *
 * @param date the date to convert.
 *
 * @return the date in W3C datetime format.
 */
api.w3cDate = function (date) {
  if (date === undefined || date === null) {
    date = new Date();
  } else if (typeof date === 'number' || typeof date === 'string') {
    date = new Date(date);
  }

  return date.getUTCFullYear() + '-' + _zeroFill(date.getUTCMonth() + 1) + '-' + _zeroFill(date.getUTCDate()) + 'T' + _zeroFill(date.getUTCHours()) + ':' + _zeroFill(date.getUTCMinutes()) + ':' + _zeroFill(date.getUTCSeconds()) + 'Z';
};

api.callbackify = function (fn) {
  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var callback, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            callback = args[args.length - 1];

            if (typeof callback === 'function') {
              args.pop();
            }

            result = void 0;
            _context.prev = 3;
            _context.next = 6;
            return fn.apply(null, args);

          case 6:
            result = _context.sent;
            _context.next = 14;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            if (!(typeof callback === 'function')) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return', _invokeCallback(callback, _context.t0));

          case 13:
            throw _context.t0;

          case 14:
            if (!(typeof callback === 'function')) {
              _context.next = 16;
              break;
            }

            return _context.abrupt('return', _invokeCallback(callback, null, result));

          case 16:
            return _context.abrupt('return', result);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));
};

api.normalizeAsyncFn = function (fn, promiseFnLength) {
  // ensure promise-based function can be called with a callback
  if (fn.length <= promiseFnLength) {
    return api.callbackify(fn);
  }

  // ensure callback-based function will return a Promise
  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var callback,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            callback = _args2[promiseFnLength];

            if (typeof callback === 'function') {
              args.pop();
            }
            return _context2.abrupt('return', new Promise(function (resolve, reject) {
              args.push(function (err, result) {
                if (typeof callback === 'function') {
                  return _invokeCallback(callback, err, result);
                } else if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              });
              try {
                fn.apply(null, args);
              } catch (e) {
                if (typeof callback === 'function') {
                  return _invokeCallback(callback, e);
                }
                reject(e);
              }
            }));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
};

function _invokeCallback(callback, err, result) {
  // execute on next tick to prevent "unhandled rejected promise"
  // and simulate what would have happened in a promiseless API
  api.nextTick(function () {
    return callback(err, result);
  });
}

function _zeroFill(num) {
  return num < 10 ? '0' + num : '' + num;
}

/**
 * Encodes input according to the "Base64url Encoding" format as specified
 * in JSON Web Signature (JWS) RFC7517. A URL safe character set is used and
 * trailing '=', line breaks, whitespace, and other characters are omitted.
 *
 * @param input the data to encode.
 * @param options
 *          forge: forge library.
 *
 * @return the encoded value.
 */
api.encodeBase64Url = function (input, _ref3) {
  var forge = _ref3.forge;

  var enc = forge.util.encode64(input);
  return enc.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};

/**
 * Decodes input according to the "Base64url Encoding" format as specified
 * in JSON Web Signature (JWS) RFC7517. A URL safe character set is used and
 * trailing '=', line breaks, whitespace, and other characters are omitted.
 *
 * @param input the data to decode.
 * @param options
 *          forge: forge library.
 *
 * @return the decoded value.
 */
api.decodeBase64Url = function (input, _ref4) {
  var forge = _ref4.forge;

  var normalInput = input.replace(/-/g, '+').replace(/_/g, '/');
  var mod4 = normalInput.length % 4;
  if (mod4 === 0) {
    // pass
  } else if (mod4 === 2) {
    normalInput = normalInput + '==';
  } else if (mod4 === 3) {
    normalInput = normalInput + '=';
  } else {
    throw new Error('Illegal base64 string.');
  }
  return forge.util.decode64(normalInput);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


module.exports = {
  SECURITY_CONTEXT_URL: 'https://w3id.org/security/v2',
  SECURITY_CONTEXT_V1_URL: 'https://w3id.org/security/v1',
  SECURITY_CONTEXT_V2_URL: 'https://w3id.org/security/v2'
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var hide = __webpack_require__(4);
var redefine = __webpack_require__(10);
var ctx = __webpack_require__(14);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(4);
var has = __webpack_require__(11);
var SRC = __webpack_require__(20)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(2).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(51);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = __webpack_require__(6);
var util = __webpack_require__(5);
var Helper = __webpack_require__(43);

// TODO: reorganize this class further and make it more obvious which
// methods need to be extended in proof plugins

// TODO: make signature and verification code (and potentially other code)
// more DRY, especially wrt. plugins having reimplement functionality

module.exports = function () {
  function LinkedDataSignature(injector, algorithm) {
    _classCallCheck(this, LinkedDataSignature);

    this.injector = injector;
    this.algorithm = algorithm;
    this.helper = new Helper(injector);
  }

  _createClass(LinkedDataSignature, [{
    key: 'canonize',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, options) {
        var jsonld, opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jsonld = this.injector.use('jsonld');
                opts = {
                  algorithm: 'URDNA2015',
                  format: 'application/n-quads',
                  expansionMap: options.expansionMap
                };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                return _context.abrupt('return', jsonld.canonize(input, opts));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function canonize(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return canonize;
    }()
  }, {
    key: 'createVerifyData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input, options) {
        var jsonld, opts, compacted, proof, c14nProofOptions, c14nDocument;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: frame before getting signature, not just compact? considerations:
                // should the assumption be (for this library) that the signature is on
                // the top-level object and thus framing is unnecessary?

                jsonld = this.injector.use('jsonld');
                opts = { expansionMap: options.expansionMap };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context2.next = 5;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL, opts);

              case 5:
                compacted = _context2.sent;


                // TODO: will need to preserve `proof` when chained signature
                // option is used and implemented in the future

                // delete the existing proofs(s) prior to canonicalization
                delete compacted.proof;

                // ensure signature values are removed from proof node
                _context2.next = 9;
                return this.sanitizeProofNode(options.proof, options);

              case 9:
                proof = _context2.sent;
                _context2.next = 12;
                return this.canonize(proof, options);

              case 12:
                c14nProofOptions = _context2.sent;
                _context2.next = 15;
                return this.canonize(compacted, options);

              case 15:
                c14nDocument = _context2.sent;
                return _context2.abrupt('return', {
                  data: this._sha256(c14nProofOptions).getBytes() + this._sha256(c14nDocument).getBytes(),
                  encoding: 'binary'
                });

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createVerifyData(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return createVerifyData;
    }()
  }, {
    key: 'sanitizeProofNode',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(proof, options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // `jws`,`signatureValue`,`proofValue` must not be included in the proof
                // options
                proof = util.deepClone(proof);
                delete proof.jws;
                delete proof.signatureValue;
                delete proof.proofValue;
                return _context3.abrupt('return', proof);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sanitizeProofNode(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return sanitizeProofNode;
    }()
  }, {
    key: 'sign',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(input, options) {
        var proof, jsonld, opts, verifyData, proofNode;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // copy options for setting defaults
                options = Object.assign({}, options || {});

                // validate common options

                if (!(options.creator !== undefined && typeof options.creator !== 'string')) {
                  _context4.next = 3;
                  break;
                }

                throw new TypeError('"options.creator" must be a URL string.');

              case 3:
                if (!(options.domain !== undefined && typeof options.domain !== 'string')) {
                  _context4.next = 5;
                  break;
                }

                throw new TypeError('"options.domain" must be a string.');

              case 5:
                if (!(options.nonce !== undefined && typeof options.nonce !== 'string')) {
                  _context4.next = 7;
                  break;
                }

                throw new TypeError('"options.nonce" must be a string.');

              case 7:

                // disallow dropping properties when expanding by default
                if (options.expansionMap !== false) {
                  options.expansionMap = function (info) {
                    if (info.unmappedProperty) {
                      throw new Error('The property "' + info.unmappedProperty + '" in the input ' + 'was not defined in the context.');
                    }
                  };
                }

                // build proof (aka signature options)
                proof = void 0;

                if (!options.proof) {
                  _context4.next = 18;
                  break;
                }

                // use proof JSON-LD document passed to API
                jsonld = this.injector.use('jsonld');
                opts = { expansionMap: options.expansionMap };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context4.next = 15;
                return jsonld.compact(options.proof, constants.SECURITY_CONTEXT_URL, opts);

              case 15:
                proof = _context4.sent;
                _context4.next = 19;
                break;

              case 18:
                // create proof JSON-LD document
                proof = { '@context': constants.SECURITY_CONTEXT_URL };

              case 19:

                // set default `now` date if not given in `proof` or `options`
                if (proof.created === undefined && options.date === undefined) {
                  options.date = new Date();
                }

                // ensure date is in string format
                if (options.date !== undefined && typeof options.date !== 'string') {
                  // TODO: parse non-string date and force to w3c format?
                  options.date = util.w3cDate(options.date);
                }

                // ensure algorithm is set
                proof.type = options.algorithm;

                // add API overrides
                if (options.date !== undefined) {
                  proof.created = options.date;
                }
                if (options.creator !== undefined) {
                  proof.creator = options.creator;
                }
                if (options.domain !== undefined) {
                  proof.domain = options.domain;
                }
                if (options.nonce !== undefined) {
                  proof.nonce = options.nonce;
                }

                // produce data to sign
                options.proof = proof;
                _context4.next = 29;
                return this.createVerifyData(input, options);

              case 29:
                verifyData = _context4.sent;
                _context4.next = 32;
                return this.createProofNode(verifyData, options);

              case 32:
                proofNode = _context4.sent;
                return _context4.abrupt('return', this.attachProofNode(input, proofNode, options));

              case 34:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sign(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'createProofNode',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(verifyData, options) {
        var proof;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                proof = options.proof;
                _context5.next = 3;
                return this.createSignatureValue(verifyData, options);

              case 3:
                proof.jws = _context5.sent;
                return _context5.abrupt('return', proof);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createProofNode(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return createProofNode;
    }()
  }, {
    key: 'attachProofNode',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(input, proofNode, options) {
        var tmp, jsonld, ctx, opts, compactProofNode, output, proofKey;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // compact proof node to match input context
                tmp = {
                  'https://w3id.org/security#proof': {
                    '@graph': proofNode
                  }
                };
                jsonld = this.injector.use('jsonld');
                ctx = jsonld.getValues(input, '@context');
                opts = { expansionMap: options.expansionMap };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context6.next = 7;
                return jsonld.compact(tmp, ctx, opts);

              case 7:
                compactProofNode = _context6.sent;


                // TODO: it is unclear how the signature would be easily added without
                // reshaping the input... so perhaps this library should just require
                // the caller to accept that the signature will be added to the top
                // level of the input

                // attach signature node to cloned input and return it
                output = util.deepClone(input);

                delete compactProofNode['@context'];
                proofKey = Object.keys(compactProofNode)[0];

                jsonld.addValue(output, proofKey, compactProofNode[proofKey]);
                return _context6.abrupt('return', output);

              case 13:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function attachProofNode(_x11, _x12, _x13) {
        return _ref6.apply(this, arguments);
      }

      return attachProofNode;
    }()
  }, {
    key: 'verify',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(framed, options) {
        var proof, _options, _options$maxTimestamp, maxTimestampDelta, _options$checkNonce, checkNonce, _options$checkDomain, checkDomain, _options$checkTimesta, checkTimestamp, _options$checkKey, checkKey, _options$publicKey, getPublicKey, key, checks, keyOptions, publicKey, isKeyTrusted, verifyData;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = Object.assign({}, options || {});

                proof = framed.signature || framed.proof;

                proof['@context'] = framed['@context'];

                // destructure options
                _options = options, _options$maxTimestamp = _options.maxTimestampDelta, maxTimestampDelta = _options$maxTimestamp === undefined ? 15 * 60 : _options$maxTimestamp, _options$checkNonce = _options.checkNonce, checkNonce = _options$checkNonce === undefined ? function () {
                  return proof.nonce === null || proof.nonce === undefined;
                } : _options$checkNonce, _options$checkDomain = _options.checkDomain, checkDomain = _options$checkDomain === undefined ? function () {
                  return proof.domain === null || proof.domain === undefined;
                } : _options$checkDomain, _options$checkTimesta = _options.checkTimestamp, checkTimestamp = _options$checkTimesta === undefined ? function () {
                  var now = Date.now();
                  var delta = maxTimestampDelta * 1000;
                  var created = Date.parse(proof.created);
                  if (created < now - delta || created > now + delta) {
                    throw new Error('The digital signature timestamp is out of range.');
                  }
                  return true;
                } : _options$checkTimesta, _options$checkKey = _options.checkKey, checkKey = _options$checkKey === undefined ? this.helper.checkKey.bind(this.helper) : _options$checkKey, _options$publicKey = _options.publicKey, getPublicKey = _options$publicKey === undefined ? this.helper.getPublicKey.bind(this.helper) : _options$publicKey;

                // normalize function options

                if (checkNonce === false) {
                  // not checking nonce, so return true
                  checkNonce = function checkNonce() {
                    return true;
                  };
                }
                if (checkDomain === false) {
                  // not checking domain, so return true
                  checkDomain = function checkDomain() {
                    return true;
                  };
                }
                if (checkTimestamp === false) {
                  // not checking timestamp, so return true
                  checkTimestamp = function checkTimestamp() {
                    return true;
                  };
                }
                if (typeof getPublicKey !== 'function') {
                  key = getPublicKey;

                  getPublicKey = function getPublicKey(keyId) {
                    if (keyId !== key.id) {
                      throw new Error('Public key not found.');
                    }
                    return key;
                  };
                }
                checkNonce = util.normalizeAsyncFn(checkNonce, 2);
                checkDomain = util.normalizeAsyncFn(checkDomain, 2);
                checkTimestamp = util.normalizeAsyncFn(checkTimestamp, 2);
                checkKey = util.normalizeAsyncFn(checkKey, 2);
                getPublicKey = util.normalizeAsyncFn(getPublicKey, 2);

                // run nonce, domain, and timestamp checks in parallel
                _context7.next = 15;
                return Promise.all([checkNonce(proof.nonce, options), checkDomain(proof.domain, options), checkTimestamp(proof.date, options)]);

              case 15:
                checks = _context7.sent;

                if (checks[0]) {
                  _context7.next = 18;
                  break;
                }

                throw new Error('The nonce is invalid.');

              case 18:
                if (checks[1]) {
                  _context7.next = 20;
                  break;
                }

                throw new Error('The domain is invalid.');

              case 20:
                if (checks[2]) {
                  _context7.next = 22;
                  break;
                }

                throw new Error('The timestamp is invalid.');

              case 22:
                keyOptions = Object.assign({}, options, {
                  proof: proof,
                  keyType: this.requiredKeyType
                });

                // get public key

                _context7.next = 25;
                return getPublicKey(proof.creator, keyOptions);

              case 25:
                publicKey = _context7.sent;

                if (!(publicKey.revoked !== undefined)) {
                  _context7.next = 28;
                  break;
                }

                throw new Error('The document was signed with a key that has been revoked.');

              case 28:
                _context7.next = 30;
                return checkKey(publicKey, keyOptions);

              case 30:
                isKeyTrusted = _context7.sent;

                if (isKeyTrusted) {
                  _context7.next = 33;
                  break;
                }

                throw new Error('The document was not signed with a trusted key.');

              case 33:
                _context7.next = 35;
                return this.validateKey(publicKey, keyOptions);

              case 35:
                _context7.next = 37;
                return this.createVerifyData(framed, Object.assign({}, options, {
                  date: proof.created,
                  nonce: proof.nonce,
                  domain: proof.domain,
                  proof: proof
                }));

              case 37:
                verifyData = _context7.sent;
                return _context7.abrupt('return', this.verifyProofNode(verifyData, proof, Object.assign({}, options, { publicKey: publicKey })));

              case 39:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function verify(_x14, _x15) {
        return _ref7.apply(this, arguments);
      }

      return verify;
    }()
  }, {
    key: 'verifyProofNode',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(verifyData, proof, options) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                throw new Error('"verifyProofNode" must be implemented in a derived class.');

              case 1:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function verifyProofNode(_x16, _x17, _x18) {
        return _ref8.apply(this, arguments);
      }

      return verifyProofNode;
    }()

    // TODO: use node `crypto` and Buffers in node environment
    // returns a forge buffer

  }, {
    key: '_sha256',
    value: function _sha256(str, encoding) {
      // browser or other environment
      var forge = this.injector.use('forge');
      var md = forge.md.sha256.create();
      md.update(str, encoding || 'utf8');
      return md.digest();
    }
  }]);

  return LinkedDataSignature;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(31);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(15);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var constants = __webpack_require__(6);
var util = __webpack_require__(5);
var LinkedDataSignature = __webpack_require__(17);

module.exports = function (_LinkedDataSignature) {
  _inherits(LinkedDataSignature2015, _LinkedDataSignature);

  function LinkedDataSignature2015(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'LinkedDataSignature2015';

    _classCallCheck(this, LinkedDataSignature2015);

    return _possibleConstructorReturn(this, (LinkedDataSignature2015.__proto__ || Object.getPrototypeOf(LinkedDataSignature2015)).call(this, injector, algorithm));
  }

  _createClass(LinkedDataSignature2015, [{
    key: 'createProofNode',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var proof;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                proof = options.proof;
                _context.next = 3;
                return this.createSignatureValue(verifyData, options);

              case 3:
                proof.signatureValue = _context.sent;
                return _context.abrupt('return', proof);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createProofNode(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createProofNode;
    }()
  }, {
    key: 'attachProofNode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input, proofNode, options) {
        var tmp, jsonld, ctx, opts, compactProofNode, output, proofKey;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // compact proof node to match input context
                tmp = {
                  'https://w3id.org/security#signature': proofNode
                };
                jsonld = this.injector.use('jsonld');
                ctx = jsonld.getValues(input, '@context');
                opts = { expansionMap: options.expansionMap };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context2.next = 7;
                return jsonld.compact(tmp, ctx, opts);

              case 7:
                compactProofNode = _context2.sent;


                // TODO: it is unclear how the signature would be easily added without
                // reshaping the input... so perhaps this library should just require
                // the caller to accept that the signature will be added to the top
                // level of the input

                // attach signature node to cloned input and return it
                output = util.deepClone(input);

                delete compactProofNode['@context'];
                proofKey = Object.keys(compactProofNode)[0];

                jsonld.addValue(output, proofKey, compactProofNode[proofKey]);
                return _context2.abrupt('return', output);

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function attachProofNode(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return attachProofNode;
    }()
  }, {
    key: 'createSignatureValue',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(verifyData, options) {
        var crypto, signer, forge, privateKey, md;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof options.privateKeyPem !== 'string')) {
                  _context3.next = 2;
                  break;
                }

                throw new TypeError('"options.privateKeyPem" must be a PEM formatted string.');

              case 2:
                if (!this.injector.env.nodejs) {
                  _context3.next = 7;
                  break;
                }

                // optimize using node libraries
                crypto = this.injector.use('crypto');
                signer = crypto.createSign('RSA-SHA256');

                signer.update(verifyData.data, verifyData.encoding);
                return _context3.abrupt('return', signer.sign(options.privateKeyPem, 'base64'));

              case 7:

                // browser or other environment
                forge = this.injector.use('forge');
                privateKey = forge.pki.privateKeyFromPem(options.privateKeyPem);
                md = forge.md.sha256.create();

                md.update(verifyData.data, verifyData.encoding);
                return _context3.abrupt('return', forge.util.encode64(privateKey.sign(md)));

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createSignatureValue(_x7, _x8) {
        return _ref3.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'createVerifyData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(input, options) {
        var jsonld, opts, compacted, c14n, verifyData, headers, keys, i, key, value;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // TODO: frame before getting signature, not just compact? considerations:
                // should the assumption be (for this library) that the signature is on
                // the top-level object and thus framing is unnecessary?

                jsonld = this.injector.use('jsonld');
                opts = { expansionMap: options.expansionMap };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context4.next = 5;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL, opts);

              case 5:
                compacted = _context4.sent;


                // TODO: will need to preserve `signature` when chained signature
                // option is used and implemented in the future

                // delete the existing signature(s) prior to canonicalization
                delete compacted.signature;

                _context4.next = 9;
                return this.canonize(compacted, options);

              case 9:
                c14n = _context4.sent;
                verifyData = '';
                headers = {
                  'http://purl.org/dc/elements/1.1/created': options.date,
                  'https://w3id.org/security#domain': options.domain,
                  'https://w3id.org/security#nonce': options.nonce
                };
                // add headers in lexicographical order

                keys = Object.keys(headers).sort();

                for (i = 0; i < keys.length; ++i) {
                  key = keys[i];
                  value = headers[key];

                  if (!(value === null || value === undefined)) {
                    verifyData += key + ': ' + value + '\n';
                  }
                }
                verifyData += c14n;
                return _context4.abrupt('return', {
                  data: verifyData,
                  encoding: 'utf8'
                });

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createVerifyData(_x9, _x10) {
        return _ref4.apply(this, arguments);
      }

      return createVerifyData;
    }()
  }, {
    key: 'verifyProofNode',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(verifyData, proof, options) {
        var publicKeyPem, crypto, verifier, forge, publicKey, md;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                publicKeyPem = options.publicKey.publicKeyPem;

                if (!(typeof publicKeyPem !== 'string')) {
                  _context5.next = 3;
                  break;
                }

                throw new TypeError('Could not verify signature; invalid "publicKeyPem".');

              case 3:
                if (!this.injector.env.nodejs) {
                  _context5.next = 8;
                  break;
                }

                // optimize using node libraries
                crypto = this.injector.use('crypto');
                verifier = crypto.createVerify('RSA-SHA256');

                verifier.update(verifyData.data, verifyData.encoding);
                return _context5.abrupt('return', verifier.verify(publicKeyPem, proof.signatureValue, 'base64'));

              case 8:

                // browser or other environment
                forge = this.injector.use('forge');
                publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
                md = forge.md.sha256.create();

                md.update(verifyData.data, verifyData.encoding);
                return _context5.abrupt('return', publicKey.verify(md.digest().bytes(), forge.util.decode64(proof.signatureValue)));

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function verifyProofNode(_x11, _x12, _x13) {
        return _ref5.apply(this, arguments);
      }

      return verifyProofNode;
    }()
  }, {
    key: 'validateKey',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(key, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(typeof key.publicKeyPem !== 'string')) {
                  _context6.next = 2;
                  break;
                }

                throw new TypeError('Unknown public key encoding. Public key encoding must be ' + '"publicKeyPem".');

              case 2:
                jsonld = this.injector.use('jsonld');

                if (jsonld.hasValue(key, 'type', 'CryptographicKey')) {
                  _context6.next = 5;
                  break;
                }

                throw new TypeError('Invalid key type. Key type must be "CryptographicKey".');

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function validateKey(_x14, _x15) {
        return _ref6.apply(this, arguments);
      }

      return validateKey;
    }()
  }]);

  return LinkedDataSignature2015;
}(LinkedDataSignature);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(10);
var hide = __webpack_require__(4);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(12);
var $iterCreate = __webpack_require__(62);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(65);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(15);
var SPECIES = __webpack_require__(0)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var invoke = __webpack_require__(76);
var html = __webpack_require__(38);
var cel = __webpack_require__(19);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(16)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(28);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = __webpack_require__(6);
var util = __webpack_require__(5);

module.exports = function () {
  function Helper(injector) {
    _classCallCheck(this, Helper);

    this.injector = injector;
  }

  /**
   * Gets a remote public key.
   *
   * @param id the ID for the public key.
   * @param [options] the options to use:
   *          [keyType] the expected key type (a term as compacted via the
   *            security-v2 context).
   *          [documentLoader(url, callback(err, remoteDoc))] the document
   *            loader.
   *
   * @return a Promise that resolves to a framed JSON-LD public key.
   */


  _createClass(Helper, [{
    key: 'getPublicKey',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, options) {
        var key;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = options || {};

                // get key
                _context.next = 3;
                return this.getJsonLd(id, options);

              case 3:
                key = _context.sent;
                return _context.abrupt('return', this._frameKey(key, options));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPublicKey(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getPublicKey;
    }()

    /**
     * Checks to see if the given key is valid and trusted.
     *
     * @param key the public key to check.
     * @param [options] the options to use:
     *          [proof] the proof node, framed according to the security-v2
     *            context.
     *          [publicKeyOwner] the JSON-LD document describing the public key
     *            owner.
     *          [checkKeyOwner(owner, key)] a custom method to return whether
     *            or not the key owner is trusted.
     *          [documentLoader(url, callback(err, remoteDoc))] the document
     *            loader.
     *
     * @return a Promise that resolves to true if the key is trusted.
     */

  }, {
    key: 'checkKey',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key, options) {
        var _options, _options$checkKeyOwne, checkKeyOwner, _options$publicKeyOwn, getPublicKeyOwner, _owner, framedKey, _ref3, _ref3$proofPurpose, proofPurpose, owners, framedOwners, owner, jsonld, i, keys, isOwnerTrusted;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (key && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                  _context2.next = 2;
                  break;
                }

                throw new TypeError('"key" must be an object.');

              case 2:

                options = options || {};

                _options = options, _options$checkKeyOwne = _options.checkKeyOwner, checkKeyOwner = _options$checkKeyOwne === undefined ? function () {
                  return true;
                } : _options$checkKeyOwne, _options$publicKeyOwn = _options.publicKeyOwner, getPublicKeyOwner = _options$publicKeyOwn === undefined ? this.getJsonLd.bind(this) : _options$publicKeyOwn;


                if (typeof getPublicKeyOwner !== 'function') {
                  _owner = getPublicKeyOwner;

                  getPublicKeyOwner = function getPublicKeyOwner(ownerId) {
                    if (ownerId !== _owner.id) {
                      throw new Error('Public key owner not found.');
                    }
                    return _owner;
                  };
                }
                checkKeyOwner = util.normalizeAsyncFn(checkKeyOwner, 3);
                getPublicKeyOwner = util.normalizeAsyncFn(getPublicKeyOwner, 2);

                // get framed key
                _context2.next = 9;
                return this._frameKey(key, options);

              case 9:
                framedKey = _context2.sent;


                // get proof purpose
                _ref3 = options.proof || {}, _ref3$proofPurpose = _ref3.proofPurpose, proofPurpose = _ref3$proofPurpose === undefined ? 'publicKey' : _ref3$proofPurpose;

                // get framed owners

                _context2.next = 13;
                return getPublicKeyOwner(framedKey.owner, options);

              case 13:
                owners = _context2.sent;
                _context2.next = 16;
                return this._frameKeyOwners(owners, proofPurpose, options);

              case 16:
                framedOwners = _context2.sent;


                // find specific owner of key
                owner = void 0;
                jsonld = this.injector.use('jsonld');
                i = 0;

              case 20:
                if (!(i < framedOwners.length)) {
                  _context2.next = 29;
                  break;
                }

                keys = void 0;
                // direct access to public keys

                if (proofPurpose === 'publicKey') {
                  keys = jsonld.getValues(framedOwners[i], proofPurpose);
                } else {
                  // FIXME: apply known application suite rules and allow for custom
                  //   functions to be passed to handle unknown ones

                  // indirect access via application suites
                  keys = jsonld.getValues(framedOwners[i], proofPurpose).map(function (appSuite) {
                    return appSuite.publicKey;
                  });
                }

                if (!keys.some(function (key) {
                  return (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' ? key.id === framedKey.id : key === framedKey.id;
                })) {
                  _context2.next = 26;
                  break;
                }

                owner = framedOwners[i];
                return _context2.abrupt('break', 29);

              case 26:
                ++i;
                _context2.next = 20;
                break;

              case 29:
                if (owner) {
                  _context2.next = 31;
                  break;
                }

                throw new Error('The public key is not owned by its declared owner.');

              case 31:
                isOwnerTrusted = checkKeyOwner(owner, key, options);

                if (isOwnerTrusted) {
                  _context2.next = 34;
                  break;
                }

                throw new Error('The owner of the public key is not trusted.');

              case 34:
                return _context2.abrupt('return', true);

              case 35:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkKey(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return checkKey;
    }()

    /**
     * Retrieves a JSON-LD document over HTTP. To implement caching, override
     * this method.
     *
     * @param url the URL to HTTP GET.
     * @param [options] the options to use.
     *          [documentLoader(url, callback(err, remoteDoc))] the document
     *          loader.
     *
     * @return a Promise that resolves to the JSON-LD document.
     */

  }, {
    key: 'getJsonLd',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, options) {
        var jsonld, remoteDoc, opts;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = options || {};

                jsonld = this.injector.use('jsonld');
                _context3.next = 4;
                return jsonld.get(url, options);

              case 4:
                remoteDoc = _context3.sent;

                if (!remoteDoc.contextUrl) {
                  _context3.next = 9;
                  break;
                }

                opts = { expandContext: remoteDoc.contextUrl };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                return _context3.abrupt('return', jsonld.compact(remoteDoc.document, remoteDoc.contextUrl, opts));

              case 9:
                return _context3.abrupt('return', remoteDoc.document);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getJsonLd(_x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return getJsonLd;
    }()
  }, {
    key: '_frameKey',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, options) {
        var requiredKeyType, frame, jsonld, opts, framed;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // `CryptographicKey` used here for backwards compatibility
                requiredKeyType = 'CryptographicKey';

                if (options.keyType) {
                  requiredKeyType = options.keyType;
                }

                frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  type: requiredKeyType,
                  owner: { '@embed': '@never' }
                };
                jsonld = this.injector.use('jsonld');
                opts = {};

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context4.next = 8;
                return jsonld.frame(key, frame, opts);

              case 8:
                framed = _context4.sent;

                if (framed['@graph'][0]) {
                  _context4.next = 11;
                  break;
                }

                throw new Error('The public key is not a "' + requiredKeyType + '".');

              case 11:
                if (framed['@graph'][0].owner) {
                  _context4.next = 13;
                  break;
                }

                throw new Error('The public key has no specified owner.');

              case 13:
                framed['@graph'][0]['@context'] = framed['@context'];
                return _context4.abrupt('return', framed['@graph'][0]);

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _frameKey(_x7, _x8) {
        return _ref5.apply(this, arguments);
      }

      return _frameKey;
    }()
  }, {
    key: '_frameKeyOwners',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(owners, proofPurpose, options) {
        var frame, jsonld, opts, framed;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  '@requireAll': false
                };

                if (proofPurpose === 'publicKey') {
                  // direct access to public keys
                  frame.publicKey = { '@embed': '@never' };
                } else {
                  // indirect access to public keys via application suites
                  frame[proofPurpose] = {
                    '@embed': '@always',
                    publicKey: { '@embed': '@never' }
                  };
                }
                jsonld = this.injector.use('jsonld');
                opts = {};

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context5.next = 7;
                return jsonld.frame(owners, frame, opts);

              case 7:
                framed = _context5.sent;
                return _context5.abrupt('return', framed['@graph']);

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _frameKeyOwners(_x9, _x10, _x11) {
        return _ref6.apply(this, arguments);
      }

      return _frameKeyOwners;
    }()
  }, {
    key: '_frameAppSuite',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(owners, proofPurpose, options) {
        var frame, jsonld, opts, framed;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                frame = _defineProperty({
                  '@context': constants.SECURITY_CONTEXT_URL,
                  '@requireAll': false
                }, proofPurpose, { '@embed': '@never' });
                jsonld = this.injector.use('jsonld');
                opts = {};

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context6.next = 6;
                return jsonld.frame(owners, frame, opts);

              case 6:
                framed = _context6.sent;
                return _context6.abrupt('return', framed['@graph']);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _frameAppSuite(_x12, _x13, _x14) {
        return _ref7.apply(this, arguments);
      }

      return _frameAppSuite;
    }()
  }]);

  return Helper;
}();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(58);
module.exports = __webpack_require__(83);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(52) });


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(56);
var pIE = __webpack_require__(57);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(31);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(54)(false);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(55);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(66);
__webpack_require__(70);
__webpack_require__(81);
__webpack_require__(82);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(26);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(10)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(61)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(63);
var descriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(64);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(38).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(67);
var getKeys = __webpack_require__(21);
var redefine = __webpack_require__(10);
var global = __webpack_require__(1);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(12);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(68);
var step = __webpack_require__(69);
var Iterators = __webpack_require__(12);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(4)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var global = __webpack_require__(1);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(26);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(15);
var anInstance = __webpack_require__(71);
var forOf = __webpack_require__(72);
var speciesConstructor = __webpack_require__(39);
var task = __webpack_require__(40).set;
var microtask = __webpack_require__(77)();
var newPromiseCapabilityModule = __webpack_require__(28);
var perform = __webpack_require__(41);
var promiseResolve = __webpack_require__(42);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(78)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(79)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(80)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(73);
var isArrayIter = __webpack_require__(74);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(32);
var getIterFn = __webpack_require__(75);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(12);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(26);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(12);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(40).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(16)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(7);
var core = __webpack_require__(2);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(39);
var promiseResolve = __webpack_require__(42);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(28);
var perform = __webpack_require__(41);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * An implementation of the Linked Data Signatures specification for JSON-LD.
 * This library works in the browser and node.js.
 *
 * @author Dave Longley <dlongley@digitalbazaar.com>
 * @author David I. Lehn <dlehn@digitalbazaar.com>
 * @author Manu Sporny <msporny@digitalbazaar.com>
 *
 * BSD 3-Clause License
 * Copyright (c) 2014-2018 Digital Bazaar, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the Digital Bazaar, Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
(function (global) {

  'use strict';

  var Injector = __webpack_require__(84);
  var util = __webpack_require__(5);

  // TODO: only require dynamically as needed or according to build
  var suites = {
    EcdsaKoblitzSignature2016: __webpack_require__(87),
    Ed25519Signature2018: __webpack_require__(88),
    LinkedDataSignature: __webpack_require__(17),
    LinkedDataSignature2015: __webpack_require__(29),
    GraphSignature2012: __webpack_require__(89),
    RsaSignature2018: __webpack_require__(90)
  };

  // load locally embedded contexts
  var contexts = __webpack_require__(92);

  // determine if using node.js or browser
  var _nodejs = typeof process !== 'undefined' && process.versions && process.versions.node;
  var _browser = !_nodejs && (typeof window !== 'undefined' || typeof self !== 'undefined');

  /**
   * Attaches the JSON-LD Signatures API to the given object.
   *
   * @param api the object to attach the signatures API to.
   */
  function wrap(api) {

    var injector = new Injector();

    /* API Constants */
    var constants = __webpack_require__(6);
    Object.assign(api, constants);

    /* Core API */
    api.suites = suites;

    /**
     * Signs a JSON-LD document using a digital signature.
     *
     * @param input the JSON-LD document to be signed.
     * @param [options] options to use:
     *          algorithm the algorithm to use, eg: 'Ed25519Signature2018',
     *            'RsaSignature2018'.
     *          [privateKeyPem] A PEM-encoded private key.
     *          [privateKeyBase58] A base85-encoded (Bitcoin/IPFS alphabet)
     *            private key.
     *          [creator] the URL to the paired public key.
     *          [date] an optional date to override the signature date with.
     *          [domain] an optional domain to include in the signature.
     *          [nonce] an optional nonce to include in the signature.
     *          [expansionMap] a custom expansion map that is passed
     *            to the JSON-LD processor; by default a function that will
     *            throw an error when unmapped properties are detected in the
     *            input, use `false` to turn this off and allow unmapped
     *            properties to be dropped or use a custom function.
     *          [proof] a JSON-LD document with options to use for the `proof`
     *            node (e.g. `proofPurpose` or any other custom fields can be
     *            provided here using a context different from security-v2).
     *          [documentLoader(url, [callback(err, remoteDoc)])] the document
     *            loader.
     * @param callback(err, signedDocument) called once the operation completes.
     *
     * @return a Promise that resolves to the signed document.
     */
    api.sign = util.callbackify(function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, options) {
        var SUPPORTED_ALGORITHMS, algorithm, Suite;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = options || {};

                // no default algorithm; it must be specified

                if ('algorithm' in options) {
                  _context.next = 3;
                  break;
                }

                throw new TypeError('"options.algorithm" must be specified.');

              case 3:
                SUPPORTED_ALGORITHMS = _getSupportedAlgorithms();
                algorithm = options.algorithm;

                if (!(SUPPORTED_ALGORITHMS.indexOf(algorithm) === -1)) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Unsupported algorithm "' + algorithm + '"; ' + '"options.algorithm" must be one of: ' + JSON.stringify(SUPPORTED_ALGORITHMS));

              case 7:

                options = _addEmbeddedContextDocumentLoader(options);

                // TODO: won't work with static analysis?
                // use signature suite
                //const Suite = require('./suites/' + algorithm);
                Suite = suites[algorithm];
                return _context.abrupt('return', new Suite(injector).sign(input, options));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    /**
     * Verifies a JSON-LD digitally-signed object.
     *
     * @param obj the JSON-LD object to verify.
     * @param [options] the options to use:
     *          [publicKey] a JSON-LD document providing the public
     *            key info or a function ((keyId, options, [(err, publicKey)]) that
     *            returns a Promise that resolves to such a document (or that
     *            accepts a node-style callback that will be passed it).
     *          [publicKeyOwner] a JSON-LD document providing the public key owner
     *            info including the list of valid keys for that owner or a
     *            function (owner, options, [(err, ownerDoc)]) that returns a
     *            Promise that resolves to such a document (or that accepts a
     *            node-style callback that will be passed it).
     *          [checkNonce(nonce, options, function(err, valid))] a callback to
     *            check if the nonce (null if none) used in the signature is valid.
     *          [checkDomain(domain, options, function(err, valid))] a callback
     *            to check if the domain used (null if none) is valid.
     *          [checkKey(key, options, function(err, trusted))] a callback to
     *            check if the key used to sign the message is trusted.
     *          [checkKeyOwner(owner, key, options, function(err, trusted))] a
     *            callback to check if the key's owner is trusted.
     *          [checkTimestamp]: check signature timestamp (default: false).
     *          [maxTimestampDelta]: signature must be created within a window of
     *            this many seconds (default: 15 minutes).
     *          [documentLoader(url, [callback(err, remoteDoc)])] the document
     *            loader.
     *          [id] the ID (full URL) of the node to check the signature of, if
     *            the input contains multiple signed nodes.
     * @param [callback(err, result)] called once the operation completes.
     *
     * @return a Promise that resolves to the verification result.
     */
    api.verify = util.callbackify(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(input, options) {
        var _this = this;

        var jsonld, opts, framed, proofs, SUPPORTED_ALGORITHMS, results;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // set default options
                options = Object.assign({}, options || {});

                // validate options

                if (!('checkNonce' in options && !(options.checkNonce === false || typeof options.checkNonce === 'function'))) {
                  _context3.next = 3;
                  break;
                }

                throw new TypeError('"options.checkNonce" must be `false` or a function.');

              case 3:
                if (!('checkDomain' in options && !(options.checkDomain === false || typeof options.checkDomain === 'string' || typeof options.checkDomain === 'function'))) {
                  _context3.next = 5;
                  break;
                }

                throw new TypeError('"options.checkDomain" must be `false`, a string, or a function.');

              case 5:
                if (!('checkTimestamp' in options && !(options.checkTimestamp === false || typeof options.checkTimestamp === 'function'))) {
                  _context3.next = 7;
                  break;
                }

                throw new TypeError('"options.checkTimestamp" must be `false` or a function.');

              case 7:

                // backwards compatibility, massage `getPublicKey` and `getPublicKeyOwner`
                // options into `publicKey` and `publicKeyOwner`
                if ('getPublicKey' in options) {
                  options.publicKey = options.getPublicKey;
                }
                if ('getPublicKeyOwner' in options) {
                  options.publicKeyOwner = options.getPublicKeyOwner;
                }

                options = _addEmbeddedContextDocumentLoader(options);

                // TODO: frame before getting signature, not just compact? considerations:
                // 1. named-graph framing support is required to avoid merging data and
                //    invalidating the signature
                // 2. JSON-only inputs will fail compaction -- so perhaps this library
                //    should require the signature to be at the top?
                /*
                const frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  proof: {},
                  signature: {
                    type: algorithm,
                    created: {},
                    creator: {},
                    signatureValue: {}
                  }
                };
                if(options.id) {
                  frame.id = options.id;
                }
                */
                // compact to get signature types
                jsonld = injector.use('jsonld');
                opts = {};

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context3.next = 15;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL, opts);

              case 15:
                framed = _context3.sent;


                // ensure there is at least one `proof` or `signature`
                proofs = jsonld.getValues(framed, 'signature').map(function (doc) {
                  return { property: 'signature', doc: doc };
                }).concat(jsonld.getValues(framed, 'proof').map(function (doc) {
                  return { property: 'proof', doc: doc };
                }));

                if (!(proofs.length === 0)) {
                  _context3.next = 19;
                  break;
                }

                throw new Error('No signature found.');

              case 19:

                // TODO: this only works for set signatures; add support for chained
                // signatures

                // create a promise for each signature to be verified
                SUPPORTED_ALGORITHMS = _getSupportedAlgorithms();
                _context3.next = 22;
                return Promise.all(proofs.map(function (proof) {
                  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var algorithm, f, Suite, verified;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            algorithm = jsonld.getValues(proof.doc, 'type')[0] || '';

                            if (!(SUPPORTED_ALGORITHMS.indexOf(algorithm) === -1)) {
                              _context2.next = 4;
                              break;
                            }

                            throw new Error('Unsupported signature algorithm "' + algorithm + '"; ' + 'supported algorithms are: ' + JSON.stringify(SUPPORTED_ALGORITHMS));

                          case 4:

                            // copy the framed object and place a single signature on each copy
                            f = util.deepClone(framed);

                            f[proof.property] = proof.doc;
                            // TODO: won't work with static analysis?
                            // use signature suite
                            //const Suite = require('./suites/' + algorithm);
                            Suite = suites[algorithm];
                            _context2.next = 9;
                            return new Suite(injector).verify(f, Object.assign({}, options, { framed: framed }));

                          case 9:
                            verified = _context2.sent;
                            return _context2.abrupt('return', { verified: verified });

                          case 13:
                            _context2.prev = 13;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', { verified: false, error: _context2.t0 });

                          case 16:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this, [[0, 13]]);
                  }))();
                }));

              case 22:
                results = _context3.sent;


                // ensure results include public key identifiers
                results.forEach(function (result, i) {
                  if (proofs[i].doc.creator) {
                    result.publicKey = proofs[i].doc.creator;
                  }
                });

                return _context3.abrupt('return', {
                  keyResults: results,
                  verified: results.every(function (r) {
                    return r.verified;
                  })
                });

              case 25:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    function _getSupportedAlgorithms() {
      // every suite is supported except the base class
      return Object.keys(api.suites).filter(function (s) {
        return s !== 'LinkedDataSignature';
      });
    }

    function _addEmbeddedContextDocumentLoader(options) {
      var _this2 = this;

      options = Object.assign({}, options);
      if (!options.documentLoader) {
        var jsonld = injector.use('jsonld');
        var documentLoader = jsonld.documentLoader;
        options.documentLoader = function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(url in contexts)) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt('return', {
                      contextUrl: null,
                      documentUrl: url,
                      document: contexts[url]
                    });

                  case 2:
                    return _context4.abrupt('return', documentLoader(url));

                  case 3:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4, _this2);
          }));

          return function (_x5) {
            return _ref4.apply(this, arguments);
          };
        }();
      }
      return options;
    }

    /* Helper functions */
    var Helper = __webpack_require__(43);
    var helper = new Helper(injector);

    // expose for helper functions
    api.getPublicKey = util.callbackify(helper.getPublicKey.bind(helper));
    api.checkKey = util.callbackify(helper.checkKey.bind(helper));
    api.getJsonLd = util.callbackify(helper.getJsonLd.bind(helper));

    // expose injector API
    api.use = injector.use.bind(injector);

    // reexpose API as `.promises` for backwards compatability
    api.promises = api;

    // expose base64 functions for testing
    api._encodeBase64Url = util.encodeBase64Url;
    api._decodeBase64Url = util.decodeBase64Url;

    return api;
  } // end wrap

  // used to generate a new verifier API instance
  var factory = function factory() {
    return wrap(function () {

      return factory();
    });
  };
  wrap(factory);

  if (_nodejs) {

    // export nodejs API
    module.exports = factory;
  } else if (_browser) {
    // export simple browser API
    if (typeof global.jsigs === 'undefined') {
      global.jsigs = {};
    }
    wrap(global.jsigs);
  }
})(typeof window !== 'undefined' ? window : undefined);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Injector() {
    _classCallCheck(this, Injector);

    this._libs = {};
    this.env = {};
    this.env.nodejs = typeof process !== 'undefined' && process.versions && process.versions.node;
    if (!this.env.nodejs) {
      this.env.browser = true;
    }
  }

  /**
   * Allows injectables to be set or retrieved.
   *
   * @param name the name of the injectable to use (
   *          eg: `jsonld`, `jsonld-signatures`).
   * @param [injectable] the api to set for the injectable, only present for
   *          setter, omit for getter.
   *
   * @return the API for `name` if not using this method as a setter, otherwise
   *           undefined.
   */


  _createClass(Injector, [{
    key: 'use',
    value: function use(name, injectable) {
      // setter mode
      if (injectable) {
        this._libs[name] = injectable;
        return;
      }

      // getter mode:

      // api not set yet, load default
      if (!this._libs[name]) {
        var requireAliases = {
          'forge': 'node-forge',
          'bitcoreMessage': 'bitcore-message'
        };
        var requireName = requireAliases[name] || name;
        this._libs[name] = global[name] || this.env.nodejs && !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        if (name === 'jsonld' && this.env.nodejs) {
          // locally configure jsonld
          this._libs[name] = this._libs[name]();
          this._libs[name].useDocumentLoader('node', { secure: true, strictSSL: true });
        }
      }
      return this._libs[name];
    }
  }]);

  return Injector;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),
/* 85 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkedDataSignature2015 = __webpack_require__(29);

module.exports = function (_LinkedDataSignature) {
  _inherits(EcdsaKoblitzSignature2016, _LinkedDataSignature);

  function EcdsaKoblitzSignature2016(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EcdsaKoblitzSignature2016';

    _classCallCheck(this, EcdsaKoblitzSignature2016);

    return _possibleConstructorReturn(this, (EcdsaKoblitzSignature2016.__proto__ || Object.getPrototypeOf(EcdsaKoblitzSignature2016)).call(this, injector, algorithm));
  }

  _createClass(EcdsaKoblitzSignature2016, [{
    key: 'createSignatureValue',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var bitcoreMessage, bitcore, privateKey, message;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof options.privateKeyWif !== 'string')) {
                  _context.next = 2;
                  break;
                }

                throw new TypeError('"options.privateKeyWif" must be a base 58 formatted string.');

              case 2:
                bitcoreMessage = this.injector.use('bitcoreMessage');
                bitcore = bitcoreMessage.Bitcore;
                privateKey = bitcore.PrivateKey.fromWIF(options.privateKeyWif);
                message = bitcoreMessage(verifyData.data);
                return _context.abrupt('return', message.sign(privateKey));

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSignatureValue(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'verifyProofNode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(verifyData, proof, options) {
        var bitcoreMessage, message;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                bitcoreMessage = this.injector.use('bitcoreMessage');
                message = bitcoreMessage(verifyData.data);
                return _context2.abrupt('return', message.verify(options.publicKey.publicKeyWif, proof.signatureValue));

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifyProofNode(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return verifyProofNode;
    }()
  }, {
    key: 'validateKey',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof key.publicKeyWif !== 'string')) {
                  _context3.next = 2;
                  break;
                }

                throw new TypeError('Unknown public key encoding. Public key encoding must be ' + '"publicKeyWif".');

              case 2:
                jsonld = this.injector.use('jsonld');

                if (jsonld.hasValue(key, 'type', 'CryptographicKey')) {
                  _context3.next = 5;
                  break;
                }

                throw new TypeError('Invalid key type. Key type must be "CryptographicKey".');

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function validateKey(_x7, _x8) {
        return _ref3.apply(this, arguments);
      }

      return validateKey;
    }()
  }]);

  return EcdsaKoblitzSignature2016;
}(LinkedDataSignature2015);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkedDataSignature = __webpack_require__(17);
var util = __webpack_require__(5);

module.exports = function (_LinkedDataSignature) {
  _inherits(Ed25519Signature2018, _LinkedDataSignature);

  function Ed25519Signature2018(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Ed25519Signature2018';

    _classCallCheck(this, Ed25519Signature2018);

    var _this = _possibleConstructorReturn(this, (Ed25519Signature2018.__proto__ || Object.getPrototypeOf(Ed25519Signature2018)).call(this, injector, algorithm));

    _this.requiredKeyType = 'Ed25519VerificationKey2018';
    return _this;
  }

  _createClass(Ed25519Signature2018, [{
    key: 'createSignatureValue',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var forge, header, encodedHeader, encodedSignature, chloride, bs58, privateKey, tbs, buffer, _privateKey, _buffer, binaryString;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                forge = this.injector.use('forge');

                // TODO: should abstract JWS signing bits out for reuse elsewhere

                // JWS header

                header = {
                  alg: 'EdDSA',
                  b64: false,
                  crit: ['b64']
                };

                /*
                +-------+-----------------------------------------------------------+
                | "b64" | JWS Signing Input Formula                                 |
                +-------+-----------------------------------------------------------+
                | true  | ASCII(BASE64URL(UTF8(JWS Protected Header)) || '.' ||     |
                |       | BASE64URL(JWS Payload))                                   |
                |       |                                                           |
                | false | ASCII(BASE64URL(UTF8(JWS Protected Header)) || '.') ||    |
                |       | JWS Payload                                               |
                +-------+-----------------------------------------------------------+
                */

                encodedHeader = util.encodeBase64Url(JSON.stringify(header), { forge: forge });
                encodedSignature = void 0;

                if (this.injector.env.nodejs) {
                  // optimize using node libraries
                  chloride = __webpack_require__(44);
                  bs58 = __webpack_require__(45);

                  // decode private key

                  privateKey = bs58.decode(options.privateKeyBase58);

                  // build signing input per above comment

                  tbs = Buffer.concat([new Buffer(encodedHeader + '.', 'utf8'), new Buffer(verifyData.data, verifyData.encoding)]);
                  buffer = chloride.crypto_sign_detached(tbs, privateKey);

                  encodedSignature = util.encodeBase64Url(buffer.toString('binary'), { forge: forge });
                } else {
                  // browser or other environment
                  // decode private key
                  _privateKey = forge.util.binary.base58.decode(options.privateKeyBase58);
                  // build signing input per above comment

                  _buffer = new forge.util.ByteBuffer(encodedHeader + '.', 'utf8');

                  _buffer.putBuffer(new forge.util.ByteBuffer(verifyData.data, verifyData.encoding));
                  binaryString = forge.ed25519.sign({
                    message: _buffer,
                    privateKey: _privateKey
                  }).toString('binary');

                  encodedSignature = util.encodeBase64Url(binaryString, { forge: forge });
                }

                // create detached content signature
                return _context.abrupt('return', encodedHeader + '..' + encodedSignature);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSignatureValue(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'verifyProofNode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(verifyData, proof, options) {
        var forge, publicKeyBase58, _proof$jws$split, _proof$jws$split2, encodedHeader, payload, encodedSignature, header, rawSignature, chloride, bs58, _publicKey, tbs, publicKey, buffer;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                forge = this.injector.use('forge');
                publicKeyBase58 = options.publicKey.publicKeyBase58;

                // add payload into detached content signature

                _proof$jws$split = proof.jws.split('.'), _proof$jws$split2 = _slicedToArray(_proof$jws$split, 3), encodedHeader = _proof$jws$split2[0], payload = _proof$jws$split2[1], encodedSignature = _proof$jws$split2[2];
                header = JSON.parse(util.decodeBase64Url(encodedHeader, { forge: forge }));
                /*const expectedHeader = {
                  alg: 'EdDSA',
                  b64: false,
                  crit: ['b64']
                };*/

                if (header && (typeof header === 'undefined' ? 'undefined' : _typeof(header)) === 'object') {
                  _context2.next = 6;
                  break;
                }

                throw new Error('Invalid JWS header.');

              case 6:
                if (!(!(header.alg === 'EdDSA' && header.b64 === false && Array.isArray(header.crit) && header.crit.length === 1 && header.crit[0] === 'b64') && Object.keys(header).length === 3)) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('Invalid JWS header parameters for Ed25519Signature2018.');

              case 8:
                rawSignature = util.decodeBase64Url(encodedSignature, { forge: forge });

                if (!this.injector.env.nodejs) {
                  _context2.next = 15;
                  break;
                }

                // optimize using node libraries
                chloride = __webpack_require__(44);
                bs58 = __webpack_require__(45);

                // decode public key

                _publicKey = bs58.decode(publicKeyBase58);

                // rebuild signing input per JWS spec

                tbs = Buffer.concat([new Buffer(encodedHeader + '.', 'utf8'), new Buffer(verifyData.data, verifyData.encoding)]);
                return _context2.abrupt('return', chloride.crypto_sign_verify_detached(new Buffer(rawSignature, 'binary'), tbs, _publicKey));

              case 15:

                // browser or other environment
                publicKey = forge.util.binary.base58.decode(publicKeyBase58);
                // rebuild signing input per JWS spec

                buffer = new forge.util.ByteBuffer(encodedHeader + '.', 'utf8');

                buffer.putBuffer(new forge.util.ByteBuffer(verifyData.data, verifyData.encoding));
                return _context2.abrupt('return', forge.ed25519.verify({
                  message: buffer,
                  signature: rawSignature,
                  publicKey: publicKey
                }));

              case 19:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifyProofNode(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return verifyProofNode;
    }()
  }, {
    key: 'validateKey',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof key.publicKeyBase58 !== 'string')) {
                  _context3.next = 2;
                  break;
                }

                throw new TypeError('Unknown public key encoding. Public key encoding must be ' + '"publicKeyBase58".');

              case 2:
                jsonld = this.injector.use('jsonld');

                if (jsonld.hasValue(key, 'type', this.requiredKeyType)) {
                  _context3.next = 5;
                  break;
                }

                throw new TypeError('Invalid key type. Key type must be "' + this.requiredKeyType + '".');

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function validateKey(_x7, _x8) {
        return _ref3.apply(this, arguments);
      }

      return validateKey;
    }()
  }]);

  return Ed25519Signature2018;
}(LinkedDataSignature);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var constants = __webpack_require__(6);
var LinkedDataSignature2015 = __webpack_require__(29);

module.exports = function (_LinkedDataSignature) {
  _inherits(GraphSignature2012, _LinkedDataSignature);

  function GraphSignature2012(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphSignature2012';

    _classCallCheck(this, GraphSignature2012);

    return _possibleConstructorReturn(this, (GraphSignature2012.__proto__ || Object.getPrototypeOf(GraphSignature2012)).call(this, injector, algorithm));
  }

  _createClass(GraphSignature2012, [{
    key: 'canonize',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, options) {
        var jsonld, opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jsonld = this.injector.use('jsonld');
                opts = {
                  algorithm: 'URGNA2012',
                  format: 'application/n-quads',
                  expansionMap: options.expansionMap
                };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                return _context.abrupt('return', jsonld.canonize(input, opts));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function canonize(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return canonize;
    }()
  }, {
    key: 'createVerifyData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input, options) {
        var jsonld, opts, compacted, c14n, verifyData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: frame before getting signature, not just compact? considerations:
                // should the assumption be (for this library) that the signature is on
                // the top-level object and thus framing is unnecessary?

                jsonld = this.injector.use('jsonld');
                opts = { expansionMap: options.expansionMap };

                if (options.documentLoader) {
                  opts.documentLoader = options.documentLoader;
                }
                _context2.next = 5;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL, opts);

              case 5:
                compacted = _context2.sent;


                // TODO: will need to preserve `signature` when chained signature
                // option is set in the future

                // delete the existing signature(s) prior to canonicalization
                delete compacted.signature;

                _context2.next = 9;
                return this.canonize(compacted, options);

              case 9:
                c14n = _context2.sent;
                verifyData = '';

                if (options.nonce !== null && options.nonce !== undefined) {
                  verifyData += options.nonce;
                }
                verifyData += options.date;
                verifyData += c14n;
                if (options.domain !== null && options.domain !== undefined) {
                  verifyData += '@' + options.domain;
                }
                return _context2.abrupt('return', {
                  data: verifyData,
                  encoding: 'utf8'
                });

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createVerifyData(_x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return createVerifyData;
    }()
  }, {
    key: 'validateKey',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof key.publicKeyPem !== 'string')) {
                  _context3.next = 2;
                  break;
                }

                throw new TypeError('Unknown public key encoding. Public key encoding must be ' + '"publicKeyPem".');

              case 2:
                jsonld = this.injector.use('jsonld');

                if (jsonld.hasValue(key, 'type', 'CryptographicKey')) {
                  _context3.next = 5;
                  break;
                }

                throw new TypeError('Invalid key type. Key type must be "CryptographicKey".');

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function validateKey(_x6, _x7) {
        return _ref3.apply(this, arguments);
      }

      return validateKey;
    }()
  }]);

  return GraphSignature2012;
}(LinkedDataSignature2015);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkedDataSignature = __webpack_require__(17);
var util = __webpack_require__(5);

module.exports = function (_LinkedDataSignature) {
  _inherits(RsaSignature2018, _LinkedDataSignature);

  function RsaSignature2018(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'RsaSignature2018';

    _classCallCheck(this, RsaSignature2018);

    var _this = _possibleConstructorReturn(this, (RsaSignature2018.__proto__ || Object.getPrototypeOf(RsaSignature2018)).call(this, injector, algorithm));

    _this.requiredKeyType = 'RsaVerificationKey2018';
    return _this;
  }

  _createClass(RsaSignature2018, [{
    key: 'createSignatureValue',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var forge, header, encodedHeader, encodedSignature, crypto, signer, buffer, privateKey, md, pss, binaryString;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                forge = this.injector.use('forge');

                // TODO: should abstract JWS signing bits out for reuse elsewhere

                // JWS header

                header = this.createJwsHeader();

                /*
                +-------+-----------------------------------------------------------+
                | "b64" | JWS Signing Input Formula                                 |
                +-------+-----------------------------------------------------------+
                | true  | ASCII(BASE64URL(UTF8(JWS Protected Header)) || '.' ||     |
                |       | BASE64URL(JWS Payload))                                   |
                |       |                                                           |
                | false | ASCII(BASE64URL(UTF8(JWS Protected Header)) || '.') ||    |
                |       | JWS Payload                                               |
                +-------+-----------------------------------------------------------+
                */

                encodedHeader = util.encodeBase64Url(JSON.stringify(header), { forge: forge });
                encodedSignature = void 0;

                if (this.injector.env.nodejs) {
                  // FIXME: better abstract for future suites

                  // optimize using node 8.0+ libraries
                  crypto = this.injector.use('crypto');

                  if ('RSA_PKCS1_PSS_PADDING' in crypto.constants) {
                    signer = crypto.createSign('RSA-SHA256');

                    // build signing input per above comment

                    signer.update(encodedHeader + '.', 'utf8');
                    signer.update(new Buffer(verifyData.data, verifyData.encoding));
                    buffer = signer.sign(Object.assign({
                      key: options.privateKeyPem
                    }, this.createPss()));

                    encodedSignature = util.encodeBase64Url(buffer.toString('binary'), { forge: forge });
                  }
                }

                if (!encodedSignature) {
                  // browser or other environment (including node 6.x)
                  privateKey = forge.pki.privateKeyFromPem(options.privateKeyPem);
                  md = forge.md.sha256.create();
                  // build signing input per above comment

                  md.update(encodedHeader + '.', 'utf8');
                  md.update(verifyData.data, verifyData.encoding);
                  pss = this.createPss(forge);
                  binaryString = privateKey.sign(md, pss);

                  encodedSignature = util.encodeBase64Url(binaryString, { forge: forge });
                }

                // create detached content signature
                return _context.abrupt('return', encodedHeader + '..' + encodedSignature);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSignatureValue(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'verifyProofNode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(verifyData, proof, options) {
        var forge, publicKeyPem, _proof$jws$split, _proof$jws$split2, encodedHeader, payload, encodedSignature, header, rawSignature, crypto, _crypto, verifier, publicKey, md;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                forge = this.injector.use('forge');
                publicKeyPem = options.publicKey.publicKeyPem;

                // add payload into detached content signature

                _proof$jws$split = proof.jws.split('.'), _proof$jws$split2 = _slicedToArray(_proof$jws$split, 3), encodedHeader = _proof$jws$split2[0], payload = _proof$jws$split2[1], encodedSignature = _proof$jws$split2[2];
                header = JSON.parse(util.decodeBase64Url(encodedHeader, { forge: forge }));

                if (header && (typeof header === 'undefined' ? 'undefined' : _typeof(header)) === 'object') {
                  _context2.next = 6;
                  break;
                }

                throw new Error('Invalid JWS header.');

              case 6:

                // confirm header matches all expectations
                this.checkJwsHeader(header);

                rawSignature = util.decodeBase64Url(encodedSignature, { forge: forge });

                if (!this.injector.env.nodejs) {
                  _context2.next = 16;
                  break;
                }

                // optimize using node 8.0+ libraries
                crypto = this.injector.use('crypto');

                if (!('RSA_PKCS1_PSS_PADDING' in crypto.constants)) {
                  _context2.next = 16;
                  break;
                }

                _crypto = this.injector.use('crypto');
                verifier = _crypto.createVerify('RSA-SHA256');
                // rebuild signing input per JWS spec

                verifier.update(encodedHeader + '.', 'utf8');
                verifier.update(new Buffer(verifyData.data, verifyData.encoding));
                return _context2.abrupt('return', verifier.verify(Object.assign({
                  key: publicKeyPem
                }, this.createPss()), new Buffer(rawSignature, 'binary')));

              case 16:

                // browser or other environment
                publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
                md = forge.md.sha256.create();
                // rebuild signing input per JWS spec

                md.update(encodedHeader + '.', 'utf8');
                md.update(verifyData.data, verifyData.encoding);
                return _context2.abrupt('return', publicKey.verify(md.digest().bytes(), rawSignature, this.createPss(forge)));

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifyProofNode(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return verifyProofNode;
    }()
  }, {
    key: 'validateKey',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof key.publicKeyPem !== 'string')) {
                  _context3.next = 2;
                  break;
                }

                throw new TypeError('Unknown public key encoding. Public key encoding must be ' + '"publicKeyPem".');

              case 2:
                jsonld = this.injector.use('jsonld');

                if (jsonld.hasValue(key, 'type', this.requiredKeyType)) {
                  _context3.next = 5;
                  break;
                }

                throw new TypeError('Invalid key type. Key type must be "' + this.requiredKeyType + '".');

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function validateKey(_x7, _x8) {
        return _ref3.apply(this, arguments);
      }

      return validateKey;
    }()
  }, {
    key: 'createJwsHeader',
    value: function createJwsHeader() {
      var header = {
        alg: 'PS256',
        b64: false,
        crit: ['b64']
      };
      return header;
    }
  }, {
    key: 'checkJwsHeader',
    value: function checkJwsHeader(header) {
      /*
      const expectedHeader = {
        alg: 'PS256',
        b64: false,
        crit: ['b64']
      };
      */
      if (!(header.alg === 'PS256' && header.b64 === false && Array.isArray(header.crit) && header.crit.length === 1 && header.crit[0] === 'b64') && Object.keys(header).length === 3) {
        throw new Error('Invalid JWS header parameters for RsaSignature2018.');
      }
    }
  }, {
    key: 'createPss',
    value: function createPss(forge) {
      // Note: Per rfc7518, the digest algorithm for PS256 is SHA-256,
      // https://tools.ietf.org/html/rfc7518

      // sign data using RSASSA-PSS where PSS uses a SHA-256 hash,
      // a SHA-256 based masking function MGF1, and a 32 byte salt to match
      // the hash size
      if (forge) {
        var md = forge.md.sha256.create();
        return forge.pss.create({
          md: md,
          mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
          saltLength: md.digestLength
        });
      } else {
        var crypto = __webpack_require__(91);
        return {
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        };
      }
    }
  }]);

  return RsaSignature2018;
}(LinkedDataSignature);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var constants = __webpack_require__(6);

module.exports = (_module$exports = {}, _defineProperty(_module$exports, constants.SECURITY_CONTEXT_V1_URL, __webpack_require__(93)), _defineProperty(_module$exports, constants.SECURITY_CONTEXT_V2_URL, __webpack_require__(94)), _module$exports);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "@context": {
    "id": "@id",
    "type": "@type",

    "dc": "http://purl.org/dc/terms/",
    "sec": "https://w3id.org/security#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "EcdsaKoblitzSignature2016": "sec:EcdsaKoblitzSignature2016",
    "Ed25519Signature2018": "sec:Ed25519Signature2018",
    "EncryptedMessage": "sec:EncryptedMessage",
    "GraphSignature2012": "sec:GraphSignature2012",
    "LinkedDataSignature2015": "sec:LinkedDataSignature2015",
    "LinkedDataSignature2016": "sec:LinkedDataSignature2016",
    "CryptographicKey": "sec:Key",

    "authenticationTag": "sec:authenticationTag",
    "canonicalizationAlgorithm": "sec:canonicalizationAlgorithm",
    "cipherAlgorithm": "sec:cipherAlgorithm",
    "cipherData": "sec:cipherData",
    "cipherKey": "sec:cipherKey",
    "created": { "@id": "dc:created", "@type": "xsd:dateTime" },
    "creator": { "@id": "dc:creator", "@type": "@id" },
    "digestAlgorithm": "sec:digestAlgorithm",
    "digestValue": "sec:digestValue",
    "domain": "sec:domain",
    "encryptionKey": "sec:encryptionKey",
    "expiration": { "@id": "sec:expiration", "@type": "xsd:dateTime" },
    "expires": { "@id": "sec:expiration", "@type": "xsd:dateTime" },
    "initializationVector": "sec:initializationVector",
    "iterationCount": "sec:iterationCount",
    "nonce": "sec:nonce",
    "normalizationAlgorithm": "sec:normalizationAlgorithm",
    "owner": { "@id": "sec:owner", "@type": "@id" },
    "password": "sec:password",
    "privateKey": { "@id": "sec:privateKey", "@type": "@id" },
    "privateKeyPem": "sec:privateKeyPem",
    "publicKey": { "@id": "sec:publicKey", "@type": "@id" },
    "publicKeyBase58": "sec:publicKeyBase58",
    "publicKeyPem": "sec:publicKeyPem",
    "publicKeyService": { "@id": "sec:publicKeyService", "@type": "@id" },
    "revoked": { "@id": "sec:revoked", "@type": "xsd:dateTime" },
    "salt": "sec:salt",
    "signature": "sec:signature",
    "signatureAlgorithm": "sec:signingAlgorithm",
    "signatureValue": "sec:signatureValue"
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "@context": [{
    "@version": 1.1
  }, "https://w3id.org/security/v1", {
    "Ed25519Signature2018": "sec:Ed25519Signature2018",
    "Ed25519VerificationKey2018": "sec:Ed25519VerificationKey2018",
    "EquihashProof2018": "sec:EquihashProof2018",
    "RsaSignature2018": "sec:RsaSignature2018",
    "RsaVerificationKey2018": "sec:RsaVerificationKey2018",

    "equihashParameterK": { "@id": "sec:equihashParameterK", "@type": "xsd:integer" },
    "equihashParameterN": { "@id": "sec:equihashParameterN", "@type": "xsd:integer" },
    "jws": "sec:jws",
    "proof": { "@id": "sec:proof", "@type": "@id", "@container": "@graph" },
    "proofPurpose": { "@id": "sec:proofPurpose", "@type": "@vocab" },
    "proofValue": "sec:proofValue"
  }]
};

/***/ })
/******/ ]);
});