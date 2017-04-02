<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    methods: {
      toLaunch (event) {
        this.push({
          route: this.route.web,
          query: {
            url: 'http://www.jianshu.com/u/a279a2f8ed63'
          }
        })
      }
    }
  }
</script>

