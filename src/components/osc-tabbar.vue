<template>
  <div class="wrapper">
    <embed
        class="content"
        :style="{ visibility: item.visibility }"
        v-for="(item, index) in tabItems"
        :key="index"
        :src="item.src"
        type="weex">
    </embed>
    <div class="tabbar" append="tree">
      <tabitem
          v-for="(item, index) in tabItems"
          :key="index"
          :index="item.index"
          :icon="item.icon"
          :title="item.title"
          :titleColor="item.titleColor"
          @tabItemOnClick="tabItemOnClick">
      </tabItem>
    </div>
  </div>
</template>

<style>
  .wrapper {
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 88px;
  }

  .tabbar {
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 88px;
  }
</style>

<script>
  export default {
    props: {
      tabItems: {default: []},
      selectedColor: {default: '#ff0000'},
      unselectedColor: {default: '#000000'}
    },
    data () {
      return {
        selectedIndex: 0
      }
    },
    components: {
      tabitem: require('./osc-tabitem.vue')
    },
    created () {
      this.select(this.selectedIndex)
    },
    methods: {
      tabItemOnClick (e) {
        this.selectedIndex = e.index
        this.select(e.index)
        this.$emit('tabBarOnClick', e)
      },
      select (index) {
        for (let i = 0; i < this.tabItems.length; i++) {
          let tabItem = this.tabItems[i]
          if (i == index) {
            tabItem.icon = tabItem.selectedImage
            tabItem.titleColor = this.selectedColor
            tabItem.visibility = 'visible'
          } else {
            tabItem.icon = tabItem.image
            tabItem.titleColor = this.unselectedColor
            tabItem.visibility = 'hidden'
          }
        }
      }
    }
  }
</script>