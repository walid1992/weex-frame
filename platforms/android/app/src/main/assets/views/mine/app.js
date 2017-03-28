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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @author walid
	 * @date 2016/03/20
	 * @description 程序入口启动配置
	 */

	const App = __webpack_require__(54)

	// 注册全局 component
	Vue.component('osc-root', __webpack_require__(10))
	Vue.component('osc-navpage', __webpack_require__(14))
	Vue.component('osc-navbar', __webpack_require__(18))
	Vue.component('osc-tabbar', __webpack_require__(22))
	Vue.component('osc-list', __webpack_require__(30))
	Vue.component('osc-scroller', __webpack_require__(35))

	// 注册全局 module
	// weex.registerModule('api', require('utils/api'))
	// weex.registerModule('route', require('constants/route'))

	App.el = '#root'
	new Vue(App)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
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
	  home: 'views/home/app',
	  launch: 'views/launch/app',
	  mine: 'views/mine/app',
	  web: 'views/web/app',
	  // sample 示例
	  list: 'views/list/app',
	  scroller: 'views/scroller/app'
	};

/***/ },
/* 4 */
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

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	var _route = __webpack_require__(3);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator');

	function getBaseUrl() {
	  var bundleUrl = weex.config.bundleUrl;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0;
	  var nativeBase = '';
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/';
	  } else if (isiOSAssets) {
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  } else {
	    var host = _config2.default + ':12580';
	    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/dist/weex/';
	  }
	  var h5Base = './weex.html?page=./dist/web/';
	  // // in Browser or WebView
	  var inBrowserOrWebView = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
	  return inBrowserOrWebView ? h5Base : nativeBase;
	  // return inBrowserOrWebView ? './weex.html?page=./dist/web/' : `http://${ip}:12580/dist/weex/`
	}

	function pushWeb(url, params) {
	  if (_instance2.default.isWeb()) {
	    pushByUrl(url, params);
	    return;
	  }
	  params = params ? params : {};
	  params.url = url;
	  push(_route2.default.web, params);
	}

	function pushByUrl(url, params) {
	  navigator.push({
	    url: params ? 'url?' + _qs2.default.stringify(params) : url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function push(route, params) {
	  var url = params ? '' + getBaseUrl() + route + '.js?' + _qs2.default.stringify(params) : '' + getBaseUrl() + route + '.js';
	  navigator.push({
	    url: url,
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	function pop() {
	  navigator.pop({
	    animated: 'true'
	  }, function (event) {
	    console.log('callback: ', event);
	  });
	}

	exports.default = {
	  push: push, pushByUrl: pushByUrl, getBaseUrl: getBaseUrl, pushWeb: pushWeb, pop: pop
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '172.31.243.44';

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @Author   : walid
	 * @Data     : 2017-03-20  18:32
	 * @Describe : 封装weex实例对象
	 */

	function isIOS() {
	  return weex.config.env ? weex.config.env.platform === 'iOS' : false;
	}

	function getDeviceInfo() {
	  var env = weex.config.env;
	  var deviceWidth = env.deviceWidth;
	  var deviceHeight = env.deviceHeight;
	  return {
	    deviceWidth: deviceWidth,
	    deviceHeight: deviceHeight
	  };
	}

	exports.default = {
	  isIOS: isIOS, getDeviceInfo: getDeviceInfo
	};

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-root.vue"
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
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      isIOS: _instance2.default.isIOS()
	    };
	  },


	  props: {
	    backgroundColor: { default: '#eeeeee' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.isIOS) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(15)
	)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-navpage.vue"
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
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      isIOS: _instance2.default.isIOS()
	    };
	  },


	  props: {
	    dataRole: { default: 'none' },
	    backgroundColor: { default: '#0099FF' },
	    height: { default: 88 },
	    title: { default: '' },
	    titleColor: { default: 'white' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'white' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'white' }
	  },

	  methods: {
	    naviBarRightItemClick: function naviBarRightItemClick(e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.isIOS) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('osc-navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(19)
	)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(21)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-navbar.vue"
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
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "flexDirection": "row",
	    "width": 750,
	    "padding": 20,
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "text": {
	    "fontSize": 32
	  },
	  "img": {
	    "width": 50,
	    "height": 50
	  },
	  "title": {
	    "fontSize": 30,
	    "fontWeight": "bold",
	    "maxWidth": 360,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    // navbar
	    dataRole: { default: 'none' },
	    //导航条背景色
	    backgroundColor: { default: '#0099FF' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'white' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'white' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'white' }
	  },
	  methods: {
	    onClickRight: function onClickRight(e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onClickLeft: function onClickLeft(e) {
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"],
	    style: {
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [_c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.leftItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle) + "\n    ")]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [_c('text', {
	    staticClass: ["title"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle) + "\n    ")]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(29)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-tabbar.vue"
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
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    tabItems: { default: [] },
	    selectedColor: { default: '#ff0000' },
	    unselectedColor: { default: '#000000' }
	  },
	  data: function data() {
	    return {
	      selectedIndex: 0
	    };
	  },

	  components: {
	    tabitem: __webpack_require__(25)
	  },
	  created: function created() {
	    this.select(this.selectedIndex);
	  },

	  methods: {
	    tabItemOnClick: function tabItemOnClick(e) {
	      this.selectedIndex = e.index;
	      this.select(e.index);
	      this.$emit('tabBarOnClick', e);
	    },
	    select: function select(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(26)
	)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-tabitem.vue"
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
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    index: { default: 0 },
	    title: { default: '' },
	    titleColor: { default: '#000000' },
	    icon: { default: '' },
	    backgroundColor: { default: '#ffffff' }
	  },
	  methods: {
	    onclickitem: function onclickitem(e) {
	      this.$emit('tabItemOnClick', {
	        index: this.index
	      });
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _c('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item, index) {
	    return _c('embed', {
	      key: index,
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _c('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.tabItems), function(item, index) {
	    return _c('tabitem', {
	      key: index,
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(31)
	)

	/* script */
	__vue_exports__ = __webpack_require__(32)

	/* template */
	var __vue_template__ = __webpack_require__(34)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-list/index.vue"
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
/* 31 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toast = __webpack_require__(33);

	var _toast2 = _interopRequireDefault(_toast);

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this2 = this;

	      if (this.refreshPause) {
	        return;
	      }
	      this.$emit('refresh', e);
	      this.refreshPause = true;
	      this.refreshDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this2.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this2.refreshDisplay === 'show') {
	          _this2.refreshDisplay = 'hide';
	          _this2.refreshPause = true;
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this3 = this;

	      if (this.loadingPause) {
	        return;
	      }
	      this.$emit('loading', e);
	      this.loadingPause = true;
	      this.loadingDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.loadingDisplay === 'show') {
	          _this3.loadingPause = true;
	          _this3.loadingDisplay = 'hide';
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description weex toast 工具类
	 */

	var modal = weex.requireModule('modal');

	function show(_ref) {
	  var message = _ref.message,
	      duration = _ref.duration;

	  if (!message) {
	    return;
	  }
	  modal.toast({
	    message: message,
	    duration: duration | 2.0
	  });
	}

	exports.default = {
	  show: show
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(36)
	)

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(38)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-scroller/index.vue"
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
/* 36 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toast = __webpack_require__(33);

	var _toast2 = _interopRequireDefault(_toast);

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this2 = this;

	      if (this.refreshPause) {
	        return;
	      }
	      this.$emit('refresh', e);
	      this.refreshPause = true;
	      this.refreshDisplay === 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this2.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this2.refreshDisplay = 'show') {
	          _this2.refreshDisplay = 'hide';
	          _this2.refreshPause = true;
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this3 = this;

	      if (this.loadingPause) {
	        return;
	      }
	      this.$emit('loading', e);
	      this.loadingPause = true;
	      this.loadingDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.loadingDisplay === 'show') {
	          _this3.loadingPause = true;
	          _this3.loadingDisplay = 'hide';
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(55)
	)

	/* script */
	__vue_exports__ = __webpack_require__(56)

	/* template */
	var __vue_template__ = __webpack_require__(57)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/views/mine/app.vue"
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
/* 55 */
/***/ function(module, exports) {

	module.exports = {
	  "img-bg-mine": {
	    "width": 750,
	    "height": 750
	  },
	  "div-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 750,
	    "height": 1334
	  },
	  "div-top-link": {
	    "width": 750,
	    "height": 320,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "padding": 30
	  },
	  "div-card": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start"
	  },
	  "p-card": {
	    "color": "#ffffff",
	    "marginRight": 5,
	    "fontSize": 24,
	    "fontWeight": "300"
	  },
	  "img-triangle": {
	    "width": 40,
	    "height": 50,
	    "marginTop": -8
	  },
	  "p-person-center": {
	    "color": "#ffffff",
	    "fontSize": 24,
	    "fontWeight": "300"
	  },
	  "div-work-content": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "img-person": {
	    "width": 150,
	    "height": 150,
	    "position": "absolute",
	    "left": 300,
	    "top": 210
	  },
	  "div-person-info": {
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "paddingTop": 60,
	    "paddingBottom": 20
	  },
	  "div-person-info-top": {
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "p-person-name": {
	    "marginRight": 10,
	    "fontWeight": "700",
	    "fontSize": 32
	  },
	  "p-work-position": {
	    "fontWeight": "800",
	    "fontSize": 28
	  },
	  "p-work-department": {
	    "textAlign": "center",
	    "marginTop": 12,
	    "fontSize": 26,
	    "color": "#666666"
	  },
	  "div-person-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "justifyContent": "space-between",
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dddddd",
	    "paddingTop": 20,
	    "paddingRight": 50,
	    "paddingLeft": 50
	  },
	  "div-list-item": {
	    "alignItems": "center"
	  },
	  "img-item": {
	    "width": 50,
	    "height": 50
	  },
	  "p-item": {
	    "marginTop": 12,
	    "marginBottom": 20,
	    "fontSize": 24
	  },
	  "div-group-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "flexDirection": "row",
	    "paddingTop": 20
	  },
	  "div-add-list": {
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "flexDirection": "row",
	    "paddingTop": 20,
	    "marginTop": 24
	  },
	  "div-group-item": {
	    "width": 188
	  },
	  "img-add-item": {
	    "width": 36,
	    "height": 36
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigator = __webpack_require__(4);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _route = __webpack_require__(3);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      personName: '张小凡',
	      workPosition: 'web前端工程师',
	      workDepartment: '思源总部/互联集团/应用引擎部',
	      personInfoList: [{
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/workbench_friends.png',
	        name: '个人动态'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/person-data.png',
	        name: '个人资料'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/workbench_card_setting.png',
	        name: '名片设置'
	      }],
	      groupInfoList: [{
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/wallet_trade_data.png',
	        name: '我的公司'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/group_icon.png',
	        name: '群组'
	      }, {
	        iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/person-dynamic.png',
	        name: '审批'
	      }]
	    };
	  },


	  methods: {
	    toBlog: function toBlog(event) {
	      _navigator2.default.push(_route2.default.web, {
	        url: 'http://www.jianshu.com/u/a279a2f8ed63'
	      });
	    }
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('osc-root', [_c('image', {
	    staticClass: ["img-bg-mine"],
	    attrs: {
	      "resize": "cover",
	      "src": "https://gitlab.com/toonteam/weex/raw/ce0c5f60531f1a0d676dedfa1f81c7e67e3151ed/src/views/mine/imgs/bg_basic_info_default.png"
	    }
	  }), _c('div', {
	    staticClass: ["div-content"]
	  }, [_c('div', {
	    staticClass: ["div-top-link"]
	  }, [_c('div', {
	    staticClass: ["div-card"]
	  }, [_c('text', {
	    staticClass: ["p-card"]
	  }, [_vm._v("名片")]), _c('image', {
	    staticClass: ["img-triangle"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/triangle.png"
	    }
	  })]), _c('text', {
	    staticClass: ["p-person-center"]
	  }, [_vm._v("个人中心")])]), _c('div', {
	    staticClass: ["div-work-content"]
	  }, [_c('div', {
	    staticClass: ["div-person-info"]
	  }, [_c('div', {
	    staticClass: ["div-person-info-top"]
	  }, [_c('text', {
	    staticClass: ["p-person-name"]
	  }, [_vm._v(_vm._s(_vm.personName))]), _c('text', {
	    staticClass: ["p-work-position"]
	  }, [_vm._v(_vm._s(_vm.workPosition))])]), _c('text', {
	    staticClass: ["p-work-department"]
	  }, [_vm._v(_vm._s(_vm.workDepartment))])]), _c('div', {
	    staticClass: ["div-person-list"]
	  }, _vm._l((_vm.personInfoList), function(item) {
	    return _c('div', {
	      staticClass: ["div-list-item"],
	      on: {
	        "click": _vm.toBlog
	      }
	    }, [_c('image', {
	      staticClass: ["img-item"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["p-item"]
	    }, [_vm._v(_vm._s(item.name))])])
	  })), _c('div', {
	    staticClass: ["div-group-list"]
	  }, _vm._l((_vm.groupInfoList), function(item) {
	    return _c('div', {
	      staticClass: ["div-list-item", "div-group-item"]
	    }, [_c('image', {
	      staticClass: ["img-item"],
	      attrs: {
	        "src": item.iconUrl
	      }
	    }), _c('text', {
	      staticClass: ["p-item"]
	    }, [_vm._v(_vm._s(item.name))])])
	  })), _c('div', {
	    staticClass: ["div-add-list"]
	  }, [_c('div', {
	    staticClass: ["div-list-item", "div-group-item"],
	    on: {
	      "click": _vm.toBlog
	    }
	  }, [_c('image', {
	    staticClass: ["img-add-item"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/283827bfcf4aac59021a2c4c0572e27b98546627/src/views/mine/imgs/apply-blog.png"
	    }
	  }), _c('text', {
	    staticClass: ["p-item"]
	  }, [_vm._v("博客")])]), _c('div', {
	    staticClass: ["div-list-item", "div-group-item"]
	  }, [_c('image', {
	    staticClass: ["img-add-item"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/beacon_add_key.png"
	    }
	  }), _c('text', {
	    staticClass: ["p-item"]
	  }, [_vm._v("添加")])])])])]), _c('image', {
	    staticClass: ["img-person"],
	    attrs: {
	      "src": "https://gitlab.com/toonteam/weex/raw/44cab38bc97860112d963001ba9c9179c0365ee5/src/views/mine/imgs/person-img.jpg"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);