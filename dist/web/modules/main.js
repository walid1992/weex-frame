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

	var App = __webpack_require__(237)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 4:
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

/***/ 9:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(11)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },

/***/ 11:
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(238)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(240),
	  /* template */
	  __webpack_require__(246),
	  /* scopeId */
	  "data-v-567a4c1c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/main.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-567a4c1c", Component.options)
	  } else {
	    hotAPI.reload("data-v-567a4c1c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(239);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(10)("048885d0", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-567a4c1c&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-567a4c1c&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.content[data-v-567a4c1c] {\n  color: #353535;\n  background-color: #666;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.menu-item[data-v-567a4c1c] {\n  justify-content: center;\n  border-bottom-width: 2px;\n  border-bottom-color: #c0c0c0;\n  height: 100px;\n  padding: 20px;\n}\n.home-img[data-v-567a4c1c] {\n  position: absolute;\n  width: 750px;\n  padding: 0;\n  margin: 0;\n  background: no-repeat center center;\n  background-size: cover;\n}\n.slider[data-v-567a4c1c] {\n  width: 750px;\n}\n.sentence-bg[data-v-567a4c1c] {\n  position: absolute;\n  width: 750px;\n  background-color: rgba(0, 0, 0, .2);\n}\n.day[data-v-567a4c1c] {\n  color: white;\n  text-align: left;\n  font-size: 70px;\n  line-height: 70px;\n  margin-bottom: 0px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.month[data-v-567a4c1c] {\n  color: white;\n  text-align: left;\n  font-size: 35px;\n  margin-top: 11px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.text-content-short[data-v-567a4c1c] {\n  width: 710px;\n  max-height: 78px;\n  margin-top: 14px;\n  color: white;\n  margin-left: 20px;\n  margin-right: 20px;\n  font-size: 28px;\n  margin-bottom: 20px;\n  -webkit-box-orient: vertical;\n}\n\n\n", ""]);

	// exports


/***/ },

/***/ 240:
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
	var apis = __webpack_require__(4);

	module.exports = {
	  components: {
	    navBar: __webpack_require__(241)
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

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(242)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(244),
	  /* template */
	  __webpack_require__(245),
	  /* scopeId */
	  "data-v-4e84b354",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/nav-bar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] nav-bar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4e84b354", Component.options)
	  } else {
	    hotAPI.reload("data-v-4e84b354", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(243);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(10)("32055bb1", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e84b354&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./nav-bar.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4e84b354&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./nav-bar.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.nav_bar[data-v-4e84b354] {\n  background-color: rgba(0, 0, 0, .3);\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 99px;\n}\n.nav_title[data-v-4e84b354] {\n  color: #eee;\n  text-align: center;\n  font-weight: bold;\n  margin-left: 20px;\n}\n.nav_right_icon[data-v-4e84b354] {\n  width: 40px;\n  height: 40px;\n  margin-right: 25px;\n}\n\n", ""]);

	// exports


/***/ },

/***/ 244:
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

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "nav_bar"
	  }, [_c('text', {
	    staticClass: "nav_title",
	    attrs: {
	      "value": "ONE",
	      "navi-item-position": "center"
	    }
	  }, [_vm._v("ONE " + _vm._s(_vm.title))]), _vm._v(" "), _c('image', {
	    staticClass: "nav_right_icon",
	    attrs: {
	      "src": "http://image.wufazhuce.com/m.wufazhuce.com-menu-white.png"
	    },
	    on: {
	      "click": _vm.navRightClick
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4e84b354", module.exports)
	  }
	}

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function(){},staticRenderFns:[]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-567a4c1c", module.exports)
	  }
	}

/***/ }

/******/ });