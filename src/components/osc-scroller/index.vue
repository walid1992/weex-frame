<template>
  <!-- @loadmore="onLoading" loadmoreoffset="10" -->
  <scroller class="root">
    <refresh class="div-refresh" :display="refreshDisplay" @refresh="onRefresh">
      <text class="text-tip" v-if="refreshDisplay === 'hide'">{{refreshTip}}</text>
      <loading-indicator class="indicator"></loading-indicator>
    </refresh>
    <slot></slot>
    <loading class="div-loading" :display="loadingDisplay" @loading="onLoading">
      <text class="text-tip" v-if="loadingDisplay === 'hide'">{{loadingTip}}</text>
      <text class="text-tip" v-else>加载中...</text>
      <!--<loading-indicator class="indicator"></loading-indicator>-->
    </loading>
  </scroller>
</template>

<style scoped>
  .root {
    width: 750px;
  }

  .div-refresh {
    width: 750px;
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-loading {
    width: 750px;
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-tip {
    font-size: 30px;
    color: #333333;
  }

  .indicator {
    width: 40px;
    height: 40px;
    color: #45b5f0;
  }
</style>

<script>
  import model from 'utils/modules/model'
  import instance from 'utils/weex/instance'

  export default {
    data() {
      return {
        refreshDisplay: 'hide',
        loadingDisplay: 'hide',
        refreshPause: false,
        loadingPause: false
      }
    },
    props: {
      refreshTip: {
        type: String,
        default: '↓ 下拉刷新'
      },
      loadingTip: {
        type: String,
        default: '↑ 上拉加载'
      }
    },

    mounted () {
      this.$on('refreshDone', (e) => {
        this.refreshDisplay = 'hide'
        model.toast({
          message: '刷新数据成功~'
        })
      })

      this.$on('loadingDone', (e) => {
        this.loadingDisplay = 'hide'
        model.toast({
          message: '刷新数据成功~'
        })
      })
    },

    methods: {
      onRefresh (e) {
        if (this.refreshPause) {
          return
        }
        this.$emit('refresh', e)
        this.refreshPause = true
        this.refreshDisplay = 'show'
        // 三秒之内只允许一次加载
        setTimeout(() => {
          this.refreshPause = false
        }, 3000)
        // 十秒超时
        setTimeout(() => {
          if (this.refreshDisplay = 'show') {
            this.refreshDisplay = 'hide'
            this.refreshPause = true
            model.toast({
              message: '网络请求超时~'
            })
          }
        }, 10000)
      },

      onLoading (e) {
        if (this.loadingPause) {
          return
        }
        this.$emit('loading', e)
        this.loadingPause = true
        this.loadingDisplay = 'show'
        // 三秒之内只允许一次加载
        setTimeout(() => {
          this.loadingPause = false
        }, 3000)
        // 十秒超时
        setTimeout(() => {
          if (this.loadingDisplay === 'show') {
            this.loadingPause = true
            this.loadingDisplay = 'hide'
            model.toast({
              message: '网络请求超时~'
            })
          }
        }, 10000)
      }
    }
  }
</script>
