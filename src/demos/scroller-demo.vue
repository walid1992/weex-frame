<template>
  <div class="wrapper">
    <scroller class="scroller" @loadmore="onloadmore" loadmoreoffset="100">
      <refresh class="refresh" @refresh="onrefresh">
        <text>refresh....</text>
      </refresh>
      <div ref="top" class="top">
        <text>top</text>
      </div>
      <div class="cell border" @appear="onappear" v-for="v in items">
        <text style="font-size: 40; color: #000000">{{v.item}}</text>
      </div>
      <loading class="loading" @loading="onloading">
        <loading-indicator class="loading-indicator"></loading-indicator>
      </loading>
    </scroller>
    <!-- <scroller class="h-scroller" scroll-direction="horizontal">
      <div class="h-cell" v-for="v in items">
      <text style="font-size: 40; color: #000000">{{v.item}}</text>
    </div>
  </scroller> -->
    <text @click="top">click</text>
  </div>
</template>

<style scoped>
  .wrapper {
    display: block;
  }

  .scroller {
    height: 750px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: blue;
  }

  .cell {
    height: 100px;
  }

  .border {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
  }

  .h-scroller {
    width: 2000px;
    height: 500px;
    background-color: #EEE;
  }

  .h-cell {
    width: 200px;
    height: 500px;
    background-color: #DDD;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #BBB;
  }
</style>

<script>
  let dom = weex.requireModule('dom')
  module.exports = {
    data: function () {
      return {
        items: [],
        triggered: false
      }
    },
    created: function () {
      for (let i = 0; i < 20; i++) {
        this.items.push({
          'item': 'test data' + i
        })
      }
    },
    methods: {
      onloadmore: function () {
        if (!this.triggered) {
          for (let i = 40; i >= 20; i--) {
            this.items.push({
              'item': 'onloadmore triggered' + i
            })
          }
        }
        this.triggered = true
      },
      top: function () {
        console.log('scrollToElement')
        dom.scrollToElement(this.$refs.top, {offset: 0})
      },
      onrefresh: function (event, finish) {
        console.log('refresh ...')
        setTimeout(finish, 3000)
      },
      onloading: function (event, finish) {
        console.log('loading ...')
        setTimeout(finish, 3000)
      },
      onappear: function (event) {
        console.log('cell appear.', event)
      }
    }
  }
</script>
