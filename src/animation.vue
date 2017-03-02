<template>
  <div>
    <panel title="Transform" type="primary">
      <button value="Rotate" @click.native="rotate" type="primary" size="middle"></button>
      <button value="Scale" @click.native="scale" type="primary" size="middle" style="margin-top:12px;"></button>
      <button value="Translate" @click.native="translate" type="primary" size="middle"
              style="margin-top:12px;"></button>
      <button value="Transform" @click.native="transform" type="success" size="middle"
              style="margin-top:12px;"></button>
    </panel>

    <panel title="Others" type="primary">
      <button value="BgColor" @click.native="color" type="primary" size="middle"></button>
      <button value="Opacity" @click.native="opacity" type="primary" size="middle"
              style="margin-top:12px;"></button>
      <button value="All" @click.native="composite" type="success" size="middle" style="margin-top:12px;"></button>
    </panel>

    <div ref="block" class="block" :style="{ transformOrigin: transformOrigin }">
      <text class="block-txt">Anim</text>
    </div>
  </div>
</template>

<script>
  let animation = weex.requireModule('animation')
  module.exports = {
    data () {
      return {
        transformOrigin: 'center center',
        currentRotate: 0,
        currentScale: 1,
        currentColor: '#FF0000',
        currentOpacity: 1,
        currentTranslate: '',
        currentTransform: '',
        isStop: true
      }
    },
    components: {
      panel: require('./include/panel.vue'),
      button: require('./include/button.vue')
    },
    methods: {
      anim (styles, timingFunction, duration, callback) {
        animation.transition(this.$refs.block.ref, {
          styles: styles,
          timingFunction: timingFunction,
          duration: duration
        }, callback)
      },
      rotate () {
        let self = this
        self.currentRotate += 90
        self.anim({
          transform: 'rotate(' + self.currentRotate + 'deg)'
        }, 'ease-in-out', 500, function () {
          if (self.currentRotate === 360) {
            self.currentRotate = 0
          } else {
            self.rotate()
          }
        })
      },
      translate () {
        this.currentTranslate = this.currentTranslate ? '' : 'translate(50%, 50%)'
        this.anim({
          transform: this.currentTranslate
        }, 'ease-in', 500, function () {
        })
      },
      scale () {
        let self = this
        self.currentScale = self.currentScale === 2 ? .5 : 2
        self.anim({
          transform: 'scale(' + self.currentScale + ')'
        }, 'linear', 500, function () {
        })
      },
      transform: function () {
        let self = this
        this.currentTransform = this.currentTransform ? '' : 'rotate(45deg) scale(1.5)'
        this.anim({
          transform: this.currentTransform,
          transformOrigin: 'left top'
        }, 'ease-out', 500, function () {
          if (self.currentTransform !== '') {
            self.anim({
              transform: 'rotate(-90deg) scale(1.2)',
              transformOrigin: 'left top'
            }, 'ease-out', 500, function () {
            })
          } else {

          }
        })
      },
      composite () {
        let self = this
        self.currentTransform = self.currentTransform ? '' : 'rotate(45deg) scale(1.5) translate(50%, 50%)'
        self.currentColor = self.currentColor === '#F0AD4E' ? '#D9534F' : '#F0AD4E'
        self.currentOpacity = self.currentOpacity === 1 ? 0.1 : 1
        this.anim({
          transform: this.currentTransform,
          transformOrigin: 'left top',
          backgroundColor: self.currentColor,
          opacity: self.currentOpacity
        }, 'ease-out', 1000, function () {
        })
      },
      color: function () {
        let self = this
        self.currentColor = self.currentColor === '#F0AD4E' ? '#D9534F' : '#F0AD4E'
        self.anim({
          backgroundColor: self.currentColor
        }, 'linear', 500, function () {
        })
      },
      opacity: function () {
        let self = this
        self.currentOpacity = self.currentOpacity === 1 ? 0.1 : 1
        self.anim({
          opacity: self.currentOpacity
        }, 'linear', 500, function () {
        })
      }
    }
  }
</script>

<style>
  .block {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 300px;
    left: 400px;
    background-color: #F0AD4E;
    align-items: center;
    justify-content: center;
  }

  .block-txt {
    color: #FFFFFF;
    font-size: 70px;
  }
</style>
