// app.js
const apis = require('./utils/api.js')
const globalFun = require('./utils/util')
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        
      }
    })
  },
  apis, //请求方法
  globalFun,// 公用方法
  globalData: {
    userInfo: null
  }
})
