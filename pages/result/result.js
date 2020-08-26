Page({
  data: {
    bodyIndex: '',
    hairIndex: '',
    eyeIndex: '',
    mouseIndex: '',
    coatIndex: '',
    pantIndex: '',
  },
  onLoad(e) {
    this.widget = this.selectComponent('.widget')
    this.data.bodyIndex = parseInt(e.body) + 1
    this.data.hairIndex = parseInt(e.hair) + 1
    this.data.eyeIndex = parseInt(e.eye) + 1
    this.data.mouseIndex = parseInt(e.mouse) + 1
    this.data.coatIndex = parseInt(e.coat) + 1
    this.data.pantIndex = parseInt(e.pant) + 1
  },
  testButton() {
    console.log(this.data.bodyIndex)
    const wxml = `
<view class="dressup">
	<image src="/model/body${this.data.bodyIndex}.png" class="dress-part"></image>
	<image src="/model/hair${this.data.hairIndex}.png" class="dress-part"></image>
	<image src="/model/coat${this.data.coatIndex}.png" class="dress-part"></image>
	<image src="/model/eye${this.data.eyeIndex}.png" class="dress-part"></image>
	<image src="/model/mouse${this.data.mouseIndex}.png" class="dress-part"></image>
	<image src="/model/hair${this.data.hairIndex}.png" class="dress-part"></image>
</view>
    `
    const style = {
      dressup: {
        width: 200,
        height: 300,
        backgroundColor: '#666',
        position: 'relative',
      },
      dressPart: {
        position: 'absolute',
        width: 20,
        height: 30,
        top: 0,
        left: 0,
      }
    }
    // this.setData({
    //   bodyIndex: e.body,
    //   hairIndex: e.hair,
    //   eyeIndex: e.eye,
    //   mouseIndex: e.mouse,
    //   coatIndex: e.coat,
    //   pantIndex: e.pant,
    // })
    console.log(this.widget)
    console.log(wxml)
    console.log(style)
    this.widget.renderToCanvas({
      wxml,
      style
    })
  },
})