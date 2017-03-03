/**
 * @author walid
 * @date 2017/3/4
 * @description 界面跳转工具类
 */

let navigator = weex.requireModule('navigator')

function getBaseUrl (vm) {
  let bundleUrl = vm.$getConfig().bundleUrl
  let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
  let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0
  let nativeBase = ''
  if (isAndroidAssets) {
    nativeBase = 'file://assets/'
  } else if (isiOSAssets) {
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
  } else {
    let host = 'localhost:12580'
    let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
    if (matches && matches.length >= 2) {
      host = matches[1]
    }
    nativeBase = `http://${host}/dist/weex/`
  }
  let h5Base = './weex.html?page=./dist/web/'
  // in Browser or WebView
  let inBrowserOrWebView = typeof window === 'object'
  return inBrowserOrWebView ? h5Base : nativeBase
}

function push (vm, route) {
  navigator.push({
    url: `${getBaseUrl(vm)}${route}.js`,
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

function pop (vm) {
  navigator.pop({
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

export default {
  push, pop
}