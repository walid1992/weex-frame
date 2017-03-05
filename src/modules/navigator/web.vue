<template>
  <div>
    <text class="text">See the url on browser.</text>
  </div>
</template>

<style>
  .text {
    text-align: center;
    font-size: 36px;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')

  export default {
    mounted () {
      setTimeout(() => {
        navigator.push({ url: '#/abc' })
        setTimeout(() => {
          navigator.push({ url: '#/def' }, () => {
            console.log('callback: push #/def')
          })
          setTimeout(() => {
            navigator.pop()
            setTimeout(() => {
              navigator.push({ url: '#/xyz' })
            }, 1000)
          }, 1000)
        }, 1000)
      }, 2000)
    }
  }
</script>
