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

let ipIndexUrl = `http://${ip}:12580/dist/weex/App.js`
let androidIndexUrl = argv._[0] === 'local' ? 'file://assets/App.js' : ipIndexUrl
let iosIndexUrl = argv._[0] === 'local' ? 'file://assets/App.js' : ipIndexUrl

// android 主机地址操作
let androidConfigFile = path.join(__dirname, '../android/app/src/main/java/com/siyuan/weex/weex/constants/IpConfig.java')

let androidIpConfig =
  `
package com.siyuan.weex.weex.constants;

/**
 * @Author : walid
 * @Data : 2017-02-20  15:44
 * @Describe : IpConfig 地址配置
 */

public class IpConfig {

    public static final String INDEX_URL = "${androidIndexUrl}";

}

`
fs.writeFile(androidConfigFile, androidIpConfig, function (err) {
  if (err) {
    throw err
  }
  console.log('android写入INDEX_URL成功')
})

// iOS 主机地址操作
let iOSConfigFile = path.join(__dirname, '../ios/WeexFrame/IpDefine.h')

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

#define INDEX_URL [NSString stringWithFormat:@"${iosIndexUrl}"]

#endif /* IpDefine_h */
`

fs.writeFile(iOSConfigFile, iOSIpconfig, function (err) {
  if (err) {
    throw err
  }
  console.log('iOS写入INDEX_URL成功')
})