<template>
  <div class="wrapper">
    <text class="button" @click="show">Properties</text>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')

  export default {
    methods: {
      show () {
        modal.toast({
          message: Object.keys(this).join(','),
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
