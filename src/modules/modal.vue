<template>
  <scroller>
    <panel title='Toast' type='primary'>
      <button type='primary' @click.native='toast' value='Toast'></button>
    </panel>

    <panel title='Dialog' type='primary'>
      <button type='success' @click.native='alert' value='Alert' style='margin-bottom: 20px;'></button>
      <button type='primary' @click.native='confirm' value='Confirm' style='margin-bottom: 20px;'></button>
      <button type='warning' @click.native='prompt' value='Prompt'></button>
    </panel>
  </scroller>
</template>

<script>
  let modal = weex.requireModule('modal')
  module.exports = {
    data: function () {
      return {}
    },
    components: {
      panel: require('../include/panel.vue'),
      button: require('../include/button.vue')
    },
    methods: {
      toast (msg, duration) {
        if (!msg || typeof msg !== 'string') {
          msg = 'I am Toast show!'
        }
        duration = duration || 2
        modal.toast({
          'message': msg,
          'duration': duration
        })
      },
      alert (msg, okTitle, cancelTitle) {
        if (!msg || typeof msg !== 'string') {
          msg = 'I am Alert!'
        }
        modal.alert({
          'message': msg,
          'okTitle': okTitle,
          'cancelTitle': cancelTitle
        }, function () {
          modal.toast({message: 'Click Alert OK Bnt!!'})
        })
      },
      confirm (msg, okTitle, cancelTitle) {
        if (!msg || typeof msg !== 'string') {
          msg = 'I am Confirm!'
        }
        okTitle = okTitle || 'OK'
        cancelTitle = cancelTitle || 'Cancel'
        modal.confirm({
          'message': msg,
          'okTitle': okTitle,
          'cancelTitle': cancelTitle
        }, function (result) {
          modal.toast({message: 'Click Confirm  ' + JSON.stringify(result)})
        })
      },
      prompt () {
        modal.prompt({
          'message': 'I am Prompt!',
          'okTitle': 'ok',
          'cancelTitle': 'cancel'
        }, function (result) {
          modal.toast({message: 'Click Prompt  ' + JSON.stringify(result)})
        })
      }
    }
  }
</script>
