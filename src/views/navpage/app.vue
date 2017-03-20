<template>
  <navpage
      dataRole="none"
      :height="navBarHeight"
      :title="title"
      backgroundColor="#ff5898"
      titleColor="white"
      leftItemTitle="More"
      leftItemColor="white"
      rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
      @naviBarLeftItemClick="naviBarLeftItemClick"
      @naviBarRightItemClick="naviBarRightItemClick">
    <text>dasdasdakshdkjashdksajd</text>
  </navpage>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        navBarHeight: 88,
        title: 'Navigator'
      }
    },
    components: {
      navpage: require('components/navpage.vue')
    },
    created () {
      this.$getConfig(function (config) {
        let env = config.env
        if (env.platform == 'iOS') {
          let scale = env.scale
          let deviceWidth = env.deviceWidth / scale
          this.navBarHeight = 64.0 * 750.0 / deviceWidth
        }
      }.bind(this))
    },
    methods: {
      naviBarLeftItemClick (e) {
        modal.toast({message: 'naviBarLeftItemClick', duration: 2})
      },
      naviBarRightItemClick (e) {
        modal.toast({message: 'naviBarRightItemClick', duration: 2})
      }
    }
  }
</script>