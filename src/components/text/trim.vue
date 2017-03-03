<template>
  <div>
    <text class="text">          直接放置头尾用空白的文本    </text>
    <text class="text">{{message}}</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '          使用数据绑定     '
      }
    }
  }
</script>

<style scoped>
  .text {
    lines: 3;
    width: 600px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 75px;
    margin-top: 75px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
    color: #666666;
    font-size: 32px;
  }
</style>
