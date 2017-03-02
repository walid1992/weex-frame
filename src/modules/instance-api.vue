<template>
  <scroller>
    <panel title="$getConfig()" type="primary">
      <text>{{config}}</text>
    </panel>
  </scroller>
</template>

<script>
  module.exports = {
    data () {
      return {
        config: ''
      }
    },
    components: {
      panel: require('../include/panel.vue')
    },
    created: function () {
      let config = this.$getConfig()
      console.log('config', JSON.stringify(config))
      this.config = JSON.stringify(config, null, 2)
    }
  }
</script>
