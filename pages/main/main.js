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
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  randomButton: function () {
    var bodyRandom = 1 + parseInt(Math.random() * 3);
    var hairRandom = 1 + parseInt(Math.random() * 2);
    var eyeRandom = 1 + parseInt(Math.random() * 2);
    var mouseRandom = 1 + parseInt(Math.random() * 2);
    var coatRandom = 1 + parseInt(Math.random() * 2);
    var pantRandom = 1 + parseInt(Math.random() * 2);
    this.setData({
      bodySrc: '../model/body' + bodyRandom + '.png',
      hairSrc: '../model/hair' + hairRandom + '.png',
      eyeSrc: '../model/eye' + eyeRandom + '.png',
      mouseSrc: '../model/mouse' + mouseRandom + '.png',
      coatSrc: '../model/coat' + coatRandom + '.png',
      pantSrc: '../model/pant' + pantRandom + '.png',
      bodyIndex: bodyRandom - 1,
      hairIndex: hairRandom - 1,
      eyeIndex: eyeRandom - 1,
      mouseIndex: mouseRandom - 1,
      coatIndex: coatRandom - 1,
      pantIndex: pantRandom - 1,
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
        url: '../result/result?body=' + that.data.bodySrc + '&hair=' + that.data.hairSrc + "&eye=" + that.data.eyeSrc + "&mouse=" + that.data.mouseSrc + "&coat=" + that.data.coatSrc + "&pant=" + that.data.pantSrc,
      })
    }

  }
})