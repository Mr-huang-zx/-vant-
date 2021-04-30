// pages/world/get_card/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    giftList:[
      {image:"/assets/image/world/lucky_bottle.png",name:"小花花"},
      {image:"/assets/image/world/lucky_bottle.png",name:"特斯拉马丁"},
      {image:"/assets/image/world/lucky_bottle.png",name:"迷你币"},
      {image:"/assets/image/world/lucky_bottle.png",name:"没有东西"},
    ],
    selectedIdx:null
  },
  // 选中
  selectedFun(e){
    console.log(e)
    this.setData({
      selectedIdx:e.currentTarget.dataset.indexs
    })
  },
  // 领取
  getGiftFun(){
    if(!this.data.selectedIdx){
      app.globalFun.Toast({
        "message":"请选择奖品",
        "position":"bottom"
      })
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