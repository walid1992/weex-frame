/**
 * @author walid
 * @date 2017/02/20
 * @description 程序入口
 */

import App from './template'
import router from './router'
import globalConfig from './utils/globalConfig'

export default new Vue(Vue.util.extend({el: '#root', router}, App))

// 全局配置初始化
Vue.use(globalConfig)

// 设置默认路由
// router.push('/sy/mine')