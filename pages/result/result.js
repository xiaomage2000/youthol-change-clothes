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
    this.widget = this.selectComponent('.widget')
    this.data.bodyIndex = parseInt(e.body) + 1
    this.data.hairIndex = parseInt(e.hair) + 1
    this.data.eyeIndex = parseInt(e.eye) + 1
    this.data.mouseIndex = parseInt(e.mouse) + 1
    this.data.coatIndex = parseInt(e.coat) + 1
    this.data.pantIndex = parseInt(e.pant) + 1
  },
  //延时执行：canvas画布生成需要时间，因此需要给一点时间用于canvas画布生成。
  onReady: function () {
    var that = this;
    setTimeout(function () {
      var that2 = that;
      console.log(that2.data.bodyIndex)
      const wxml = `
      <view>
        <image src="/model/body${that2.data.bodyIndex}.png" class="dress-part"></image>
        <image src="/model/hair${that2.data.hairIndex}.png" class="dress-part"></image>
        <image src="/model/coat${that2.data.coatIndex}.png" class="dress-part"></image>
        <image src="/model/eye${that2.data.eyeIndex}.png" class="dress-part"></image>
        <image src="/model/mouse${that2.data.mouseIndex}.png" class="dress-part"></image>
        <image src="/model/hair${that2.data.hairIndex}.png" class="dress-part"></image>
      </view>
          `
      const style = {
        dressPart: {
          position: 'absolute',
          width: 20,
          height: 30,
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
      })
    }, 50)
  },
})