<template>
  <list>
    <cell v-for="item in items" append="tree">
      <example-list-item :title="item.title" :url="item.url"></example-list-item>
    </cell>
  </list>
</template>

<script>
  let getBaseURL = require('./base-url.js').getBaseURL
  module.exports = {
    props: {
      dir: {
        default: 'dist'
      }, // examples, test ...
      items: {
        default: [
          {name: 'hello', title: 'Hello World', url: ''}
        ]
      }
    },
    components: {
      exampleListItem: require('./example-list-item.vue')
    },
    created () {
      let base = getBaseURL(this)
      for (let i in this.items) {
        let item = this.items[i]
        if (!item.url) {
          item.url = base + item.name + '.js'
        }
      }
    }
  }
</script>
