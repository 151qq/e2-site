import queryString from 'query-string'
import tools from './tools'
import store from '../vuex/store'

const jsSdk = {
    init (cb) {
        const parsed = queryString.parse(location.search)
        const nonceStr = 'Wm3WZYTPz0wzccnW'
        const timestamp = String(Math.floor(new Date().getTime() / 1000))
        const appid = parsed.appid
        let url = ''

        if (window.__wxjs_is_wkwebview === true) {
            url = store.state.iosUrl.split('#')[0]
        } else {
            url = window.location.href.split('#')[0]
        }

        tools.request({
            method: 'post',
            interface: 'getSignature',
            data: {
                appId: appid,
                noncestr: nonceStr,
                url: url,
                timestamp: timestamp
            }
        }).then(res => {
            if (res.result.success == '1') {
                window.wx.config({
                    debug: false,
                    appId: appid,
                    timestamp: timestamp,
                    nonceStr: nonceStr,
                    signature: res.result.result,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'chooseImage',
                        'uploadImage',
                        'previewImage',
                        'getLocalImgData',
                        'showMenuItems'
                    ]
                })
                if (cb) {
                    window.wx.ready(() => {
                        cb()
                    })
                }
            } else {
              alert(res.result.message)
            }
        })
    },
    setShare (con) {
        var strQueryQ = ''
        var strQueryF = ''
        var queryData = tools.formDataUrl(window.location.href).query
        var userInfo = store.state.userInfo

        if (userInfo.t && userInfo.t != 'N') {
            strQueryQ = '&sShareTo=' + queryData.sShareTo + '&cShareTo=' + queryData.cShareTo + '&tShareTo=Q'
            strQueryF = '&sShareTo=' + queryData.sShareTo + '&cShareTo=' + queryData.cShareTo + '&tShareTo=F'
        } else if (userInfo.c && userInfo.c != 'N') {
            strQueryQ = '&sShareTo=' + queryData.sShareTo + '&cShareTo=Q&tShareTo=N'
            strQueryF = '&sShareTo=' + queryData.sShareTo + '&cShareTo=F&tShareTo=N'
        } else if (userInfo.s && userInfo.s != 'N') {
            strQueryQ = '&sShareTo=Q&cShareTo=N&tShareTo=N'
            strQueryF = '&sShareTo=F&cShareTo=N&tShareTo=N'
        }

        // 分享到朋友圈
        window.wx.onMenuShareTimeline({
            title: con.title,
            link: con.link + strQueryQ,
            imgUrl: con.imgUrl ? con.imgUrl : 'http://site.socialmarketingcloud.com/static/images/logo.png',
            success () {
                var data = {
                    type: 'memberShareWechatZoneRate',
                    mess: '客户分享文章到朋友圈'
                }
                con.success && con.success(data)
            },
            cancel () {
                var data = {
                    type: 'memberCancelSharePageToGroup',
                    mess: '客户取消分享朋友圈文章分享'
                }
                con.cancel && con.cancel(data)
            }
        })

        // 分享到朋友
        window.wx.onMenuShareAppMessage({
            title: con.title,
            desc: con.desc ? con.desc : '猜到了开头，却猜不到这结局！',
            link: con.link + strQueryF,
            imgUrl: con.imgUrl ? con.imgUrl : 'http://site.socialmarketingcloud.com/static/images/logo.png',
            type: con.type ? con.type : '',
            dataUrl: con.dataUrl ? con.dataUrl : '',
            success () {
                var data = {
                    type: 'memberShareWechatFriendRate',
                    mess: '客户分享文章给好友'
                }
                con.success && con.success(data)
            },
            cancel () {
                var data = {
                    type: 'memberCancelSharePageToFriend',
                    mess: '客户取消分享分享给好友'
                }
                con.cancel && con.cancel(data)
            }
        })

        // 分享到QQ
        window.wx.onMenuShareQQ({
            title: con.title,
            desc: con.desc ? con.desc : '猜到了开头，却猜不到这结局！',
            link: con.link + '&sShareTo=N&cShareTo=N&tShareTo=N',
            imgUrl: con.imgUrl ? con.imgUrl : 'http://site.socialmarketingcloud.com/static/images/logo.png',
            success () {
                con.success && con.success()
            },
            cancel () {
                con.cancel && con.cancel()
            }
        })

        // 分享到腾讯微博
        window.wx.onMenuShareWeibo({
            title: con.title,
            desc: con.desc ? con.desc : '猜到了开头，却猜不到这结局！',
            link: con.link + '&sShareTo=N&cShareTo=N&tShareTo=N',
            imgUrl: con.imgUrl ? con.imgUrl : 'http://site.socialmarketingcloud.com/static/images/logo.png',
            success () {
                con.success && con.success()
            },
            cancel () {
                con.cancel && con.cancel()
            }
        })
    },
    // 本地选择图片
    chooseImage (cb) {
        window.wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                if (res.localIds && res.localIds[0]) {
                    window.wx.uploadImage({
                        localId: res.localIds[0],
                        isShowProgressTips: 1,
                        success: function (data) {
                            cb(res.localIds[0], data.serverId)
                        }
                    })
                }
            }
        })
    },
    previewImage (imgList, current) {
        wx.previewImage({
            current: current,
            urls: imgList
        })
    }
}

export default jsSdk