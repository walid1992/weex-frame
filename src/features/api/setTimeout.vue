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
      setTimeout(() => {
        this.message = 'First'
        setTimeout(() => {
          this.message = 'Second'
          setTimeout(() => {
            this.message = 'Third'
            setTimeout(() => {
              this.message = 'Fourth'
              setTimeout(() => {
                this.message = 'Fifth'
                setTimeout(() => {
                  this.message = 'Done'
                }, 600)
              }, 600)
            }, 600)
          }, 600)
        }, 600)
      }, 600)
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
