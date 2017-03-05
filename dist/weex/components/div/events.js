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

	var App = __webpack_require__(22)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/components/div/events.vue"
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

/***/ 23:
/***/ function(module, exports) {

	module.exports = {
	  "box": {
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#BBBBBB",
	    "width": 250,
	    "height": 250,
	    "marginTop": 250,
	    "marginLeft": 250,
	    "backgroundColor": "#EEEEEE"
	  }
	}

/***/ },

/***/ 24:
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

	var modal = weex.requireModule('modal');
	exports.default = {
	  methods: {
	    onclick: function onclick(event) {
	      console.log('onclick:', event);
	      modal.toast({
	        message: 'onclick',
	        duration: 0.8
	      });
	    },
	    onlongpress: function onlongpress(event) {
	      console.log('onlongpress:', event);
	      modal.toast({
	        message: 'onlongpress',
	        duration: 0.8
	      });
	    },
	    onappear: function onappear(event) {
	      console.log('onappear:', event);
	      modal.toast({
	        message: 'onappear',
	        duration: 0.8
	      });
	    },
	    ondisappear: function ondisappear(event) {
	      console.log('ondisappear:', event);
	      modal.toast({
	        message: 'ondisappear',
	        duration: 0.8
	      });
	    }
	  }
	};

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["box"],
	    on: {
	      "click": _vm.onclick,
	      "longpress": _vm.onlongpress,
	      "appear": _vm.onappear,
	      "disappear": _vm.ondisappear
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });