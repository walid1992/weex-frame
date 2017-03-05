<template>
  <scroller class="scroller" scrollDirection="horizontal">
    <div class="panel" v-for="char in lists">
      <text class="text">{{char}}</text>
    </div>
  </scroller>
</template>

<script>
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      }
    }
  }
</script>

<style scoped>
  .scroller {
    width: 3050px;
    flex-direction: row;
    justify-content: flex-start;
    border-width: 2px;
    border-style: dashed;
    border-color: #DDD;
  }
  .panel {
    width: 350px;
    height: 350px;
    margin-left: 75px;
    margin-top: 75px;
    margin-bottom: 75px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 75px;
    text-align: center;
    color: #41B883;
  }
</style>
