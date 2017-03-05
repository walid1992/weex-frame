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

	var App = __webpack_require__(235)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(236)
	)

	/* script */
	__vue_exports__ = __webpack_require__(237)

	/* template */
	var __vue_template__ = __webpack_require__(238)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/switch-demo.vue"
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

/***/ 236:
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "fontSize": 60,
	    "color": "#505050",
	    "textAlign": "center"
	  },
	  "example": {
	    "textAlign": "center",
	    "fontSize": 50
	  }
	}

/***/ },

/***/ 237:
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

	exports.default = {
	  methods: {
	    onclick: function onclick(e) {
	      console.log('onclick:' + e.value);
	    },
	    onchange: function onchange(e) {
	      console.log('onchage, value:' + e.value);
	    },
	    ondisappear: function ondisappear(e) {
	      console.log('ondisappear, value:' + e.value);
	    },
	    onappear: function onappear(e) {
	      console.log('onappear, value:' + e.value);
	    }
	  }
	};

/***/ },

/***/ 238:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Switch Demo")]), _vm._m(0), _c('div', {
	    staticClass: ["example"]
	  }, [_c('span', [_vm._v("checked:")]), _c('switch', {
	    attrs: {
	      "checked": "true"
	    }
	  })], 1), _c('div', {
	    staticClass: ["example"]
	  }, [_c('span', [_vm._v("disabled:")]), _c('switch', {
	    attrs: {
	      "disabled": "true"
	    }
	  })], 1), _c('div', {
	    staticClass: ["example"]
	  }, [_c('span', {
	    on: {
	      "click": _vm.onclick
	    }
	  }, [_vm._v("events:")]), _c('switch', {
	    on: {
	      "click": _vm.onclick,
	      "change": _vm.onchange,
	      "disappear": _vm.ondisappear,
	      "appear": _vm.onappear
	    }
	  })], 1), _c('div')])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["example"]
	  }, [_c('switch')])
	}]}
	module.exports.render._withStripped = true

/***/ }

/******/ });