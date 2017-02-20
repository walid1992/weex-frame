/**
 * @author walid
 * @date 2017/02/20
 * @description 全局配置
 */

import routerName from 'router/name'

export default function plugin(Vue) {
  // 路由界面配置
  Vue.$routerName = Vue.prototype.$routerName = routerName
}
