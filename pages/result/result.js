Page({
  data: {
    bodySrc: '',
    hairSrc: '',
    eyeSrc: '',
    mouseSrc: '',
    coatSrc: '',
    pantSrc: '',
  },
  onLoad: function (e) {
    this.setData({
      bodySrc: e.body,
      hairSrc: e.hair,
      eyeSrc: e.eye,
      mouseSrc: e.mouse,
      coatSrc: e.coat,
      pantSrc: e.pant,
    })
  },
})