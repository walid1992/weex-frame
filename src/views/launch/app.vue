<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  export default {
    data () {
      return {
        channel: this.$route.query.channel
      }
    },
    mounted () {
    },
    methods: {
      toPush (event) {
        this.$router.push('/404')
      }
    }
  }
</script>
