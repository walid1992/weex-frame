<template>
  <list class="group">
    <cell v-for="(item, index) in lists">
      <div :data-key="index" scroll-direction="xxy">
        <text v-bind:text-name="item.name" class="text">{{item.name}}</text>
      </div>
    </cell>
    <cell v-for="title in titles">
      <text data-title="title" class="text">{{title}}</text>
    </cell>
  </list>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        lists: [
          { name: 'A' },
          { name: 'B' }
        ],
        titles: ['X', 'Y']
      }
    }
  }
</script>
