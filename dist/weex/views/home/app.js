// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(397)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description 路由名字配置
	 */

	exports.default = {
	  demoA: 'demos/a-demo',
	  demoList: 'demos/list-demo',
	  home: 'views/home/app',
	  launch: 'views/launch/app',
	  mine: 'views/mine/app',
	  web: 'views/web/app'
	};

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @author walid
	                                                                                                                                                                                                                                                                               * @date 2017/3/4
	                                                                                                                                                                                                                                                                               * @description 界面跳转工具类
	                                                                                                                                                                                                                                                                               */

	var _qs = __webpack_require__(5);

	var _qs2 = _interopRequireDefault(_qs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator');

	function getBaseUrl(vm) {
	  // let bundleUrl = vm.$getConfig().bundleUrl
	  // let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
	  // let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0
	  // let nativeBase = ''
	  // if (isAndroidAssets) {
	  //   nativeBase = 'file://assets/'
	  // } else if (isiOSAssets) {
	  //   nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
	  // } else {
	  //   let host = 'localhost:12580'
	  //   let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
	  //   if (matches && matches.length >= 2) {
	  //     host = matches[1]
	  //   }
	  //   nativeBase = `http://${host}/dist/weex/`
	  // }
	  // let h5Base = './weex.html?page=./dist/web/'
	  // // in Browser or WebView
	  var inBrowserOrWebView = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
	  // return inBrowserOrWebView ? h5Base : nativeBase
	  return inBrowserOrWebView ? './weex.html?page=./dist/web/' : 'http://192.168.10.175:12580/dist/weex/';
	}

	function pushByUrl(vm, url, params) {
	  navigator.push({
	    url: url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function push(vm, route, params) {
	  navigator.push({
	    url: '' + getBaseUrl(vm) + route + '.js?' + _qs2.default.stringify(params),
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function pop(vm) {
	  navigator.pop({
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	exports.default = {
	  push: push, pushByUrl: pushByUrl, pop: pop, getBaseUrl: getBaseUrl
	};

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(6);

/***/ },

/***/ 6:
/***/ function(module, exports) {

	
	/*!
	 * querystring
	 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
	 * MIT Licensed
	 */

	/**
	 * Library version.
	 */

	exports.version = '0.4.2';

	/**
	 * Object#toString() ref for stringify().
	 */

	var toString = Object.prototype.toString;

	/**
	 * Cache non-integer test regexp.
	 */

	var isint = /^[0-9]+$/;

	function promote(parent, key) {
	  if (parent[key].length == 0) return parent[key] = {};
	  var t = {};
	  for (var i in parent[key]) t[i] = parent[key][i];
	  parent[key] = t;
	  return t;
	}

	function parse(parts, parent, key, val) {
	  var part = parts.shift();
	  // end
	  if (!part) {
	    if (Array.isArray(parent[key])) {
	      parent[key].push(val);
	    } else if ('object' == typeof parent[key]) {
	      parent[key] = val;
	    } else if ('undefined' == typeof parent[key]) {
	      parent[key] = val;
	    } else {
	      parent[key] = [parent[key], val];
	    }
	    // array
	  } else {
	    var obj = parent[key] = parent[key] || [];
	    if (']' == part) {
	      if (Array.isArray(obj)) {
	        if ('' != val) obj.push(val);
	      } else if ('object' == typeof obj) {
	        obj[Object.keys(obj).length] = val;
	      } else {
	        obj = parent[key] = [parent[key], val];
	      }
	      // prop
	    } else if (~part.indexOf(']')) {
	      part = part.substr(0, part.length - 1);
	      if (!isint.test(part) && Array.isArray(obj)) obj = promote(parent, key);
	      parse(parts, obj, part, val);
	      // key
	    } else {
	      if (!isint.test(part) && Array.isArray(obj)) obj = promote(parent, key);
	      parse(parts, obj, part, val);
	    }
	  }
	}

	/**
	 * Merge parent key/val pair.
	 */

	function merge(parent, key, val){
	  if (~key.indexOf(']')) {
	    var parts = key.split('[')
	      , len = parts.length
	      , last = len - 1;
	    parse(parts, parent, 'base', val);
	    // optimize
	  } else {
	    if (!isint.test(key) && Array.isArray(parent.base)) {
	      var t = {};
	      for (var k in parent.base) t[k] = parent.base[k];
	      parent.base = t;
	    }
	    set(parent.base, key, val);
	  }

	  return parent;
	}

	/**
	 * Parse the given obj.
	 */

	function parseObject(obj){
	  var ret = { base: {} };
	  Object.keys(obj).forEach(function(name){
	    merge(ret, name, obj[name]);
	  });
	  return ret.base;
	}

	/**
	 * Parse the given str.
	 */

	function parseString(str){
	  return String(str)
	    .split('&')
	    .reduce(function(ret, pair){
	      try{
	        pair = decodeURIComponent(pair.replace(/\+/g, ' '));
	      } catch(e) {
	        // ignore
	      }

	      var eql = pair.indexOf('=')
	        , brace = lastBraceInKey(pair)
	        , key = pair.substr(0, brace || eql)
	        , val = pair.substr(brace || eql, pair.length)
	        , val = val.substr(val.indexOf('=') + 1, val.length);

	      // ?foo
	      if ('' == key) key = pair, val = '';

	      return merge(ret, key, val);
	    }, { base: {} }).base;
	}

	/**
	 * Parse the given query `str` or `obj`, returning an object.
	 *
	 * @param {String} str | {Object} obj
	 * @return {Object}
	 * @api public
	 */

	exports.parse = function(str){
	  if (null == str || '' == str) return {};
	  return 'object' == typeof str
	    ? parseObject(str)
	    : parseString(str);
	};

	/**
	 * Turn the given `obj` into a query string
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */

	var stringify = exports.stringify = function(obj, prefix) {
	  if (Array.isArray(obj)) {
	    return stringifyArray(obj, prefix);
	  } else if ('[object Object]' == toString.call(obj)) {
	    return stringifyObject(obj, prefix);
	  } else if ('string' == typeof obj) {
	    return stringifyString(obj, prefix);
	  } else {
	    return prefix + '=' + obj;
	  }
	};

	/**
	 * Stringify the given `str`.
	 *
	 * @param {String} str
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyString(str, prefix) {
	  if (!prefix) throw new TypeError('stringify expects an object');
	  return prefix + '=' + encodeURIComponent(str);
	}

	/**
	 * Stringify the given `arr`.
	 *
	 * @param {Array} arr
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyArray(arr, prefix) {
	  var ret = [];
	  if (!prefix) throw new TypeError('stringify expects an object');
	  for (var i = 0; i < arr.length; i++) {
	    ret.push(stringify(arr[i], prefix + '[]'));
	  }
	  return ret.join('&');
	}

	/**
	 * Stringify the given `obj`.
	 *
	 * @param {Object} obj
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyObject(obj, prefix) {
	  var ret = []
	    , keys = Object.keys(obj)
	    , key;

	  for (var i = 0, len = keys.length; i < len; ++i) {
	    key = keys[i];
	    ret.push(stringify(obj[key], prefix
	      ? prefix + '[' + encodeURIComponent(key) + ']'
	      : encodeURIComponent(key)));
	  }

	  return ret.join('&');
	}

	/**
	 * Set `obj`'s `key` to `val` respecting
	 * the weird and wonderful syntax of a qs,
	 * where "foo=bar&foo=baz" becomes an array.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {String} val
	 * @api private
	 */

	function set(obj, key, val) {
	  var v = obj[key];
	  if (undefined === v) {
	    obj[key] = val;
	  } else if (Array.isArray(v)) {
	    v.push(val);
	  } else {
	    obj[key] = [v, val];
	  }
	}

	/**
	 * Locate last brace in `str` within the key.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function lastBraceInKey(str) {
	  var len = str.length
	    , brace
	    , c;
	  for (var i = 0; i < len; ++i) {
	    c = str[i];
	    if (']' == c) brace = false;
	    if ('[' == c) brace = true;
	    if ('=' == c && !brace) return i;
	  }
	}


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(398)
	)

	/* script */
	__vue_exports__ = __webpack_require__(399)

	/* template */
	var __vue_template__ = __webpack_require__(403)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/views/home/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },

/***/ 398:
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334
	  },
	  "div-cell": {
	    "display": "flex",
	    "marginTop": 20,
	    "flexDirection": "column",
	    "alignItems": "flex-start",
	    "padding": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#dadada",
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "fontSize": 60,
	    "color": "#333333",
	    "lineHeight": 100
	  },
	  "img-case": {
	    "width": 710,
	    "height": 300
	  },
	  "div-content": {
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "flex-start",
	    "marginTop": 30
	  },
	  "p-title": {
	    "fontSize": 36,
	    "textAlign": "left",
	    "color": "#333333",
	    "lineHeight": 80
	  },
	  "p-desc": {
	    "fontSize": 30,
	    "textAlign": "left",
	    "color": "#666666",
	    "lineHeight": 40
	  }
	}

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dream = __webpack_require__(400);

	var _dream2 = _interopRequireDefault(_dream);

	var _navigator = __webpack_require__(4);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _route = __webpack_require__(3);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      feeds: []
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    _dream2.default.dreamFeeds({
	      anchorId: -1,
	      size: 20
	    }).then(function (res) {
	      _this.feeds = res.data.feeds;
	      console.log('请求成功~', res.data.feeds);
	    }).catch(function (res) {
	      console.log('请求失败~');
	    });
	  },

	  methods: {
	    toDetail: function toDetail(infoUuid) {
	      console.log('infoUuid', infoUuid);
	      _navigator2.default.push(this, _route2.default.web, {
	        url: 'http://www.shuidichou.com/cf/dream/contribute/' + infoUuid
	      });
	    }
	  }
	}; //
	//
	//
	//

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(401);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 获取梦想筹案例
	function dreamFeeds(body) {
	  return _api2.default.get('api/cf/v4/dream/feeds', body);
	} /**
	   * @author walid
	   * @date 2017/3/5
	   * @description 梦想相关API
	   */

	exports.default = {
	  dreamFeeds: dreamFeeds
	};

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _qs = __webpack_require__(5);

	var _qs2 = _interopRequireDefault(_qs);

	var _string = __webpack_require__(402);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author walid
	 * @date 2017/3/5
	 * @description API 封装工具类
	 */

	var stream = weex.requireModule('stream');

	// http base url
	var baseUrl = 'http://api.shuidichou.com/';

	function get(url, params) {
	  return new Promise(function (resolve, reject) {
	    console.log('request:', baseUrl + url + '?' + _qs2.default.stringify(params));
	    stream.fetch({
	      method: 'GET',
	      url: baseUrl + url + '?' + _qs2.default.stringify(params),
	      type: 'json'
	    }, function (res) {
	      console.log('GET res :' + res);
	      if (res.ok) {
	        resolve(res.data);
	      } else {
	        reject(res.data);
	      }
	    }, function (progress) {
	      console.log('get in progress:' + progress.length);
	    });
	  });
	}

	function post(url, body) {
	  return new Promise(function (resolve, reject) {
	    stream.fetch({
	      method: 'POST',
	      url: baseUrl + url,
	      type: 'json',
	      body: body
	    }, function (res) {
	      if (res.ok && res.code == 0) {
	        resolve(res.res);
	      } else {
	        reject(res.res);
	      }
	    }, function (progress) {
	      console.log('get in progress:' + progress.length);
	    });
	  });
	}

	exports.default = {
	  get: get, post: post
	};

/***/ },

/***/ 402:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.trim = trim;
	exports.urlEncode = urlEncode;
	exports.getQueryString = getQueryString;
	exports.getQueryStringByName = getQueryStringByName;
	exports.getQueryStringByIndex = getQueryStringByIndex;
	/**
	 * @author walid
	 * @date 2017/02/21
	 * @description 字符串操作
	 */

	/* eslint linebreak-style: [0] */
	function trim(str, isGlobal) {
	  var result = str.replace(/(^\s+)|(\s+$)/g, '');
	  if (isGlobal) {
	    result = result.replace(/\s/g, '');
	  }
	  return result;
	}

	/**
	 * param 将要转为URL参数字符串的对象
	 * key URL参数字符串的前缀
	 * encode true/false 是否进行URL编码,默认为true
	 *
	 * return URL参数字符串
	 */
	function urlEncode(param, key, encode) {
	  if (param == null) {
	    return '';
	  }
	  var paramStr = '';
	  var t = typeof param === 'undefined' ? 'undefined' : _typeof(param);
	  if (t == 'string' || t == 'number' || t == 'boolean') {
	    paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param);
	  } else {
	    for (var i in param) {
	      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
	      paramStr += urlEncode(param[i], k, encode);
	    }
	  }
	  return paramStr;
	}

	/**
	 * 获取QueryString的数组
	 * @param vm
	 * @returns {Array|{index: number, input: string}}
	 */
	function getQueryString(vm) {
	  var result = vm.$getConfig().bundleUrl.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'));
	  for (var i = 0; i < result.length; i++) {
	    result[i] = result[i].substring(1);
	  }
	  return result;
	}

	/**
	 * 根据QueryString参数名称获取值
	 * @param vm
	 * @param name
	 * @returns {string}
	 */
	function getQueryStringByName(vm, name) {
	  name = name.replace(/[\[\]]/g, '\\$&');
	  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	  var results = regex.exec(vm.$getConfig().bundleUrl);
	  if (!results || !results[2]) {
	    return '';
	  }
	  return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	/**
	 * 根据QueryString参数索引获取值
	 * @param index
	 * @returns {*}
	 */
	function getQueryStringByIndex(index) {
	  if (index == null) {
	    return '';
	  }
	  var queryStringList = getQueryString();
	  if (index >= queryStringList.length) {
	    return '';
	  }
	  var result = queryStringList[index];
	  var startIndex = result.indexOf('=') + 1;
	  return result.substring(startIndex);
	}

/***/ },

/***/ 403:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [_c('list', {
	    staticClass: ["list"]
	  }, _vm._l((_vm.feeds), function(item, index) {
	    return _c('cell', {
	      staticClass: ["cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(item.uuid)
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["div-cell"]
	    }, [_c('text', {
	      staticClass: ["title"]
	    }, [_vm._v("案例" + _vm._s(index + 1))]), _c('image', {
	      staticClass: ["img-case"],
	      attrs: {
	        "src": item.coverImg
	      }
	    }), _c('div', {
	      staticClass: ["div-content"]
	    }, [_c('text', {
	      staticClass: ["p-title"]
	    }, [_vm._v(_vm._s(item.title))]), _c('text', {
	      staticClass: ["p-desc"]
	    }, [_vm._v(_vm._s(item.description))])])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });