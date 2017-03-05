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

	var App = __webpack_require__(199)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(200)
	)

	/* script */
	__vue_exports__ = __webpack_require__(201)

	/* template */
	var __vue_template__ = __webpack_require__(202)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/input-demo.vue"
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

/***/ 200:
/***/ function(module, exports) {

	module.exports = {
	  "input": {
	    "fontSize": 60,
	    "height": 80,
	    "width": 400
	  }
	}

/***/ },

/***/ 201:
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
	//
	//

	module.exports = {
	  data: function data() {
	    return {
	      txtInput: '',
	      txtChange: ''
	    };
	  },
	  methods: {
	    onchange: function onchange(event) {
	      console.log('onchange:', event.target.value);
	      this.txtChange = event.target.value;
	    },
	    oninput: function oninput(event) {
	      console.log('oninput:', event.target.value);
	      this.txtInput = this.$refs.input.value;
	    },
	    onfocus: function onfocus(event) {
	      console.log('onfocus:', event.target.value);
	    },
	    onblur: function onblur(event) {
	      console.log('onblur:', event.target.value);
	    }
	  }
	};

/***/ },

/***/ 202:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('input', {
	    ref: "input",
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Something",
	      "autofocus": "",
	      "value": "abeee",
	      "maxlength": "10"
	    },
	    on: {
	      "change": _vm.onchange,
	      "input": _vm.oninput,
	      "focus": _vm.onfocus,
	      "blur": _vm.onblur
	    }
	  }), _c('text', [_vm._v("oninput: " + _vm._s(_vm.txtInput))]), _c('text', [_vm._v("onchange: " + _vm._s(_vm.txtChange))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });