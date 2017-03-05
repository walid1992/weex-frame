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

	var App = __webpack_require__(195)
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

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(179)
	)

	/* script */
	__vue_exports__ = __webpack_require__(180)

	/* template */
	var __vue_template__ = __webpack_require__(181)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/nav-bar-normal.vue"
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

/***/ 179:
/***/ function(module, exports) {

	module.exports = {
	  "text-type": {
	    "color": "#29a7e2",
	    "marginLeft": 10
	  },
	  "nav_bar": {
	    "flexDirection": "row",
	    "marginBottom": 10,
	    "height": 99
	  },
	  "nav_logo": {
	    "width": 75,
	    "height": 30
	  },
	  "nav_title": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "separate-item-text": {
	    "height": 1,
	    "backgroundColor": "#d4d4d4"
	  }
	}

/***/ },

/***/ 180:
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

	var modal = weex.requireModule('modal');

	exports.default = {
	  props: {
	    title: {
	      default: '阅读'
	    },
	    justifyContent: {
	      default: 'center'
	    },
	    showback: {
	      default: false
	    }
	  },
	  methods: {
	    onBackClick: function onBackClick(e) {
	      this.$emit('onbackclick', {});
	    }
	  }
	};

/***/ },

/***/ 181:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["nav_bar"]
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }, [(_vm.showback) ? _c('image', {
	    staticStyle: {
	      width: "99px",
	      height: "99px"
	    },
	    attrs: {
	      "src": "https://github.com/dodola/WeexOne/raw/master/imgs/return_image.png"
	    },
	    on: {
	      "click": _vm.onBackClick
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["nav_title"]
	  }, [_c('image', {
	    staticClass: ["nav_logo"],
	    attrs: {
	      "src": "http://image.wufazhuce.com/m.wufazhuce.com-logo-gray-pure.png"
	    }
	  }), _c('text', {
	    staticClass: ["text-type"]
	  }, [_vm._v("|" + _vm._s(_vm.title))])]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })]), _c('div', {
	    staticClass: ["separate-item-text"]
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(196)
	)

	/* script */
	__vue_exports__ = __webpack_require__(197)

	/* template */
	var __vue_template__ = __webpack_require__(198)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/movie-detail.vue"
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

/***/ 196:
/***/ function(module, exports) {

	module.exports = {
	  "slider": {
	    "width": 750,
	    "height": 440
	  },
	  "video": {
	    "width": 750,
	    "height": 460
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 690,
	    "height": 20,
	    "top": 400,
	    "left": 240,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "rgb(40, 96, 144)"
	  }
	}

/***/ },

/***/ 197:
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

	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');
	var apis = __webpack_require__(3);

	module.exports = {
	  components: {
	    navBarNormal: __webpack_require__(178),
	    wxcPanel: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"weex-vue-components/panel.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	  },

	  props: {
	    playStatus: {
	      default: 'play'
	    },
	    video: {
	      default: ''
	    },
	    title: {
	      default: ''
	    },
	    officialstory: {
	      default: ''
	    },
	    info: {
	      default: ''
	    },
	    photo: {
	      default: function _default() {
	        return [];
	      }
	    }

	  },
	  created: function created() {
	    var self = this;
	    var bundleUrl = this.$getConfig().bundleUrl;
	    var contentId = self.getParameterByName('id', bundleUrl);
	    if (contentId.lastIndexOf('?') != -1) {
	      contentId = contentId.substr(0, contentId.lastIndexOf('?'));
	    }
	    //请求数据
	    apis.getMovieDetail(contentId, function (ret) {
	      self.video = ret.data.video;
	      self.title = ret.data.title;
	      self.officialstory = ret.data.officialstory;
	      self.info = ret.data.info;
	      self.photo = ret.data.photo;
	    });

	    this.$on('onbackclick', function (e) {
	      var params = {
	        'animated': 'true'
	      };
	      navigator.pop(params, function (e) {
	        //callback
	      });
	    });
	  },

	  methods: {
	    getParameterByName: function getParameterByName(name, url) {
	      name = name.replace(/[\[\]]/g, '\\$&');
	      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	      var results = regex.exec(url);
	      if (!results) {
	        return null;
	      }
	      if (!results[2]) {
	        return '';
	      }
	      return decodeURIComponent(results[2].replace(/\+/g, ' '));
	    },
	    pause: function pause() {
	      this.playStatus = 'pause';
	    },
	    play: function play() {
	      this.playStatus = 'play';
	    },
	    onpause: function onpause() {
	      this.$call('modal', 'toast', { 'message': 'video pause' });
	    },
	    onstart: function onstart() {
	      this.$call('modal', 'toast', { 'message': 'video start' });
	    },
	    onfinish: function onfinish() {
	      this.$call('modal', 'toast', { 'message': 'video finish' });
	    },
	    onfail: function onfail() {
	      this.$call('modal', 'toast', { 'message': 'video fail' });
	    }
	  }
	};

/***/ },

/***/ 198:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('nav-bar-normal', {
	    attrs: {
	      "showback": "true",
	      "title": "电影"
	    }
	  }), _c('scroller', [_c('slider', {
	    staticClass: ["slider"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree",
	      "autoPlay": "true"
	    }
	  }, [_vm._l((_vm.photo), function(i) {
	    return _c('div', [_c('image', {
	      staticClass: ["slider"],
	      attrs: {
	        "src": i
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2), _c('text', {
	    staticStyle: {
	      width: "750px",
	      fontWeight: "bold",
	      fontSize: "48px",
	      textAlign: "center",
	      color: "#333",
	      marginTop: "40px",
	      marginBottom: "40px"
	    }
	  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]), _c('wxc-panel', {
	    attrs: {
	      "title": "演员",
	      "type": "primary"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.info))])]), _c('wxc-panel', {
	    attrs: {
	      "title": "剧情",
	      "type": "primary"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.officialstory))])])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });