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

	var App = __webpack_require__(171)
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

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(168)
	)

	/* script */
	__vue_exports__ = __webpack_require__(169)

	/* template */
	var __vue_template__ = __webpack_require__(170)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/carouse-item.vue"
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

/***/ 168:
/***/ function(module, exports) {

	module.exports = {
	  "item-text": {
	    "marginTop": 10,
	    "marginBottom": 40
	  },
	  "text-title": {
	    "color": "#FFFFFF",
	    "fontSize": 36,
	    "marginTop": 20,
	    "fontWeight": "bold"
	  },
	  "text-author": {
	    "marginTop": 20,
	    "color": "#c7edf2"
	  },
	  "text-content-short": {
	    "marginTop": 20,
	    "color": "#c7edf2",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "display": "-webkit-box"
	  }
	}

/***/ },

/***/ 169:
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

	module.exports = {
	  methods: {},
	  props: {
	    date: {
	      default: ''
	    }, title: {
	      default: ''
	    }, author: {
	      default: ''
	    }, content: {
	      default: ''
	    }
	  }
	};

/***/ },

/***/ 170:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item-text"]
	  }, [_c('text', {
	    staticClass: ["text-title"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
	    staticClass: ["text-author"]
	  }, [_vm._v(_vm._s(_vm.author))]), _c('text', {
	    staticClass: ["text-content-short"]
	  }, [_vm._v(_vm._s(_vm.content))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(172)
	)

	/* script */
	__vue_exports__ = __webpack_require__(173)

	/* template */
	var __vue_template__ = __webpack_require__(174)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/carouse-list.vue"
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

/***/ 172:
/***/ function(module, exports) {

	module.exports = {
	  "reading-list": {
	    "marginLeft": 80,
	    "marginRight": 80
	  },
	  "nav_bar": {
	    "backgroundColor": "#1db7ca",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "height": 100
	  },
	  "text-type": {
	    "color": "#FFFFFF",
	    "textAlign": "center",
	    "marginLeft": 10
	  }
	}

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _api = __webpack_require__(3);

	var _api2 = _interopRequireDefault(_api);

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

	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');


	module.exports = {
	  components: {
	    carouseItem: __webpack_require__(167)
	  },

	  props: {
	    title: {
	      default: ''
	    }, readingList: {
	      default: function _default() {
	        return [];
	      }
	    }, baseURL: {
	      default: ''
	    }
	  },
	  created: function created() {
	    var self = this;
	    var bundleUrl = this.$getConfig().bundleUrl;
	    var contentId = self.getParameterByName('id', bundleUrl);
	    if (contentId.lastIndexOf('?') != -1) {
	      contentId = contentId.substr(0, contentId.lastIndexOf('?'));
	    }
	    self.title = self.getParameterByName('title', bundleUrl);
	    if (self.title.lastIndexOf('?') != -1) {
	      self.title = self.title.substr(0, self.title.lastIndexOf('?'));
	    }
	    _api2.default.getCarouseList(contentId, function (ret) {
	      for (var i = 0; i < ret.data.length; i++) {
	        var item = ret.data[i];
	        item.showType1 = item.type == 1;
	        item.showType2 = item.type == 2;
	        item.showType3 = item.type == 3;
	        self.readingList.push(item);
	      }
	    });

	    this.baseURL = _api2.default.getBaseUrl(bundleUrl, true);
	  },

	  methods: {
	    onBackClick: function onBackClick(e) {
	      var params = {
	        'animated': 'true'
	      };
	      navigator.pop(params, function (e) {
	        //callback
	      });
	    },
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
	    onReadCellClick: function onReadCellClick(e) {
	      var itemid = e.target.attr.cid;
	      this.openEssayDetail(itemid);
	    },
	    onSerialCellClick: function onSerialCellClick(e) {
	      var itemid = e.target.attr.cid;
	      this.openSerialDetail(itemid);
	    },
	    onQuestionCellClick: function onQuestionCellClick(e) {
	      var itemid = e.target.attr.cid;
	      this.openQuestionDetail(itemid);
	    },
	    openEssayDetail: function openEssayDetail(id) {
	      var params = {
	        'url': this.baseURL + 'modules/essay-detail.js?id=' + id,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
	    },
	    openSerialDetail: function openSerialDetail(id) {
	      var params = {
	        'url': this.baseURL + 'modules/serial-detail.js?id=' + id,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
	    },
	    openQuestionDetail: function openQuestionDetail(id) {
	      var params = {
	        'url': this.baseURL + 'modules/question-detail.js?id=' + id,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
	    }
	  }
	};

/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports={render:function(){},staticRenderFns:[]}

/***/ }

/******/ });