// pages/store/tabs/index.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    hei:0,//手指按下的高度
    // endHei:0,//松开时的高度
    resultHei:0,//差
    topPo:-65,
    showType:1,
  },
  methods:{
    // 滚动到底部
    toBottom(e){
      console.log(123)
    },
    // 手指按下
    bindStart(e){
      this.setData({
        hei:e.changedTouches[0].clientY
      })
      // console.log(e.changedTouches[0].clientY)
      // console.log(this.data.endHei - this.data.endHei)
    },
    // 移动
    bindMove(e){
      console.log(this.data.topPo)
      this.setData({
        resultHei:e.changedTouches[0].clientY - this.data.hei,
        topPo:(e.changedTouches[0].clientY - this.data.hei)/3
      })
      if(this.data.topPo>-12){
        this.setData({
          showType:3,
        })
      }
    },
    // 结束
    bingEnd(e){
      if(this.data.topPo>-12){
        this.setData({
          showType:2,
          topPo:0
        })
      }
      setTimeout(()=>{
        this.setData({
          topPo:-65
        })
        wx.showToast({
          title: '刷新成功',
        })
      },2000)
      console.log(this.data.resultHei)
      // this.setData({
      //   loding:true
      // })
    },

  }
})