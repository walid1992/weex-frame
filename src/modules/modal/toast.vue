<template>
  <div class="wrapper">
    <text class="button" @click="showToastA">Normal Toast</text>
    <text class="button" @click="showToastB">No duration</text>
    <text class="button" @click="showToastC">Long duration</text>
  </div>
</template>

<script>
  let modal = weex.requireModule('modal')

  export default {
    methods: {
      showToastA (event) {
        console.log('will show toast')
        modal.toast({
          message: 'This is a toast',
          duration: 0.3
        })
      },
      showToastB (event) {
        console.log('will show toast')
        modal.toast({
          message: 'This toast has no duration'
        })
      },
      showToastC (event) {
        console.log('will show toast')
        modal.toast({
          message: 'This toast has long duration',
          duration: 10
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

  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>
