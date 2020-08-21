const {
  wxml,
  style
} = require('./demo.js')
Page({
  data: {
    src: '',
    bodySrc: './model/身体1.png',
    hairSrc: '',
    eyeSrc: '',
    mouseSrc: '',
    coatSrc: '',
    pantSrc: '',
    bodyArray: ['身体1', '身体2', '身体3'],
    hairArray: ['头发1', '头发2'],
    eyeArray: ['眼睛1', '眼睛2'],
    mouseArray: ['嘴巴1', '嘴巴2'],
    coatArray: ['上衣1', '上衣2'],
    pantArray: ['下衣1', '下衣2']
  },

  //更改picker事件 代码冗余有点多，以后想办法减少下
  bindPickerBodyChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      bodyIndex: e.detail.value,
      bodySrc: './model/身体' + temp + '.png',
    })
  },
  bindPickerHairChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      hairIndex: e.detail.value,
      hairSrc:'./model/头发' + temp + '.png',
    })
  },
  bindPickerEyeChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      eyeIndex: e.detail.value,
      eyeSrc: './model/眼睛' + temp + '.png',
    })
  },
  bindPickerMouseChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      mouseIndex: e.detail.value,
      mouseSrc: './model/嘴巴' + temp + '.png',
    })
  },
  bindPickerCoatChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      coatIndex: e.detail.value,
      coatSrc: './model/上衣' + temp + '.png',
    })
  },
  bindPickerPantChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      pantIndex: e.detail.value,
      pantSrc: './model/下衣' + temp + '.png',
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