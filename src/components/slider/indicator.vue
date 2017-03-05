<template>
  <div>
    <slider class="slider" autoplay="true" interval="4500" @change="onchange" append="tree">
      <indicator class="indicator"></indicator>
      <div class="frame" v-for="img in imageList">
        <text class="title">{{img.title}}</text>
      </div>
    </slider>
  </div>
</template>

<style>
  .slider {
    height: 700px;
    border-width: 2px;
  }
  /*.title {
    position: absolute;
    top: 20px;
    left: 20px;
    padding-left: 20px;
    width: 200px;
    color: #FFFFFF;
    font-size: 36px;
    line-height: 60px;
    background-color: rgba(0, 0, 0, 0.3);
  }*/
  .frame {
    width: 700px;
    height: 700px;
    /*position: relative;*/
  }
  .indicator {
    itemColor: green;
    itemSelectedColor: red;
    itemSize: 50px;
    /*top: 200px;
    left: 200px;*/
  }
</style>

<script>
  export default {
    data () {
      return {
        imageList: [
          { title: 'item A', src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { title: 'item B', src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { title: 'item C', src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    methods: {
      onchange (event) {
        console.log('changed:', event.index)
      }
    }
  }
</script>
