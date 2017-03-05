<template>
  <div>
    <text class="text">{{message}}</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '---'
      }
    },
    mounted () {
      this.message = 'mounted'

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          (Math.random() > 0.5) ? resolve('done') : reject('fail')
        }, 1000)
      })

      promise
        .then(() => {
          this.message = 'resolve'
        })
        .catch(() => {
          this.message = 'reject'
        })
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
