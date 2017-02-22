/**
 * @author walid
 * @date 2017/02/21
 * @description 封装utils工具类使用
 */

import strUtil from 'utils/string'

let modal = weex.requireModule('modal')
let navigator = weex.requireModule('navigator')

let data = {
  baseurl: 'http://192.168.51.175:12580/dev/build/src/ui/page/',
  baseImageUrl: 'http://xiaobaiossdevortest.oss-cn-beijing.aliyuncs.com/common/',
  baseh5url: 'http://192.168.51.175:12580/index.html?page=./dev/build/src/ui/page/',
  debug: true
}

function push (self, url) {
  let filterUrl = strUtil.trim(url, true)
  let params = {
    'url': getBaseUrl() + filterUrl,
    'animated': 'true'
  }
  toastDebug(self, getBaseUrl() + filterUrl)
  navigator.push(params, function (e) {
    // callback
  })
}

function pop (self) {
  let params = {
    'animated': 'true'
  }
  navigator.pop(params, function (e) {
    //callback
  })
}

function toastDebug (self, content) {
  if (data.debug) {
    toast(self, content)
  }
}

function toast (content) {
  modal.toast({
    message: content,
    duration: 2.0
  })
}

function getParameterByName (name, url) {
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function getBaseUrl () {
  // in Browser or WebView
  if (typeof window === 'object') {
    return data.baseh5url
  } else {
    return data.baseurl
  }
}

function getBaseImageUrl () {
  return data.baseImageUrl
}

export default {
  push, pop, toastDebug, toast, getParameterByName, getBaseUrl, getBaseImageUrl
}
