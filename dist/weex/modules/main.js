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

	var App = __webpack_require__(183)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Created by baidu on 16/6/8.
	 */

	var stream = weex.requireModule('stream');

	var apiURL = {
	  baseurl: 'http://v3.wufazhuce.com:8000/api',
	  homePage: '/hp/bymonth/',
	  readingCarousel: '/reading/carousel',
	  readingIndex: '/reading/index/',
	  essay: '/essay/',
	  serialcontent: '/serialcontent/',
	  question: '/question/',
	  carouselList: '/reading/carousel/',
	  movieList: '/movie/list/',
	  movieDetail: '/movie/detail/'
	};

	function getData(url, callback) {
	  stream.sendHttp({
	    method: 'GET',
	    url: url
	  }, function (res) {
	    callback(JSON.parse(res));
	  });
	}

	exports.getHome = function (dateStr, callback) {
	  getData(apiURL.baseurl + apiURL.homePage + dateStr, callback);
	};

	exports.getReadingCarousel = function (callback) {
	  getData(apiURL.baseurl + apiURL.readingCarousel, callback);
	};

	exports.getReadingIndex = function (index, callback) {
	  getData(apiURL.baseurl + apiURL.readingIndex + index, callback);
	};

	exports.getEssay = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.essay + id, callback);
	};
	exports.getSerialContent = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.serialcontent + id, callback);
	};
	exports.getQuestionDetail = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.question + id, callback);
	};
	exports.getCarouseList = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.carouselList + id, callback);
	};
	exports.getMovieList = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.movieList + id, callback);
	};
	exports.getMovieDetail = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.movieDetail + id, callback);
	};

	exports.getBaseUrl = function (bundleUrl, isnav) {
	  bundleUrl = new String(bundleUrl);
	  var nativeBase = '';
	  var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/dist/';
	  } else if (isiOSAssets) {
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  } else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	      nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	    } else {
	      nativeBase = 'http://' + host + '/dist/';
	    }
	  }

	  return nativeBase;
	};

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(184)
	)

	/* script */
	__vue_exports__ = __webpack_require__(185)

	/* template */
	var __vue_template__ = __webpack_require__(190)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/main.vue"
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

/***/ 184:
/***/ function(module, exports) {

	module.exports = {
	  "content": {
	    "color": "#353535",
	    "backgroundColor": "#666666",
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "menu-item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  },
	  "home-img": {
	    "position": "absolute",
	    "width": 750,
	    "padding": 0,
	    "margin": 0,
	    "background": "no-repeat center center",
	    "backgroundSize": "cover"
	  },
	  "slider": {
	    "width": 750
	  },
	  "sentence-bg": {
	    "position": "absolute",
	    "width": 750,
	    "backgroundColor": "rgba(0,0,0,0.2)"
	  },
	  "day": {
	    "color": "#FFFFFF",
	    "textAlign": "left",
	    "fontSize": 70,
	    "lineHeight": 70,
	    "marginBottom": 0,
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "month": {
	    "color": "#FFFFFF",
	    "textAlign": "left",
	    "fontSize": 35,
	    "marginTop": 11,
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "text-content-short": {
	    "width": 710,
	    "maxHeight": 78,
	    "marginTop": 14,
	    "color": "#FFFFFF",
	    "marginLeft": 20,
	    "marginRight": 20,
	    "fontSize": 28,
	    "marginBottom": 20,
	    "WebkitBoxOrient": "vertical"
	  }
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	var dom = weex.requireModule('dom');
	var animation = weex.requireModule('animation');
	var stream = weex.requireModule('stream');
	var apis = __webpack_require__(3);

	module.exports = {
	  components: {
	    navBar: __webpack_require__(186)
	  },

	  props: {
	    currentIndex: {
	      default: 0
	    },
	    currentTranslate: {
	      default: ''
	    },
	    currentInfoTranslate: {
	      default: ''
	    },
	    imageList: {
	      default: function _default() {
	        return [];
	      }
	    },
	    showSliderContent: {
	      default: true
	    },
	    navTitle: {
	      default: ''
	    },
	    showMenu: {
	      default: false
	    },
	    showMainSlider: {
	      default: true
	    },
	    deviceHeight: {
	      default: 1024
	    },
	    rows: {
	      default: function _default() {
	        return [{ data: '2016-06' }, { data: '2016-05' }, { data: '2016-04' }, { data: '2016-03' }, { data: '2016-02' }];
	      }
	    }
	  },
	  created: function created() {
	    var self = this;
	    this.$on('navRightClick', function (e) {
	      self.showMenu = true;
	    });

	    this.$getConfig(function (config) {
	      self.deviceHeight = 750 / config.env.deviceWidth * config.env.deviceHeight - 240;
	    }.bind(this));
	  },

	  mounted: function mounted() {
	    this.getHomeData('2016-06');
	  },

	  computed: {},
	  methods: {
	    getHomeData: function getHomeData(dateStr) {
	      var self = this;
	      self.showMainSlider = false;
	      self.imageList = [];
	      apis.getHome(dateStr, function (retdata) {

	        var tempData = retdata.data;
	        self.navTitle = dateStr;
	        var monthdata = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

	        for (var i = 0; i < tempData.length; i++) {
	          var datap = tempData[i];
	          var hpMarketTime = new Date(datap.hp_makettime.split(' ')[0]);
	          datap.hpDay = hpMarketTime.getDate();
	          datap.hpMonth = monthdata[hpMarketTime.getMonth()];
	          datap.hpYear = hpMarketTime.getFullYear();
	        }
	        self.showMainSlider = true;
	        self.imageList = tempData;
	      });
	    },
	    anim: function anim(styles, el, timingFunction, duration, callback) {
	      this.$call('animation', 'transition', el, {
	        styles: styles,
	        timingFunction: timingFunction,
	        duration: duration
	      }, callback);
	    },
	    onMainImageClick: function onMainImageClick() {
	      this.currentTranslate = this.currentTranslate ? '' : 'translate(0, -100%)';
	      this.currentInfoTranslate = this.currentInfoTranslate ? '' : 'translate(0,100%)';
	      this.anim({
	        transform: this.currentTranslate
	      }, this._ids.nav.el.ref, 'ease-out', 500, function () {});
	      this.anim({
	        transform: this.currentInfoTranslate
	      }, this.$refs['img_info' + this.currentIndex], 'ease-out', 500, function () {});
	    },
	    sliderChange: function sliderChange(e) {
	      var self = this;
	      var currentItemData = self.imageList[e.index];
	      if (this.currentTranslate && this.currentInfoTranslate) {
	        this.currentTranslate = '';
	        this.currentInfoTranslate = '';
	        this.anim({
	          transform: this.currentTranslate
	        }, this._ids.nav.el.ref, 'ease-out', 500, function () {});
	        this.anim({
	          transform: this.currentInfoTranslate
	        }, self.$refs['img_info' + self.currentIndex], 'ease-out', 500, function () {});
	      }
	      this.currentIndex = e.index;
	    },
	    hideMenu: function hideMenu(e) {
	      var self = this;
	      this.anim({
	        opacity: 0
	      }, this.$refs['menuDiv'], 'ease-out', 200, function () {
	        self.showMenu = false;
	      });
	    },
	    onMenuItemclick: function onMenuItemclick(e) {
	      this.$call('modal', 'toast', {
	        'message': 'row ' + e.target.attr.rowdata + ' clicked',
	        'duration': 2.0
	      });
	      this.getHomeData(e.target.attr.rowdata);
	      this.hideMenu(e);
	    }
	  }
	};

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(187)
	)

	/* script */
	__vue_exports__ = __webpack_require__(188)

	/* template */
	var __vue_template__ = __webpack_require__(189)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/nav-bar.vue"
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

/***/ 187:
/***/ function(module, exports) {

	module.exports = {
	  "nav_bar": {
	    "backgroundColor": "rgba(0,0,0,0.3)",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "height": 99
	  },
	  "nav_title": {
	    "color": "#eeeeee",
	    "textAlign": "center",
	    "fontWeight": "bold",
	    "marginLeft": 20
	  },
	  "nav_right_icon": {
	    "width": 40,
	    "height": 40,
	    "marginRight": 25
	  }
	}

/***/ },

/***/ 188:
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

	var modal = weex.requireModule('modal');

	exports.default = {
	  props: {
	    title: {
	      default: ''
	    }, showIcon: {
	      default: true
	    }, justifyContent: {
	      default: 'space-between'
	    }
	  },
	  methods: {
	    navRightClick: function navRightClick(e) {
	      this.$emit('navRightClick', {});
	    }
	  }
	};

/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["nav_bar"]
	  }, [_c('text', {
	    staticClass: ["nav_title"],
	    attrs: {
	      "value": "ONE",
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v("ONE " + _vm._s(_vm.title))]), _c('image', {
	    staticClass: ["nav_right_icon"],
	    attrs: {
	      "src": "http://image.wufazhuce.com/m.wufazhuce.com-menu-white.png"
	    },
	    on: {
	      "click": _vm.navRightClick
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 190:
/***/ function(module, exports) {

	module.exports={render:function(){},staticRenderFns:[]}

/***/ }

/******/ });