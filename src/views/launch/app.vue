<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import navigator from 'utils/modules/navigator'

  export default {
    methods: {
      toLaunch (event) {
        navigator.push(this, route.web, {
          url: 'http://www.shuidichou.com/cf/dream/edit-basic-info'
        })
      }
    }
  }
</script>

