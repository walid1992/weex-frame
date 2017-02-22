/**
 * Created by walid on 16/6/13.
 * params : {method:POST/GET,url:http://xxx,header:{key:value},
 *                 body:{key:value}}
 */

let stream
__weex_define__('@weex-temp/x', function (__weex_require__) {
  stream = __weex_require__('@weex-module/stream')
})

let modal
__weex_define__('@weex-temp/x', function (__weex_require__) {
  modal = __weex_require__('@weex-module/modal')
})

let apiURL = {
  baseXbUrl: 'http://api.hailedao.com',
}

function requestGet (url, callback) {
  requestGetWithBody(url, null, callback)
}

function requestGetWithBody (url, body, callback) {

  stream.fetch({
    method: 'GET',
    url: apiURL.baseXbUrl + url,
    type: 'json',
    body: body
  }, function (ret) {
    let resultObj = ret
    nativeLog('resultObj  = ' + ret)
    if (typeof resultObj == 'string') {
      resultObj = JSON.parse(resultObj)
    }
    let serverResultData = resultObj.data
    if (typeof serverResultData == 'string') {
      serverResultData = JSON.parse(serverResultData)
    }
    nativeLog('serverResultData  = ' + serverResultData)
    callback(serverResultData)
  }, function (progress) {
    nativeLog('get in progress:' + progress.length)
  })
}

function requestPost (url, callback) {
  requestPostWithBody(url, null, callback)
}

function requestPostWithBody (url, body, callback) {

  stream.fetch({
    method: 'POST',
    url: apiURL.baseXbUrl + url,
    type: 'json',
    body: body
  }, function (ret) {
    let resultObj = ret
    nativeLog('resultObj  = ' + ret)
    if (typeof resultObj == 'string') {
      resultObj = JSON.parse(resultObj)
    }
    let serverResultData = resultObj.data
    if (typeof serverResultData == 'string') {
      serverResultData = JSON.parse(serverResultData)
    }
    nativeLog('serverResultData  = ' + serverResultData)
    callback(serverResultData)
  }, function (progress) {
    nativeLog('get in progress:' + progress.length)
  })
}

exports.requestGet = requestGet
exports.requestGetWithBody = requestGetWithBody
exports.requestPost = requestPost
exports.requestPostWithBody = requestPostWithBody
