<template>
  <div>
    <text class="title">Switch Demo</text>
    <div class="example">
      <switch></switch>
    </div>
    <div class="example">
      <span>checked:</span>
      <switch checked="true"></switch>
    </div>
    <div class="example">
      <span>disabled:</span>
      <switch disabled="true"></switch>
    </div>
    <div class="example">
      <span @click="onclick">events:</span>
      <switch @click="onclick" @change="onchange" @disappear="ondisappear" @appear="onappear"></switch>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    methods: {
      onclick (e){
        console.log('onclick:' + e.value)
      },
      onchange (e){
        console.log('onchage, value:' + e.value)
      },
      ondisappear (e){
        console.log('ondisappear, value:' + e.value)
      },
      onappear (e){
        console.log('onappear, value:' + e.value)
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .example {
    text-align: center;
    font-size: 50px;
  }
</style>
