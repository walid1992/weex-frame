<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    data() {
      return {
        personName: '张小凡',
        workPosition: 'web前端工程师',
        workDepartment: '思源总部/互联集团/应用引擎部',
        personInfoList: [{
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/workbench_friends.png?raw=true',
          name: '个人动态'
        }, {
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/person-data.png?raw=true',
          name: '个人资料'
        }, {
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/workbench_card_setting.png?raw=true',
          name: '名片设置'
        }],
        groupInfoList: [{
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/wallet_trade_data.png?raw=true',
          name: '我的公司'
        }, {
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/group_icon.png?raw=true',
          name: '群组'
        }, {
          iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/mine/imgs/person-dynamic.png?raw=true',
          name: '审批'
        }]
      }
    },

    methods: {
      onPersonList (index) {
        switch (index) {
          case 1:
            this.router.push({
              page: this.routerPage.userInfo
            })
            break
          case 2:
            break
          default:
            this.router.push({
              page: this.routerPage.collect
            })
            break
        }
      },

      toPersonal (event) {
        this.router.push({
          page: this.routerPage.personal
        })
      },

      toBlog(event) {
        this.router.push({
          page: this.routerPage.web,
          query: {
            url: 'http://www.jianshu.com/u/a279a2f8ed63'
          }
        })
      }
    }
  }
</script>


