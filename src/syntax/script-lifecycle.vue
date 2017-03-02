<template>
  <div>
    <text class="title" v-for="value in list">{{value}}</text>
  </div>
</template>

<style>
  .title {
    font-size: 48px;
  }
</style>

<script>
  let initMessage = ''
  module.exports = {
    data () {
      return {
        list: ['Lifecycle List']
      }
    },
    init () {
      initMessage = 'component init: nothing more happen even the data initialization'
      console.log('init:', this.list)
    },
    created () {
      this.list.push(initMessage)
      this.list.push('component created: data observed')
      console.log('created:', this.list)
    },
    mounted () {
      this.list.push('component mounted: virtual dom generated')
      console.log('mounted:', this.list)
    }
  }
</script>
