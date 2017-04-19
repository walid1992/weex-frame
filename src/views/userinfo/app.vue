<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    data (){
      return {
        title: '个人资料',
        personName: '张小凡',
        workPosition: 'web前端工程师',
        workDepartment: '思源总部/互联集团/应用引擎部',
        socialInfo: [{
          tag: '位置',
          data: '实时位置'
        }, {
          tag: '名片号',
          data: 's253585'
        }]
      }
    },
    methods: {
      naviBarLeftItemClick(){
        this.router.pop()
      }
    }
  }
</script>