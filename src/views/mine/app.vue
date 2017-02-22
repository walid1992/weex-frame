<template>
  <scroller class="root-view">
    <image style="width:750px;height:40px;" :src="icMineNavigation" v-if="isIosPlatform"></image>
    <image class="div-top" :src="icMineBackground"></image>
    <div style="height:30px;background-color:#f6f7f8;"></div>
    <div class="div-send-live" @click="testParams">
      <text class="txt-send-live" @click="testParams">测试传参</text>
    </div>
  </scroller>
</template>

<style>
  .root-view {
    width: 750px;
    background-color: #ffffff;
  }

  .div-top {
    width: 750px;
    height: 602px;
    position: relative;
  }

  .div-send-live {
    width: 690px;
    height: 88px;
    margin-left: 30px;
    margin-right: 30px;
    border-width: 2px;
    border-color: #62c4aa;
    border-radius: 10px;
    background-color: #a1dccc;
    margin-top: 262px;
    margin-bottom: 50px;
    justify-content: center;
  }

  .txt-send-live {
    color: white;
    font-size: 36px;
    text-align: center;
  }
</style>

<script>
  import utils from 'utils/utils'
  import xbWeexApis from 'utils/weex-apis'
  import constants from 'constants'

  export default {
    data () {
      return {
        isIosPlatform: false,
        icMineNavigation: constants.imageUrl.IC_MINE_NAVIGATION,
        icMineBackground: constants.imageUrl.IC_MINE_BACKGROUND,
        userInfo: {}
      }
    },
    mounted () {
      let self = this
      self.isIosPlatform = xbWeexApis.isIosPlatform(self)
    },
    methods: {
      editClick (ret) {
        utils.push(this, constants.pageUrl.UPDATE_USERINFO)
      },
      backClick (ret) {
        utils.pop(this)
      },
      favoriteClick (ret) {
      },
      messageClick (ret) {
      },
      settingClick (ret) {
        utils.push(this, constants.pageUrl.SETTING_URL)
      },
      testParams (ret) {
      },
      iconClick (ret) {
      }
    }
  }
</script>
