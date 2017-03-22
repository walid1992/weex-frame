/**
 * @Author   : walid
 * @Data     : 2017-03-20  23:23
 * @Describe : storage 工具类
 */

const storage = weex.requireModule('storage')

const storageName = {
  testKey: 'testKey'
}

function setItem(key, value) {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('key is empty ！！！')
      return
    }
    storage.setItem(key, value, event => {
      event.result === 'success' ? resolve() : reject()
    })
  })
}

function getItem(key) {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('key is empty ！！！')
      return
    }
    storage.getItem(key, event => {
      console.log('value:', event.data)
      event.result === 'success' ? resolve(event.data) : reject('读取失败~')
    })
  })
}

function removeItem(key) {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('key is empty ！！！')
      return
    }
    storage.removeItem(key, event => {
      console.log('delete value:', event.data)
      event.result === 'success' ? resolve() : reject('删除失败~')
    })
  })
}

function length() {
  return new Promise((resolve, reject) => {
    storage.length(event => {
      console.log('storage length :', event.data)
      event.result === 'success' ? resolve(event.data) : reject('获取长度失败~')
    })
  })
}

function getAllKeys() {
  return new Promise((resolve, reject) => {
    storage.getAllKeys(event => {
      console.log('storage length :', event.data)
      event.result === 'success' ? resolve('props: ' + event.data.join(', ')) : reject('获取所有key失败~')
    })
  })
}

export default {
  storageName, setItem, getItem, removeItem, length, getAllKeys
}