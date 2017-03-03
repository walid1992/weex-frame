/**
 * @author walid
 * @date 2017/3/4
 * @description weex toast 工具类
 */

import {debug} from 'utils/common'

const modal = weex.requireModule('modal')

function toastDebug (config) {
  if (!debug) {
    return
  }
  toast(config)
}

function toast (config = {message: '', duration: 2.0}) {
  if (!config.message) {
    return
  }
  modal.toast({
    message: config.message,
    duration: config.duration | 2.0
  })
}