const {
  wxml,
  style
} = require('./demo.js')
Page({
  data: {
    src: '',
    bodyArray: ['身体1', '身体2', '身体3'],
    hairArray: ['头发1', '头发2'],
    eyeArray: ['眼睛1', '眼睛2'],
    mouseArray: ['嘴巴1', '嘴巴2'],
    coatArray: ['上衣1', '上衣2'],
    pantArray: ['下衣1', '下衣2']
  },

  //更改picker事件 代码冗余有点多，以后想办法减少下
  bindPickerBodyChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      bodyIndex: e.detail.value
    })
  },
  bindPickerHairChange: function (e) {
    this.setData({
      hairIndex: e.detail.value
    })
  },
  bindPickerEyeChange: function (e) {
    this.setData({
      eyeIndex: e.detail.value
    })
  },
  bindPickerMouseChange: function (e) {
    this.setData({
      mouseIndex: e.detail.value
    })
  },
  bindPickerCoatChange: function (e) {
    this.setData({
      coatIndex: e.detail.value
    })
  },
  bindPickerPantChange: function (e) {
    this.setData({
      pantIndex: e.detail.value
    })
  },


  
  onLoad() {
    this.widget = this.selectComponent('.widget')
  },
  renderToCanvas() {
    const p1 = this.widget.renderToCanvas({
      wxml,
      style
    })
    p1.then((res) => {
      console.log('container', res.layoutBox)
      this.container = res
    })
  },
  extraImage() {
    const p2 = this.widget.canvasToTempFilePath()
    p2.then(res => {
      this.setData({
        src: res.tempFilePath,
        width: this.container.layoutBox.width,
        height: this.container.layoutBox.height
      })
    })
  }
})