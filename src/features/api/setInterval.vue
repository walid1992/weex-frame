<template>
  <div>
    <text class="text">Time: {{second}}</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    computed: {
      second () {
        return (this.count / 20).toFixed(2) + 's'
      }
    },
    mounted () {
      setInterval(() => { this.count++ }, 50)
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
    text-align: center;
    color: #41B883;
    font-size: 50px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>
