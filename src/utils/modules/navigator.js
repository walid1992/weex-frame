/**
 * @author walid
 * @date 2017/3/4
 * @description 界面跳转工具类
 */

import qs from 'qs'
import ip from 'config'
import instance from 'utils/weex/instance'
import route from 'constants/route'
let navigator = weex.requireModule('navigator')

function getBaseUrl() {
  let bundleUrl = weex.config.bundleUrl
  let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
  let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0
  let nativeBase = ''
  if (isAndroidAssets) {
    nativeBase = 'file://assets/dist/weex/'
  } else if (isiOSAssets) {
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('weex/') + 5)
  } else {
    let host = `${ip}:8080`
    let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
    if (matches && matches.length >= 2) {
      host = matches[1]
    }
    nativeBase = `http://${host}/dist/weex/`
  }
  let h5Base = '?page=./dist/web/'
  // // in Browser or WebView
  let inBrowserOrWebView = typeof window === 'object'
  return inBrowserOrWebView ? h5Base : nativeBase
}

function pushWeb(url, params) {
  if (instance.isWeb()) {
    pushByUrl(url, params)
    return
  }
  params = params ? params : {}
  params.url = url
  push(route.web, params)
}

function pushByUrl(url, params) {
  navigator.push({
    url: params ? `url?${qs.stringify(params)}` : url,
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

function push(route, params) {
  let url = params ? `${getBaseUrl()}${route}.js?${qs.stringify(params)}` : `${getBaseUrl()}${route}.js`
  navigator.push({
    url,
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

function pop() {
  navigator.pop({
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

export default {
  push, pushByUrl, getBaseUrl, pushWeb, pop
}