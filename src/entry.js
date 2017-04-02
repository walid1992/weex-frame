/**
 * @author walid
 * @date 2016/03/20
 * @description 程序入口启动配置
 */

import App from './App.web.vue'
import router from 'router'
import VueProgressBar from 'vue-progressbar'

// 全局注册组件
Vue.component('osc-root', require('components/osc-root'))
Vue.component('osc-navpage', require('components/osc-navpage'))
Vue.component('osc-navbar', require('components/osc-navbar'))
Vue.component('osc-tabbar', require('components/osc-tabbar'))
Vue.component('osc-list', require('components/osc-list'))
Vue.component('osc-scroller', require('components/osc-scroller'))

// 安装全局配置module
weex.registerModule('user', {
  getUser (callBack) {
    callBack({
      userId: '312790',
      token: 'b636f162-ef52-47a1-aeb6-76323f294a79'
    })
  }
})

Vue.use(VueProgressBar, {
  thickness: '5px',
  color: '#00bf11',
  autoRevert: true,
  location: 'top',
  inverse: false
})

new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: {
    App
  }
})

router.push('/')