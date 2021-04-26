// pages/store/tabs/index.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    hei:0,//手指按下的高度
    topPo:-65,
    showType:1,
  },
  methods:{
    // 兑换金币
    getGold(){
      console.log(1)
    },
    // 滚动到底部
    toBottom(e){
      console.log(123)
    },
    // 手指按下
    bindStart(e){
      this.setData({
        hei:e.changedTouches[0].clientY
      })
    },
    // 移动
    bindMove(e){
      this.setData({
        topPo:e.changedTouches[0].clientY - this.data.hei
      })
      if(this.data.topPo>(-12)){
        this.setData({
          showType:3,
        })
      }
      
    },
    // 结束
    bingEnd(e){
      // 上拉加载更多
     
      if(this.data.topPo ==-65){return}
      if(this.data.topPo<-55){
        this.setData({
          topPo:-120,
        })
      }
      
      if(this.data.topPo>-65 && this.data.topPo<=-12){
        this.setData({
          topPo:-65,
        })
      }
      // 下拉刷新
      
      if(this.data.topPo>-12){
        this.setData({
          showType:2,
          topPo:0
        })
        setTimeout(()=>{
          this.setData({
            topPo:-65
          })
          wx.showToast({
            title: '刷新成功',
          })
        },2000)
      }
      
      
    },

  }
})