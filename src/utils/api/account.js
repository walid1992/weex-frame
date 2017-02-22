/**
 * Created by walid on 16/8/2.
 */

var api = require('util/api.js')

var apiURL = {
  bindtelephone: '/v1/account/bindtelephone'
}

var data = {
  phoneNumberError: {
    ok: false,
    message: '手机号格式错误'
  },
  codeError: {
    ok: false,
    message: '验证码格式错误'
  }
}

exports.bindtelephone = function (telephone, authCode, callback) {
  var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (telephone.length == 0) {
    callback(data.phoneNumberError)
    return false
  }
  if (telephone.length != 11) {
    callback(data.phoneNumberError)
    return false
  }

  // if (!phoneReg.test(telephone)) {
  //     callback(data.phoneNumberError)
  //     return false
  // }

  if (authCode.length == 0) {
    callback(data.codeError)
    return false
  }
  if (authCode.length != 6) {
    callback(data.codeError)
    return false
  }

  // api.requestPostWithBody(apiURL.bindtelephone + '?telephone=' + telephone + '&authCode=' + authCode + '&type=0', {
  //     "telephone": telephone,
  //     "authCode": authCode,
  //     "type": 0
  // }, callback)
};
