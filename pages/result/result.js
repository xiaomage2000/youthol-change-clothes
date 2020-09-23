Page({
  data: {
    bodyIndex: '',
    hairIndex: '',
    eyeIndex: '',
    mouseIndex: '',
    coatIndex: '',
    pantIndex: '',
  },
  //接收上个页面的参数
  onLoad(e) {
    this.data.bodyIndex = parseInt(e.body) + 1
    this.data.hairIndex = parseInt(e.hair) + 1
    this.data.eyeIndex = parseInt(e.eye) + 1
    this.data.mouseIndex = parseInt(e.mouse) + 1
    this.data.coatIndex = parseInt(e.coat) + 1
    this.data.pantIndex = parseInt(e.pant) + 1
  },
  //延时执行：canvas画布生成需要时间，因此需要给一点时间用于canvas画布生成。
  onShow: function () {
    wx.showLoading({
      title: '请稍后...',
    })
    var that = this;
    setTimeout(function () {
      var that1 = that;
      that1.widget = that1.selectComponent('.widget')
    }, 1500)
    setTimeout(function () {
      var that2 = that;
      console.log(that2.data.bodyIndex)
      const wxml = `
      <view class="dress-up">
        <image src="/model/body${that2.data.bodyIndex}.png" class="dress-part"></image>
        <image src="/model/hair${that2.data.hairIndex}.png" class="dress-part"></image>
        <image src="/model/coat${that2.data.coatIndex}.png" class="dress-part"></image>
        <image src="/model/eye${that2.data.eyeIndex}.png" class="dress-part"></image>
        <image src="/model/mouse${that2.data.mouseIndex}.png" class="dress-part"></image>
        <image src="/model/pant${that2.data.pantIndex}.png" class="dress-part"></image>
      </view>
          `
      const style = {
        dressUp: {
          position: 'relative',
          width: 300,
          height: 450,
        },
        dressPart: {
          position: 'absolute',
          width: 300,
          height: 450,
          top: 0,
          left: 0,
        }
      }
      console.log(that2.widget)
      console.log(wxml)
      console.log(style)
      that2.widget.renderToCanvas({
        wxml,
        style
      }).then(wx.hideLoading())
    }, 1500)
  },
  saveImg() {
    this.widget.canvasToTempFilePath().then(res => {
      this.setData({
        src: res.tempFilePath,
      })
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success() {
          wx.showToast({
            title: '保存成功',
          })
        },
      })
    })
  },
})