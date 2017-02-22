/**
 * Created by walid on 16/7/29.
 *  桥接封装类
 */

let bridge
__weex_define__('@weex-temp/x', function (__weex_require__) {
  bridge = __weex_require__('@weex-module/bridge')
})

function jumpSendLivePage () {
  bridge.jumpSendLivePage()
}

function jumpFeedBackPage () {
  bridge.jumpFeedBackPage()
}

function clearMemory () {
  bridge.clearMemory()
}

function exitlogin () {
  bridge.exitlogin()
}

function logger (content) {
  bridge.logger(content)
}

function registerCallBack (eventKey, func) {
  bridge.registerCallBack(eventKey, func)
}

// 保存SP数据
function saveSP (key, value) {
  bridge.saveSP(key, value)
}

// 获取SP数据
function getSP (key, callback) {
  bridge.getSP(key, callback)
}

//更新头像
function updateAvatar () {
  bridge.updateAvatar()
}

//loading画面
function showLoading () {
  bridge.showLoading()
}

// 获取SP bool 数据
exports.getSPBool = function (key, callback) {
  getSP(key, function (ref) {
    ref.data = ref.data == 'true' || ref.data == '1'
    callback(ref)
  })
}

exports.showLoading = showLoading
exports.saveSP = saveSP
exports.getSP = getSP
exports.jumpSendLivePage = jumpSendLivePage
exports.jumpFeedBackPage = jumpFeedBackPage
exports.clearMemory = clearMemory
exports.exitlogin = exitlogin
exports.logger = logger
exports.registerCallBack = registerCallBack
exports.updateAvatar = updateAvatar
