<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    data() {
      return {
        funcList: [{
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_company.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_wallet.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_collection.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_door_guard.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_beacon.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_skin.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_consult.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_address.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_feedback.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_account.png?raw=true',
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
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_common.png?raw=true',
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
        goIconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/jump_arrow_next.png?raw=true'
      }
    },
    methods: {
      toMine (event) {
        this.router.push({
          page: this.routerPage.mine
        })
      },
      naviBarLeftItemClick(){
        this.router.pop()
      }
    }
  }
</script>