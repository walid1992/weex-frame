<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import {getQueryStringByName} from 'utils/string'
  let webview = weex.requireModule('webview')

  export default {
    data() {
      return {
        url: 'https://weex-project.io/cn/'
      }
    },

    mounted () {
      let url = getQueryStringByName(this, 'url')
      console.log('getQueryStringByName', url)
      if (url) {
        this.url = url
      }
    },

    methods: {
      loadUrl (event) {
      },
      reload (event) {
        webview.reload(this.$refs.webview)
      },
      start (event) {
        console.log('pagestart', event)
      },
      finish (event) {
        console.log('pagefinish', event)
      }
    }
  }
</script>
