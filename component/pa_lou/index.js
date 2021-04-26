// component/pa_lou/index.js
Component({

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
    duration: 4000
  },
  methods:{
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
    }
  },
  ready(){
    let _this = this;
    // 获取高度，用法请查询文档
    this.createSelectorQuery().select('.scroll .item').boundingClientRect(function(r) {
      _this.data.scrollBoxItemHeight = r.height;
      _this.data.scrollBoxHeight = (_this.data.itemCount - 1) * r.height;
      _this._scroll();
    }).exec();
  }
})