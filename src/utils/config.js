/**
 * @Author   : walid
 * @Data     : 2017-03-20  15:02
 * @Describe :
 */

import navigator from 'utils/modules/navigator'
import route from 'constants/route'

export default function plugin(Vue) {
  console.log('plugin')
  // 路由配置
  Vue.$navigator = Vue.prototype.$navigator = navigator
  // 路由名称
  Vue.$route = Vue.prototype.$route = route
}