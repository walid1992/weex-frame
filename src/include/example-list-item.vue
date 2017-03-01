<template>
  <list-item v-on:click="redirect">
    <text class="item-txt">{{title}}</text>
  </list-item>
</template>

<style>
  .item-txt {
    font-size: 48px;
    color: #555;
  }
</style>

<script>
  let event = weex.requireModule('event')
  let navigator = weex.requireModule('navigator')
  let modal = weex.requireModule('modal')

  export default {
    props: {
      title: {
        default: '456'
      },
      url: {
        default: ''
      }
    },
    components: {
      listItem: require('./list-item.vue')
    },
    methods: {
      redirect () {
        navigator.push({
          url: this.url,
          animated: 'true'
        }, event => {
          modal.toast({message: 'callback: ' + event})
        })
//        event.openURL(this.url)
      }
    }
  }
</script>
