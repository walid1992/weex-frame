/**
 * @Author   : walid
 * @Data     : 2017-03-31  15:38
 * @Describe : globalEvent Utils
 */

const globalEvent =  weex.requireModule('globalEvent')

export default {
  onCollectEvent() {
    return new Promise((resolve) => {
      globalEvent.addEventListener('collectEvent', event => {
        console.log('get geolocation', event)
        resolve()
      })
    })
  }
}