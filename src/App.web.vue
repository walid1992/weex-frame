<template>
  <div style="flex-direction: column;">
    <transition name="fade" mode="out-in">
      <router-view class="root"></router-view>
    </transition>
    <vue-progress-bar/>
  </div>
</template>

<style scoped>
  .root {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    created () {
      // 当App.vue首次加载进度条开始
      this.$Progress.start()
      // 钩进度条开始之前router-view移动
      this.$router.beforeEach((to, from, next) => {
        // 设置转场参数
        this.$Progress.parseMeta({
          func: [
            {call: 'color', modifier: 'temp', argument: '#00bf11'},
            {call: 'fail', modifier: 'temp', argument: '#00bf11'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.0s', opacity: '0.2s'}}
          ]
        })
        // 启动动画
        this.$Progress.start()
        // 跳转目标路由
        next()
      })
      // 路由进度条完成后完成router-view移动
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },

    mounted () {
      // 当App.vue完成加载关闭进度条
      this.$Progress.finish()
    }
  }
</script>