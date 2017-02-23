/**
 * @author walid
 * @date 2017/02/20
 * @description 路由配置
 */

import name from './name'

import launch from 'views/launch/app'
import mine from 'views/mine/app'
import p404 from 'views/404/app'

export default [
  {
    path: '/sy/launch',
    name: name.launch,
    meta: {
      title: '水滴筹'
    },
    component: (resolve) => {
      return launch
    }
  },
  {
    path: '/sy/mine',
    name: name.mine,
    meta: {
      title: '我的'
    },
    component: mine
  },
  {
    title: '404',
    path: '*',
    meta: {
      title: '404'
    },
    component: p404
  }
]
