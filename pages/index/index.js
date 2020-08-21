const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  goNext(e){
    console.log(e.detail.value)
    wx.navigateTo({
      // url: '../main/main?name=' + e.detail.value.name + '&uclass=' + e.detail.value.uclass,
      url: '../main/main',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

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