<template>
  <div style="background-color:#F6F6F6;">
    <div class="search_view">
      <input class="search" placeholder="Please input" @change="change"/>
      <text class="btn" @click.native="search">Search</text>
    </div>
    <text class="item">History</text>
    <list>
      <cell v-for="(i, v) in items">
        <text class="item">{{v}}</text>
      </cell>
    </list>
  </div>
</template>

<style>
  .search_view {
    height: 70px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: row;
  }

  .search {
    height: 70px;
    border-width: 1;
    border-color: #dddddd;
    padding-left: 10px;
    font-size: 28px;
    flex: 1;
  }

  .btn {
    width: 80px;
    text-align: center;
    justify-content: center;
    font-size: 28px;
    background-color: #1A89EA;
    color: #ffffff;
  }

  .item {
    text-align: center;
    font-size: 25px;
    height: 50px;
    margin-top: 10;
    color: #5E5E5E;
    border-bottom-width: 1;
    border-bottom-color: #dddddd;
    justify-content: center;
  }
</style>

<script>
  let storage = weex.requireModule('storage')
  export default {
    data: function () {
      return {
        items: [],
        keywords: ''
      }
    },
    created: function () {
      let that = this
      storage.getAllKeys(function (e) {
        if (e.result == 'success' && e.data.length) {
          e.data.forEach(function (item) {
            if (item.indexOf('search_') > -1) {
              that.items.push(item.split('search_')[1])
            }
          })
        }
      })
    },
    methods: {
      search: function () {
        let that = this
        console.log('search', this.keywords)
        if (!this.keywords) return
        storage.setItem('search_' + this.keywords, this.keywords, function (e) {
          that.items.push(that.keywords)
        })
      },
      change: function (e) {
        console.log('input change', e)
        if (!e.target.value) return
        this.keywords = e.target.value
      }
    }
  }
</script>
