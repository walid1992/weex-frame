/**
 * @Author   : walid
 * @Data     : 2017-03-26  16:46
 * @Describe : 全局mixins参数配置
 */

import navigator from 'utils/modules/navigator'
import model from 'utils/modules/model'
import route from 'router/route'
import imgUrl from 'constants/imgurl'

export default {
  data() {
    return {
      model,
      route,
      imgUrl,
      android: weex.config.env && weex.config.env.platform.toLowerCase() === 'android',
      ios: weex.config.env && weex.config.env.platform.toLowerCase() === 'ios',
      web: weex.config.platform && weex.config.platform.toLowerCase() === 'web'
    }
  },

  created() {

  },

  methods: {
    push({route, params, query}) {
      if (route === this.route.web) {
        navigator.pushWeb(query.url)
        return
      }
      if (this.web) {
        this.$router.push({
          path: route.path,
          params: params,
          query: query
        })
        return
      }
      navigator.push(route, query)
    }
  }
}