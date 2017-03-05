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

	var App = __webpack_require__(231)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(232)
	)

	/* script */
	__vue_exports__ = __webpack_require__(233)

	/* template */
	var __vue_template__ = __webpack_require__(234)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/storage-demo.vue"
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

/***/ 232:
/***/ function(module, exports) {

	module.exports = {
	  "search_view": {
	    "height": 70,
	    "marginTop": 20,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flexDirection": "row"
	  },
	  "search": {
	    "height": 70,
	    "borderWidth": 1,
	    "borderColor": "#dddddd",
	    "paddingLeft": 10,
	    "fontSize": 28,
	    "flex": 1
	  },
	  "btn": {
	    "width": 80,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "fontSize": 28,
	    "backgroundColor": "#1A89EA",
	    "color": "#ffffff"
	  },
	  "item": {
	    "textAlign": "center",
	    "fontSize": 25,
	    "height": 50,
	    "marginTop": 10,
	    "color": "#5E5E5E",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#dddddd",
	    "justifyContent": "center"
	  }
	}

/***/ },

/***/ 233:
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

	var storage = weex.requireModule('storage');
	exports.default = {
	  data: function data() {
	    return {
	      items: [],
	      keywords: ''
	    };
	  },
	  created: function created() {
	    var that = this;
	    storage.getAllKeys(function (e) {
	      if (e.result == 'success' && e.data.length) {
	        e.data.forEach(function (item) {
	          if (item.indexOf('search_') > -1) {
	            that.items.push(item.split('search_')[1]);
	          }
	        });
	      }
	    });
	  },
	  methods: {
	    search: function search() {
	      var that = this;
	      console.log('search', this.keywords);
	      if (!this.keywords) return;
	      storage.setItem('search_' + this.keywords, this.keywords, function (e) {
	        that.items.push(that.keywords);
	      });
	    },
	    change: function change(e) {
	      console.log('input change', e);
	      if (!e.target.value) return;
	      this.keywords = e.target.value;
	    }
	  }
	};

/***/ },

/***/ 234:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#F6F6F6"
	    }
	  }, [_c('div', {
	    staticClass: ["search_view"]
	  }, [_c('input', {
	    staticClass: ["search"],
	    attrs: {
	      "placeholder": "Please input"
	    },
	    on: {
	      "change": _vm.change
	    }
	  }), _c('text', {
	    staticClass: ["btn"],
	    nativeOn: {
	      "click": function($event) {
	        _vm.search($event)
	      }
	    }
	  }, [_vm._v("Search")])]), _c('text', {
	    staticClass: ["item"]
	  }, [_vm._v("History")]), _c('list', _vm._l((_vm.items), function(i, v) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('text', {
	      staticClass: ["item"]
	    }, [_vm._v(_vm._s(v))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });