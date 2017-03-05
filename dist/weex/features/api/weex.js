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

	var App = __webpack_require__(278)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(279)
	)

	/* script */
	__vue_exports__ = __webpack_require__(280)

	/* template */
	var __vue_template__ = __webpack_require__(281)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/features/api/weex.vue"
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

/***/ 279:
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "fontSize": 42,
	    "textAlign": "center",
	    "color": "#888888",
	    "marginTop": 50,
	    "marginBottom": 20
	  },
	  "version": {
	    "fontSize": 100,
	    "textAlign": "center",
	    "marginBottom": 75
	  },
	  "group": {
	    "marginTop": 25,
	    "flexDirection": "row"
	  },
	  "label": {
	    "width": 360,
	    "fontSize": 42,
	    "textAlign": "right",
	    "color": "#888888"
	  },
	  "value": {
	    "paddingLeft": 50,
	    "fontSize": 42
	  }
	}

/***/ },

/***/ 280:
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

	exports.default = {
	  data: function data() {
	    return {
	      version: 'invalid',
	      bundleUrl: 'invalid',
	      platform: 'invalid',
	      osVersion: 'invalid',
	      appVersion: 'invalid',
	      deviceModel: 'invalid',
	      deviceWidth: 'invalid',
	      deviceHeight: 'invalid'
	    };
	  },

	  created: function created() {
	    // const configs = weex.config
	    var configs = this.$getConfig();
	    //      if (configs) {
	    //        this.version = configs.weexVersion || 'unknown'
	    //        this.bundleUrl = configs.bundleUrl || 'unknown'
	    //        this.platform = configs.platform || 'unknown'
	    //        this.osVersion = configs.osVersion || 'unknown'
	    //        this.appVersion = configs.appVersion || 'unknown'
	    //        this.deviceModel = configs.deviceModel || 'unknown'
	    //        this.deviceWidth = configs.deviceWidth || 'unknown'
	    //        this.deviceHeight = configs.deviceHeight || 'unknown'
	    //      }
	  }
	};

/***/ },

/***/ 281:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Weex SDK Version")]), _c('text', {
	    staticClass: ["version"]
	  }, [_vm._v(_vm._s(_vm.version))]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("Bundle URL")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.bundleUrl))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("platform")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.platform))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("osVersion")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.osVersion))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("appVersion")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.appVersion))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("deviceModel")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.deviceModel))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("deviceWidth")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.deviceWidth))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["label"]
	  }, [_vm._v("deviceHeight")]), _c('text', {
	    staticClass: ["value"]
	  }, [_vm._v(_vm._s(_vm.deviceHeight))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });