<template>
  <div class="root">
    <div v-if="ios" :style="{width: '750px', height: '40px', backgroundColor: backgroundColor}"></div>
    <div class="wrapper" :style="{width: '750px', height: ios ? '1294px' : '1334px', backgroundColor: backgroundColor}">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .root {
    width: 750px;
    height: 1334px;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: 750px;
  }
</style>

<script>
  export default {
    data () {
      return {
        ios: weex.config.env.platform === 'ios'
      }
    },

    props: {
      backgroundColor: {default: '#eeeeee'}
    }
  }
</script>
