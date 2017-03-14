<style src="./style.css" scoped></style>

<template src="./template.html"></template>

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


