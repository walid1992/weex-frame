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

	var App = __webpack_require__(207)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(208)
	)

	/* script */
	__vue_exports__ = __webpack_require__(209)

	/* template */
	var __vue_template__ = __webpack_require__(210)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/list-demo.vue"
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

/***/ 208:
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "height": 750,
	    "backgroundColor": "#888888",
	    "boxShadow": 0
	  },
	  "row": {
	    "height": 120,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#BBBBBB"
	  },
	  "loading": {
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "loading-indicator": {
	    "width": 160,
	    "height": 160,
	    "color": "#008000"
	  }
	}

/***/ },

/***/ 209:
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

	module.exports = {
	  data: function data() {
	    return {
	      rows: [],
	      appearMin: 1,
	      appearMax: 1
	    };
	  },
	  mounted: function mounted() {
	    for (var i = 0; i < 10; i++) {
	      this.rows.push({
	        id: i + 1
	      });
	    }
	  },
	  methods: {
	    onloadmore: function onloadmore(event, finish) {
	      console.log('on load more', event);
	      // for (var i = 0; i < 30; i++) {
	      //   this.rows.push({
	      //     id: 'load more: ' + (i + 1)
	      //   })
	      // }
	    },
	    onappear: function onappear(event) {
	      // console.log('onappear ...', event)
	    },
	    ondisappear: function ondisappear(event) {
	      // console.log('ondisappear ...', event)
	    },
	    onrefresh: function onrefresh(event, finish) {
	      console.log('refresh ...');
	      setTimeout(finish, 3000);
	    },
	    onloading: function onloading(event, finish) {
	      console.log('loading ...');
	      setTimeout(finish, 3000);
	    }
	  }
	};

/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list-wrapper"]
	  }, [_c('list', {
	    staticClass: ["list"],
	    on: {
	      "loadmore": _vm.onloadmore
	    }
	  }, [_c('header', [_c('text', [_vm._v("list header")])]), _c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": "hide"
	    },
	    on: {
	      "refresh": _vm.onrefresh
	    }
	  }, [_c('loading-indicator', {
	    staticClass: ["loading-indicator"]
	  }), _c('text', [_vm._v("refresh....")])], 1), _vm._l((_vm.rows), function(item) {
	    return _c('cell', {
	      staticClass: ["row"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      },
	      nativeOn: {
	        "appear": function($event) {
	          _vm.onappear($event)
	        },
	        "disappear": function($event) {
	          _vm.ondisappear($event)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["item-title"]
	    }, [_vm._v("row " + _vm._s(item.id))])])
	  }), _c('loading', {
	    staticClass: ["loading"],
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('loading-indicator', {
	    staticClass: ["loading-indicator"]
	  })], 1)], 2), _c('text', {
	    staticClass: ["info"]
	  }, [_vm._v("\n    Appear items:" + _vm._s(_vm.appearMin) + " - " + _vm._s(_vm.appearMax) + "\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });