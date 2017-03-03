<template>
  <div>
    <indicator class="indicator"></indicator>
    <slider class="slider" interval="4500" @change="onchange">
      <div class="slider-pages" v-for="item in itemList">
        <image class="img" resize="cover" :src="item.pictureUrl"></image>
        <text class="title">{{item.title}}</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<style>
  .img {
    width: 700px;
    height: 700px;
  }
  .title {
    position: absolute;
    top: 20px;
    left: 20px;
    padding-left: 20px;
    width: 200px;
    color: #FFFFFF;
    font-size: 36px;
    line-height: 60px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .slider {
    flex-direction: row;
    margin: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: blue;
  }
  .slider-pages {
    width: 700px;
    height: 700px;
    position: relative;
  }
  .indicator {
    item-color: green;
    item-selected-color: red;
    item-size: 50px;
    top: 200px;
    left: 200px;
  }
</style>

<script>
  module.exports = {
    data: function () {
      return {
        itemList: [
          { title: 'item A', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { title: 'item B', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { title: 'item C', pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    methods: {
      onchange: function (event) {
        // console.log('changed:', event.index)
      }
    }
  }
</script>
