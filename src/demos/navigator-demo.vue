<template>
  <div class="wrapper">
    <text class="text">navigator</text>
  </div>
</template>

<style>
  .wrapper {
    text-align: center;
  }
  .text {
    font-size: 50px;
  }
</style>

<script>
  let navigator = weex.requireModule('navigator')
  module.exports = {
    mounted: function () {
      // console.log(navigator)
      setTimeout(() => {
        navigator.push({ url: '#/abc' })
        setTimeout(() => {
          navigator.push({ url: '#/def' }, function () {
            console.log('push #/def')
          })
          setTimeout(() => {
            navigator.pop()
            setTimeout(() => {
              navigator.push({ url: '#/xyz' })
            }, 800)
          }, 800)
        }, 800)
      }, 1000)
    }
  }
</script>
