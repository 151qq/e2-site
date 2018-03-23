<template>
    <section class="case-target">
        <div class="height-1"></div>
        <div class="wx-area-title">
            {{base.couponGroupName}}
        </div>
        <div class="wx-area-img padding-15">
            <img :src="base.couponGroupCover">
        </div>
        <div class="wx-area-text">
            {{base.couponGroupIntro}}
        </div>
        
        <div class="weui-btn-area-next" v-if="!isEnterprise">
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
            this.selectEscs()
        }, 'snsapi_userinfo', this.$route.query.nextPage)
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
        selectEscs () {
            util.request({
                method: 'post',
                interface: 'groupStores',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                    this.base = res.result.result[this.$route.query.couponGroupType][0]
                } else {
                  this.$message.error(res.result.message)
                }
            })
        }
    }
}
</script>