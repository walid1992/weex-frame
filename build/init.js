/**
 * @author walid
 * @date 2017/03/02
 * @description IP地址写入config
 */

let fs = require('fs')
let path = require('path')
let ip = require('ip').address()

fs.writeFileSync(path.resolve('config.js'), `export default \'${ip}\'`)

// android 主机地址操作
let androidConfigFile = path.join(__dirname, '../android/app/src/main/java/com/siyuan/weex/weex/constants/Constants.java')
fs.readFile(androidConfigFile, (err, data) => {
  if (err) {
    throw err
  }
  data = data.toString().replace(/"http(.*)"/, `"http://${ip}:12580/dist/weex/entry.js"`)

  fs.writeFile(androidConfigFile, data, function (err) {
    if (err) {
      throw err
    }
    console.log('android写入INDEX_URL成功')
  })

  console.log(data)
})

// iOS 主机地址操作
let iOSConfigFile = path.join(__dirname, '../ios/WeexFrame/AppDefine.h')
fs.readFile(iOSConfigFile, (err, data) => {
  if (err) {
    throw err
  }
  data = data.toString().replace(/"http:(.*)"/, `"http://${ip}:12580/dist/weex/entry.js"`)

  fs.writeFile(iOSConfigFile, data, function (err) {
    if (err) {
      throw err
    }
    console.log('iOS写入INDEX_URL成功')
  })

  console.log(data)
})