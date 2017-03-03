<template>
  <div class="wrapper">
    <text class="button" @click="back">Back</text>
  </div>
</template>

<script>
  let navigator = weex.requireModule('navigator')
  let modal = weex.requireModule('modal')

  export default {
    methods: {
      back (event) {
        console.log('will back')
        navigator.pop({
          animated: 'true'
        }, event => {
          modal.toast({message: 'callback: ' + event})
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
