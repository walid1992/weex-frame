[![GitHub release](https://img.shields.io/github/release/osmartian/weex-frame.svg)](https://github.com/osmartian/weex-frame/releases)  [![GitHub issues](https://img.shields.io/github/issues/osmartian/weex-frame.svg)](https://github.com/osmartian/weex-frame/issues)
![Node Version](https://img.shields.io/node/v/martian-cli.svg "Node Version")

# weex-frame

> weex 基于vue2.0开发框架，包括三端集成、组件库提供、weex api封装~

目前 Weex 官网域名统计如下：

    https://weex.apache.org : Apache 官网地址，部署于 apache 仓库，国内访问速度较慢。
    https://weex-project.io : Weex 官网中国镜像，部署于阿里云，国内访问速度较快。

大家可根据实际需求选择访问。

# 工作原理

先简单熟悉一下weex的工作原理，这里引用一下weex官网上的一张图片，[详细信息见官网](https://weex.apache.org/cn/guide/intro/how-it-works.html)

![Weex工作原理](http://upload-images.jianshu.io/upload_images/2843033-a11114f55ceb7478.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

# 开发环境搭建

## weex 开发环境搭建

[关于weex开发环境搭建问题见官方文档](https://weex.apache.org/cn/guide/set-up-env.html)

## android 、iOS 开发环境

[关于native开发环境搭建问题见官方文档](https://weex.apache.org/cn/guide/integrate-to-your-app.html)

# 框架说明

## 基于vue2.0搭建

像前面说的那样weex和vue一直在努力的进行生态互通，而且weex实现web标准化是早晚的问题，所以也建议开发者不要在用.we做后缀来开发了

## native端多页模式、web端采用单页模式

* 单页形态对于原生可能体验不够好，所以android与ios端采用多页模式
* web端沿用spa模式标准

## 集成三端（android、ios、h5平台）

关于android、ios、h5平台的集成与打包问题，在项目中都以解决~

##  集成 weexpack 工具

可以使用weexpack相关功能~

##  集成eslint代码检查

代码检查是必要的操作，为了能够拥有vue开发的体验，将eslint集成进来~

##  提供开源组件库OSC

weex-frame提供了，开源组件库OSC，降低开发者入门门槛~

**注：**

由于weexpack暂不支持vue问题，打包相关后续会集成进来~

# 框架介绍

## package.json依赖

```
  "dependencies": {
    "vue": "^2.2.5",
    "vue-router": "^2.3.0",
    "vuex": "^2.2.1",
    "vuex-router-sync": "^4.0.1",
    "weex-vue-render": "^0.1.9"
  },
  "devDependencies": {
    "babel-core": "^6.20.0",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^6.2.9",
    "babel-preset-es2015": "^6.18.0",
    "css-loader": "^0.26.4",
    "eslint": "^3.15.0",
    "eslint-config-standard": "^6.2.1",
    "eslint-loader": "^1.6.1",
    "eslint-plugin-html": "^2.0.1",
    "eslint-plugin-promise": "^3.4.2",
    "eslint-plugin-standard": "^2.0.1",
    "postcss-cssnext": "^2.9.0",
    "serve": "^1.4.0",
    "vue-loader": "^10.3.0",
    "vue-template-compiler": "^2.2.5",
    "webpack": "^1.14.0",
    "weex-devtool": "^0.2.64",
    "weex-loader": "^0.4.4"
  }
```

## 打包配置

1、 遍历.vue文件后缀，生成相应的entry.js文件

```
function getEntryFileContent (entryPath, vueFilePath) {
  const relativePath = path.relative(path.join(entryPath, '../'), vueFilePath);
  return 'let App = require("${relativePath}")
          // 全局注册 root 组件
          Vue.component('root', require("components/root"))
          // 全局注册 navpage 组件
          Vue.component('navpage', require("components/navpage"))
          App.el = '#root'
          new Vue(App)'
}

...

```

2、通过weex-loader打包生成native jsbundle
3、 通过weex-vue-loader打包生成web jsbundle

```

...

const webConfig = getBaseConfig()
webConfig.entry = {
  entry: path.resolve('./src/entry.js')
}
webConfig.output = {
  path: 'dist/web',
  filename: '[name].js'
}
webConfig.module.loaders[1].loaders.push('vue')

const weexConfig = getBaseConfig()
weexConfig.output.filename = 'weex/[name].js'
weexConfig.module.loaders[1].loaders.push('weex')
```

## 项目结构

```
weex-frame
├── platforms (平台项目)
│      │
│      ├── android 
│      └── ios
│
├── src （weex模块）
│      ├── api (api模块)
│      ├── components（组件模块） 
│      ├── constants（常量配置）   
│      ├── utils （工具模块）   
│      └── views（视图模块）  
│
└── dist （build输出模块）
       ├── weex (native使用jsbundle)
       └── web（web使用jsbundle） 
```

## 组件库介绍

### osc-navbar 

> 三端导航条

### osc-navpage

> 三端导航页，适配iOS顶部20px问题

**代码示例：**

```
<osc-navpage
    :title="title"
    leftItemSrc="https://gitlab.com/toonteam/weex/raw/ce656f79084ed9db357f8abd76c6e6c82dc5a28d/src/views/person-info/imgs/back.png"
    rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
    @naviBarLeftItemClick="onBack"
    @naviBarRightItemClick="onReload">
  <web class='web' ref='webview' :src='url' @pagestart='start' @pagefinish='finish'></web>
</osc-navpage>
```

### [osc-root详细示例](/doc/components/osc-root.md)

> 界面根view，适配iOS顶部20px问题

代码示例：

```
<osc-root>
  <text>OsMartian Root</text>
</osc-root>
```

### osc-tabbar

> 底部tabbar

**代码示例：**

```
<osc-tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></osc-tabbar>
```

### osc-tabitem

> 底部tabbaritem元素

### osc-list

> list组件封装上拉刷新 上拉加载

### osc-scroller

> scroller组件封装上拉刷新 上拉加载

## 项目启动

1. git clone git@github.com:osmartian/weex-frame.git
2. cd weex-frame
3. 安装weexpack

```
npm install -g weexpack
```

4. npm install
5. 执行 ./start
6. 设置调试环境

```
// 调试本地serve
npm run init serve
// 调试assets或者jsbundle文件
npm run init local
```

### android 启动

1. 打开andorid studio
2. File -> New -> Import Project -> weex-frame/platforms/android -> 启动

或者：

```
weexpack run android
```

### iOS 启动

1. cd weex-frame/platforms/android
2. pod install (未安装pod，请先安装)
3. open WeexFrame.xcworkspace

或者：

```
weexpack run ios
```

### h5 启动方式

打开 [http://localhost:8080/web/index.html](http://localhost:8080/web/index.html)
 
或者：

```
weexpack run web
```

## 项目示例

### h5 端示例

![h5我的页面](http://upload-images.jianshu.io/upload_images/2843033-2c404d16e05b8f0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![h5发起页面](http://upload-images.jianshu.io/upload_images/2843033-8eda0114ba0ca246.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

### android 端示例

![android首页](http://upload-images.jianshu.io/upload_images/2843033-26182ae64ca5171a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![android我的页面](http://upload-images.jianshu.io/upload_images/2843033-d1c5d7de21ce940e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![android发起页面](http://upload-images.jianshu.io/upload_images/2843033-d92f0ba3f5af4372.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

### iOS 端示例

![iOS首页](http://upload-images.jianshu.io/upload_images/2843033-120c80bc608d0471.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![iOS我的页面](http://upload-images.jianshu.io/upload_images/2843033-95742f3b0dc964fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![iOS发起页面](http://upload-images.jianshu.io/upload_images/2843033-55bbaf814b08c429.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)
