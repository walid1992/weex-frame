<template>
  <example-list :items="items" dir="dist"></example-list>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          // common
          {name: '/hello-world', title: 'Hello World'},
          {name: '/index', title: 'Common Style'},
          {name: '/animation', title: 'Animation'},

          // component
          {name: '/text', title: 'Text'},
          {name: '/image', title: 'Image'},
          {name: '/input', title: 'Input'},
          {name: '/scroller', title: 'Scroller'},
          {name: '/list', title: 'List'},
          {name: '/slider', title: 'Slider'},
          {name: '/a', title: 'A'},
          {name: '/video', title: 'Video'},
          {name: '/countdown', title: 'Countdown'},
          {name: '/marquee', title: 'Marquee'},
          {name: '/web', title: 'Web'},
          {name: '/navigator', title: 'Navigator'},
          {name: '/tabbar', title: 'Tabbar'},

          // module
          {name: '/instance-api', title: 'Instance API'},
          {name: '/modal', title: 'Modal'},
          {name: '/stream', title: 'Stream'},
          {name: '/storage', title: 'Storage'},
          // {name: 'module/clipboard', title: 'Clipboard'}, // 0.8 , developing

          // showcase
          {name: '/progress', title: 'Progress Bar'},
          {name: '/itemlist', title: 'List (Advanced)'},
          {name: '/calculator', title: 'Calculator'},
          {name: '/minesweeper', title: 'Minesweeper'},
          {name: '/ui', title: 'UI Gallery'},
          {name: '/dropdown/dropdown-demo', title: 'Dropdown'}
        ]
      }
    },
    components: {
      exampleList: require('./include/example-list.vue')
    }
  }
</script>
