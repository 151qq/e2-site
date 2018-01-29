<template>
    <section class="article-body">
        <div class="white-bg">
            <section class='bodyMain' :style="arTextBody">
                <div class="ar-title" :style="arTitle">{{articleData.pageTitle}}</div>
                <div class="ar-author-date" :style="arAuthorDate">
                    <span class="ar-date">{{ articleData.pagePublishTime | formatDate(base.dateStyle)}}</span>
                    <a  class="ar-author"
                        target="_blank" 
                        :style="arAuthor"
                        :href="base.editorLink">
                            {{articleData.eidtorCode}}
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

        <template v-if="articleList.length">
            <div class="weui-cells__title">推荐文章</div>
            <div class="weui-cells no-line">
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
                                C: 'e2nochannel',
                                T: 'e2nospread'
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

        <template v-if="isCreator">
            <div class="btn-height-box"></div>
            <div class="wx-bottom-nav">
                <a class="wx-nav-item"
                    @click="sharePartener">
                    分享同事
                </a>
                <a class="wx-nav-item"
                    @click="showSheet">
                    产品相关
                </a>
                <a class="wx-nav-item"
                    @click="shareWechat">
                    分享微信
                </a>
            </div>
        </template>

        <sheet :is-show-sheet="isShowSheet" :item-list="sheetList" :cb="publistOpt"></sheet>

        <paket :is-show="isShow" :path-url="pathUrl" :show-text="showText"></paket>
    
        <section class="no-article-box" v-if="!articleData.pageTitle && isPage">
            您寻找的文章已经去了迷失之城了！<br>
                我们也找不到了！<br><br>
     
                    非常抱歉
        </section>
    </section>    
</template>
<script>
import util from '../../utils/tools'
import jsSdk from '../../utils/jsSdk'
import comment from '../common/comment.vue'
import paket from '../common/paket'
import sheet from '../common/sheet.vue'
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
            showText: '',
            escData: {},
            isShowSheet: {
                value: false
            },
            sheetList: [
                {
                    label: '详细规格',
                    pathName: 'product-spec'
                },
                {
                    label: '应用场景',
                    pathName: 'product-senior'
                },
                {
                    label: '客户评论',
                    pathName: 'product-log'
                }
            ],
            articleList: []
        }
    },
    mounted () {
        util.getUser(() => {
            jsSdk.init()
            this.getData()
            this.getTemplate()
            this.getArticles()
            this.selectEscs()
            this.isComments = true
        }, 'snsapi_base')
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        }),
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
        showSheet () {
            if (!this.isPublist) {
                return false
            }

            this.isShowSheet.value = true
        },
        publistOpt (item) {
            var pathUrl = {
                name: item.pathName,
                query: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    agentId: this.$route.query.agentId,
                    templateCode: this.$route.query.templateCode,
                    pageCode: this.$route.query.pageCode
                }
            }
            
            this.$router.push(pathUrl)
        },
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

                  var queryData = {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    appid: this.$route.query.appid,
                    pageCode: this.$route.query.pageCode,
                    templateCode: this.$route.query.templateCode,
                    pageType: this.$route.query.pageType,
                    S: this.userInfo.salesCode ? this.userInfo.salesCode : this.$route.query.S,
                    C: this.userInfo.channelMemberCode ? this.userInfo.channelMemberCode : this.$route.query.C
                  }

                  var queryList = []
                  for (var k in queryData) {
                    queryList.push(k + '=' + queryData[k])
                  }

                  var location = window.location

                  var spreadCode = this.userInfo.spreadCode ? this.userInfo.spreadCode : this.$route.query.T

                  var link = location.origin + location.pathname + '?' + queryList.join('&') + '&T=' + spreadCode

                  var _self = this

                  var shareData = {
                    title: this.articleData.pageTitle,
                    desc: this.articleData.pageAbstract,
                    link: link,
                    imgUrl: this.articleData.pageCover,
                    success () {
                        if (_self.escData.coupon_scenario_2) {
                            _self.showEsc('coupon_scenario_2')
                        } else {
                            _self.$message({
                                message: '恭喜你，分享成功！',
                                type: 'success'
                            })
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
                method: 'get',
                interface: 'selectEscs',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                  this.escData = res.result.result
                  this.showEsc('coupon_scenario_1')
                } else {
                  this.$message.error(res.result.message)
                }
            })
        },
        showEsc (type) {
            if (this.escData[type]) {
                this.pathUrl = this.escData[type].scenarioCouponStoreUrl
                this.showText = this.escData[type].scenarioAd

                this.isShow.value = true
            }
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
                    this.base = Object.assign(res.result.result[0], this.base)
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
        },
        submitSuccess () {
            this.showEsc('coupon_scenario_3')
        }
    },
    components: {
        comment,
        paket,
        sheet
    }
}
</script>
<style lang="scss">
.article-body {
    .white-bg {
        background: #ffffff;
    }

    .comments-box {
        padding: 0 15px;
    }

    .no-article-box {
        padding: 150px 15px 0;
        font-size: 14px;
        line-height: 1.6;
        text-align: center;
        color: #999999;
    }
}
</style>