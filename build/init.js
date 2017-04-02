/**
 * @author walid
 * @date 2017/03/02
 * @description IndexUrl 配置到native
 */

const fs = require('fs')
const path = require('path')
const ip = require('ip').address()
// 获取输入参数
const yargs = require('yargs')
const argv = yargs.argv

console.log('argv._[0]', argv._[0])

let ipIndexUrl = `http://${ip}:8080/dist/weex/App.js`
let androidIndexUrl = argv._[0] === 'local' ? 'weex/App.js' : ipIndexUrl

// android 主机地址操作
let androidConfigFile = path.join(__dirname, '../android.config.json')

let androidConfig =
  `
{
  "AppName": "WeexApp",
  "AppId": "com.syswin.weex",
  "SplashText": "HelloWeex",
  "WeexBundle": "${androidIndexUrl}"
}

`
fs.writeFile(androidConfigFile, androidConfig, function (err) {
  if (err) {
    throw err
  }
  console.log('android写入INDEX_URL成功')
})

// iOS 主机地址操作
let iOSConfigFile = path.join(__dirname, '../platforms/ios/WeexFrame/IpDefine.h')
let iosIndexDefine = argv._[0] === 'local' ? '[NSString stringWithFormat:@"file://%@/bundlejs/weex/App.js",[NSBundle mainBundle].bundlePath]' : `[NSString stringWithFormat:@"${ipIndexUrl}"]`

let iOSIpconfig =
  `
//
//  IpDefine.m
//  WeexFrame
//
//  Created by walid on 2017/3/20.
//  Copyright © 2017年 weex. All rights reserved.
//  Ip 地址配置
//

#ifndef IpDefine_h
#define IpDefine_h

#define INDEX_URL ${iosIndexDefine}

#endif /* IpDefine_h */
`

fs.writeFile(iOSConfigFile, iOSIpconfig, function (err) {
  if (err) {
    throw err
  }
  console.log('iOS写入INDEX_URL成功')
})