/**
 * @Author   : walid
 * @Data     : 2017-03-26  16:46
 * @Describe : 全局mixins参数配置
 */

import navigator from 'utils/modules/navigator'
import routeName from 'constants/route'

export default {
  data() {
    return {
      $navigator: navigator,
      routeName,
      rpx: 1,
      android: weex.config.env && weex.config.env.platform.toLowerCase() === 'android',
      ios: weex.config.env && weex.config.env.platform.toLowerCase() === 'ios',
      web: weex.config.platform.toLowerCase() === 'web'
    }
  },

  created() {
    let env = weex.config.env
    if (env) {
      let rWidth = env.deviceWidth
      env.deviceWidth > 828 && (rWidth = env.deviceWidth / 3 * 2)
      this.rpx = 750 / rWidth
    }
  },

  methods: {
    test() {
      console.log('test')
    }
  }
}