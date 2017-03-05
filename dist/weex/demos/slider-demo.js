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

	var App = __webpack_require__(227)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(228)
	)

	/* script */
	__vue_exports__ = __webpack_require__(229)

	/* template */
	var __vue_template__ = __webpack_require__(230)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/slider-demo.vue"
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

/***/ 228:
/***/ function(module, exports) {

	module.exports = {
	  "img": {
	    "width": 700,
	    "height": 700
	  },
	  "title": {
	    "position": "absolute",
	    "top": 20,
	    "left": 20,
	    "paddingLeft": 20,
	    "width": 200,
	    "color": "#FFFFFF",
	    "fontSize": 36,
	    "lineHeight": 60,
	    "backgroundColor": "rgba(0,0,0,0.3)"
	  },
	  "slider": {
	    "flexDirection": "row",
	    "margin": 25,
	    "width": 700,
	    "height": 700,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#0000FF"
	  },
	  "slider-pages": {
	    "width": 700,
	    "height": 700,
	    "position": "relative"
	  },
	  "indicator": {
	    "itemColor": "green",
	    "itemSelectedColor": "red",
	    "itemSize": 50,
	    "top": 200,
	    "left": 200
	  }
	}

/***/ },

/***/ 229:
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

	module.exports = {
	  data: function data() {
	    return {
	      itemList: [{ title: 'item A', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { title: 'item B', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { title: 'item C', pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
	    };
	  },
	  methods: {
	    onchange: function onchange(event) {
	      // console.log('changed:', event.index)
	    }
	  }
	};

/***/ },

/***/ 230:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('indicator', {
	    staticClass: ["indicator"]
	  }), _c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "4500"
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }, [_vm._l((_vm.itemList), function(item) {
	    return _c('div', {
	      staticClass: ["slider-pages"]
	    }, [_c('image', {
	      staticClass: ["img"],
	      attrs: {
	        "resize": "cover",
	        "src": item.pictureUrl
	      }
	    }), _c('text', {
	      staticClass: ["title"]
	    }, [_vm._v(_vm._s(item.title))])])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });