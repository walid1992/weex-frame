/**
 * Created by walid on 16/8/2.
 */

var api = require('util/api.js')
var utils = require('util/utils.js')

var apiURL = {
  getauthcode: '/v1/common/getauthcode',
};

var data = {
  phoneNumberError: {
    ok: false,
    statusText: '手机号格式错误'
  }
}

exports.getauthcode = function (telephone, callback) {
  var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

  if (telephone.length == 0) {
    callback(data.phoneNumberError)
    return false
  }
  if (telephone.length != 11) {
    callback(data.phoneNumberError)
    return false
  }
  if (!phoneReg.test(telephone)) {
    callback(data.phoneNumberError)
    return false
  }
  // api.requestGetWithBody(apiURL.getauthcode + '?telephone=' + telephone + '&countryCode=86', {
  //     "telephone": telephone,
  //     "countryCode": '86'
  // }, callback)
};
