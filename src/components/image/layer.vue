<template>
  <div class="wrapper">
    <div class="screen">
      <image class="image" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
      <text class="title" style="">Image Title</text>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .screen {
    position: relative;
    left: 75px;
  }
  .image {
    width: 600px;
    height: 600px;
  }
  .title {
    position: absolute;
    top: 20px;
    left: 15px;
    width: 570px;
    font-size: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #FFFFFF;
  }
</style>
