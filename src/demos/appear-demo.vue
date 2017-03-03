<template>
  <scroller class="scroller" >
    <div class="cell">
      <text class="text">top</text>
    </div>
    <div class="cell" @disappear="ondisappear" v-for="name in lists">
      <text class="text" @appear="onappear">{{name}}</text>
    </div>
  </scroller>
</template>

<style scoped>
  .text {
    font-size: 45px;
  }
  .scroller {
    height: 100%;
  }
  .cell {
    height: 100px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
  }
</style>

<script>
  module.exports = {
    data: function () {
      return {
        lists: []
      }
    },
    created: function () {
      for (let i = 0; i < 20; i++) {
        this.lists.push('cell ' + i)
      }
    },
    methods: {
      onappear: function (event) {
        console.log('cell appear.', event)
      },
      ondisappear: function (event) {
        console.log('cell disappear.', event)
      }
    }
  }
</script>
