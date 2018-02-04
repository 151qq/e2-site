<template>
    <section class="reserve-box">
        <div class="height-1"></div>
        <div class="weui-cells__title">预约信息</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约标题</div>
                <div class="weui-cell__ft">{{base.reserveTitle}}</div>
            </div>
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
                <div class="weui-cell__ft">{{base.reserveReceptionName}}</div>
            </div>
        </div>
        <div class="weui-cells__title">预约详情</div>
        <div class="wx-area-text">{{base.reserveDesc}}</div>
        <div class="wx-area-text">
            <img-list :img-list="newReserveImgData"></img-list>
        </div>
        
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
                receptionMemo: ''
            },
            newReserveImgData: [],
            newReservePageData: [],
            reservedImgData: [],
            reservedPageData: []
        }
    },
    mounted () {
        this.getBase()
    },
    watch: {
        $route () {
            this.getBase()
        }
    },
    methods: {
        confirmReserve () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                reserveCode: this.$route.query.reserveCode
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
        }
    },
    components: {
        imgList
    }
}
</script>