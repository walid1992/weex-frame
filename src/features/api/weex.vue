<template>
  <div class="wrapper">
    <text class="title">Weex SDK Version</text>
    <text class="version">{{version}}</text>
    <div class="group">
      <text class="label">Bundle URL</text>
      <text class="value">{{bundleUrl}}</text>
    </div>
    <div class="group">
      <text class="label">platform</text>
      <text class="value">{{platform}}</text>
    </div>
    <div class="group">
      <text class="label">osVersion</text>
      <text class="value">{{osVersion}}</text>
    </div>
    <div class="group">
      <text class="label">appVersion</text>
      <text class="value">{{appVersion}}</text>
    </div>
    <div class="group">
      <text class="label">deviceModel</text>
      <text class="value">{{deviceModel}}</text>
    </div>
    <div class="group">
      <text class="label">deviceWidth</text>
      <text class="value">{{deviceWidth}}</text>
    </div>
    <div class="group">
      <text class="label">deviceHeight</text>
      <text class="value">{{deviceHeight}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        version: 'invalid',
        bundleUrl: 'invalid',
        platform: 'invalid',
        osVersion: 'invalid',
        appVersion: 'invalid',
        deviceModel: 'invalid',
        deviceWidth: 'invalid',
        deviceHeight: 'invalid'
      }
    },
    created: function () {
      // const configs = weex.config
      let configs = this.$getConfig()
//      if (configs) {
//        this.version = configs.weexVersion || 'unknown'
//        this.bundleUrl = configs.bundleUrl || 'unknown'
//        this.platform = configs.platform || 'unknown'
//        this.osVersion = configs.osVersion || 'unknown'
//        this.appVersion = configs.appVersion || 'unknown'
//        this.deviceModel = configs.deviceModel || 'unknown'
//        this.deviceWidth = configs.deviceWidth || 'unknown'
//        this.deviceHeight = configs.deviceHeight || 'unknown'
//      }
    }
  }
</script>

<style>
  .title {
    font-size: 42px;
    text-align: center;
    color: #888888;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .version {
    font-size: 100px;
    text-align: center;
    margin-bottom: 75px;
  }

  .group {
    margin-top: 25px;
    flex-direction: row;
  }

  .label {
    width: 360px;
    font-size: 42px;
    text-align: right;
    color: #888888;
  }

  .value {
    padding-left: 50px;
    font-size: 42px;
  }
</style>
