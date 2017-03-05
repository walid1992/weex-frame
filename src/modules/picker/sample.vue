<template>
  <div class="wrapper">
    <div class="group">
      <text class="label">Result: </text>
      <text class="title">{{value}}</text>
    </div>
    <div class="group">
      <text class="button" @click="pick">Pick</text>
    </div>
  </div>
</template>

<script>
  const picker = weex.requireModule('picker')

  export default {
    data () {
      return {
        value: '',
        index: 0
      }
    },
    methods: {
      pick () {
        const items = ['Saab', 'Volvo', 'BMW']
        picker.pick({
          index: this.index,
          items
        }, event => {
          if (event.result === 'success') {
            this.value = items[event.data]
            this.index = event.data
          }
        })
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
    align-items: center;
  }
  .label {
    font-size: 60px;
    color: #888888;
  }
  .title {
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
