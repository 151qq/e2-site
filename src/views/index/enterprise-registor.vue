<template>
    <section class="enterprise-registor-box" v-if="isShowPage">
        <div class="wx-area-img">
            <img :src="coverImg">
        </div>
        <div class="avatar-box">
            <div class="img-box">
                <img :src="memberInfo.userImage">
            </div>
            <div class="name-box">{{memberInfo.userWechatNickname}}</div>
        </div>
        <section class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="memberInfo.userName" placeholder="请输入">
                </div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">手机</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input"
                           v-model="memberInfo.userMobile"
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
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">微信<br>二维码</label></div>
                <div class="weui-cell__bd">
                    <div class="wx-uploader"
                        @click="chooseImage">
                            <img v-if="memberInfo.localId" :src="memberInfo.localId">
                    </div>
                </div>
            </div>
        </section>

        <div class="btn-height-box"></div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="saveUserInfo">确认</a>
        </div>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import jsSdk from '../../utils/jsSdk'

export default {
    data () {
        return {
            isShowPage: false,
            coverImg: '',
            memberInfo: {
                userMobile: '',
                userName: '',
                userWechatLogo: '',
                userWechatNickname: '',
                enterpriseCode: '',
                userWechatUserid: '',
                userImage: '',
                openId: '',
                smsCode: '',
                mediaId: '',
                localId: ''
            },
            timer: null,
            seconds: 90,
            enterPassword: '',
            isClick: false
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
        chooseImage () {
            jsSdk.chooseImage((localId ,serverId) => {
                this.memberInfo.localId = localId
                this.memberInfo.mediaId = serverId
            })
        },
        corpWechatRedirectUrl () {
            tools.request({
              method: 'post',
              interface: 'corpWechatRedirectUrl',
              data: {
                redirectUri: window.encodeURIComponent(window.location.href),
                enterpriseCode: this.$route.query.enterpriseCode
              }
            }).then(res => {
              if (res.result.success == '1') {
                var data = res.result.result

                if(data.startsWith('https')){
                  window.location.href = data
                }
              } else {
                this.$message.error(res.result.message)
              }
            })
        },
        getCorpWechatUserInfo () {
            var formData = {
                code: this.$route.query.code,
                enterpriseCode: this.$route.query.enterpriseCode
            }

            tools.request({
              method: 'get',
              interface: 'getSiteWechatUserInfo',
              data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    var data = res.result.result

                    var memberInfo = {
                        userMobile: '',
                        userName: '',
                        userWechatLogo: data.headimgurl,
                        userWechatNickname: data.nickname,
                        enterpriseCode: this.$route.query.enterpriseCode,
                        userWechatUserid: this.$route.query.userId,
                        userImage: data.headimgurl,
                        openId: data.openid,
                        smsCode: '',
                        mediaId: '',
                        localId: ''
                    }
                    jsSdk.init()

                    this.isShowPage = true
                    this.memberInfo = memberInfo
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        mobileChange () {
            if (this.memberInfo.userMobile && (/^1[3|4|5|8][0-9]{9}$/).test(this.memberInfo.userMobile.trim())) {
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
                    mobile: this.memberInfo.userMobile
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
            if (this.memberInfo.userName == '') {
                this.$message.error('请输入姓名')
                return
            }

            if (this.memberInfo.userMobile == '' || !(/^1[3|4|5|8][0-9]{9}$/).test(this.memberInfo.userMobile.trim())) {
                this.$message.error('请输入11位手机号')
                return
            }

            if (this.memberInfo.smsCode == '') {
                this.$message.error('请输入验证码')
                return
            }

            if (this.$route.query.userCode) {
                this.memberInfo.userCode = this.$route.query.userCode
            }

            tools.request({
              method: 'post',
              interface: 'saveEnterpriseUserInfo',
              data: this.memberInfo
            }).then(res => {
                if (res.result.success == '1') {
                    var pathUrl = {
                        name: 'registor-message'
                    }

                    this.$router.replace(pathUrl)
                } else {
                    this.$message.error(res.result.message)
                }
            })
        }
    }
}
</script>
<style lang="scss">
.enterprise-registor-box {
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

    .wx-uploader {
        position: relative;
        width: 90px;
        height: 90px;
        border: 1px solid #d9d9d9;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .wx-uploader:before {
        width: 80%;
        height: 1px;
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #d9d9d9;
    }

    .wx-uploader:after {
        height: 80%;
        width: 1px;
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #d9d9d9;
    }
}
</style>