<template>
    <section class="case-target">
        <div class="height-1"></div>
        <div class="wx-area-title">
            {{base.couponGroupName}}
        </div>
        <div class="wx-area-img">
            <img :src="base.couponGroupCover">
        </div>
        <div class="wx-area-text">
            {{base.couponGroupIntro}}
        </div>
        
        <div class="btn-height-box"></div>
        <div class="weui-btn-area" v-if="!isEnterprise">
            <a class="weui-btn weui-btn_primary"
                :href="base.couponGroupStore">
                领取
            </a>
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
        }, 'snsapi_userinfo')
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
        }
    }
}
</script>