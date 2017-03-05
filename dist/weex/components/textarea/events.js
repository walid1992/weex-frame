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

	var App = __webpack_require__(149)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(150)
	)

	/* script */
	__vue_exports__ = __webpack_require__(151)

	/* template */
	var __vue_template__ = __webpack_require__(152)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/components/textarea/events.vue"
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

/***/ 150:
/***/ function(module, exports) {

	module.exports = {
	  "textarea": {
	    "fontSize": 50,
	    "width": 650,
	    "marginTop": 50,
	    "marginLeft": 50,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "color": "#666666",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  }
	}

/***/ },

/***/ 151:
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
	    oninput: function oninput(event) {
	      console.log('oninput:', event.value);
	      modal.toast({
	        message: 'oninput: ' + event.value,
	        duration: 0.8
	      });
	    },
	    onchange: function onchange(event) {
	      console.log('onchange:', event.value);
	      modal.toast({
	        message: 'onchange: ' + event.value,
	        duration: 0.8
	      });
	    },
	    onfocus: function onfocus(event) {
	      console.log('onfocus:', event.value);
	      modal.toast({
	        message: 'onfocus: ' + event.value,
	        duration: 0.8
	      });
	    },
	    onblur: function onblur(event) {
	      console.log('onblur:', event.value);
	      modal.toast({
	        message: 'input blur: ' + event.value,
	        duration: 0.8
	      });
	    }
	  }
	};

/***/ },

/***/ 152:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('textarea', {
	    staticClass: ["textarea"],
	    on: {
	      "input": _vm.oninput,
	      "change": _vm.onchange,
	      "focus": _vm.onfocus,
	      "blur": _vm.onblur
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });