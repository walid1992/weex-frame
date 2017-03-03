<template>
  <div>
      <input
        ref="input"
        type="text"
        placeholder="Input Something"
        class="input"
        autofocus="true"
        value=""
        @change="onchange"
        @input="oninput"
      />
      <text>oninput: {{txtInput}}</text>
      <text>onchange: {{txtChange}}</text>
  </div>
</template>

<style>
  .input {
    font-size: 60px;
    height: 80px;
    width: 400px;
  }
</style>

<script>
  let modal = weex.requireModule('modal')
  module.exports = {
    data: function () {
      return {
        txtInput: '',
        txtChange: ''
      }
    },
    methods: {
      onchange (event) {
        console.log('value change', event)
        this.txtChange = this.$refs.input.value
        modal.toast({ message: this.txtChange, duration: 0.3 })
      },
      oninput (event) {
        this.txtInput = this.$refs.input.value
      }
    }
  }
</script>
