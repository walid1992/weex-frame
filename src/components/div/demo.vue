<template>
  <div class="wrapper">
    <div class="group">
      <div class="box box-a">
        <div class="box box-b"></div>
      </div>
      <div class="box box-c"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    flex-direction: row;
    justify-content: center;
  }
  .group {
    flex-direction: column;
    justify-content: center;
  }
  .box {
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
  }
  .box-a {
    width: 300px;
    height: 300px;
    background-color: #EEE;
  }
  .box-b {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-left: 100px;
    background-color: #CCC;
  }
  .box-c {
    width: 200px;
    height: 200px;
    margin-top: 50px;
    margin-left: 50px;
    background-color: #DDD;
  }
</style>
