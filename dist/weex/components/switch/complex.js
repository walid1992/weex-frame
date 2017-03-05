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

	var App = __webpack_require__(131)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(132)
	)

	/* script */
	__vue_exports__ = __webpack_require__(133)

	/* template */
	var __vue_template__ = __webpack_require__(134)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/components/switch/complex.vue"
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

/***/ 132:
/***/ function(module, exports) {

	module.exports = {
	  "example": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "marginTop": 60
	  },
	  "label": {
	    "fontSize": 40,
	    "lineHeight": 60,
	    "width": 350,
	    "color": "#666666",
	    "textAlign": "right",
	    "marginRight": 20
	  },
	  "info": {
	    "fontSize": 30,
	    "lineHeight": 60,
	    "color": "#BBBBBB",
	    "marginLeft": 10
	  }
	}

/***/ },

/***/ 133:
/***/ function(module, exports) {

	"use strict";

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

	exports.default = {
	  data: function data() {
	    return {
	      checked: false
	    };
	  },

	  methods: {
	    onchange: function onchange(event) {
	      console.log("onchage, value: " + event.value);
	      this.checked = event.value;
	    }
	  }
	};

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', {
	    staticClass: ["example"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("onchange")]), _c('switch', {
	    on: {
	      "change": _vm.onchange
	    }
	  }), _c('text', {
	    staticClass: ["info"]
	  }, [_vm._v(_vm._s(_vm.checked))])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["example"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("normal")]), _c('switch')])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["example"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("checked")]), _c('switch', {
	    attrs: {
	      "checked": "true"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["example"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("disabled")]), _c('switch', {
	    attrs: {
	      "disabled": "true",
	      "checked": "true"
	    }
	  }), _c('switch', {
	    attrs: {
	      "disabled": "true"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ }

/******/ });