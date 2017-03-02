exports.getBaseURL = function (vm) {
  let bundleUrl = vm.$getConfig().bundleUrl
  let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
  let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
  let nativeBase = ''
  if (isAndroidAssets) {
    nativeBase = 'file://assets/'
  } else if (isiOSAssets) {
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
  } else {
    let host = 'localhost:12580'
    let matches = /\/\/([^\/]+?)\//.exec(vm.$getConfig().bundleUrl)
    if (matches && matches.length >= 2) {
      host = matches[1]
    }
    nativeBase = `http://${host}/${vm.dir}/weex/`
  }
  let h5Base = `./weex.html?page=./${vm.dir}/web/`
  // in Native
  let base = nativeBase
  if (typeof window === 'object') {
    // in Browser or WebView
    base = h5Base
  }
  return base
}
