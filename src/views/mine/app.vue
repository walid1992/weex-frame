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
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/workbench_friends.png',
          name: '个人动态'
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/person-data.png',
          name: '个人资料'
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/workbench_card_setting.png',
          name: '名片设置'
        }],
        groupInfoList: [{
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/wallet_trade_data.png',
          name: '我的公司'
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/group_icon.png',
          name: '群组'
        }, {
          iconUrl: 'https://gitlab.com/toonteam/weex/raw/f9492284d15c3d9ec79b72608768d20cf450cae9/src/views/mine/imgs/person-dynamic.png',
          name: '审批'
        }]
      }
    },

    methods: {
      onPersonList (index) {
        switch (index) {
          case 1:
            this.push({
              route: this.route.userInfo
            })
            break
          case 2:
            break
          default:
            this.push({
              route: this.route.collect
            })
            break
        }
      },

      toPersonal (event) {
        this.push({
          route: this.route.personal
        })
      },

      toBlog(event) {
        this.push({
          route: this.route.web,
          query: {
            url: 'http://www.jianshu.com/u/a279a2f8ed63'
          }
        })
//        this.navigator.pushWeb('http://www.jianshu.com/u/a279a2f8ed63')
      }
    }
  }
</script>


