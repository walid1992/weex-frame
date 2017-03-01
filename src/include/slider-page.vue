<template>
  <div class="slider-page">
    <slider-item v-for="(item, index) in items" :key="index" :image="item.image" :link="item.link"></slider-item>
  </div>
</template>

<style>
  .slider-page {
    flex-direction: row;
    justify-content: space-between;
    width: 714px;
    height: 420px;
  }
</style>

<script>
  module.exports = {
    props: {
      items: {default: []}
    },
    components: {
      sliderItem: require('./slider-item.vue')
    }
  }
</script>

