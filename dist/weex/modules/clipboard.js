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

	var App = __webpack_require__(333)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(334)
	)

	/* script */
	__vue_exports__ = __webpack_require__(335)

	/* template */
	var __vue_template__ = __webpack_require__(336)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/clipboard.vue"
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

/***/ 334:
/***/ function(module, exports) {

	module.exports = {
	  "div": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 750,
	    "height": 90,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#DDDDDD"
	  },
	  "text": {
	    "width": 750,
	    "height": 90
	  }
	}

/***/ },

/***/ 335:
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

	var clipboard = weex.requireModule('clipboard');

	exports.default = {
	  data: function data() {
	    return {
	      tobecopied: 'yay!',
	      message: 'nothing.'
	    };
	  },


	  methods: {
	    setContent: function setContent() {
	      clipboard.setString(this.tobecopied);
	    },
	    onItemClick: function onItemClick() {
	      var _this = this;

	      this.message = 'clicked! ';
	      clipboard.getString(function (ret) {
	        _this.message = 'text from clipboard:' + ret.data;
	      });
	    }
	  }
	};

/***/ },

/***/ 336:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["div"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.onItemClick
	    }
	  }, [_vm._v(_vm._s(_vm.message))])]), _c('div', {
	    staticClass: ["div"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.setContent
	    }
	  }, [_vm._v("Click to copy: " + _vm._s(_vm.tobecopied))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });