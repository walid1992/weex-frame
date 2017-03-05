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

	var App = __webpack_require__(184)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(185)
	)

	/* script */
	__vue_exports__ = __webpack_require__(186)

	/* template */
	var __vue_template__ = __webpack_require__(187)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/appear-demo.vue"
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

/***/ 185:
/***/ function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 45
	  },
	  "scroller": {
	    "height": 100
	  },
	  "cell": {
	    "height": 100,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  }
	}

/***/ },

/***/ 186:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: function data() {
	    return {
	      lists: []
	    };
	  },
	  created: function created() {
	    for (var i = 0; i < 20; i++) {
	      this.lists.push('cell ' + i);
	    }
	  },
	  methods: {
	    onappear: function onappear(event) {
	      console.log('cell appear.', event);
	    },
	    ondisappear: function ondisappear(event) {
	      console.log('cell disappear.', event);
	    }
	  }
	};

/***/ },

/***/ 187:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["scroller"]
	  }, [_vm._m(0), _vm._l((_vm.lists), function(name) {
	    return _c('div', {
	      staticClass: ["cell"],
	      on: {
	        "disappear": _vm.ondisappear
	      }
	    }, [_c('text', {
	      staticClass: ["text"],
	      on: {
	        "appear": _vm.onappear
	      }
	    }, [_vm._v(_vm._s(name))])])
	  })], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v("top")])])
	}]}
	module.exports.render._withStripped = true

/***/ }

/******/ });