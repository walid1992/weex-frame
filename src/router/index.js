/**
 * @author walid
 * @description vue router
 * @date 2016/03/16
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'
import route from './page'

// Object.values(route)
Vue.use(VueRouter)

let router = new VueRouter({
  // mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})

Vue.$router = router

export default router
