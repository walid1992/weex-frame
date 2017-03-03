<template>
  <div>
      <input
        ref="input"
        type="text"
        placeholder="Input Something"
        class="input"
        autofocus
        value="abeee"
        maxlength="10"
        @change="onchange"
        @input="oninput"
        @focus="onfocus"
        @blur="onblur"
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
  module.exports = {
    data: function () {
      return {
        txtInput: '',
        txtChange: ''
      }
    },
    methods: {
      onchange: function(event) {
        console.log('onchange:', event.target.value)
        this.txtChange = event.target.value
      },
      oninput: function(event) {
        console.log('oninput:', event.target.value)
        this.txtInput = this.$refs.input.value
      },
      onfocus: function(event) {
        console.log('onfocus:', event.target.value)
      },
      onblur: function(event) {
        console.log('onblur:', event.target.value)
      }
    }
  }
</script>
