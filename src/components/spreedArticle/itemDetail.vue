<template>
    <section class="article-body">
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

        <div class="wx-area-line"></div>
        <div class="comments-box" v-if="isComments">
            <comment :comment-url="'article-comment'" @submitSuccess="submitSuccess"></comment>
        </div>

        <paket :is-show="isShow" :path-url="pathUrl" :show-text="showText"></paket>
        <!-- <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{name: 'off-shell'}">
                文章下架
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{}">
                关闭评论
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'article-statistics'}">
                统计分析
            </router-link>
        </div> -->
    </section>
</template>
<script>
import util from '../../utils/tools'
import jsSdk from '../../utils/jsSdk'
import comment from '../common/comment.vue'
import paket from '../common/paket'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            articleData: {
                pageTitle: '',
                pagePublisTime: '',
                eidtorCode: ''
            },
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
            escData: {}
        }
    },
    mounted () {
        util.getUser(() => {
            jsSdk.init()
            this.getData()
            this.getTemplate()
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
        submitSuccess () {
            this.showEsc('coupon_scenario_3')
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
    margin-top: 15px;
}

.comments-box {
    padding: 0 15px;
}
</style>