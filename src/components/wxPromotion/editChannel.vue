<template>
    <section class="registor-box" v-if="isShowPage">
        <template v-if="!isSave">
            <div class="wx-area-img">
                <img :src="coverImg">
            </div>
            <div class="avatar-box">
                <div class="img-box">
                    <img :src="base.memberWechatImg">
                </div>
                <div class="name-box">
                    {{base.memberWechatNickname}}
                </div>
            </div>
            <section class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" v-model="base.memberName" placeholder="请输入">
                    </div>
                </div>
                <div class="weui-cell weui-cell_select weui-cell_select-after">
                    <div class="weui-cell__hd"><label class="weui-label">性别</label></div>
                    <div class="weui-cell__bd">
                        <select class="weui-select" v-model="base.memberGender">
                            <option value=""></option>
                            <option v-for="(item, index) in genderList" :value="item.key">
                                {{item.value}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">身份证</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" v-model="base.memberIdentificaitonCard" placeholder="请输入">
                    </div>
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">手机</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input"
                               v-model="base.memberMobile"
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
                        <input class="weui-input" type="tel" v-model="base.smsCode" placeholder="请输入">
                    </div>
                </div>
            </section>

            <div class="btn-height-box"></div>
            <div class="weui-btn-area">
                <a class="weui-btn weui-btn_primary" @click="saveUserInfo">确认</a>
            </div>
        </template>
        
        <div class="null-page" v-else>
            您已成为推广员！
        </div>
    </section>
</template>
<script>
import tools from '../../utils/tools'

export default {
    data () {
        return {
            isShowPage: false,
            coverImg: '',
            base: {
                enterpriseCode: '',
                memberCode: '',
                memberWechatAppid: '',
                memberWechatOpenid: '',
                memberName: '',
                memberMobile: '',
                memberWechatNickname: '',
                memberWechatImg: '',
                memberImage: '',
                memberGender: '',
                memberIdentificaitonCard: '',
                smsCode: '',
                agentId: '',
                tourl: '',
                userId: '',
                adManager: ''
            },
            genderList: [
                {
                    key: 'gender_2',
                    value: '女'
                },
                {
                    key: 'gender_1',
                    value: '男'
                }
            ],
            timer: null,
            seconds: 90,
            isClick: false,
            isSave: false
        }
    },
    mounted () {
        this.coverImg = '/static/images/B' + Math.ceil(Math.random() * 13) + '.jpg'
        var code = this.$route.query.code

        if (!code) {
            this.corpWechatRedirectUrl()
        } else {
            this.getCorpWechatUserInfo()
        }
    },
    methods: {
        corpWechatRedirectUrl () {
            var appid = this.$route.query.appid
            var redirectUri = window.encodeURIComponent(window.location.href)
            var pathStr = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +'&redirect_uri=' + redirectUri + '&response_type=code&scope=snsapi_userinfo&state=000#wechat_redirect'

            window.location.replace(pathStr)
        },
        getCorpWechatUserInfo () {
            var formData = {
                code: this.$route.query.code,
                enterpriseCode: this.$route.query.enterpriseCode,
                scope: 'snsapi_userinfo',
                appId: this.$route.query.appid
            }

            tools.request({
              method: 'get',
              interface: 'getSiteWechatUserInfo',
              data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    var data = res.result.result

                    var memberInfo = {
                        enterpriseCode: this.$route.query.enterpriseCode,
                        memberCode: '',
                        memberWechatAppid: this.$route.query.appid,
                        memberWechatOpenid: data.openid,
                        memberName: '',
                        memberMobile: '',
                        memberWechatNickname: data.nickname,
                        memberWechatImg: data.headimgurl,
                        memberImage: data.headimgurl,
                        memberGender: '',
                        memberIdentificaitonCard: '',
                        smsCode: '',
                        agentId: this.$route.query.agentId,
                        userId: this.$route.query.userId,
                        adManager: this.$route.query.userCode
                    }

                    this.isShowPage = true
                    this.base = memberInfo
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        mobileChange () {
            if (this.base.memberMobile && (/^1[3|4|5|8][0-9]{9}$/).test(this.base.memberMobile.trim())) {
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
                    mobile: this.base.memberMobile
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
            if (this.base.memberName == '') {
                this.$message.error('请输入姓名')
                return
            }

            if (this.base.memberMobile == '' || !(/^1[3|4|5|8][0-9]{9}$/).test(this.base.memberMobile.trim())) {
                this.$message.error('请输入11位手机号')
                return
            }

            if (this.base.smsCode == '') {
                this.$message.error('请输入验证码')
                return
            }

            this.base.tourl = 'http://mobile.socialmarketingcloud.com/myConfig/channelDetail?enterpriseCode=' + this.$route.query.enterpriseCode + '&agentId=' + this.$route.query.agentId

            tools.request({
                method: 'post',
                interface: 'updateChannel',
                data: this.base
            }).then(res => {
                if (res.result.success == '1') {
                    this.$message({
                      message: '恭喜你，保存成功！',
                      type: 'success'
                    })

                    this.isSave = true
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