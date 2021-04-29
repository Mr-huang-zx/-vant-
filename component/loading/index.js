// pages/store/tabs/index.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    hei:0,//手指按下的高度
    topPo:-45,
    showType:1,
    showChangePop:false,//兑换弹窗
  },
  methods:{
    // 关闭弹窗
    closeToast(){
      this.setData({
        showChangePop:false
      })
    },
    // 兑换金币
    getGold(){
      this.setData({
        showChangePop:true
      })
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
     
      if(this.data.topPo ==-45){return}
      if(this.data.topPo<-45){
        this.setData({
          topPo:-120,
        })
      }
      
      if(this.data.topPo>-45 && this.data.topPo<=-12){
        this.setData({
          topPo:-45,
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
            topPo:-45
          })
          wx.showToast({
            title: '刷新成功',
          })
        },2000)
      }
      
      
    },

  }
})