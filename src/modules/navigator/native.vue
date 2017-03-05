<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump</text>
  </div>
</template>

<script>
  let navigator = weex.requireModule('navigator')
  let modal = weex.requireModule('modal')

  export default {
    methods: {
      jump (event) {
        console.log('will jump')
        navigator.push({
          url: 'http://dotwe.org/raw/dist/519962541fcf6acd911986357ad9c2ed.js',
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
