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

	var App = __webpack_require__(219)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(220)
	)

	/* script */
	__vue_exports__ = __webpack_require__(221)

	/* template */
	var __vue_template__ = __webpack_require__(222)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/scroll-to-demo.vue"
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

/***/ 220:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "display": "block"
	  },
	  "scroller": {
	    "height": 500
	  },
	  "row": {
	    "height": 60
	  }
	}

/***/ },

/***/ 221:
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

	var dom = weex.requireModule('dom');

	module.exports = {
	  data: function data() {
	    return { rows: [] };
	  },
	  created: function created() {
	    for (var i = 0; i < 30; i++) {
	      this.rows.push({
	        id: i
	      });
	    }
	  },
	  methods: {
	    go: function go() {
	      console.log('go', this.$refs.button);
	      var el = this.$refs.item10[0];
	      // var el = this.$refs.text10[0]
	      dom.scrollToElement(el, { offset: 0 });
	    }
	  }
	};

/***/ },

/***/ 222:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, _vm._l((_vm.rows), function(item, index) {
	    return _c('div', {
	      ref: 'item' + index,
	      refInFor: true,
	      staticClass: ["row"]
	    }, [_c('text', {
	      ref: 'text' + index,
	      refInFor: true,
	      staticClass: ["item-title"]
	    }, [_vm._v("row " + _vm._s(item.id))])])
	  })), _c('text', {
	    ref: "button",
	    staticStyle: {
	      textAlign: "center",
	      backgroundColor: "#eeeeee"
	    },
	    on: {
	      "click": _vm.go
	    }
	  }, [_vm._v("\n    Go to 10th line.\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });