<template>
    <section class="reserve-box">
        <div class="height-1"></div>
        <div class="weui-cells no-margin">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__hd"><label class="weui-label">预约标题</label></div>
                <div class="weui-cell__bd">{{base.reserveTitle}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__hd"><label class="weui-label">预约人</label></div>
                <div class="weui-cell__bd">{{base.reserverName}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__hd"><label class="weui-label">预约手机</label></div>
                <div class="weui-cell__bd">{{base.reserverMobile}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__hd"><label class="weui-label">开始时间</label></div>
                <div class="weui-cell__bd">{{base.reserveBeginTime}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__hd"><label class="weui-label">结束时间</label></div>
                <div class="weui-cell__bd">{{base.reserveEndTime}}</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box" @click="goToMap">
                <div class="weui-cell__hd"><label class="weui-label">预约地点</label></div>
                <div class="weui-cell__bd">{{base.reserveCity}}</div>
            </div>
        </div>
        
        <div class="wx-area-line"></div>
        <div class="weui-cells no-margin no-line">
            <div class="weui-cell weui-cell_access no-center">
                <div class="weui-cell__hd"><label class="weui-label">预约详情</label></div>
                <div class="weui-cell__bd">
                   {{base.reserveDesc}}
                </div>
            </div>       
        </div>

        <template v-if="newReserveImgData.length">
            <div class="wx-area-line"></div>
            <div class="weui-cells no-margin no-line">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><label class="weui-label">附加图片</label></div>
                    <div class="weui-cell__bd wx-placeholder">
                       选择{{newReserveImgData.length}}张图片
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells no-margin left-padding">
                <img-list :img-list="newReserveImgData"></img-list>
            </div>
        </template>
        
        <div class="btn-height-box" v-if="base.reserveStatus == '1'"></div>

        <div class="weui-btn-area" v-if="base.reserveStatus == '1'">
            <a class="weui-btn weui-btn_primary" @click="confirmReserve">
                确定
            </a>
        </div>
    </section>
</template>
<script>
import imgList from '../common/imgList.vue'
import jsSdk from '../../utils/jsSdk'
import util from '../../utils/tools'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            isPage: false,
            base: {
                reserveTitle: '',
                reserverName: '',
                reserverMobile: '',
                reserveBeginTime: '',
                reserveEndTime: '',
                reserveAddr: '',
                reserveCity: '',
                reserveReceptionName: '',
                reserveDesc: '',
                receptionBeginTime: '',
                receptionEndTime: '',
                receptionResult: '',
                receptionMemo: '',
                addrBaiduGps: ''
            },
            newReserveImgData: [],
            newReservePageData: [],
            reservedImgData: [],
            reservedPageData: []
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
        confirmReserve () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                reserveCode: this.$route.query.reserveCode,
                memberCode: this.userInfo.memberCode
            }

            util.request({
                method: 'get',
                interface: 'confrimReserve',
                data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    this.getBase()
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
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
                    this.newReservePageData = data.newReservePageData,
                    this.reservedImgData = data.reservedImgData,
                    this.reservedPageData = data.reservedPageData
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        goToMap () {
            var pathUrl = {
                name: 'search-map',
                query: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    agentId: this.$route.query.agentId,
                    point: this.base.addrBaiduGps
                }
            }
            this.$router.push(pathUrl)
        }
    },
    components: {
        imgList
    }
}
</script>