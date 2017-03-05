<template>
  <div>
    <text class="text">{{state}}</text>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        state: '---'
      }
    },
    beforeCreate () {
      modal.toast({message: 'beforeCreate', duration: 0.6})
    },
    created () {
      modal.toast({message: 'created', duration: 0.6})
    },
    beforeMount () {
      modal.toast({message: 'beforeMount', duration: 0.6})
    },
    mounted () {
      this.state = 'mounted'
      modal.toast({message: 'mounted', duration: 0.6})
      setTimeout(() => {
        this.state = 'changed in timer'
      }, 3000)
    },
    beforeUpdate () {
      modal.toast({message: 'beforeUpdate', duration: 0.6})
    },
    updated () {
      modal.toast({message: 'updated', duration: 0.6})
    },
    activated () {
      modal.toast({message: 'activated', duration: 0.6})
    },
    deactivated () {
      modal.toast({message: 'deactivated', duration: 0.6})
    },
    beforeDestroy () {
      modal.toast({message: 'beforeDestroy', duration: 0.6})
    },
    destroyed () {
      modal.toast({message: 'destroyed', duration: 0.6})
    }
  }
</script>

<style scoped>
  .text {
    lines: 3;
    width: 600px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 75px;
    margin-top: 75px;
    text-align: center;
    color: #41B883;
    font-size: 50px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>
