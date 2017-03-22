<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import dreamApi from 'api/dream'
  import navigator from 'utils/modules/navigator'
  import route from 'constants/route'

  export default {
    data () {
      return {
        feeds: []
      }
    },

    mounted () {
      dreamApi.dreamFeeds({
        anchorId: -1,
        size: 20
      }).then(res => {
        this.feeds = res.data.feeds
        console.log('请求成功~', res.data.feeds)
      }).catch(res => {
        console.log('请求失败~')
      })
    },

    methods: {
      toDetail(infoUuid) {
        console.log('infoUuid', infoUuid)
        navigator.push(route.web, {
          url: `http://www.shuidichou.com/cf/dream/contribute/${infoUuid}`
        })
      }
    }
  }
</script>