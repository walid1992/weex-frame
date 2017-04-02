/**
 * @author walid
 * @date 2017/02/21
 * @description 字符串操作
 */

/* eslint linebreak-style: [0] */
export function trim(str, isGlobal) {
  let result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (isGlobal) {
    result = result.replace(/\s/g, '')
  }
  return result
}

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
export function urlEncode(param, key, encode) {
  if (param == null) {
    return ''
  }
  let paramStr = ''
  let t = typeof (param)
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
  } else {
    for (let i in param) {
      let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += urlEncode(param[i], k, encode)
    }
  }
  return paramStr
}

/**
 * 获取QueryString的数组
 * @returns {Array|{index: number, input: string}}
 */
export function getQueryString() {
  let result = weex.config.bundleUrl.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'))
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].substring(1)
  }
  return result
}

/**
 * 根据QueryString参数名称获取值
 * @param name
 * @returns {string}
 */
export function getQueryStringByName(name) {
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(weex.config.bundleUrl)
  if (!results || !results[2]) {
    console.log('empty')
    return ''
  }
  console.log(name, decodeURIComponent(results[2].replace(/\+/g, ' ')))
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * 根据QueryString参数索引获取值
 * @param index
 * @returns {*}
 */
export function getQueryStringByIndex(index) {
  if (!index) {
    return ''
  }
  let queryStringList = getQueryString()
  if (index >= queryStringList.length) {
    return ''
  }
  let result = queryStringList[index]
  let startIndex = result.indexOf('=') + 1
  return result.substring(startIndex)
}