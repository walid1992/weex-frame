/**
 * @author walid
 * @date 2017/02/21
 * @description 封装utils工具类使用
 */

function getParameterByName (name, url) {
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export default {
  getParameterByName
}
