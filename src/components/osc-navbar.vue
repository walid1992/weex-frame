<template>
  <div :dataRole="dataRole" class="root" :style="{ height: height + 'px', backgroundColor: backgroundColor}">
    <div class="div-wrap">
      <text v-if="!leftItemSrc" class="text" naviItemPosition="left" :style="{ color: leftItemColor}"
            @click="onClickLeft">{{leftItemTitle}}

      </text>
      <image v-if="leftItemSrc" class="img" naviItemPosition="left" :src="leftItemSrc" @click="onClickLeft"></image>
    </div>
    <div class="div-wrap">
      <text naviItemPosition="center" class="title" :style="{ color: titleColor}">{{title}}</text>
    </div>
    <div class="div-wrap">
      <text v-if="!rightItemSrc" class="text" naviItemPosition="right" :style="{ color: rightItemColor }"
            @click="onClickRight">{{rightItemTitle}}
      </text>
      <image v-if="rightItemSrc" class="img" naviItemPosition="right" :src="rightItemSrc" @click="onClickRight"></image>
    </div>
  </div>
</template>

<style scoped>
  .root {
    flex-direction: row;
    width: 750px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .div-wrap {
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .text {
    font-size: 32px;
  }

  .img {
    width: 50px;
    height: 50px;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    max-width: 360px;
    text-overflow: ellipsis;
  }
</style>

<script>
  export default{
    props: {
      // navbar
      dataRole: {default: 'none'},
      //导航条背景色
      backgroundColor: {default: '#0099FF'},
      //导航条高度
      height: {default: 88},
      //导航条标题 
      title: {default: ''},
      //导航条标题颜色
      titleColor: {default: 'white'},
      //右侧按钮图片
      rightItemSrc: {default: ''},
      //右侧按钮标题
      rightItemTitle: {default: ''},
      //右侧按钮标题颜色
      rightItemColor: {default: 'white'},
      //左侧按钮图片
      leftItemSrc: {default: ''},
      //左侧按钮标题
      leftItemTitle: {default: ''},
      //左侧按钮颜色
      leftItemColor: {default: 'white'}
    },
    methods: {
      onClickRight (e) {
        this.$emit('naviBarRightItemClick')
      },
      onClickLeft (e) {
        console.log('height', this.height)
        this.$emit('naviBarLeftItemClick')
      }
    }
  }
</script>
