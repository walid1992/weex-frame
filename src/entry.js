/**
 * @author walid
 * @date 2017/02/20
 * @description 程序入口
 */

import App from './App'
import router from './router'

export default new Vue(Vue.util.extend({el: '#root', router}, App))

router.push('/sy/launch')