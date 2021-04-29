const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessionList:[
      {startTime:'18:00'},
      {startTime:'19:00'},
      {startTime:'20:00'},
    ],
    storeList:[
      {image:"/assets/image/store/touxiang41.png",name:"皮肤碎片",goldNum:1,saleGold:9999},
      {image:"/assets/image/store/touxiang41.png",name:"迷小酷",goldNum:3,saleGold:888},
      {image:"/assets/image/store/touxiang41.png",name:"跑车",goldNum:100,saleGold:777},
    ],
  },
  // 提醒
  remindFun(){
    app.globalFun.Toast({
      "message":'提醒设置成功',
      "position":"bottom"
    })
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



})