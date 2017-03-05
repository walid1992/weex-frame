<template>
  <list class="list">
    <cell class="cell">
      <div class="panel"><text class="text">First</text></div>
    </cell>
    <cell class="cell">
      <div class="panel"><text class="text">Second</text></div>
    </cell>
    <cell class="cell">
      <div class="panel"><text class="text">Third</text></div>
    </cell>
    <cell class="cell">
      <div class="panel"><text class="text">Fourth</text></div>
    </cell>
    <cell class="cell">
      <div class="panel"><text class="text">Fifth</text></div>
    </cell>
  </list>
</template>

<style scoped>
  .panel {
    width: 600px;
    height: 300px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>
