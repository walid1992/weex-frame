<template>
  <div class="list">
    <div class="group">
      <div class="panel" v-for="obj in lists">
        <text class="text">{{obj.name}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lists: [
          { name: '1' }
        ]
      }
    },
    mounted () {
      // will cause an error
      this.lists.length++

      setTimeout(() => {
        this.lists.push({ name: 'A' })
      }, 1000)
    }
  }
</script>

<style scoped>
  .panel {
    width: 160px;
    height: 160px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .group {
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    margin-left: 75px;
    margin-top: 100px;
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #41B883;
  }
</style>
