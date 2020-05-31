var app=getApp();
 Page({
    data: {
       isShow:true,//显示
        //判断小程序的API，回调，参数，组件等是否在当前版本可用
         canIuse: wx.canIUse('button.open-type.getUserInfo'), userInfo:{},//微信信息 
        }, onLoad: function (options) { 
          //进入页面---判断全局是否有数据 
          var that=this; 
          console.log(app.globalData.userInfo) //进入页面后---获取本地存储是否有数据授权---------- 
          if(app.globalData.userInfo){ this.setData({ isShow:false,
             userInfo:app.globalData.userInfo 
          }) 
        } 
          else if (this.data.canIuse) {
             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回 
             // 所以此处加入 callback 以防止这种情况
              app.userInfoReadyCallback = res => { 
                that.setData({ userInfo: res.userInfo, isShow: false, 
                })
               } 
              }
             }, 
                //-----点击授权--------------------------
                 getUserInfo:function(e){ console.log(e.detail)//userInfo登录人微信信息 
                  //存储----------------- 
                  app.globalData.userInfo = e.detail.userInfo;//存全局的账号信息 
                  this.setData({ userInfo:e.detail.userInfo, isShow:false }) },})
