/**
 * Created by walid on 16/6/16.
 */
let api = require('util/api')

exports.getOfficalNoticeDate = function (callback) {
  api.requestGetWithBody(apiURL.gettaglistbytype + '?tagType=' + tagType.BRAND_TYPE, {
    "tagType": tagType.BRAND_TYPE
  }, callback)
}
