import name from './name'

import p404 from 'views/404/app'
import launch from 'views/launch/app'

export default [
  {
    path: '/sy/launch',
    name: name.launch,
    meta: {
      title: '水滴筹'
    },
    component: launch
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
