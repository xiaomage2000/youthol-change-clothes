const app = getApp()
Page({
  goNext(e){
    wx.navigateTo({
      url: '../main/main',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '毕业贺卡',
      desc: '一起来送上你的祝福吧',
      imageUrl: '/static/img/share.jpg'
    }
  }
})