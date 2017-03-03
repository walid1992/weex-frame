<template>
  <div class="wrapper">
    <input class="input" type="text" disabled placeholder="disabled" />
    <input class="input" type="text" disabled="true" placeholder="disabled=true" />
    <!-- <input class="input" type="text" autofocus placeholder="autofocus" /> -->
    <input class="input" type="text" autofocus="true" placeholder="autofocus=true" />
    <input class="input" type="text" maxlength="5" placeholder="maxlength=5" />
  </div>
</template>

<style>
  .input {
    font-size: 40px;
    width: 600px;
    margin-top: 30px;
    margin-left: 75px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
</style>
