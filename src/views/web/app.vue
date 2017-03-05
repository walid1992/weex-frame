<template>
  <div class='root'>
    <div style='flex-direction: row;'>
      <text class='btn-action' @click='loadUrl'>LoadURL</text>
      <text class='btn-action' @click='reload'>reload</text>
    </div>
    <web class='web' ref='webview' :src='url' @pagestart='start' @pagefinish='finish'></web>
  </div>
</template>

<script>
  import {getQueryStringByName} from 'utils/string'
  let webview = weex.requireModule('webview')

  export default {
    data() {
      return {
        url: decodeURIComponent('http%3A%2F%2Fwww.shuidichou.com%2Fcf%2Fdream%2Fcontribute%2Fc73f926a-7eaa-4813-b2c8-0c833bf5f782')
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
      loadUrl (e) {
        this.url = this.$refs.input.value
      },
      reload (e) {
        console.log('will reload webview')
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

<style>
  .root {
    width: 750px;
    height: 1334px;
    background-color: #f8f8f8;
  }

  .btn-action {
    width: 200px;
    height: 50px;
    background-color: #D3D3D3;
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    flex: 1;
  }

  .web {
    width: 750px;
    height: 1100px;
    background-color: #8B0000;
  }
</style>
