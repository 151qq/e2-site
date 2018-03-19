import queryString from 'query-string'
import tools from './tools'
import store from '../vuex/store'

const jsSdk = {
    init () {
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
            } else {
              alert(res.result.message)
            }
        })
    },
    setShare (con) {
        // 分享到朋友圈
        window.wx.onMenuShareTimeline({
            title: con.title,
            link: con.link + '&sShareTo=Q&cShareTo=Q&tShareTo=Q',
            imgUrl: con.imgUrl,
            success () {
                con.success && con.success('memberShareWechatZoneRate')
            },
            cancel () {
                con.cancel && con.cancel('memberCancelSharePage')
            }
        })

        // 分享到朋友
        window.wx.onMenuShareAppMessage({
            title: con.title,
            desc: con.desc,
            link: con.link + '&sShareTo=F&cShareTo=F&tShareTo=F',
            imgUrl: con.imgUrl,
            type: con.type ? con.type : '',
            dataUrl: con.dataUrl ? con.dataUrl : '',
            success () {
                con.success && con.success('memberShareWechatFriendRate')
            },
            cancel () {
                con.cancel && con.cancel('memberCancelSharePage')
            }
        })

        // 分享到QQ
        window.wx.onMenuShareQQ({
            title: con.title,
            desc: con.desc,
            link: con.link,
            imgUrl: con.imgUrl,
            success () {
                con.success && con.success('memberShareWeiboRate')
            },
            cancel () {
                con.cancel && con.cancel('memberCancelSharePage')
            }
        })

        // 分享到腾讯微博
        window.wx.onMenuShareWeibo({
            title: con.title,
            desc: con.desc,
            link: con.link,
            imgUrl: con.imgUrl,
            success () {
                con.success && con.success('memberShareRate')
            },
            cancel () {
                con.cancel && con.cancel('memberCancelSharePage')
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