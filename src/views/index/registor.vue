<template>
    <section class="registor-box" v-if="isShowPage">
        应用程序发生错误，请重新操作！
    </section>
</template>
<script>
import tools from '../../utils/tools'

export default {
    data () {
        return {
            isShowPage: false,
            appid: 'wx8b8c3ab0670be56f',
            secret: '27db9d99d44eb4d7499cfc075307490d',
            access_token: '5_0uh-_xw2JfozpKsxuMnBih2Uvba3rsCRo1waBCO7EY8iK4yQO2gkJjvJBCYPYK1rr4_qjoJyVtVadmI3LPIegA',
            openid: 'oFOk40bprwbmfmr_ajRjnT71hD5I',
            refresh_token: '5_xDiQLRWeKZvAm4CNce3Z-QzPHp5Vn7eY7iDPHwPwBbk7Po0i5xoYm-Bgvcg5Nm3zs_A5DHBNcP4_GQOGvCwwZQ'
        }
    },
    mounted () {
        var code = this.$route.query.code
        var scope = this.$route.query.scope

        if (!code) {
            this.corpWechatRedirectUrl(scope)
        } else {
            this.getCorpWechatUserInfo(scope)
        }
    },
    methods: {
        corpWechatRedirectUrl (scope) {
            var appid = 'wx8b8c3ab0670be56f'
            var redirectUri = window.encodeURIComponent(window.location.href)
            var pathStr = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +'&redirect_uri=' + redirectUri + '&response_type=code&scope=' + scope + '&state=000#wechat_redirect'

            window.location.replace(pathStr)
        },
        getCorpWechatUserInfo () {
            var formData = {
                code: this.$route.query.code,
                enterpriseCode: this.$route.query.enterpriseCode,
                scope: this.$route.query.scope,
                appId: this.$route.query.appid
            }

            tools.request({
              method: 'get',
              interface: 'getServiceWechatUserInfo',
              data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    var data = res.result.result

                    window.sessionStorage.setItem('userInfo', JSON.stringify(data))

                    alert(JSON.stringify(this.$route.query))

                    window.location.replace(this.$route.query.redirectUrl)
                } else {
                    this.isShowPage = true
                }
            })
        }
    }
}
</script>
<style lang="scss">
.registor-box {
    font-size: 14px;
    line-height: 160px;
    text-align: center;
    color: #999999;
}
</style>