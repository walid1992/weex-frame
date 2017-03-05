<template>
  <div class="wrapper">
    <text class="button" @click="showAlertA">Normal Alert</text>
    <text class="button" @click="showAlertB">Change okTitle</text>
    <text class="button" @click="showAlertC">callback {{count}}</text>
  </div>
</template>

<script>
  let modal = weex.requireModule('modal')

  export default {
    data () {
      return {count: 0}
    },
    methods: {
      showAlertA (event) {
        console.log('will show normal alert')
        modal.alert({
          message: 'This is a normal alert'
        })
      },
      showAlertB (event) {
        console.log('will show alert B')
        modal.alert({
          message: 'This alert changed OK title',
          okTitle: 'K.O.'
        })
      },
      showAlertC (event) {
        console.log('will show alert C')
        modal.alert({
          message: 'This alert has callback',
          okTitle: 'K.O.'
        }, result => {
          console.log('result:', result)
          this.count++
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
