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

	var App = __webpack_require__(223)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(224)
	)

	/* script */
	__vue_exports__ = __webpack_require__(225)

	/* template */
	var __vue_template__ = __webpack_require__(226)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/scroller-demo.vue"
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

/***/ 224:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "display": "block"
	  },
	  "scroller": {
	    "height": 750,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#0000FF"
	  },
	  "cell": {
	    "height": 100
	  },
	  "border": {
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  },
	  "h-scroller": {
	    "width": 2000,
	    "height": 500,
	    "backgroundColor": "#EEEEEE"
	  },
	  "h-cell": {
	    "width": 200,
	    "height": 500,
	    "backgroundColor": "#DDDDDD",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#BBBBBB"
	  }
	}

/***/ },

/***/ 225:
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
	    return {
	      items: [],
	      triggered: false
	    };
	  },
	  created: function created() {
	    for (var i = 0; i < 20; i++) {
	      this.items.push({
	        'item': 'test data' + i
	      });
	    }
	  },
	  methods: {
	    onloadmore: function onloadmore() {
	      if (!this.triggered) {
	        for (var i = 40; i >= 20; i--) {
	          this.items.push({
	            'item': 'onloadmore triggered' + i
	          });
	        }
	      }
	      this.triggered = true;
	    },
	    top: function top() {
	      console.log('scrollToElement');
	      dom.scrollToElement(this.$refs.top, { offset: 0 });
	    },
	    onrefresh: function onrefresh(event, finish) {
	      console.log('refresh ...');
	      setTimeout(finish, 3000);
	    },
	    onloading: function onloading(event, finish) {
	      console.log('loading ...');
	      setTimeout(finish, 3000);
	    },
	    onappear: function onappear(event) {
	      console.log('cell appear.', event);
	    }
	  }
	};

/***/ },

/***/ 226:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"],
	    attrs: {
	      "loadmoreoffset": "100"
	    },
	    on: {
	      "loadmore": _vm.onloadmore
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    on: {
	      "refresh": _vm.onrefresh
	    }
	  }, [_c('text', [_vm._v("refresh....")])]), _c('div', {
	    ref: "top",
	    staticClass: ["top"]
	  }, [_c('text', [_vm._v("top")])]), _vm._l((_vm.items), function(v) {
	    return _c('div', {
	      staticClass: ["cell", "border"],
	      on: {
	        "appear": _vm.onappear
	      }
	    }, [_c('text', {
	      staticStyle: {
	        fontSize: "40",
	        color: "#000000"
	      }
	    }, [_vm._v(_vm._s(v.item))])])
	  }), _c('loading', {
	    staticClass: ["loading"],
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('loading-indicator', {
	    staticClass: ["loading-indicator"]
	  })], 1)], 2), _c('text', {
	    on: {
	      "click": _vm.top
	    }
	  }, [_vm._v("click")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });