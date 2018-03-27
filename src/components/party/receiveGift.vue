<template>
    <section class="case-target">
        <div class="height-1"></div>
        <div class="wx-area-title">
            {{base.couponGroupName}}
        </div>
        <div class="wx-area-img padding-15 margin-top-10">
            <img :src="base.couponGroupCover">
        </div>
        <div class="wx-area-text-desc align-center">
            {{base.couponGroupIntro}}
        </div>
        
        <div class="weui-btn-area-next" v-if="!isEnterprise">
            <a class="weui-btn weui-btn_primary" @click="setLog">领取</a>
        </div>
    </section>
</template>
<script>
import util from '../../utils/tools'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            base: {
                couponGroupName: '',
                couponGroupCover: '',
                couponGroupIntro: '',
                couponGroupStore: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        }),
        isEnterprise () {
            var types = ['enterprise_channel_open', 'enterprise_user_open']
            return types.indexOf(this.userInfo.openType) > -1
        }
    },
    mounted () {
        util.getUser(() => {
            this.getPartyCouponGroup()
        }, 'snsapi_base')
    },
    methods: {
        formDataDate (str) {
            var dateStr = new Date(str)
            var year = dateStr.getFullYear()
            var monthStr = dateStr.getMonth() + 1
            var dayStr = dateStr.getDate()
            var month = monthStr < 10 ? '0' + monthStr : monthStr
            var day = dayStr < 10 ? '0' + dayStr : dayStr
            return year + '-' + month + '-' + day
        },
        getPartyCouponGroup () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                partyCode: this.$route.query.partyCode
            }

            util.request({
                method: 'post',
                interface: 'getPartyCouponGroup',
                data: formData
            }).then(res => {
                if (res.result.success == '0') {
                    this.$message.error(res.result.message)
                    return
                }

                this.base = res.result.result[0]
            })
        },
        gotoCoupon () {
            if (this.base.couponGroupStore) {
                util.getUser(() => {
                    window.location.href = this.base.couponGroupStore
                }, 'snsapi_userinfo', window.encodeURIComponent(this.base.couponGroupStore))
            } else {
                this.$message.error('该券已被领空！')
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
                    interactionType: 'memberOffllineSign',
                    interactionDesc: '客户准备领券',
                    interactionPrimeObject: this.$route.query.partyCode,
                    interactionSubObject: this.base.couponGroupCode
                }
            }).then(res => {
                this.gotoCoupon()
            })
        }
    }
}
</script>