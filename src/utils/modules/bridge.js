/**
 * @Author   : walid
 * @Data     : 2017-04-01  09:52
 * @Describe : 桥接扩展工具类
 */

const userModule = weex.requireModule('user')

export function getUser() {
  return new Promise((resolve, reject) => {
    userModule.getUser(data => {
      console.log('userModule', data)
      !data ? reject() : resolve(data)
    })
  })
}