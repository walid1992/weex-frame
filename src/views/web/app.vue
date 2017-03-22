<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import {getQueryStringByName} from 'utils/string'
  import navigator from 'utils/modules/navigator'
  let webview = weex.requireModule('webview')

  export default {
    data() {
      return {
        title: 'OsMartian - WebView',
        canGoBack: false,
        url: getQueryStringByName('url') || 'https://weex-project.io/cn/'
      }
    },

    methods: {
      onReload (event) {
        webview.reload(this.$refs.webview)
      },

      onBack(){
        this.canGoBack ? webview.goBack(this.$refs.webview) : navigator.pop()
      },

      start (event) {
        console.log('pagestart', event)
      },

      finish (event) {
        console.log('event', event)
        this.canGoBack = event.canGoBack
        this.title = event.title || 'OsMartian - WebView'
      }
    }
  }
</script>
