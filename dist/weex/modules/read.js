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

	var App = __webpack_require__(203)
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

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(204)
	)

	/* script */
	__vue_exports__ = __webpack_require__(205)

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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/read.vue"
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

/***/ 204:
/***/ function(module, exports) {

	module.exports = {
	  "top-slider": {
	    "flexDirection": "row",
	    "height": 360,
	    "width": 750
	  },
	  "slider-item": {
	    "height": 360,
	    "width": 750
	  },
	  "reading-list": {
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "refresh-view": {
	    "height": 80,
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow": {
	    "fontSize": 30,
	    "color": "#45b5f0"
	  },
	  "row": {
	    "width": 750
	  },
	  "reading-item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d4d4d4",
	    "padding": 20
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 690,
	    "height": 400,
	    "top": 140,
	    "left": 240,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "#45b5f0",
	    "itemSize": 15
	  }
	}

/***/ },

/***/ 205:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

	exports.default = {
	  components: {
	    navBarNormal: __webpack_require__(178),
	    readItem: __webpack_require__(206)
	  },

	  props: {
	    currentIndex: {
	      default: 0
	    },
	    showSliderCell: {
	      default: false
	    },
	    refreshDisplay: {
	      default: 'hide'
	    },
	    loadingDisplay: {
	      default: 'hide'
	    },
	    imageList: {
	      default: function _default() {
	        return [];
	      }
	    },
	    readingList: {
	      default: function _default() {
	        return [];
	      }
	    },
	    showListItem: {
	      default: false
	    },
	    baseURL: {
	      default: ''
	    }
	  },
	  computed: {},
	  methods: {
	    onrefresh: function onrefresh(e) {
	      var self = this;
	      self.refreshDisplay = 'show';
	      self.currentIndex = 0;
	      self.getCarouselData();
	      self.getReadingIndex(self.currentIndex, false);
	      self.refreshDisplay = 'hide';
	    },
	    onloading: function onloading(e) {
	      var self = this;
	      this.loadingDisplay = 'show';
	      self.refreshDisplay = 'show';
	      self.getReadingIndex(++self.currentIndex, true);
	      self.loadingDisplay = 'hide';
	      self.refreshDisplay = 'hide';
	    },
	    getReadingIndex: function getReadingIndex(index, loadmore) {
	      var self = this;
	      apis.getReadingIndex(index, function (ret) {
	        if (!loadmore) {
	          self.readingList = [];
	        }
	        for (var i = 0; i < ret.data.length; i++) {
	          var items = ret.data[i].items;
	          for (var j = 0; j < items.length; j++) {
	            items[j].showType1 = items[j].type == 1;
	            items[j].showType2 = items[j].type == 2;
	            items[j].showType3 = items[j].type == 3;
	            self.readingList.push(items[j]);
	          }
	        }
	        self.showListItem = self.readingList.length > 0;
	      });
	    },
	    getCarouselData: function getCarouselData() {
	      var self = this;
	      self.showSliderCell = false;
	      apis.getReadingCarousel(function (ret) {
	        self.imageList = ret.data;
	        self.showSliderCell = true;
	      });
	    },
	    onSliderItemClick: function onSliderItemClick(e) {
	      var self = this;
	      var itemid = e.target.attr.itemid;
	      var title = e.target.attr.itemtitle;
	      var params = {
	        'url': this.baseURL + 'modules/carouse-list.js?id=' + itemid + '&title=' + title,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
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
	  },
	  created: function created() {
	    this.currentIndex = 0;
	    this.getCarouselData();
	    this.getReadingIndex(this.currentIndex, false);
	    this.baseURL = apis.getBaseUrl(this.$getConfig().bundleUrl, true);
	  }
	};

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(207)
	)

	/* script */
	__vue_exports__ = __webpack_require__(208)

	/* template */
	var __vue_template__ = __webpack_require__(209)
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
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/read-item.vue"
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

/***/ 207:
/***/ function(module, exports) {

	module.exports = {
	  "item-text": {
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "text-title": {
	    "color": "#000000",
	    "fontSize": 36,
	    "marginTop": 20,
	    "fontWeight": "bold"
	  },
	  "text-author": {
	    "color": "#000000",
	    "fontSize": 24,
	    "marginTop": 10
	  },
	  "date": {
	    "color": "#7a7a7a",
	    "marginTop": 30
	  },
	  "text-more": {
	    "color": "#29a7e2",
	    "marginTop": 19
	  },
	  "text-content-short": {
	    "maxHeight": 78,
	    "marginTop": 28,
	    "color": "#333333",
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "display": "-webkit-box"
	  }
	}

/***/ },

/***/ 208:
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

	exports.default = {
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

/***/ 209:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item-text"]
	  }, [_c('text', {
	    staticClass: ["date"]
	  }, [_vm._v("Jun 8, 2016")]), _c('text', {
	    staticClass: ["text-title"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
	    staticClass: ["text-author"]
	  }, [_vm._v("作者／" + _vm._s(_vm.author))]), _c('text', {
	    staticClass: ["text-content-short"]
	  }, [_vm._v(_vm._s(_vm.content))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports={render:function(){},staticRenderFns:[]}

/***/ }

/******/ });