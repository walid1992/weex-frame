<template>
  <div class="wrapper" >
    <image class="image" resize="cover" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image>
    <text class="title">cover</text>

    <image class="image" resize="contain" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image>
    <text class="title">contain</text>

    <image class="image" resize="stretch" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image>
    <text class="title">stretch</text>
  </div>
</template>

<style>
  .title {
    text-align: center;
    font-size: 36px;
  }
  .image {
    width:650px;
    height:300px;
    margin-top: 25px;
    margin-left: 50px;
    border-color: red;
    border-style: solid;
    border-width: 1;
    background-color: #DDD;
  }
</style>
