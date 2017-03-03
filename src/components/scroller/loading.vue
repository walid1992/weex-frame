<template>
  <scroller class="scroller">
    <div class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">{{num}}</text>
      </div>
    </div>
    <loading class="loading" @loading="onloading" :display="showLoading">
      <text class="indicator">Loading ...</text>
    </loading>
  </scroller>
</template>

<script>
  const modal = weex.requireModule('modal')
  const LOADMORE_COUNT = 4

  export default {
    data () {
      return {
        showLoading: 'hide',
        lists: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      onloading (event) {
        modal.toast({ message: 'loading', duration: 1 })
        this.showLoading = 'show'
        setTimeout(() => {
          const length = this.lists.length
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1)
          }
          this.showLoading = 'hide'
        }, 1500)
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
  .loading {
    justify-content: center;
  }
  .indicator {
    color: #888888;
    font-size: 42px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
