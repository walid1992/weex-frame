<template>
  <div class="list">
    <div class="group">
      <div class="panel" v-for="char in listA">
        <text class="text">{{char}}</text>
      </div>
    </div>
    <div class="group">
      <div class="panel" v-for="obj in listB">
        <text class="text">{{obj.name}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listA: ['A', 'B', 'C', 'D', 'E'],
        listB: [
          { name: '1' },
          { name: '2' },
          { name: '3' },
          { name: '4' },
          { name: '5' }
        ]
      }
    },
    mounted () {
      this.$set(this.listA, 1, '2')
      Vue.set(this.listA, 3, '4')

      this.$set(this.listB, 0, { name: 'A' })
      Vue.set(this.listB, 2, { name: 'C' })
      Vue.set(this.listB, 4, { name: 'E' })

      setTimeout(() => { this.$delete(this.listA, 0) }, 1000)
      setTimeout(() => { Vue.delete(this.listA, 1) }, 2000)
      setTimeout(() => { this.$delete(this.listB, 2) }, 3000)
      setTimeout(() => { Vue.delete(this.listB, 3) }, 4000)
    }
  }
</script>

<style scoped>
  .panel {
    width: 100px;
    height: 100px;
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
    width: 650px;
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .text {
    font-size: 88px;
    text-align: center;
    color: #41B883;
  }
</style>
