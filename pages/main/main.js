Page({
  data: {
    bodySrc: '/model/body1.png',
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
    pantArray: ['下衣1', '下衣2'],
    bodyIndex: '',
    hairIndex: '',
    eyeIndex: '',
    coatIndex: '',
    mouseIndex: '',
    pantIndex: '',
    showOneButtonDialog: false,
    oneButton: [{
      text: '确定'
    }],
  },

  //更改picker事件 代码冗余有点多，以后想办法减少下
  bindPickerBodyChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      bodyIndex: e.detail.value,
      bodySrc: '/model/body' + temp + '.png',
    })
  },
  bindPickerHairChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      hairIndex: e.detail.value,
      hairSrc: '/model/hair' + temp + '.png',
    })
  },
  bindPickerEyeChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      eyeIndex: e.detail.value,
      eyeSrc: '/model/eye' + temp + '.png',
    })
  },
  bindPickerMouseChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      mouseIndex: e.detail.value,
      mouseSrc: '/model/mouse' + temp + '.png',
    })
  },
  bindPickerCoatChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      coatIndex: e.detail.value,
      coatSrc: '/model/coat' + temp + '.png',
    })
  },
  bindPickerPantChange: function (e) {
    var temp = parseInt(e.detail.value) + 1;
    this.setData({
      pantIndex: e.detail.value,
      pantSrc: '/model/pant' + temp + '.png',
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  randomButton: function () {
    var bodyRandom = parseInt(Math.random() * 3);
    var hairRandom = parseInt(Math.random() * 2);
    var eyeRandom = parseInt(Math.random() * 2);
    var mouseRandom = parseInt(Math.random() * 2);
    var coatRandom = parseInt(Math.random() * 2);
    var pantRandom = parseInt(Math.random() * 2);
    this.setData({
      bodySrc: '/model/body' + (bodyRandom + 1) + '.png',
      hairSrc: '/model/hair' + (hairRandom + 1) + '.png',
      eyeSrc: '/model/eye' + (eyeRandom + 1) + '.png',
      mouseSrc: '/model/mouse' + (mouseRandom + 1) + '.png',
      coatSrc: '/model/coat' + (coatRandom + 1) + '.png',
      pantSrc: '/model/pant' + (pantRandom + 1) + '.png',
      bodyIndex: bodyRandom,
      hairIndex: hairRandom,
      eyeIndex: eyeRandom,
      mouseIndex: mouseRandom,
      coatIndex: coatRandom,
      pantIndex: pantRandom,
    })
  },
  goNext: function (e) {
    var that = this;
    if (that.data.bodySrc == '' || that.data.hairSrc == '' || that.data.eyeSrc == '' || that.data.mouseSrc == '' || that.data.coatSrc == '' || that.data.pantSrc == '') {
      this.setData({
        showOneButtonDialog: true
      })
    } else {
      wx.navigateTo({
        url: '../result/result?body=' + that.data.bodyIndex + '&hair=' + that.data.hairIndex + "&eye=" + that.data.eyeIndex + "&mouse=" + that.data.mouseIndex + "&coat=" + that.data.coatIndex + "&pant=" + that.data.pantIndex,
      })
    }
  }
})