App({
//生命周期函数
//小程序初始化执行函数
  onLaunch: function () {
    console.log('小程序初始化完成：onLaunch')
    //wx.request({
    //  url: '',
    //})
    // wx.getUserInfo({
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // setTimeout(function(){
    //  const err = new Error()
    //  throw err
    // },3000)
  },

  //小程序界面显示出来之后执行的函数
  onShow: function (options) {
    console.log('界面显示出来：onShow')
  },

  onHide: function () {
    console.log('界面被隐藏时会执行：onHide')
  },

  
  onError: function (msg) {
    console.log('小程序发生错误时执行：onError')
  }
})
