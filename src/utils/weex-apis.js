/**
 * @author walid
 * @date 2017/02/21
 * @description 封装utils工具类使用
 */

function isIosPlatform (self) {
  return self.$getConfig().env.platform === 'iOS'
}

function getDeviceInfo (self) {
  let env = self.$getConfig().env
  let deviceWidth = env.deviceWidth
  let deviceHeight = env.deviceHeight
  return {
    deviceWidth: deviceWidth,
    deviceHeight: deviceHeight
  }
}

export default {
  isIosPlatform, getDeviceInfo
}
