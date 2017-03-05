/**
 * @author walid
 * @date 2017/3/5
 * @description 梦想相关API
 */

import apiUtils from 'utils/api'

// 获取梦想筹案例
function dreamFeeds (body) {
  return apiUtils.get('api/cf/v4/dream/feeds', body)
}

export default {
  dreamFeeds
}