/**
 * @author walid
 * @date 2017/3/4
 * @description 路由名字配置
 */

export default {
  home: {
    title: '首页',
    path: '/home',
    jsPath: 'views/home/app',
    component: require('views/home/app')
  },
  launch: {
    title: '发起筹款',
    path: '/launch',
    jsPath: 'views/launch/app',
    component: require('views/launch/app')
  },
  mine: {
    title: '我的',
    path: '/mine',
    jsPath: 'views/mine/app',
    component: require('views/mine/app')
  },
  web: {
    title: 'syswin web',
    path: '/web',
    jsPath: 'views/web/app',
    component: require('views/web/app')
  },
  userInfo: {
    title: '个人资料',
    path: '/userinfo',
    jsPath: 'views/userinfo/app',
    component: require('views/userinfo/app')
  },
  personal: {
    title: '个人中心',
    path: '/personal',
    jsPath: 'views/personal/app',
    component: require('views/personal/app')
  },
  list: {
    title: 'List 组件',
    path: '/list',
    jsPath: 'views/list/app',
    component: require('views/list/app')
  },
  scroller: {
    title: 'Scroller 组件',
    path: '/scroller',
    jsPath: 'views/scroller/app',
    component: require('views/scroller/app')
  }
}