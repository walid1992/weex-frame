<template>
  <component is="list" class="list">
    <component is="cell" class="cell" v-for="(item ,index) in lists" :key="index">
      <component is="div" class="panel">
        <component :is="type" class="text">{{item}}</component>
      </component>
    </component>
  </component>
</template>

<script>
  export default {
    data () {
      return {
        type: 'text',
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
