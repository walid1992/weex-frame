<template>
  <div>
    <div class="box" @click="onclick" @longpress="onlongpress" @appear="onappear"  @disappear="ondisappear"></div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    methods: {
      onclick (event) {
        console.log('onclick:', event)
        modal.toast({
          message: 'onclick',
          duration: 0.8
        })
      },
      onlongpress (event) {
        console.log('onlongpress:', event)
        modal.toast({
          message: 'onlongpress',
          duration: 0.8
        })
      },
      onappear (event) {
        console.log('onappear:', event)
        modal.toast({
          message: 'onappear',
          duration: 0.8
        })
      },
      ondisappear (event) {
        console.log('ondisappear:', event)
        modal.toast({
          message: 'ondisappear',
          duration: 0.8
        })
      }
    }
  }
</script>

<style scoped>
  .box {
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
    width: 250px;
    height: 250px;
    margin-top: 250px;
    margin-left: 250px;
    background-color: #EEE;
  }
</style>
