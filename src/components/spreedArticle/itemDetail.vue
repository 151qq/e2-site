<template>
    <section class="article-body">
        <div class="white-bg">
            <section class='bodyMain' :style="arTextBody">
                <div class="ar-title" :style="arTitle">{{articleData.pageTitle}}</div>
                <div class="ar-author-date" :style="arAuthorDate">
                    <span class="ar-date">{{ articleData.pageEditTime | formatDate(base.dateStyle)}}</span>
                    <a  class="ar-author"
                        target="_blank" 
                        :style="arAuthor"
                        :href="base.editorLink">
                            {{articleData.pageEditorName}}
                    </a>
                </div>

                <div :style="arContent" 
                     v-for="(item, index) in areaList"
                     :key="index"
                     v-html="item.pageAreaContent">
                </div>

                <img class="ar-img" :style="arImg" :src="base.fileEndPic">
            </section>
        </div>

        <section class="no-article-box" v-if="(!articleData || !articleData.pageTitle) && isPage">
            您寻找的文章已经去了迷失之城了！<br>
                我们也找不到了！<br><br>
     
                    非常抱歉
        </section>

        <template v-if="articleList.length">
            <div class="wx-area-line"></div>
            <div class="weui-cells no-margin no-line">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><label class="weui-label">推荐文章</label></div>
                    <div class="weui-cell__bd wx-placeholder">
                       选择了{{articleList ? articleList.length : 0}}个推荐
                    </div>
                </div>
            </div>
            <div class="weui-cells no-margin left-padding">
                <router-link class="weui-media-box weui-media-box_appmsg"
                        v-for="(item, index) in articleList"
                        :to="{
                                name: 'article-detail',
                                query: {
                                    enterpriseCode: $route.query.enterpriseCode,
                                    agentId: $route.query.agentId,
                                    pageCode: item.pageCode,
                                    appid: item.pubWechatAppId,
                                    templateCode: item.templateCode,
                                    S: $route.query.S,
                                    sShareTo: $route.query.sShareTo,
                                    C: $route.query.C,
                                    cShareTo: $route.query.cShareTo,
                                    T: $route.query.T,
                                    tShareTo: $route.query.tShareTo,
                                    spreadType: $route.query.spreadType
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

        <div class="wx-area-line" v-if="isComments && articleData.pageStatus == '1' && articleData.pageCommentOpt == '1'"></div>
        <div class="comments-box" v-if="isComments && articleData.pageStatus == '1' && articleData.pageCommentOpt == '1'">
            <comment :comment-url="'article-comment'" :is-comment="!isEnterprise"></comment>
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
import util from '../../utils/tools'
import jsSdk from '../../utils/jsSdk'
import paket from '../common/paket'
import comment from '../common/comment'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            isPage: false,
            articleData: {
                pageTitle: '',
                pagePublisTime: '',
                eidtorCode: ''
            },
            articleList: [],
            base: {
                dateStyle: ''
            },
            areaList: [],
            isComments: false,
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
            jsSdk.init(() => {
                this.getData()
                this.getTemplate()
                this.getArticles()
                this.selectEscs()
                this.isComments = true
            })
        }, 'snsapi_base')
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        }),
        isEnterprise () {
            var types = ['enterprise_channel_open', 'enterprise_user_open']
            return types.indexOf(this.userInfo.openType) > -1
            // return false
        },
        arTitle () {
            var styleData = {
                'display': 'block',
                'padding': '0 15px',
                'box-sizing': 'border-box',
                'background-position': 'center',
                'background-size': '100% 100%',
                'overflow': 'hidden',
                'height': this.base.titleBlockHeight + 'px',
                'background-image': 'url(' + this.base.titleBackground + ')',
                'font-size': this.base.titleFontSize + 'px',
                'text-align': this.base.titleAlignment,
                'font-style': this.base.titleFontStyle,
                'color': this.base.titleFontColor,
                'line-height': this.base.titleLineHeight + 'px',
                'padding-top': this.base.titleTopHeight + 'px',
                'margin-top': this.base.titleMarginTop + 'px'
            }

            return styleData
        },
        arAuthorDate () {
            var styleData = {
                'display': 'flex',
                'padding': '0 15px',
                'box-sizing': 'border-box',
                'justify-content': this.base.editorDateStyle,
                'overflow': 'hidden',
                'height': this.base.editorDateBlockHeight + 'px',
                'font-size': this.base.editorDateFontSize + 'px',
                'font-style': this.base.editorDateFontStyle,
                'color': this.base.editorDateFontColor,
                'line-height': this.base.editorDateLineHeight + 'px'
            }

            return styleData
        },
        arAuthor () {
            var styleData = {
                'color': this.base.editorLink ? '#368ccd' : this.base.editorDateFontColor,
                'margin-left': this.base.editorDateSpace + 'px'
            }

            return styleData
        },
        arTextBody () {
            var styleData = {
                'padding': '15px',
                'display': 'block',
                'box-sizing': 'border-box',
                'background-repeat-y': 'repeat',
                'background-repeat-x': 'no-repeat',
                'background-size': '100% 100%',
                'overflow': 'hidden',
                'background-image': 'url(' + this.base.fileBackground + ')',
                'padding-top': this.base.fileBlcokTopHeight + 'px'
            }

            return styleData
        },
        arImg () {
            var styleData = {
                'display': 'block',
                'width': '100%',
                'margin-top': this.base.fileMarginTop + 'px'
            }

            return styleData
        },
        arInTitle () {
            var styleData = {
                'display': 'block',
                'box-sizing': 'border-box',
                'background-repeat-y': 'no-repeat',
                'background-repeat-x': 'no-repeat',
                'background-position': 'center',
                'background-size': '100% 100%',
                'overflow': 'hidden',
                'height': this.base.innerTitleBlockHeight + 'px',
                'background-image': 'url(' + this.base.innerTitleBackground + ')',
                'font-size': this.base.innerTitleFontSize + 'px',
                'text-align': this.base.innerTitleAlignment,
                'font-style': this.base.innerTitleFontStyle,
                'color': this.base.innerTitleFontColor,
                'line-height': this.base.innerTitleFontType + 'px',
                'padding-top': this.base.innerTitleTopHeight + 'px',
                'margin-top': this.base.innerTitleMarginTop + 'px'
            }

            return styleData
        },
        arContent () {
            var styleData = {
                'display': 'block',
                'box-sizing': 'border-box',
                'overflow': 'hidden',
                'font-size': this.base.fileFontSize + 'px',
                'color': this.base.fileTaxtFontColor,
                'line-height': this.base.fileTaxtLineHeight + 'px',
                'margin-top': this.base.fileMarginTop + 'px'
            }

            return styleData
        }
    },
    filters: {
        formatDate: util.formatDate
    },
    methods: {
        getData () {
            util.request({
                method: 'get',
                interface: 'html5PageGet',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    pageCode: this.$route.query.pageCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                  this.articleData = res.result.result
                  this.areaList = res.result.result.pageAreas
                  this.isPage = true

                  // 客户打开文章
                  if (this.userInfo.openType == 'customer_open_first') {
                    var logData = {
                        interactionType: 'memberReadingRate',
                        interactionDesc: '客户阅读文章',
                        primeObject: this.$route.query.pageCode,
                        subObject: this.userInfo.t,
                        otherObject: this.$route.query.templateCode,
                        C: this.$route.query.C,
                        S: this.$route.query.S
                    }
                    this.setLog(logData)
                  }

                  var queryData = {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    agentId: this.$route.query.agentId,
                    appid: this.$route.query.appid,
                    pageCode: this.$route.query.pageCode,
                    templateCode: this.$route.query.templateCode,
                    S: this.userInfo.s ? this.userInfo.s : this.$route.query.S,
                    C: this.userInfo.c ? this.userInfo.c : this.$route.query.C,
                    spreadType: this.userInfo.spreadParentType ? this.userInfo.spreadParentType : this.$route.query.spreadType,
                    T: this.userInfo.t ? this.userInfo.t : this.$route.query.T
                  }

                  var queryList = []
                  for (var k in queryData) {
                    queryList.push(k + '=' + queryData[k])
                  }

                  var location = window.location

                  var link = location.origin + location.pathname + '?' + queryList.join('&')

                  var _self = this

                  var shareData = {
                    title: _self.articleData.pageTitle,
                    desc: _self.articleData.pageAbstract,
                    link: link,
                    imgUrl: _self.articleData.pageCover,
                    success (data) {
                        if (!_self.isEnterprise && data) {
                            _self.showEsc('coupon_scenario_2')

                            var logData = {
                                interactionType: data.type,
                                interactionDesc: data.mess,
                                primeObject: _self.$route.query.pageCode,
                                subObject: _self.$route.query.S,
                                otherObject: _self.$route.query.templateCode
                            }
                            _self.setLog(logData)
                        }

                        _self.$message({
                            message: '恭喜你，分享成功！',
                            type: 'success'
                        })
                    },
                    cancel (data) {
                        if (!_self.isEnterprise && data) {
                            var logData = {
                                interactionType: data.type,
                                interactionDesc: data.mess,
                                primeObject: _self.$route.query.pageCode,
                                subObject: _self.$route.query.S
                            }
                            _self.setLog(logData)
                        }
                    }
                  }

                  jsSdk.setShare(shareData)
                } else {
                  this.$message.error(res.result.message)
                }
            })
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

                    // 第一次打开可以领取
                    if (this.userInfo.openType == 'customer_open_first') {
                        this.showEsc('coupon_scenario_1')
                    }
                    // 评论成功
                    if (window.ISCOMMENT) {
                        this.showEsc('coupon_scenario_3')
                    }
                } else {
                  this.$message.error(res.result.message)
                }
            })
        },
        setLog (data) {
            util.request({
                method: 'post',
                interface: 'customerGeneralLog',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    customerCode: this.userInfo.customerCode,
                    customerType: this.userInfo.customerType,
                    interactionType: data.interactionType,
                    interactionDesc: data.interactionDesc,
                    interactionPrimeObject: data.primeObject,
                    interactionSubObject: data.subObject,
                    interactionOtherObject: data.otherObject,
                    C: data.C,
                    S: data.S
                }
            }).then(res => {})
        },
        showEsc (type) {
            if (this.isEnterprise || !this.escData[type] || !this.escData[type].length) {
                return false
            }

            if (this.escData[type]) {
                this.pathUrl = this.escData[type][0].couponGroutScenario
                this.showDesc = this.escData[type][0].couponGroupIntro
                this.showText = this.escData[type][0].couponGroupName
                this.groupCode = this.escData[type][0].couponGroupCode
                this.giftUrl = this.escData[type][0].couponGroupStore

                window.ISCOMMENT = false
                this.isShow.value = true
            }
        },
        hiddenPaket () {
            this.isShow.value = false
        },
        getTemplate () {
            util.request({
                method: 'get',
                interface: 'getTemplates',
                data: {
                    templateCode: this.$route.query.templateCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                    this.base = res.result.result[0]
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        getArticles () {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                pageCode: this.$route.query.pageCode
            }

            util.request({
                method: 'get',
                interface: 'getExtendPages',
                data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    this.articleList = res.result.result
                } else {
                    this.$message.error(res.result.message)
                }
            })
        }
    },
    components: {
        comment,
        paket
    }
}
</script>
<style lang="scss">
.article-body {
    .white-bg {
        background: #ffffff;
    }

    .comments-box {
        background: #ffffff;
        padding: 0 15px;
    }

    .no-article-box {
        padding: 60px 15px;
        font-size: 14px;
        line-height: 1.6;
        text-align: center;
        color: #999999;
    }
}
</style>