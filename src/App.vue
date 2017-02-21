<template>
  <div @androidback="back">
    <!--<router-view style="flex:1"></router-view>-->
    <text class="h1" @click="toPush">跳转启动页</text>
  </div>
</template>

<style scoped>
  h1 {
    width: 100%;
    line-height: 100%;
    text-align: center;
    margin-top: 250px;
    font-size: 99px;
    color: #666;
  }
</style>

<script>
  let navigator = weex.requireModule('navigator')
  let modal = weex.requireModule('modal')

  export default {
    created () {
      // 钩进度条开始之前router-view移动
//      this.$router.beforeEach((to, from, next) => {
//        // 跳转目标路由
//        next()
//      })
//      // 路由进度条完成后完成router-view移动
//      this.$router.afterEach((to, from) => {
//        window.postMessage('jump+' + window.location.origin + to.fullPath, '*')
//        if (to.meta.title !== undefined) {
//          this.$setDocumentTitle(to.meta.title)
//        }
//      })
    },
    methods: {
      back () {
        this.$router.back()
      },
      toPush () {
        navigator.push({
          url: 'http://dotwe.org/raw/dist/6fe11640e8d25f2f98176e9643c08687.bundle.js',
          animated: 'true'
        }, event => {
          modal.toast({message: 'callback: ' + event})
        })
      }
    }
  }
</script>
