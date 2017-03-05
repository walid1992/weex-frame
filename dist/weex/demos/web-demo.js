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

	var App = __webpack_require__(250)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(251)
	)

	/* script */
	__vue_exports__ = __webpack_require__(252)

	/* template */
	var __vue_template__ = __webpack_require__(253)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/web-demo.vue"
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

/***/ 251:
/***/ function(module, exports) {

	module.exports = {
	  "browserStyle": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#778899"
	  },
	  "textStyle": {
	    "width": 750,
	    "height": 50,
	    "backgroundColor": "#D3D3D3",
	    "fontSize": 30
	  },
	  "buttonSytle": {
	    "width": 200,
	    "height": 50,
	    "backgroundColor": "#D3D3D3",
	    "margin": 10,
	    "paddingLeft": 5,
	    "paddingRight": 5,
	    "fontSize": 30
	  },
	  "webStyle": {
	    "width": 750,
	    "height": 1000,
	    "backgroundColor": "#8B0000"
	  }
	}

/***/ },

/***/ 252:
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var webview = weex.requireModule('webview');
	module.exports = {
	  data: function data() {
	    return { url: 'https://m.taobao.com' };
	  },


	  methods: {
	    loadURL: function loadURL(e) {
	      this.url = this.$refs.input.value;
	    },
	    reload: function reload(e) {
	      console.log('will reload webview');
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

/***/ 253:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["browserStyle"]
	  }, [_c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('input', {
	    ref: "input",
	    staticClass: ["textStyle"],
	    attrs: {
	      "type": "url",
	      "autofocus": "false",
	      "value": "https://www.baidu.com"
	    }
	  })]), _c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('text', {
	    staticClass: ["buttonSytle"],
	    on: {
	      "click": _vm.loadURL
	    }
	  }, [_vm._v("LoadURL")]), _c('text', {
	    staticClass: ["buttonSytle"],
	    on: {
	      "click": _vm.reload
	    }
	  }, [_vm._v("reload")])]), _c('div', [_c('web', {
	    ref: "webview",
	    staticClass: ["webStyle"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });