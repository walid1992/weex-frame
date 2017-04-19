<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    methods: {
      toLaunch (event) {
        this.router.push({
          page: this.routerPage.web,
          query: {
            url: 'http://www.jianshu.com/u/a279a2f8ed63'
          }
        })
      }
    }
  }
</script>

