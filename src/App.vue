<template>
  <div style="flex-direction: column;">
    <osc-tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></osc-tabbar>
  </div>
</template>

<script>
  import route from 'constants/route'
  import navigator from 'utils/modules/navigator'

  export default {
    data () {
      return {
        tabItems: [
          {
            index: 0,
            title: '首页',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
            src: `${navigator.getBaseUrl()}${route.home}.js`,
            visibility: 'visible'
          },
          {
            index: 1,
            title: '发起筹款',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
            src: `${navigator.getBaseUrl()}${route.list}.js`,
            visibility: 'hidden'
          },
          {
            index: 2,
            title: '我的',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
            src: `${navigator.getBaseUrl()}${route.mine}.js`,
            visibility: 'hidden'
          }
        ]
      }
    },

    methods: {
      tabBarOnClick (e) {
        console.log('tabBarOnClick', e.index)
      }
    }
  }
</script>