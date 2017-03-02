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
    <panel title="push a new page">
      <button type="primary" size="small" value="push" @click.native="push"></button>
    </panel>
    <panel title="pop to the last page">
      <button type="success" size="small" value="pop" @click.native="pop"></button>
    </panel>
  </navpage>
</template>

<script>
  let navigator = weex.requireModule('navigator')
  let getBaseURL = require('../include/base-url.js').getBaseURL

  module.exports = {
    data () {
      return {
        navBarHeight: 88,
        title: 'Navigator',
        dir: 'dist/build',
        baseURL: ''
      }
    },
    components: {
      panel: require('../include/panel.vue'),
      navpage: require('../include/navpage.vue'),
      button: require('../include/button.vue')
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
      this.baseURL = getBaseURL(this)
    },
    methods: {
      naviBarLeftItemClick (e) {
        modal.toast({message: 'naviBarLeftItemClick', duration: 2})
      },
      naviBarRightItemClick (e) {
        modal.toast({message: 'naviBarRightItemClick', duration: 2})
      },
      push () {
        let params = {
          'url': this.baseURL + 'components/navigator.js?test=1',
          'animated': 'true'
        }
        navigator.push(params, function () {
        })
      },
      pop () {
        let params = {
          'url': this.baseURL + 'components/navigator.js?test=1',
          'animated': 'true'
        }
        navigator.pop(params, function () {
        })
      }
    }
  }
</script>
