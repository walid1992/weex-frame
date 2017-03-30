/**
 * @author walid
 * @date 2017/3/4
 * @description weex modal 工具类
 */

const modal = weex.requireModule('modal')

function toast({message, duration}) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject('message is invalue !!!')
      return
    }
    modal.toast({
      message: message,
      duration: duration || 2.0
    })
    resolve()
  })
}

function alert({message, okTitle = '确定'}) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject('message is invalue !!!')
      return
    }
    modal.alert({
      message, okTitle
    }, (res) => {
      console.log('alert callback', res)
      resolve(res)
    })
  })
}

function confirm({message, okTitle = '确定', cancelTitle = '取消'}) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject('message is invalue !!!')
      return
    }
    modal.confirm({
      message, okTitle, cancelTitle
    }, (res) => {
      res === okTitle ? resolve(res) : reject(res)
      console.log('confirm callback', res)
    })
  })
}

function prompt({message, okTitle = '确定', cancelTitle = '取消'}) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject('message is invalue !!!')
      return
    }
    modal.prompt({
      message, okTitle, cancelTitle
    }, (value) => {
      res === okTitle ? resolve(res) : reject(res)
      console.log('confirm callback', value)
    })
  })
}

export default {
  toast, alert, confirm, prompt
}