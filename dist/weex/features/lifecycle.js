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

	var App = __webpack_require__(317)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(318)
	)

	/* script */
	__vue_exports__ = __webpack_require__(319)

	/* template */
	var __vue_template__ = __webpack_require__(320)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/features/lifecycle.vue"
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

/***/ 318:
/***/ function(module, exports) {

	module.exports = {
	  "text": {
	    "lines": 3,
	    "width": 600,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "marginLeft": 75,
	    "marginTop": 75,
	    "textAlign": "center",
	    "color": "#41B883",
	    "fontSize": 50,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ },

/***/ 319:
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

	var modal = weex.requireModule('modal');
	exports.default = {
	  data: function data() {
	    return {
	      state: '---'
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    modal.toast({ message: 'beforeCreate', duration: 0.6 });
	  },
	  created: function created() {
	    modal.toast({ message: 'created', duration: 0.6 });
	  },
	  beforeMount: function beforeMount() {
	    modal.toast({ message: 'beforeMount', duration: 0.6 });
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.state = 'mounted';
	    modal.toast({ message: 'mounted', duration: 0.6 });
	    setTimeout(function () {
	      _this.state = 'changed in timer';
	    }, 3000);
	  },
	  beforeUpdate: function beforeUpdate() {
	    modal.toast({ message: 'beforeUpdate', duration: 0.6 });
	  },
	  updated: function updated() {
	    modal.toast({ message: 'updated', duration: 0.6 });
	  },
	  activated: function activated() {
	    modal.toast({ message: 'activated', duration: 0.6 });
	  },
	  deactivated: function deactivated() {
	    modal.toast({ message: 'deactivated', duration: 0.6 });
	  },
	  beforeDestroy: function beforeDestroy() {
	    modal.toast({ message: 'beforeDestroy', duration: 0.6 });
	  },
	  destroyed: function destroyed() {
	    modal.toast({ message: 'destroyed', duration: 0.6 });
	  }
	};

/***/ },

/***/ 320:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.state))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });