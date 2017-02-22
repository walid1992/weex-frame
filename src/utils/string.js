/**
 * @author walid
 * @date 2017/02/21
 * @description 字符串操作
 */

/* eslint linebreak-style: [0] */
export default function trim (str, isGlobal) {
  let result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (isGlobal) {
    result = result.replace(/\s/g, '')
  }
  return result
}
