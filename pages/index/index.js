// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  scanCode() {
    var myThis = this;
    wx.scanCode({
      success(res) {
        myThis.setData({
          result: res.result,
          scanType: res.scanType
        })
      }
    })
  },
})
