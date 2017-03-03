<template>
  <list class="list">
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">{{num}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D', 'E']
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 600px;
    height: 300px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 88px;
    text-align: center;
    color: #41B883;
  }
</style>
