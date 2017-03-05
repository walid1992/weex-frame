<template>
  <div>
    <div class="group">
      <div class="panel" v-for="obj in lists">
        <text class="text">{{obj.name}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // lists: ['A', 'B'],
        lists: [
          { name: 'A' },
          { name: 'B' }
        ]
      }
    },
    mounted () {
      Vue.set(this.lists, 0, { name: 'C'})
      setTimeout(() => {
        Vue.delete(this.lists, 1)
        // this.lists.length--
      }, 1000)
    }
  }
</script>

<style scoped>
  .panel {
    width: 250px;
    height: 250px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .group {
    flex-direction: row;
    justify-content:space-between;
    width: 600px;
    margin-left: 75px;
    margin-top: 100px;
  }
  .text {
    font-size: 128px;
    text-align: center;
    color: #41B883;
  }
</style>
