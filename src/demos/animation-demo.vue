<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"><text>box</text></div>
  </div>
</template>

<style>
  .wrapper {
    height: 100%;
  }
  .box {
    width: 300px;
    height: 300px;
    background-color: #DDD;
  }
</style>

<script>
  let animation = weex.requireModule('animation')
  module.exports = {
    methods: {
      move: function () {
        let testEl = this.$refs.test
        animation.transition(testEl, {
          styles: {
            color: '#FF0000',
            transform: 'translate(100px, 100px)',
            transformOrigin: 'center center'
          },
          duration: 0, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          console.log('animation finished.')
        })
      }
    }
  }
</script>
