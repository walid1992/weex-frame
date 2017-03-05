<template>
  <div class="wrapper">
    <div class="group">
      <text :class="className">L A B E L</text>
    </div>
    <div class="group">
      <text class="button" @click="change">change style</text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index: 0
      }
    },

    computed: {
      className () {
        return (['small', 'large', 'blue', 'green'])[this.index % 4]
      }
    },

    methods: {
      change () {
        this.index++
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
  .small {
    font-size: 36px;
    color: #888888;
  }
  .large {
    font-size: 88px;
    color: #888888;
  }
  .blue {
    font-size: 66px;
    color: #1B90F7;
  }
  .green {
    font-size: 100px;
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
