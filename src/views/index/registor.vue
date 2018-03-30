<template>
    <section class="registor-box" v-if="isShowPage">
        <div class="wx-area-img">
            <img :src="coverImg">
        </div>
        <div class="avatar-box">
            <div class="img-box">
                <img :src="memberInfo.memberImage">
            </div>
            <div class="name-box">{{memberInfo.memberWechatNickname}}</div>
        </div>
        <section class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="memberInfo.memberName" placeholder="请输入">
                </div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">手机</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input"
                           v-model="memberInfo.memberMobile"
                           type="tel"
                           placeholder="请输入手机号"
                           @input="mobileChange">
                </div>
                <div class="weui-cell__ft">
                    <template v-if="timer">
                        <button class="weui-vcode-btn">剩余<i>{{seconds}}</i>秒</button>
                    </template>
                    <template v-else>
                        <button class="weui-vcode-btn"
                                :class="{notClick: !isClick}"
                                @click="getCode">获取验证码</button>
                    </template>
                    
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" v-model="memberInfo.smsCode" placeholder="请输入">
                </div>
            </div>
        </section>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="saveUserInfo">确认</a>
        </div>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            isShowPage: false,
            coverImg: '',
            memberInfo: {
                memberImage: '',
                enterpriseCode: '',
                memberMobile: '',
                memberName: '',
                memberWechatOpenid: '',
                memberWechatImg: '',
                memberWechatNickname: '',
                memberGender: '',
                smsCode: ''
            },
            timer: null,
            seconds: 90,
            enterPassword: '',
            isClick: false
        }
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    mounted () {
        this.coverImg = '/static/images/B' + Math.ceil(Math.random() * 13) + '.jpg'
        var code = this.$route.query.code
        var scope = this.$route.query.scope

        if (!code) {
            this.corpWechatRedirectUrl(scope)
        } else {
            if (scope == 'snsapi_base') {
                this.setCustom()
            } else {
                this.getCorpWechatUserInfo()
            }
        }
    },
    methods: {
        corpWechatRedirectUrl (scope) {
            var appid = this.$route.query.appid
            var redirectUri = window.encodeURIComponent(window.location.href)
            var pathStr = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +'&redirect_uri=' + redirectUri + '&response_type=code&scope=' + scope + '&state=000#wechat_redirect'

            window.location.replace(pathStr)
        },
        setCustom () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                appId: this.$route.query.appid,
                pageCode: this.$route.query.pageCode,
                spreadOriginCode: this.$route.query.S,
                spreadOriginShareTo: this.$route.query.sShareTo,
                spreadChannelCode: this.$route.query.C,
                spreadChannelShareTo: this.$route.query.cShareTo,
                spreadParentType: this.$route.query.spreadType,
                spreadParentCode: this.$route.query.T,
                spreadParentShareTo: this.$route.query.tShareTo,
                code: this.$route.query.code,
                scope: this.$route.query.scope
            }

            tools.request({
                method: 'post',
                interface: 'checkCustome',
                data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    window.sessionStorage.setItem('userInfo', JSON.stringify(res.result.result))
                    window.location.replace(this.$route.query.redirectUrl)
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        getCorpWechatUserInfo () {
            var formData = {
                code: this.$route.query.code,
                enterpriseCode: this.$route.query.enterpriseCode,
                scope: this.$route.query.scope,
                appId: this.$route.query.appid
            }

            if (this.$route.query.T && this.userInfo.t) {
                formData.T = this.userInfo.t
            }

            tools.request({
              method: 'get',
              interface: 'getServiceWechatUserInfo',
              data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    var data = res.result.result

                    if (data.openid) {
                        var memberInfo = {
                            memberImage: data.headimgurl,
                            enterpriseCode: this.$route.query.enterpriseCode,
                            memberMobile: '',
                            memberName: '',
                            memberWechatOpenid: data.openid,
                            memberWechatImg: data.headimgurl,
                            memberWechatNickname: data.nickname,
                            memberGender: data.sex,
                            smsCode: ''
                        }

                        // 记录日志
                        var logData = {
                            interactionType: 'memberOpenMobilePage',
                            interactionDesc: '客户准备注册',
                            customerCode: data.customerCode,
                            customerType: data.customerType
                        }
                        this.setLog(logData)

                        this.isShowPage = true
                        this.memberInfo = memberInfo
                    } else {
                        window.sessionStorage.setItem('userInfo', JSON.stringify(res.result.result))
                        window.location.replace(this.$route.query.redirectUrl)
                    }
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        setLog (data) {
            tools.request({
                method: 'post',
                interface: 'customerGeneralLog',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    customerCode: data.customerCode,
                    customerType: data.customerType,
                    interactionType: data.interactionType,
                    interactionDesc: data.interactionDesc,
                    interactionPrimeObject: data.primeObject,
                    interactionSubObject: data.subObject,
                    interactionOtherObject: data.otherObject
                }
            }).then(res => {})
        },
        mobileChange () {
            if (this.memberInfo.memberMobile && (/^1[3|4|5|8][0-9]{9}$/).test(this.memberInfo.memberMobile.trim())) {
                this.isClick = true
            } else {
                this.isClick = false
            }
        },
        getCode () {
            if (!this.isClick) {
                return
            }

            this.seconds = 90

            tools.request({
                method: 'post',
                interface: 'sentSms',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    mobile: this.memberInfo.memberMobile
                }
            }).then((res) => {
                if (res.result.success == '1') {
                    this.timer = setInterval(() => {
                        this.seconds--
                        if (this.seconds === 0) {
                            clearInterval(this.timer)
                            this.timer = null
                        }
                    }, 1000)
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        saveUserInfo () {
            if (this.memberInfo.memberName == '') {
                this.$message.error('请输入姓名')
                return
            }

            if (this.memberInfo.memberMobile == '' || !(/^1[3|4|5|8][0-9]{9}$/).test(this.memberInfo.memberMobile.trim())) {
                this.$message.error('请输入11位手机号')
                return
            }

            if (this.memberInfo.smsCode == '') {
                this.$message.error('请输入验证码')
                return
            }

            if (this.$route.query.T) {
                this.memberInfo.spreadCode = this.$route.query.T
            }

            if (this.$route.query.C) {
                this.memberInfo.C = this.$route.query.C
            }

            if (this.$route.query.S) {
                this.memberInfo.S = this.$route.query.S
            }

            if (this.$route.query.T && this.userInfo.t) {
                this.memberInfo.T = this.userInfo.t
            }

            if (this.$route.query.userCode) {
                this.memberInfo.enterpriseMemberSales = this.$route.query.userCode
            } else if (this.$route.query.S) {
                this.memberInfo.enterpriseMemberSales = this.$route.query.S
            }

            if (this.$route.query.channelCode) {
                this.memberInfo.enterpriseMemberChannel = this.$route.query.channelCode
            } else if (this.$route.query.C) {
                this.memberInfo.enterpriseMemberChannel = this.$route.query.C
            }

            if (this.$route.query.appid) {
                this.memberInfo.appid = this.$route.query.appid
            }

            if (this.$route.query.reserveCode) {
                this.memberInfo.reserveCode = this.$route.query.reserveCode
            }

            if (this.$route.query.partyCode) {
                this.memberInfo.partyCode = this.$route.query.partyCode
            }

            tools.request({
              method: 'post',
              interface: 'saveMemberInfo',
              data: this.memberInfo
            }).then(res => {
                if (res.result.success == '1') {
                    window.sessionStorage.setItem('userInfo', JSON.stringify(res.result.result))
                    window.location.replace(this.$route.query.redirectUrl)
                } else {
                    this.$message.error(res.result.message)
                }
            })
        }
    }
}
</script>
<style lang="scss">
.registor-box {
    .avatar-box {
        position: relative;
        z-index: 10;
        height: 60px;
        overflow: hidden;
        margin-top: -40px;

        div {
            float: right;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        .img-box {
            width: 60px;
            height: 60px;
            border: 1px solid #E5E5E5;
            background: #ffffff;
            margin-right: 15px;
            box-sizing: border-box;
        }

        .name-box {
            font-size: 16px;
            line-height: 40px;
            margin-right: 20px;
            color: #ffffff;
        }
    }

    .notClick {
        color: #999999;
    }
}
</style>