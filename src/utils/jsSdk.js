import queryString from 'query-string'
import tools from './tools'

const jsSdk = {
    init () {
        const parsed = queryString.parse(location.search)
        const nonceStr = 'Wm3WZYTPz0wzccnW'
        const timestamp = String(Math.floor(new Date().getTime() / 1000))
        const appid = parsed.appid

        tools.request({
            method: 'post',
            interface: 'getSignature',
            data: {
                appId: appid,
                noncestr: nonceStr,
                url: window.location.href.split('#')[0],
                timestamp: timestamp
            }
        }).then(res => {
            if (res.result.success == '1') {

                window.wx.config({
                    debug: true,
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

                return window.wx
            } else {
              alert(res.result.message)
            }
        })
    },
    setShare (con) {
        // 分享到朋友圈
        window.wx.onMenuShareTimeline({
            title: con.title,
            link: con.link,
            imgUrl: con.imgUrl,
            success () {
                con.success && con.success()
            }
        })

        // 分享到朋友
        window.wx.onMenuShareAppMessage({
            title: con.title,
            desc: con.desc,
            link: con.link,
            imgUrl: con.imgUrl,
            type: con.type ? con.type : '',
            dataUrl: con.dataUrl ? con.dataUrl : '',
            success () {
                con.success && con.success()
            }
        })

        // 分享到QQ
        window.wx.onMenuShareQQ({
            title: con.title,
            desc: con.desc,
            link: con.link,
            imgUrl: con.imgUrl,
            success () {
                con.success && con.success()
            }
        })

        // 分享到腾讯微博
        window.wx.onMenuShareWeibo({
            title: con.title,
            desc: con.desc,
            link: con.link,
            imgUrl: con.imgUrl,
            success () {
                con.success && con.success()
            }
        })
    },
    uploadImage () {
        window.wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                var serverIdList = []
                res.localIds.forEach((item) => {
                    // 图片上传
                    wx.uploadImage({
                        localId: item,
                        isShowProgressTips: 1,
                        success: function (res) {
                            serverIdList.push(res.serverId)
                        }
                    })
                })

                var imgData = {
                    serverIdList: serverIdList,
                    localIds: res.localIds
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