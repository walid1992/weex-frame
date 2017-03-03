<template>
  <div class="wrapper">
    <text class="button" @click="showConfirmA">Confirm</text>
    <text class="button" @click="showConfirmB">okTitle</text>
    <text class="button" @click="showConfirmC">cancelTitle</text>
    <text class="button" @click="showConfirmD">callback {{res}}</text>
  </div>
</template>

<script>
  let modal = weex.requireModule('modal')

  export default {
    data () {
      return {res: '*'}
    },
    methods: {
      showConfirmA (event) {
        console.log('will show normal confirm')
        modal.confirm({
          message: 'This is a normal confirm'
        })
      },
      showConfirmB (event) {
        console.log('will show confirm B')
        modal.confirm({
          message: 'This confirm changed OK title',
          okTitle: 'K.O.'
        })
      },
      showConfirmC (event) {
        console.log('will show confirm C')
        modal.confirm({
          message: 'This confirm changed cancel title',
          cancelTitle: 'give up'
        })
      },
      showConfirmD (event) {
        console.log('will show confirm D')
        modal.confirm({
          message: 'This confirm has callback',
          okTitle: 'K.O.'
        }, result => {
          console.log('result:', result)
          this.res = result
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }

  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>
