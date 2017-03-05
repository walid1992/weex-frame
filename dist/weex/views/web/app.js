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

	var App = __webpack_require__(411)
	App.el = '#root'
	new Vue(App)


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

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(412)
	)

	/* script */
	__vue_exports__ = __webpack_require__(413)

	/* template */
	var __vue_template__ = __webpack_require__(414)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/views/web/app.vue"
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

/***/ 412:
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "backgroundColor": "#f8f8f8"
	  },
	  "btn-action": {
	    "width": 200,
	    "height": 50,
	    "backgroundColor": "#D3D3D3",
	    "margin": 10,
	    "paddingLeft": 5,
	    "paddingRight": 5,
	    "fontSize": 30,
	    "textAlign": "center",
	    "lineHeight": 50,
	    "flex": 1
	  },
	  "web": {
	    "width": 750,
	    "height": 1100,
	    "backgroundColor": "#8B0000"
	  }
	}

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _string = __webpack_require__(402);

	var webview = weex.requireModule('webview'); //
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      url: 'https://weex-project.io/cn/'
	    };
	  },
	  mounted: function mounted() {
	    var url = (0, _string.getQueryStringByName)(this, 'url');
	    console.log('getQueryStringByName', url);
	    if (url) {
	      this.url = url;
	    }
	  },


	  methods: {
	    loadUrl: function loadUrl(event) {},
	    reload: function reload(event) {
	      webview.reload(this.$refs.webview);
	    },
	    start: function start(event) {
	      console.log('pagestart', event);
	    },
	    finish: function finish(event) {
	      console.log('pagefinish', event);
	    }
	  }
	};

/***/ },

/***/ 414:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [_c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('text', {
	    staticClass: ["btn-action"],
	    on: {
	      "click": _vm.loadUrl
	    }
	  }, [_vm._v("LoadURL")]), _c('text', {
	    staticClass: ["btn-action"],
	    on: {
	      "click": _vm.reload
	    }
	  }, [_vm._v("reload")])]), _c('web', {
	    ref: "webview",
	    staticClass: ["web"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });