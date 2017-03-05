<template>
  <div class="wrapper">
    <div class="group">
      <text class="title" v-if="visible">v-if</text>
      <text class="title" v-else>v-else</text>
    </div>
    <div class="group">
      <text class="button" @click="toggle">toggle</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: 0
      }
    },
    methods: {
      toggle () {
        this.visible = !this.visible
      }
    }
  }
</script>


<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .group {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
  }
  .title {
    font-size: 100px;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    color: #41B883;
  }
  .button {
    font-size: 36px;
    width: 280px;
    color: #41B883;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>
