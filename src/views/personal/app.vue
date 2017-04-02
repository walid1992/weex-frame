<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import navigator from 'utils/modules/navigator'
  import route from 'router/route'

  export default {
    data() {
      return {
        funcList: [{
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_company.png',
          name: '公司管理',
          attr: {
            marginTop: '17px',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_wallet.png',
          name: '钱包',
          attr: {
            marginTop: '17px',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_collection.png',
          name: '收藏',
          attr: {
            marginTop: '',
            marginBottom: '17px',
            borderTopWidth: '0',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_door_guard.png',
          name: '门禁',
          attr: {
            marginTop: '',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_beacon.png',
          name: '闪通',
          attr: {
            marginTop: '',
            marginBottom: '17px',
            borderTopWidth: '0',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_skin.png',
          name: '更换皮肤',
          attr: {
            marginTop: '',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '0',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_consult.png',
          name: '常用信息管理',
          attr: {
            marginTop: '',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '0',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_address.png',
          name: '常用地址管理',
          attr: {
            marginTop: '',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '0',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_feedback.png',
          name: '帮助与反馈',
          attr: {
            marginTop: '',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_account.png',
          name: '账户设置',
          attr: {
            marginTop: '17px',
            marginBottom: '17px',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/icon_my_common.png',
          name: '通用设置',
          attr: {
            marginTop: '',
            marginBottom: '',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderColor: '#dfe3e2',
            borderStyle: 'solid'
          }
        }],
        goIconUrl: 'https://gitlab.com/toonteam/weex/raw/dev/src/views/personal/imgs/jump_arrow_next.png'
      }
    },
    methods: {
      toMine (event) {
        navigator.push(route.mine)
      },
      naviBarLeftItemClick(){
        navigator.pop()
      }
    }
  }
</script>