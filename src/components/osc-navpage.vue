<template>
  <div class="root">
    <div v-if="platform === 'ios'" :style="{width: '750px', height: '40px', backgroundColor: backgroundColor}"></div>
    <osc-navbar
        :dataRole="dataRole"
        :height="height"
        :backgroundColor="backgroundColor"
        :title="title"
        :titleColor="titleColor"
        :leftItemSrc="leftItemSrc"
        :leftItemTitle="leftItemTitle"
        :leftItemColor="leftItemColor"
        :rightItemSrc="rightItemSrc"
        :rightItemTitle="rightItemTitle"
        :rightItemColor="rightItemColor"
        @naviBarRightItemClick="naviBarRightItemClick"
        @naviBarLeftItemClick="naviBarLeftItemClick"></osc-navbar>
    <div class="wrapper" :style="{top: platform === 'ios' ? (40 + height) : height}">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .root {
    width: 750px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: 750px;
    position: absolute;
    top: 100px;
    bottom: 0;
  }
</style>

<script>
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    props: {
      dataRole: {default: 'none'},
      backgroundColor: {default: '#0099FF'},
      height: {default: 88},
      title: {default: ''},
      titleColor: {default: 'white'},
      rightItemSrc: {default: ''},
      rightItemTitle: {default: ''},
      rightItemColor: {default: 'white'},
      leftItemSrc: {default: ''},
      leftItemTitle: {default: ''},
      leftItemColor: {default: 'white'}
    },

    methods: {
      naviBarRightItemClick (e) {
        this.$emit('naviBarRightItemClick', e)
      },

      naviBarLeftItemClick (e) {
        this.$emit('naviBarLeftItemClick', e)
      }
    }
  }
</script>
