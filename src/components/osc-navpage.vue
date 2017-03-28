<template>
  <div class="root">
    <div v-if="isIOS" :style="{width: '750px', height: '40px', backgroundColor: backgroundColor}"></div>
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
    <div class="wrapper">
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
  }
</style>

<script>
  import instance from 'utils/weex/instance'

  export default {
    data () {
      return {
        isIOS: instance.isIOS()
      }
    },

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
