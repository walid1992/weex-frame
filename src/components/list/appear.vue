<template>
  <list class="list">
    <cell class="cell" v-for="char in lists">
      <div class="panel" @appear="onappear(char)"  @disappear="ondisappear(char)">
        <text class="text">{{char}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      }
    },
    methods: {
      onappear (char) {
        console.log(char, 'appear')
        modal.toast({ message: char + ' appear' })
      },
      ondisappear (char) {
        console.log(char, 'disappear')
        modal.toast({ message: char + ' disappear' })
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
