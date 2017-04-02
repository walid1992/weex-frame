/**
 * @author walid
 * @date 2017/03/02
 * @description IP地址写入config
 */

const fs = require('fs')
const path = require('path')
const ip = require('ip').address()

fs.writeFileSync(path.resolve('assets/config.js'), `const CURRENT_IP = \'${ip}\'`)
fs.writeFileSync(path.resolve('config.js'), `export default \'${ip}\'`)