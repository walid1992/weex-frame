/**
 * @author walid
 * @date 2016/03/16
 * @description 路由配置页
 */

import route from './route'

export default [
  {
    path: '/',
    redirect: {
      path: route.mine.path
    }
  },
  {
    title: route.home.title,
    path: route.home.path,
    component: route.home.component
  },
  {
    title: route.launch.title,
    path: route.launch.path,
    component: route.launch.component
  },
  {
    title: route.userInfo.title,
    path: route.userInfo.path,
    component: route.userInfo.component
  },
  {
    title: route.personal.title,
    path: route.personal.path,
    component: route.personal.component
  },
  {
    title: route.list.title,
    path: route.list.path,
    component: route.list.component
  },
  {
    title: route.scroller.title,
    path: route.scroller.path,
    component: route.scroller.component
  },
  {
    title: route.web.title,
    path: route.web.path,
    component: route.web.component
  },
  {
    title: route.mine.title,
    path: route.mine.path,
    component: route.mine.component
  },
  {
    title: '404',
    path: '*',
    component: require('views/404/app')
  }
]
