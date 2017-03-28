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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @author walid
	 * @date 2016/03/20
	 * @description 程序入口启动配置
	 */

	const App = __webpack_require__(10)

	// 注册全局 component
	Vue.component('osc-root', __webpack_require__(10))
	Vue.component('osc-navpage', __webpack_require__(14))
	Vue.component('osc-navbar', __webpack_require__(18))
	Vue.component('osc-tabbar', __webpack_require__(22))
	Vue.component('osc-list', __webpack_require__(30))
	Vue.component('osc-scroller', __webpack_require__(35))

	// 注册全局 module
	// weex.registerModule('api', require('utils/api'))
	// weex.registerModule('route', require('constants/route'))

	App.el = '#root'
	new Vue(App)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @Author   : walid
	 * @Data     : 2017-03-20  18:32
	 * @Describe : 封装weex实例对象
	 */

	function isIOS() {
	  return weex.config.env ? weex.config.env.platform === 'iOS' : false;
	}

	function getDeviceInfo() {
	  var env = weex.config.env;
	  var deviceWidth = env.deviceWidth;
	  var deviceHeight = env.deviceHeight;
	  return {
	    deviceWidth: deviceWidth,
	    deviceHeight: deviceHeight
	  };
	}

	exports.default = {
	  isIOS: isIOS, getDeviceInfo: getDeviceInfo
	};

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-root.vue"
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
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "height": 1334,
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      isIOS: _instance2.default.isIOS()
	    };
	  },


	  props: {
	    backgroundColor: { default: '#eeeeee' }
	  }
	}; //
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

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.isIOS) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(15)
	)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-navpage.vue"
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
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "wrapper": {
	    "width": 750
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      isIOS: _instance2.default.isIOS()
	    };
	  },


	  props: {
	    dataRole: { default: 'none' },
	    backgroundColor: { default: '#0099FF' },
	    height: { default: 88 },
	    title: { default: '' },
	    titleColor: { default: 'white' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'white' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'white' }
	  },

	  methods: {
	    naviBarRightItemClick: function naviBarRightItemClick(e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	}; //
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

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, [(_vm.isIOS) ? _c('div', {
	    style: {
	      width: '750px',
	      height: '40px',
	      backgroundColor: _vm.backgroundColor
	    }
	  }) : _vm._e(), _c('osc-navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(19)
	)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(21)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-navbar.vue"
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
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "flexDirection": "row",
	    "width": 750,
	    "padding": 20,
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "text": {
	    "fontSize": 32
	  },
	  "img": {
	    "width": 50,
	    "height": 50
	  },
	  "title": {
	    "fontSize": 30,
	    "fontWeight": "bold",
	    "maxWidth": 360,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ },
/* 20 */
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

	exports.default = {
	  props: {
	    // navbar
	    dataRole: { default: 'none' },
	    //导航条背景色
	    backgroundColor: { default: '#0099FF' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'white' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'white' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'white' }
	  },
	  methods: {
	    onClickRight: function onClickRight(e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onClickLeft: function onClickLeft(e) {
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"],
	    style: {
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [_c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.leftItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle) + "\n    ")]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onClickLeft
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [_c('text', {
	    staticClass: ["title"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["div-wrap"]
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle) + "\n    ")]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onClickRight
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(29)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-tabbar.vue"
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
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

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

	exports.default = {
	  props: {
	    tabItems: { default: [] },
	    selectedColor: { default: '#ff0000' },
	    unselectedColor: { default: '#000000' }
	  },
	  data: function data() {
	    return {
	      selectedIndex: 0
	    };
	  },

	  components: {
	    tabitem: __webpack_require__(25)
	  },
	  created: function created() {
	    this.select(this.selectedIndex);
	  },

	  methods: {
	    tabItemOnClick: function tabItemOnClick(e) {
	      this.selectedIndex = e.index;
	      this.select(e.index);
	      this.$emit('tabBarOnClick', e);
	    },
	    select: function select(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(26)
	)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-tabitem.vue"
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
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 27 */
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

	exports.default = {
	  props: {
	    index: { default: 0 },
	    title: { default: '' },
	    titleColor: { default: '#000000' },
	    icon: { default: '' },
	    backgroundColor: { default: '#ffffff' }
	  },
	  methods: {
	    onclickitem: function onclickitem(e) {
	      this.$emit('tabItemOnClick', {
	        index: this.index
	      });
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _c('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item, index) {
	    return _c('embed', {
	      key: index,
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _c('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.tabItems), function(item, index) {
	    return _c('tabitem', {
	      key: index,
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(31)
	)

	/* script */
	__vue_exports__ = __webpack_require__(32)

	/* template */
	var __vue_template__ = __webpack_require__(34)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-list/index.vue"
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
/* 31 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toast = __webpack_require__(33);

	var _toast2 = _interopRequireDefault(_toast);

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this2 = this;

	      if (this.refreshPause) {
	        return;
	      }
	      this.$emit('refresh', e);
	      this.refreshPause = true;
	      this.refreshDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this2.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this2.refreshDisplay === 'show') {
	          _this2.refreshDisplay = 'hide';
	          _this2.refreshPause = true;
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this3 = this;

	      if (this.loadingPause) {
	        return;
	      }
	      this.$emit('loading', e);
	      this.loadingPause = true;
	      this.loadingDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.loadingDisplay === 'show') {
	          _this3.loadingPause = true;
	          _this3.loadingDisplay = 'hide';
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author walid
	 * @date 2017/3/4
	 * @description weex toast 工具类
	 */

	var modal = weex.requireModule('modal');

	function show(_ref) {
	  var message = _ref.message,
	      duration = _ref.duration;

	  if (!message) {
	    return;
	  }
	  modal.toast({
	    message: message,
	    duration: duration | 2.0
	  });
	}

	exports.default = {
	  show: show
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(36)
	)

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(38)
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
	__vue_options__.__file = "/Users/walid/Desktop/dev/weex/weex-frame/src/components/osc-scroller/index.vue"
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
/* 36 */
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "width": 750
	  },
	  "div-refresh": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "div-loading": {
	    "width": 750,
	    "height": 100,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text-tip": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "indicator": {
	    "width": 40,
	    "height": 40,
	    "color": "#45b5f0"
	  }
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toast = __webpack_require__(33);

	var _toast2 = _interopRequireDefault(_toast);

	var _instance = __webpack_require__(8);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	exports.default = {
	  data: function data() {
	    return {
	      refreshDisplay: 'hide',
	      loadingDisplay: 'hide',
	      refreshPause: false,
	      loadingPause: false
	    };
	  },

	  props: {
	    refreshTip: {
	      type: String,
	      default: '↓ 下拉刷新'
	    },
	    loadingTip: {
	      type: String,
	      default: '↑ 上拉加载'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$on('refreshDone', function (e) {
	      _this.refreshDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });

	    this.$on('loadingDone', function (e) {
	      _this.loadingDisplay = 'hide';
	      _toast2.default.show({
	        message: '刷新数据成功~'
	      });
	    });
	  },


	  methods: {
	    onRefresh: function onRefresh(e) {
	      var _this2 = this;

	      if (this.refreshPause) {
	        return;
	      }
	      this.$emit('refresh', e);
	      this.refreshPause = true;
	      this.refreshDisplay === 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this2.refreshPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this2.refreshDisplay = 'show') {
	          _this2.refreshDisplay = 'hide';
	          _this2.refreshPause = true;
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    },
	    onLoading: function onLoading(e) {
	      var _this3 = this;

	      if (this.loadingPause) {
	        return;
	      }
	      this.$emit('loading', e);
	      this.loadingPause = true;
	      this.loadingDisplay = 'show';
	      // 三秒之内只允许一次加载
	      setTimeout(function () {
	        _this3.loadingPause = false;
	      }, 3000);
	      // 十秒超时
	      setTimeout(function () {
	        if (_this3.loadingDisplay === 'show') {
	          _this3.loadingPause = true;
	          _this3.loadingDisplay = 'hide';
	          _toast2.default.show({
	            message: '网络请求超时~'
	          });
	        }
	      }, 10000);
	    }
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["root"]
	  }, [_c('refresh', {
	    staticClass: ["div-refresh"],
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.onRefresh
	    }
	  }, [(_vm.refreshDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.refreshTip))]) : _vm._e(), _c('loading-indicator', {
	    staticClass: ["indicator"]
	  })], 1), _vm._t("default"), _c('loading', {
	    staticClass: ["div-loading"],
	    attrs: {
	      "display": _vm.loadingDisplay
	    },
	    on: {
	      "loading": _vm.onLoading
	    }
	  }, [(_vm.loadingDisplay === 'hide') ? _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v(_vm._s(_vm.loadingTip))]) : _c('text', {
	    staticClass: ["text-tip"]
	  }, [_vm._v("加载中...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);