// pages/scanSuccess/scanSuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "code": 1000,
    "msg": "兑换成功",
    "order": {
      "id": 108,
      "appid": 14,
      "user_id": 1928,
      "goods_id": 11,
      "name": "一毛钱红包", //商品名称
      "num": 1, // 数量
      "point": 2, // 所需积分
      "point_total": 2, 
      "cash_total": 10, // 所需现金
      "cover": "https://gitblog.luckyq.cn/base64img/20210419114256.png", // 物品图
      "delivery_at": "2021-11-09 17:09:20", // 兑换时间
      "lower_at": "2021-06-25 23:59:59", // 过期时间
      "prove": null,
      "dispute_at": null,
      "created_at": "2021-06-26 23:00:02",
      "updated_at": "2021-11-09 17:09:20",
      "deleted_at": null,
      "order_id": "20210626230002530604999146",
      "order_status": 1,
      "cash_need": null
    },
    "good": {
      "id": 11,
      "appid": 14,
      "name": "一毛钱红包",
      "cash_value": 10,
      "point": 2,
      "lower_at": "2021-08-06 23:59:59",
      "stock": 678,
      "out": 29,
      "invalid_at": "2021-10-01 23:59:59",
      "cover": "https://gitblog.luckyq.cn/base64img/20210419114256.png",
      "boss_id": 6,
      "intro": "一毛钱红包一毛钱红包一毛钱红包一毛钱红包一毛钱红包",
      "body": "**一毛钱红包一毛钱红包一毛钱红包一毛钱红包一毛钱红包一毛钱红包一毛钱红包一毛钱红包一毛钱红包**",
      "created_at": "2021-03-30 16:59:01",
      "updated_at": "2021-06-29 18:42:37",
      "deleted_at": null,
      "tag": null,
      "tag_style": null,
      "state": 1,
      "cash_need": 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})