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

	var App = __webpack_require__(345)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(346)
	)

	/* script */
	__vue_exports__ = __webpack_require__(347)

	/* template */
	var __vue_template__ = __webpack_require__(348)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/modal/alert.vue"
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

/***/ 346:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "button": {
	    "fontSize": 60,
	    "width": 450,
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginLeft": 150,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "color": "#666666",
	    "borderColor": "#DDDDDD",
	    "backgroundColor": "#F5F5F5"
	  }
	}

/***/ },

/***/ 347:
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

	var modal = weex.requireModule('modal');

	exports.default = {
	  data: function data() {
	    return { count: 0 };
	  },

	  methods: {
	    showAlertA: function showAlertA(event) {
	      console.log('will show normal alert');
	      modal.alert({
	        message: 'This is a normal alert'
	      });
	    },
	    showAlertB: function showAlertB(event) {
	      console.log('will show alert B');
	      modal.alert({
	        message: 'This alert changed OK title',
	        okTitle: 'K.O.'
	      });
	    },
	    showAlertC: function showAlertC(event) {
	      var _this = this;

	      console.log('will show alert C');
	      modal.alert({
	        message: 'This alert has callback',
	        okTitle: 'K.O.'
	      }, function (result) {
	        console.log('result:', result);
	        _this.count++;
	      });
	    }
	  }
	};

/***/ },

/***/ 348:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showAlertA
	    }
	  }, [_vm._v("Normal Alert")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showAlertB
	    }
	  }, [_vm._v("Change okTitle")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showAlertC
	    }
	  }, [_vm._v("callback " + _vm._s(_vm.count))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });