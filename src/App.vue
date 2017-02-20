<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  export default {
    created () {
      // 钩进度条开始之前router-view移动
      this.$router.beforeEach((to, from, next) => {
        // 跳转目标路由
        next()
      })
      // 路由进度条完成后完成router-view移动
      this.$router.afterEach((to, from) => {
//        window.postMessage('jump+' + window.location.origin + to.fullPath, '*')
//        if (to.meta.title !== undefined) {
//          this.$setDocumentTitle(to.meta.title)
//        }
      })
    },
    methods: {
      back () {
        this.$router.back()
      }
    }
  }
</script>
