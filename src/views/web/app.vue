<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import mixins from 'mixins'
  let webview = weex.requireModule('webview')

  export default {
    mixins: [mixins],

    data() {
      return {
        title: 'OsMartian - WebView',
        canGoBack: false,
        url: 'https://weex-project.io/cn/'
      }
    },

    mounted() {
      this.url = this.getQuery('url') || 'https://weex-project.io/cn/'
    },

    methods: {
      onReload (event) {
        webview.reload(this.$refs.webview)
      },

      onBack(){
        this.canGoBack ? webview.goBack(this.$refs.webview) : this.router.pop()
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
