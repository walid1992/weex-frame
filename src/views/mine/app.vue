<template>
  <div class="wrapper">
    <text class="weex" @click="jumpA">Hello Weex !</text>
    <text class="vue" @click="jumpList">Hello Vue !</text>
  </div>
</template>

<script>
  import navigator from 'utils/modules/navigator'
  import route from 'constants/route'

  export default {
    methods: {
      jumpA (event) {
        navigator.push(this, route.demoA)
      },
      jumpList (event) {
        navigator.push(this, route.demoList)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 750px;
    height: 1334px;
    flex-direction: column;
    justify-content: center;
  }

  .weex {
    font-size: 60px;
    text-align: center;
    color: #1B90F7;
  }

  .vue {
    font-size: 60px;
    text-align: center;
    margin-top: 30px;
    color: #41B883;
  }
</style>
