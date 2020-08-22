Page({
  data: {
    bodySrc: '../model/body1.png',
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
      bodySrc: '../model/body' + temp + '.png',
    })
  },
  bindPickerHairChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      hairIndex: e.detail.value,
      hairSrc: '../model/hair' + temp + '.png',
    })
  },
  bindPickerEyeChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      eyeIndex: e.detail.value,
      eyeSrc: '../model/eye' + temp + '.png',
    })
  },
  bindPickerMouseChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      mouseIndex: e.detail.value,
      mouseSrc: '../model/mouse' + temp + '.png',
    })
  },
  bindPickerCoatChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      coatIndex: e.detail.value,
      coatSrc: '../model/coat' + temp + '.png',
    })
  },
  bindPickerPantChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      pantIndex: e.detail.value,
      pantSrc: '../model/pant' + temp + '.png',
    })
  },
  goNext: function(e) {
    var that = this;
    wx.navigateTo({
      url: '../result/result?body=' + that.data.bodySrc + '&hair=' + that.data.hairSrc + "&eye=" + that.data.eyeSrc + "&mouse=" + that.data.mouseSrc + "&coat=" + that.data.coatSrc + "&pant=" + that.data.pantSrc,
    })
  }
})