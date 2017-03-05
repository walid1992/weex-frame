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

	var App = __webpack_require__(294)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(295)
	)

	/* script */
	__vue_exports__ = __webpack_require__(296)

	/* template */
	var __vue_template__ = __webpack_require__(297)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/features/directive/v-if.vue"
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

/***/ 295:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "marginBottom": 40
	  },
	  "small": {
	    "fontSize": 36,
	    "color": "#888888"
	  },
	  "large": {
	    "fontSize": 88,
	    "color": "#888888"
	  },
	  "blue": {
	    "fontSize": 66,
	    "color": "#1B90F7"
	  },
	  "green": {
	    "fontSize": 100,
	    "color": "#41B883"
	  },
	  "button": {
	    "fontSize": 36,
	    "width": 280,
	    "color": "#41B883",
	    "textAlign": "center",
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ },

/***/ 296:
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

	exports.default = {
	  data: function data() {
	    return {
	      index: 0
	    };
	  },


	  computed: {
	    className: function className() {
	      return ['small', 'large', 'blue', 'green'][this.index % 4];
	    }
	  },

	  methods: {
	    change: function change() {
	      this.index++;
	    }
	  }
	};

/***/ },

/***/ 297:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    class: _vm.className
	  }, [_vm._v("L A B E L")])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.change
	    }
	  }, [_vm._v("change style")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });