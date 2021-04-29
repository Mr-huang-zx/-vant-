// pages/store/gift/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 给.scroll增删动画效果
    trans: 'trans',
    // 定位.scroll，初始在第2条.item的位置(因为第一条和最后一条相同)
    //这里省略了计算过程，给了经过计算的scrollBoxItemHeight值
    top: 20,
    // 记录.scroll的高度
    scrollBoxItemHeight: null,
    // 记录.item的高度
    scrollBoxHeight: null,
    // .item的条数
    itemCount: 7,
    timer: null,
    // 计时器的等待时间
    duration: 4000,

    list:[
      {name:'和平精英'},
      {name:'穿越火线'},
      {name:'吃鸡'},
      {name:'王者荣耀'},
      {name:'飞车'},
    ],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [],
    toggleIndex:null,//选中时的去除遮罩
    isShow:true, //展示英雄选中
    userName:'',
    okShow:false, //填写地区后确定
    showIpt:false, //填写地区后隐藏input
    showToa:true, //爬楼
    showBtn:true, //展示按钮
    showPop:false,//弹窗
  },
  // 点击选中
  selectThis(e){
    this.setData({
      toggleIndex : e.currentTarget.dataset.indexs
    })
  },
  // 显示弹出层
  showPopFun(){
    this.setData({
      showPop:true
    })
    console.log(this.data.showPop)
  },
  // 关闭弹出层
  closePop(){
    this.setData({
      showPop:false
    })
  },
  // 确定离开
  sureLeave(){
    this.setData({
      showPop:false,
      isShow:true,
      showBtn:true
    })

  },
  serModeVal(){},
  // 点击领取
  getFun(){
    // 为选中奖励提醒
    if(this.data.toggleIndex == null && this.data.isShow == true){
     app.globalFun.Toast({
      "message":'请选择您想要的奖励!',
      "position":"bottom"
     })
     return
    }
    // 选中后隐藏选项
    if(this.data.toggleIndex !== null && this.data.isShow == true){
      this.setData({
        isShow:false,
        showIpt : true,
        showToa : false
      })
      return
    }
    // 游戏或用户名为空时
    if(this.data.multiIndex.length==0 || this.data.userName==''){
      app.globalFun.Toast({
        "message":'请填写相关内容!',
        "position":"bottom"
       })
       return
    }else{
      this.setData({
        okShow : false,
        showIpt : false,
        showToa : true,
        showBtn : false
      })
      
    }
  },
  // 选区
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  // 滚动二列
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  // 无缝滚动，要复制列表最后一项，追加为列表第一项，使第一项和最后一项相同
    // 当滚动到最后一项时，去掉css3动画，定位到第一项，设置计时器的等待时间为0
    _scroll() {
      let _this = this; // 本网站箭头函数的语法高亮有问题...
      this.data.timer = setTimeout(function(){
        // 滚动到最后一条后，去掉动画，改变duration为0，立刻定位到第一条
        if (_this.data.top >= _this.data.scrollBoxHeight) {
          _this.setData({
            trans: '',
            top: 0,
            duration: 0
          }, function(){
            // 继续
            _this._scroll();
          });
        } else {
          _this.data.top += 20;
          _this.setData({
            trans: 'trans',
            top: _this.data.top,
            duration: 4000
          }, function(){
            _this._scroll();
          });
        }
      }, _this.data.duration);
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.isShow){
      let _this = this;
      // 获取高度，用法请查询文档
      this.createSelectorQuery().select('.scroll .item').boundingClientRect(function(r) {
        _this.data.scrollBoxItemHeight = r.height;
        _this.data.scrollBoxHeight = (_this.data.itemCount - 1) * r.height;
        _this._scroll();
      }).exec();
    }
    
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