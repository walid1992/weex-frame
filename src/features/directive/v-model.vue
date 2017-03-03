<template>
  <div class="wrapper">
    <input class="input" type="text" v-model="state" />
    <div class="group">
      <text class="label">Input value: </text>
      <text class="output">{{state}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        state: 'initial'
      }
    }
  }
</script>

<style>
  .input {
    font-size: 50px;
    width: 650px;
    margin-top: 50px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .group {
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 50px;
    width: 650px;
  }
  .label {
    font-size: 50px;
    color: #AAAAAA;
  }
  .output {
    font-size: 50px;
    color: #41B883;
  }
</style>
