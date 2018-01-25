<template>
    <section class="task-detail-box">
        <div class="height-1"></div>
        <group title="基本信息" label-width="105px">
            <selector title="性别"
                      placeholder="请选择"
                      :options="genderList"
                      v-model="base.memberGender"></selector>
            <x-input title="身份证号"
                     v-model="base.memberIdentificaitonCard"
                     placeholder="请输入"></x-input>
            <x-input title="转发收费"
                     v-model="base.shareCost"
                     placeholder="请输入"></x-input>
            <x-input title="阅读(每百人)"
                     v-model="base.readingCost"
                     placeholder="请输入"></x-input>
        </group>

        <div class="btn-height-box"></div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="saveChannel">确认</a>
        </div>
    </section>
</template>
<script>
import util from '../../utils/tools'
import jsSdk from '../../utils/jsSdk'
import { mapGetters } from 'vuex'
import { Group, Selector, XInput } from 'vux'

export default {
    data () {
        return {
            isPage: false,
            base: {
                enterpriseCode: '',
                memberCode: '',
                memberGender: '',
                memberIdentificaitonCard: '',
                shareCost: '',
                readingCost: ''
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
            ]
        }
    },
    mounted () {
        util.getUser(() => {
            util.getUser(() => {
                jsSdk.init()
            }, 'snsapi_userinfo')
        }, 'snsapi_base')
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        saveChannel () {
            this.base.enterpriseCode = this.$route.query.enterpriseCode

            if (this.$route.query.memberCode) {
                this.base.memberCode = this.$route.query.memberCode
            }

            var link = 'http://mobile.socialmarketingcloud.com/wxPromotion/channelDetail?enterpriseCode=' + this.$route.query.enterpriseCode + '&agentId=' + this.$route.query.agentId + '&userCode=' + this.userInfo.userCode

            console.log(this.userInfo)

            // util.request({
            //     method: 'post',
            //     interface: 'updateChannel',
            //     data: this.base
            // }).then(res => {
            //     if (res.result.success == '1') {

            //     } else {
            //         this.$message.error(res.result.message)
            //     }
            // })
        }
    },
    components: {
        Group,
        Selector,
        XInput
    }
}
</script>