<template>
  <div class="container" :style="{ backgroundColor: backgroundColor }" @click="onclickitem">
    <image class="top-line" src="http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"></image>
    <image class="tab-icon" :src="icon"></image>
    <text class="tab-text" :style="{ color: titleColor }">{{title}}</text>
  </div>
</template>

<style>
  .container {
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 88px;
  }

  .top-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
  }

  .tab-icon {
    margin-top: 5px;
    width: 40px;
    height: 40px;
  }

  .tab-text {
    margin-top: 5px;
    text-align: center;
    font-size: 20px;
  }
</style>

<script>
  export default {
    props: {
      index: {default: 0},
      title: {default: ''},
      titleColor: {default: '#000000'},
      icon: {default: ''},
      backgroundColor: {default: '#ffffff'}
    },
    methods: {
      onclickitem (e) {
        this.$emit('tabItemOnClick', {
          index: this.index
        })
      }
    }
  }
</script>