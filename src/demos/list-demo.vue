<template>
  <div class="list-wrapper">
    <list class="list" @loadmore="onloadmore">
    <!-- <list class="list"> -->
      <header>
        <text>list header</text>
      </header>
      <refresh class="refresh" @refresh="onrefresh" display="hide">
        <loading-indicator class="loading-indicator"></loading-indicator>
        <text>refresh....</text>
      </refresh>
      <cell @appear.native="onappear" @disappear.native="ondisappear" class="row" v-for="item in rows">
        <text class="item-title">row {{item.id}}</text>
      </cell>
      <loading class="loading" @loading="onloading">
        <loading-indicator class="loading-indicator"></loading-indicator>
      </loading>
    </list>
    <text class="info">
      Appear items:{{appearMin}} - {{appearMax}}
    </text>
  </div>
</template>

<style scoped>
  .list {
    height: 750px;
    background-color: #888;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  .row {
    height: 120px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #BBB;
  }
  .loading {
    width: 750px;
    flex-direction: row;
    justify-content: center;
  }
  .loading-indicator {
    width: 160px;
    height: 160px;
    color: green;
  }
</style>

<script>
module.exports = {
  data: function () {
    return {
      rows: [],
      appearMin: 1,
      appearMax: 1
    }
  },
  mounted: function () {
    for (let i = 0; i < 10; i++) {
      this.rows.push({
        id: i + 1
      })
    }
  },
  methods: {
    onloadmore: function (event, finish) {
      console.log('on load more', event)
      // for (var i = 0; i < 30; i++) {
      //   this.rows.push({
      //     id: 'load more: ' + (i + 1)
      //   })
      // }
    },
    onappear: function (event) {
      // console.log('onappear ...', event)
    },
    ondisappear: function (event) {
      // console.log('ondisappear ...', event)
    },
    onrefresh: function (event, finish) {
      console.log('refresh ...')
      setTimeout(finish, 3000)
    },
    onloading: function (event, finish) {
      console.log('loading ...')
      setTimeout(finish, 3000)
    }
  }
}
</script>
