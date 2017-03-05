<template>
  <div>
    <text class="button" @click="showToast">Toast</text>
    <text class="button" @click="showAlert">Alert</text>
    <text class="button" @click="showConfirm">Confirm</text>
    <text class="button" @click="showPrompt">Prompt</text>
  </div>
</template>

<style>
  .button {
    font-size: 60px;
    height: 80px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
  }
</style>

<script>
  let modal = weex.requireModule('modal')
  module.exports = {
    data: function () {
      return {
        txtInput: '',
        txtChange: ''
      }
    },
    methods: {
      showToast: function (event) {
        console.log('will show toast')
        modal.toast({
          message: 'This is a toast',
          duration: 0.3
        })
      },
      showAlert: function (event) {
        console.log('will show alert')
        modal.alert({
          message: 'This is a alert',
          duration: 0.3
        }, function (value) {
          console.log('alert callback', value)
        })
      },
      showConfirm: function (event) {
        console.log('will show confirm')
        modal.confirm({
          message: 'Do you confirm ?',
          duration: 0.3
        }, function (value) {
          console.log('confirm callback', value)
        })
      },
      showPrompt: function (event) {
        console.log('will show prompt')
        modal.prompt({
          message: 'This is a prompt',
          duration: 0.3
        }, function (value) {
          console.log('prompt callback', value)
        })
      }
    }
  }
</script>
