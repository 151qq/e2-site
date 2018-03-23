<template>
    <section class="reserve-box">
        <template v-if="isPage && isTel && !isEnterprise">
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
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><label class="weui-label">预约接待</label></div>
                    <div class="weui-cell__bd">{{base.reserveReceptionName}}</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><label class="weui-label">接待手机</label></div>
                    <div class="weui-cell__bd">{{base.reserveReceptionMobile}}</div>
                    <div class="weui-cell__ft"></div>
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

            <template v-if="newReservePageData.length">
                <div class="wx-area-line"></div>
                <div class="weui-cells no-margin no-line">
                    <div class="weui-cell weui-cell_access">
                        <div class="weui-cell__hd"><label class="weui-label">相关附件</label></div>
                        <div class="weui-cell__bd wx-placeholder">
                           选择了{{newReservePageData ? newReservePageData.length : 0}}个推荐
                        </div>
                    </div>
                </div>
                <div class="weui-cells no-margin left-padding">
                    <router-link class="weui-media-box weui-media-box_appmsg"
                            v-for="(item, index) in newReservePageData"
                            :to="{
                                    name: 'article-detail',
                                    query: {
                                        enterpriseCode: $route.query.enterpriseCode,
                                        agentId: $route.query.agentId,
                                        pageCode: item.pageCode,
                                        appid: item.pubWechatAppId,
                                        templateCode: item.templateCode,
                                        S: base.reserveCreator,
                                        sShareTo: 'F',
                                        C: 'N',
                                        cShareTo: 'N',
                                        T: 'N',
                                        tShareTo: 'N',
                                        spreadType: '1'
                                    }
                                }">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" :src="item.pageCover">
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{item.pageTitle}}</h4>
                            <p class="weui-media-box__desc">{{item.pageAbstract}}</p>
                        </div>
                    </router-link>
                </div>
            </template>

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
        </template>
        <div class="null-page" v-if="isPage && (!isTel || isEnterprise)">
            抱歉，您不是预约人！
        </div>

        <paket :is-show="isShow"
                :path-url="pathUrl"
                :show-desc="showDesc"
                :gift-url="giftUrl"
                :show-text="showText"
                :group-code="groupCode"
                :hidden-paket="hiddenPaket"></paket>
    </section>
</template>
<script>
import imgList from '../common/imgList.vue'
import util from '../../utils/tools'
import paket from '../common/paket'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            isPage: false,
            isTel: false,
            base: {
                reserveCreator: '',
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
                addrBaiduGps: '',
                reserveReceptionName: '',
                reserveReceptionMobile: ''
            },
            newReserveImgData: [],
            newReservePageData: [],
            reservedImgData: [],
            reservedPageData: [],
            isShow: {
                value: false
            },
            pathUrl: '',
            showDesc: '',
            giftUrl: '',
            showText: '',
            groupCode: '',
            escData: {}
        }
    },
    mounted () {
        util.getUser(() => {
            this.getBase()
            this.selectEscs()
        }, 'snsapi_userinfo')
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
    methods: {
        confirmReserve () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                reserveCode: this.$route.query.reserveCode,
                memberCode: this.userInfo.memberInfo.memberCode,
                memberNickName: this.userInfo.memberInfo.memberWechatNickname,
                memberImg: this.userInfo.memberInfo.memberImage,
                agentId: this.$route.query.agentId,
                userCode: this.$route.query.userCode
            }

            var link = 'http://mobile.socialmarketingcloud.com/reserveOnline/reserveDetail?enterpriseCode=' + this.$route.query.enterpriseCode + '&agentId=' + this.$route.query.agentId + '&reserveCode=' + this.$route.query.reserveCode

            formData.toUrl = link

            util.request({
                method: 'post',
                interface: 'confrimReserve',
                data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    this.getBase()
                    this.showEsc('coupon_scenario_7')
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

                    this.isPage = true

                    if (this.userInfo.memberInfo) {
                        this.isTel = this.base.reserverMobile == this.userInfo.memberInfo.memberMobile
                    }
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
                    this.escData = res.result.result
                } else {
                  this.$message.error(res.result.message)
                }
            })
        },
        showEsc (type) {
            if (!this.escData[type].length) {
                return false
            }

            if (this.escData[type]) {
                this.pathUrl = this.escData[type][0].couponGroutScenario
                this.showDesc = this.escData[type][0].couponGroupIntro
                this.showText = this.escData[type][0].couponGroupName
                this.groupCode = this.escData[type][0].couponGroupCode
                this.giftUrl = this.escData[type][0].couponGroupStore
                this.isShow.value = true
            }
        },
        hiddenPaket () {
            this.isShow.value = false
        }
    },
    components: {
        imgList,
        paket
    }
}
</script>