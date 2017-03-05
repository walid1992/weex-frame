<template>
  <div>
    <list class="list">
      <refresh class="refresh-view" :display="refreshDisplay" @refresh="onrefresh">
        <text v-if="(refreshDisplay==='hide')">↓ pull to refresh</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <cell @appear="onappear" @disappear="ondisappear" class="row" v-for="(i, row) in rows" :index="i">
        <div class="item">
          <text class="item-title">row {{row.id}}</text>
        </div>
      </cell>
      <loading class="loading-view" :display="loadingDisplay" @loading="onloading">
        <text v-if="(loadingDisplay==='hide')">↑ Loadmore</text>
        <loading-indicator class="indicator"></loading-indicator>
      </loading>
    </list>
    <text class="count">Appear items:{{appearMin}} - {{appearMax}}</text>
  </div>
</template>

<style scoped>
  .list {
    height: 850px
  }

  .count {
    font-size: 48px;
    margin: 10px;
  }

  .indicator {
    height: 40px;
    width: 40px;
    color: #45b5f0;
  }

  .refresh-arrow {
    font-size: 30px;
    color: #45b5f0;
  }

  .row {
    width: 750px;
  }

  .item {
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    height: 100px;
    padding: 20px;
  }

  .item-title {
  }

  .refresh-view {
    width: 750px;
    height: 100px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .loading-view {
    width: 750px;
    height: 100px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .indicator {
    height: 60px;
    width: 60px;
    color: #889967;
  }
</style>

<script>

  module.exports = {
    methods: {
      onappear: function (e) {
        // var appearId = this.rows[e.target.attr.index].id;
        // var appearIds = this.appearIds;
        // appearIds.push(appearId);
        // this.getMinAndMaxIds(appearIds);
      },
      ondisappear: function (e) {
        // var disAppearId = this.rows[e.target.attr.index].id;
        // var appearIds = this.appearIds;
        // var index = appearIds.indexOf(disAppearId);
        // if (index > -1) {
        //   appearIds.splice(index, 1);
        // }
        // this.getMinAndMaxIds(appearIds);
      },
      getMinAndMaxIds: function (appearIds) {
        // appearIds.sort(function (a, b) {
        //   return a - b;
        // });
        // this.appearIds = appearIds;
        // this.appearMax = appearIds[appearIds.length - 1];
        // this.appearMin = appearIds[0];
      },
      onrefresh: function (e) {
        let self = this
        self.refreshDisplay = 'show'
        setTimeout(function () {
          self.refreshDisplay = 'hide'
        }, 3000)
      },

      onloading: function () {
        let self = this
        self.loadingDisplay = 'show'
        setTimeout(function () {
          if (self.rows.length <= 33) {
            self.rows.push(self.moreRows[self.rows.length - 29])
          }
          self.loadingDisplay = 'hide'
        }, 3000)
      }
    },
    props: {
      refreshDisplay: {
        default: 'hide'
      },
      loadingDisplay: {
        default: 'hide'
      },
      appearMin: {
        default: 1
      },
      appearMax: {
        default: 1
      },
      appearIds: {
        default: function () {
          return []
        }
      },
      rows: {
        default: function () {
          return [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}, {id: 20}, {id: 21}, {id: 22}, {id: 23}, {id: 24}, {id: 25}, {id: 26}, {id: 27}, {id: 28}, {id: 29}]
        }
      },
      moreRows: {
        default: function () {
          return [{id: 30}, {id: 31}, {id: 32}, {id: 33}]
        }
      }
    }
  }
</script>
