<template>
  <div class="wrapper">
    <div class="group">
      <text class="title" v-if=" type === 'A' ">type === "A"</text>
      <text class="title" v-else-if=" type === 'B' ">type === "B"</text>
      <text class="title" v-else-if=" type === 'C' ">type === "C"</text>
      <text class="title" v-else-if=" type === 'D' ">type === "D"</text>
    </div>
    <div class="group">
      <text class="button" @click="switchTo('A')">A</text>
      <text class="button" @click="switchTo('B')">B</text>
      <text class="button" @click="switchTo('C')">C</text>
      <text class="button" @click="switchTo('D')">D</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index: 0,
        type: 'A'
      }
    },
    methods: {
      switchTo (type) {
        this.type = type
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
    font-size: 46px;
    width: 100px;
    color: #41B883;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>
