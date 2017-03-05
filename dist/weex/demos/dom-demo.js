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

	var App = __webpack_require__(188)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(189)
	)

	/* script */
	__vue_exports__ = __webpack_require__(190)

	/* template */
	var __vue_template__ = __webpack_require__(191)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/dom-demo.vue"
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

/***/ 189:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "height": 100,
	    "position": "relative"
	  },
	  "inner": {
	    "position": "absolute",
	    "top": 200,
	    "left": 150,
	    "width": 300,
	    "height": 300,
	    "backgroundColor": "#DDDDDD"
	  },
	  "text": {
	    "fontSize": 50
	  }
	}

/***/ },

/***/ 190:
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

	var dom = weex.requireModule('dom');
	module.exports = {
	  methods: {
	    getComponentRect: function getComponentRect() {
	      // console.log(dom)
	      var result = '';
	      var res = dom.getComponentRect(this.$refs.inner, function (option) {
	        result = option;
	        console.log('get result:', result);
	      });
	      console.log('res', res);
	      console.assert(res === result);
	      console.log('viewport:', dom.getComponentRect('viewport'));
	    },
	    addRule: function addRule() {
	      var res = dom.addRule('transition', {
	        transform: 'translate(0, 100px)'
	      });
	      console.log('addRule res:', res);
	    }
	  },
	  mounted: function mounted() {
	    this.addRule();
	    this.getComponentRect();
	  }
	};

/***/ },

/***/ 191:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    ref: "inner",
	    staticClass: ["inner"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v("box")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });