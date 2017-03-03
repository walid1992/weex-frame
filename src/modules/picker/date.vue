<template>
  <div class="wrapper">
    <div class="group">
      <text class="label">Date: </text>
      <text class="title">{{value}}</text>
    </div>
    <div class="group">
      <text class="button" @click="pickDate">Pick Date</text>
    </div>
  </div>
</template>

<script>
  const picker = weex.requireModule('picker')

  export default {
    data () {
      return {
        value: '2017-01-12'
      }
    },
    methods: {
      pickDate () {
        picker.pickDate({
          value: this.value,
          max: '2029-11-28',
          min: '2005-11-28'
        }, event => {
          if (event.result === 'success') {
            this.value = event.data
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
    font-size: 40px;
    color: #888888;
  }
  .title {
    font-size: 80px;
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
