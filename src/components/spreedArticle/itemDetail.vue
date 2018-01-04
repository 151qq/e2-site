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
            <comment :comment-url="'article-comment'"></comment>
        </div>
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
            userInfo: {},
            isComments: false
        }
    },
    mounted () {
        this.userInfo = util.getOpenId()

        if (this.userInfo.openid || this.userInfo.memberCode) {
            jsSdk.init()
            this.getData()
            this.getTemplate()
            this.isComments = true
        }
    },
    computed: {
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

                  var shareData = {
                    title: this.articleData.pageTitle,
                    desc: this.articleData.pageAbstract,
                    link: window.location.href,
                    imgUrl: this.articleData.pageCover,
                    success () {
                        this.$message({
                              message: '恭喜你，分享成功！',
                              type: 'success'
                        })
                    }
                  }

                  jsSdk.setShare(shareData)
                } else {
                  this.$message.error(res.result.message)
                }
            })
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
        }
    },
    components: {
        comment
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