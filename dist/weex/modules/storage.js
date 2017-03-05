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

	var App = __webpack_require__(389)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(390)
	)

	/* script */
	__vue_exports__ = __webpack_require__(391)

	/* template */
	var __vue_template__ = __webpack_require__(392)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/storage.vue"
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

/***/ 390:
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "height": 100,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 650,
	    "marginLeft": 50,
	    "marginTop": 50,
	    "marginBottom": 50
	  },
	  "center": {
	    "justifyContent": "center"
	  },
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "color": "#41B883"
	  },
	  "small": {
	    "fontSize": 32,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "color": "#41B883"
	  }
	}

/***/ },

/***/ 391:
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

	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');

	exports.default = {
	  data: function data() {
	    return {
	      keys: '[]',
	      length: 0,
	      state: '----'
	    };
	  },

	  methods: {
	    setItem: function setItem() {
	      var _this = this;

	      storage.setItem('name', 'Hanks', function (event) {
	        _this.state = 'set success';
	        console.log('set success');
	      });
	    },
	    getItem: function getItem() {
	      var _this2 = this;

	      storage.getItem('name', function (event) {
	        console.log('get value:', event.data);
	        _this2.state = 'value: ' + event.data;
	      });
	    },
	    removeItem: function removeItem() {
	      var _this3 = this;

	      storage.removeItem('name', function (event) {
	        console.log('delete value:', event.data);
	        _this3.state = 'deleted';
	      });
	    },
	    getAll: function getAll() {
	      storage.getAllKeys(function (event) {
	        // modal.toast({ message: event.result })
	        if (event.result === 'success') {
	          modal.toast({
	            message: 'props: ' + event.data.join(', ')
	          });
	        }
	      });
	    }
	  }
	};

/***/ },

/***/ 392:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list"]
	  }, [_c('div', {
	    staticClass: ["group", "center"]
	  }, [_c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.state))])])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.setItem
	    }
	  }, [_vm._v("set")])]), _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.getItem
	    }
	  }, [_vm._v("get")])]), _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.removeItem
	    }
	  }, [_vm._v("remove")])]), _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.getAll
	    }
	  }, [_vm._v("all")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });