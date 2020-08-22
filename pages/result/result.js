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
    const wxml = `
    <view class="dressup">
		    <image src="${e.body}" class="dress-body dress-part"></image>
		    <image src="${e.hair}" class="dress-pants dress-part"></image>
		    <image src="${e.coat}" class="dress-coat dress-part"></image>
		    <image src="${e.eye}" class="dress-eye dress-part"></image>
		    <image src="${e.mouse}" class="dress-mouth dress-part"></image>
		    <image src="${e.hair}" class="dress-hair dress-part"></image>
	    </view>
    `
    const wxss = {
      dressup: {
        width: '85%',
        margin: '0 auto',
        position: 'relative',
      },
      dressPart: {
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '415px',
      },
    }
    this.setData({
      bodySrc: e.body,
      hairSrc: e.hair,
      eyeSrc: e.eye,
      mouseSrc: e.mouse,
      coatSrc: e.coat,
      pantSrc: e.pant,
    })
    this.widget = this.selectComponent('.widget')
    console.log(wxml)
    this.widget.renderToCanvas({
      wxml,
      wxss
    })
  },
})