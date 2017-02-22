/**
 * @author walid
 * @date 2017/02/20
 * @description 路由
 */

import Vue from 'vue'
import Router from 'vue-router'
import map from './map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})
