/**
 * @author walid
 * @date 2017/02/21
 * @description 常量配置
 */

const datas = {
  baseImageUrl: 'http://xiaobaiossdevortest.oss-cn-beijing.aliyuncs.com/icon/'
}

// color
const color = {
  MAIN: '#ff6b43'
}

const spEnum = {
  TELEPHONE: 'TELEPHONE',
  AVATAR: 'AVATAR',
  NICK_NAME: 'NICK_NAME',
  BRIEF: 'BRIEF',
  OPEN_3G4G: 'OPEN_3G4G'
}

const imageUrl = {
  BACK_BLACK: datas.baseImageUrl + 'back_black.png',
  BACK_WDITE: datas.baseImageUrl + 'back_white.png',
  MINE_FAVORITE: datas.baseImageUrl + 'mine_favorite.png',
  IC_MINE_MESSAGE: datas.baseImageUrl + 'ic_mine_message.png',
  MINE_SETTING: datas.baseImageUrl + 'mine_setting.png',
  MINE_EDIT: datas.baseImageUrl + 'mine_edit.png',
  IC_RIGHT_ARROW: datas.baseImageUrl + 'ic_right_arrow.png',
  DEFAULT: datas.baseImageUrl + 'ic_market_normal.png',
  IC_MINE_PHOTO: datas.baseImageUrl + 'ic_mine_photo.png',
  IC_HER_VIDEO: datas.baseImageUrl + 'ic_her_video.png',
  IC_MESSAGE_LEFT_ARROW: datas.baseImageUrl + 'ic_message_left_arrow.png',
  IC_OFFICAL_MESSAGE: datas.baseImageUrl + 'ic_offical_message.png',
  IC_MESSAGE_COMMENT: datas.baseImageUrl + 'ic_message_comment.png',
  IC_MINE_NAVIGATION: datas.baseImageUrl + 'ic_mine_navigation.png',
  IC_MINE_BACKGROUND: datas.baseImageUrl + 'ic_mine_background.png'
}

const pageUrl = {
  SETTING_URL: 'mine/setting/xb-setting.js'
}

export default {
  color, spEnum, imageUrl, pageUrl
}