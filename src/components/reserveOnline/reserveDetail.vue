<template>
    <section class="reserve-box">
        <div class="height-1"></div>
        <div class="weui-cells__title">预约信息</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约人</div>
                <div class="weui-cell__ft">{{base.reserverName}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约手机</div>
                <div class="weui-cell__ft">{{base.reserverMobile}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">开始时间</div>
                <div class="weui-cell__ft">{{base.reserveBeginTime}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">结束时间</div>
                <div class="weui-cell__ft">{{base.reserveEndTime}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约地点</div>
                <div class="weui-cell__ft">{{base.reserveCity}}</div>
            </div>
            <div v-if="base.reserveAddr" class="mapBox">
                <img :src="base.reserveAddr">
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待</div>
                <div class="weui-cell__ft">{{base.reserveReception}}</div>
            </div>
        </div>
        <div class="weui-cells__title">预约详情</div>
        <div class="wx-area-text">{{base.reserveDesc}}</div>
        <div class="wx-area-text">
            <img-list :img-list="base.newReserveImgData"></img-list>
        </div>
        <div class="weui-cells__title">预约产品</div>
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in base.newReservePageData"
                    :to="{name: 'case-detail', query: {
                            enterpriseCode: $route.query.enterpriseCode,
                            agentId: $route.query.agentId,
                            eventCode: item.eventCode
                        }}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.eventPlanCover">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.eventPlanTitle}}</h4>
                    <p class="weui-media-box__desc">{{item.eventPlanDesc}}</p>
                </div>
            </router-link>
        </div>
        <div class="null-box" v-if="!base.reservePageData.length && isPage">
            暂无内容！
        </div>
        
        <div class="btn-height-box"></div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="confirmReserve">确认</a>
        </div>
    </section>
</template>
<script>
import util from '../../utils/tools'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            isPage: false,
            base: {
                reserverName: '',
                reserverMobile: '',
                reserveBeginTime: '',
                reserveEndTime: '',
                reserveAddr: '',
                reserveCity: '',
                reserveReception: '',
                reserveDesc: '',
                receptionBeginTime: '',
                receptionEndTime: '',
                receptionResult: '',
                receptionMemo: ''
            },
            newReserveImgData: [],
            newReservePageData: []
        }
    },
    mounted () {
        util.getUser(() => {
            this.getBase()
        }, 'snsapi_userinfo')
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        getBase () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                reserveCode: this.$route.query.reserveCode
            }

            util.request({
                method: 'get',
                interface: 'selectAll',
                data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    var data = res.result.result
                    this.base = data.reserveInfo
                    this.newReserveImgData = data.newReserveImgData,
                    this.newReservePageData = data.newReservePageData
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        confirmReserve () {

        }
    }
}
</script>