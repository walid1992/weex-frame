<template>
  <osc-scroller class="list" ref='list' @refresh="onRefresh" @loading="onLoading">
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
    <text class="count">Appear items</text>
  </osc-scroller>
</template>

<style scoped>
  .list {
    width: 750px;
    height: 1334px;
  }
</style>

<script>
  export default {
    methods: {
      onRefresh (e) {
        console.log('onRefresh')
        setTimeout(() => {
          this.$refs.list.$emit('refreshDone')
        }, 2000)
      },

      onLoading () {
        console.log('onLoading')
        setTimeout(() => {
          this.$refs.list.$emit('loadingDone')
        }, 2000)
      }
    }
  }
</script>
