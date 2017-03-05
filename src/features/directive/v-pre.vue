<template>
  <div>
    <div class="box">
      <text class="text" v-pre>{{ message }}</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'message in data'
      }
    }
  }
</script>

<style scoped>
  .box {
    width: 600px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 75px;
    margin-top: 75px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    text-align: center;
    color: #41B883;
    font-size: 50px;
  }
</style>
