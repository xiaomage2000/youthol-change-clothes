Page({
  data: {
    bodySrc: '',
    hairSrc: '',
    eyeSrc: '',
    mouseSrc: '',
    coatSrc: '',
    pantSrc: '',
  },
  onLoad(e) {
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
        width: 200,
        height: 300,
        backgroundColor: '#666',
        position: 'relative',
      },
      dressPart: {
        position: 'absolute',
        width: 200,
        height: 300,
        top: 0,
        left: 0,
      }
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
    console.log(this.widget)
    console.log(wxml)
    console.log(wxss)
    this.widget.renderToCanvas({
      wxml,
      wxss
    })
  },
})