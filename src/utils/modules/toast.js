/**
 * @author walid
 * @date 2017/3/4
 * @description weex toast 工具类
 */

const modal = weex.requireModule('modal')

function show({message, duration}) {
  if (!message) {
    return
  }
  modal.toast({
    message: message,
    duration: duration | 2.0
  })
}

export default {
  show
}