<template>
    <section class="paket-big-box" v-if="isShow.value">
        <div class="paket-bg" @click.self="hiddenPaket"></div>
        <div class="paket-con">
            <a class="close-btn" @click="hiddenPaket">
                <img src="/static/images/close-btn.png">
            </a>
            <span class="card-desc">{{showDesc}}</span>
            <span class="card-title">{{showText}}</span>
            <a @click="setLog" class="btn-paket">立即领取</a>
        </div>
    </section>
</template>memberTryGetCoupon
<script>
import util from '../../utils/tools'
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['isShow', 'showDesc', 'pathUrl', 'giftUrl', 'showText', 'hiddenPaket', 'groupCode'],
    data () {
        return {}
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        gotoCoupon () {
            if (this.userInfo.customerType == '1') {
                window.location.href = this.giftUrl
            } else {
                util.getUser(() => {
                    window.location.href = this.giftUrl
                }, 'snsapi_userinfo', window.encodeURIComponent(this.giftUrl))
            }
        },
        setLog () {
            util.request({
                method: 'post',
                interface: 'customerGeneralLog',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    customerCode: this.userInfo.customerCode,
                    customerType: this.userInfo.customerType,
                    interactionType: 'memberTryGetCoupon',
                    interactionDesc: '客户准备领券',
                    interactionPrimeObject: this.groupCode
                }
            }).then(res => {
                this.gotoCoupon()
            })
        }
    }
}
</script>
<style lang="scss">
.paket-big-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    
    .paket-bg {
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.3;
    }

    .paket-con {
        position: absolute;
        width: 100%;
        height: 200px;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background: url(/static/images/B12.jpg) no-repeat left top;
        background-size: 100% auto;

        .close-btn {
            position: absolute;
            right: 0;
            top: 0;
            width: 60px;
            height: 60px;
            z-index: 99;

            img {
                display: block;
                width: 30px;
                height: 30px;
                margin: 10px 0 0 20px;
            }
        }

        span {
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            display: block;
            width: 70%;
            font-size: 16px;
            text-align: center;
            color: #ffffff;
            line-height: 30px;
            margin: auto;
        }

        .card-desc {
            margin-top: 50px;
        }

        .btn-paket {
            display: block;
            width: 160px;
            background: #4c84c4;
            line-height: 46px;
            text-align: center;
            font-size: 16px;
            color: #ffffff;
            margin: 20px auto 0;
        }
    }
}
</style>