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

	var App = __webpack_require__(178)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(179)
	)

	/* script */
	__vue_exports__ = __webpack_require__(180)

	/* template */
	var __vue_template__ = __webpack_require__(181)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/nav-bar-normal.vue"
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

/***/ 179:
/***/ function(module, exports) {

	module.exports = {
	  "text-type": {
	    "color": "#29a7e2",
	    "marginLeft": 10
	  },
	  "nav_bar": {
	    "flexDirection": "row",
	    "marginBottom": 10,
	    "height": 99
	  },
	  "nav_logo": {
	    "width": 75,
	    "height": 30
	  },
	  "nav_title": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "separate-item-text": {
	    "height": 1,
	    "backgroundColor": "#d4d4d4"
	  }
	}

/***/ },

/***/ 180:
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

	var modal = weex.requireModule('modal');

	exports.default = {
	  props: {
	    title: {
	      default: '阅读'
	    },
	    justifyContent: {
	      default: 'center'
	    },
	    showback: {
	      default: false
	    }
	  },
	  methods: {
	    onBackClick: function onBackClick(e) {
	      this.$emit('onbackclick', {});
	    }
	  }
	};

/***/ },

/***/ 181:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["nav_bar"]
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }, [(_vm.showback) ? _c('image', {
	    staticStyle: {
	      width: "99px",
	      height: "99px"
	    },
	    attrs: {
	      "src": "https://github.com/dodola/WeexOne/raw/master/imgs/return_image.png"
	    },
	    on: {
	      "click": _vm.onBackClick
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["nav_title"]
	  }, [_c('image', {
	    staticClass: ["nav_logo"],
	    attrs: {
	      "src": "http://image.wufazhuce.com/m.wufazhuce.com-logo-gray-pure.png"
	    }
	  }), _c('text', {
	    staticClass: ["text-type"]
	  }, [_vm._v("|" + _vm._s(_vm.title))])]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })]), _c('div', {
	    staticClass: ["separate-item-text"]
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });