<template>
    <section class="comment-box">
        <div class="head-box" @click="showSubmit('1')">
            <div class="left">
                评论<template v-if="commentList.length">（<span>{{commentList.length}}</span>）</template>
            </div>
            <div class="right" v-if="isComment">
                <img src="../../assets/images/edit-icon.png">
            </div>
        </div>
        <section class="comment-b"
                    :id="'comment-' + item.commentFloor"
                    v-for="(item, index) in commentList">
            <div class="avatar-box">
                <img v-if="item.memberInfo.memberImage" :src="item.memberInfo.memberImage">
            </div>
            <div class="content-box">
                <div class="title-box">
                    <span class="title">{{item.memberInfo.memberName}}</span>
                    <div class="date-box">
                        {{item.commentFloor}}楼 {{item.createTime | getDateDiff}}
                    </div>
                </div>
                <div class="des-box"
                     v-if="item.status == '1' && item.commentContent">
                     <a v-if="item.commentTitle"
                        class="response-nav"
                        :href="'#comment-' + item.commentTitle">@第{{item.commentTitle}}楼：</a>
                    {{item.commentContent}}
                </div>

                <div class="des-box"
                     v-if="item.status == '0'">该评论已被删除！！！</div>

                <div class="imgs-box" 
                     v-if="item.status == '1' && item.attachments && item.attachments.length">
                    <img-list :img-list="item.attachments"></img-list>
                </div>
                <div class="response-box">
                    <div class="top-box"
                            v-if="(userInfo.memberInfo && userInfo.memberInfo.memberCode && item.memberInfo.memberCode != userInfo.memberInfo.memberCode)"
                            @click="showSubmit('1', item)">
                        <span class="response"
                                v-if="item.reportComment && item.reportComment.commentContent">
                            作者回复
                        </span>
                        <div class="comment-btn" v-if="item.status == '1' && isComment">
                            <!-- <div class="btn-out-box" @click="countCommentGoodJob(item)">
                                <img src="../../assets/images/zan-icon.png">
                                <span class="text">{{item.commentGoodJob}}</span>
                            </div>
                            <div class="btn-out-box" @click="countCommentBadJob(item)">
                                <img src="../../assets/images/nozan-icon.png">
                                <span class="text">{{item.commentBadJob}}</span>
                            </div> -->
                            <div class="btn-out-box">
                                <img src="../../assets/images/edit-icon.png">
                            </div>
                        </div>
                    </div>
                    <div class="top-box"
                            @click="deleteComment(item)"
                            v-if="(userInfo.memberInfo && userInfo.memberInfo.memberCode && item.memberInfo.memberCode == userInfo.memberInfo.memberCode)">
                        <span class="response"
                                v-if="item.reportComment && item.reportComment.commentContent">
                            作者回复
                        </span>
                        <div class="comment-btn" v-if="item.status == '1'">
                            <div class="btn-out-box">
                                <img src="../../assets/images/delete-icon.png">
                            </div>
                        </div>
                    </div>
                    <div class="response-content"
                            v-if="item.reportComment && item.reportComment.commentContent">
                        <div class="des-box"
                                v-if="item.reportComment.commentContent">
                            {{item.reportComment.commentContent}}
                        </div>
                        <div class="imgs-box"
                                v-if="item.reportComment.attachments && item.reportComment.attachments.length">
                            <img-list :img-list="item.reportComment.attachments"></img-list>
                        </div>
                        <div class="article-box"
                                v-if="item.reportComment.commentArticles && item.reportComment.commentArticles.length">
                            <div class="weui-cells">
                                <router-link class="weui-media-box weui-media-box_appmsg"
                                        v-for="(article, index) in item.reportComment.commentArticles"
                                        :to="{
                                                name: 'article-detail',
                                                query: {
                                                    enterpriseCode: $route.query.enterpriseCode,
                                                    agentId: $route.query.agentId,
                                                    pageCode: article.pageCode,
                                                    appid: article.appId,
                                                    templateCode: article.templateCode,
                                                    S: $route.query.S,
                                                    C: 'e2nochannel',
                                                    T: 'e2nospread'
                                                }
                                            }">
                                    <div class="weui-media-box__hd">
                                        <img class="weui-media-box__thumb" :src="article.pageCover">
                                    </div>
                                    <div class="weui-media-box__bd">
                                        <h4 class="weui-media-box__title">{{article.pageTitle}}</h4>
                                        <p class="weui-media-box__desc">{{article.pageAbstract}}</p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="null-box" v-if="!commentList.length && isPage">
            暂无内容！
        </div>
    </section>
</template>
<script>
import util from '../../utils/tools'
import imgList from './imgList.vue'
import {getDateDiff} from '../../assets/common/utils.js'
import { mapGetters } from 'vuex'

export default {
    props: ['commentUrl', 'isComment'],
    data () {
        return {
            isPage: false,
            commentList: [],
            isGood: [],
            isBad: [],
            commentsLen: ''
        }
    },
    mounted () {
        this.getComments()
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        showSubmit (type, item) {
            if ((item && item.status != '1') || !this.isComment) {
                return false
            }

            var pathUrl = {
                name: this.commentUrl,
                query: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    agentId: this.$route.query.agentId,
                    appid: this.$route.query.appid,
                    pageCode: this.$route.query.pageCode,
                    templateCode: this.$route.query.templateCode,
                    S: this.$route.query.S,
                    sShareTo: this.$route.query.sShareTo,
                    C: this.$route.query.C,
                    cShareTo: this.$route.query.cShareTo,
                    spreadType: this.$route.query.spreadType,
                    T: this.$route.query.T,
                    tShareTo: this.$route.query.tShareTo,
                    commentType: type,
                    commentFloor: this.commentList.length + 1
                }
            }

            if (item && item.commentFloor) {
                pathUrl.query.commentTitle = item.commentFloor
            }

            this.$router.push(pathUrl)
        },
        countCommentGoodJob (item) {
            if (this.isGood.indexOf(item.commentCode) > -1) {
                return false
            }

            util.request({
                method: 'post',
                interface: 'countCommentGoodJob',
                data: {
                    commentCode: item.commentCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                    this.$message({
                      message: '恭喜你，点赞成功！',
                      type: 'success'
                    })
                    this.isGood.push(item.commentCode)
                    this.getComments()
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        countCommentBadJob (item) {
            if (this.isBad.indexOf(item.commentCode) > -1) {
                return false
            }

            util.request({
                method: 'post',
                interface: 'countCommentBadJob',
                data: {
                    commentCode: item.commentCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                    this.$message({
                      message: '恭喜你，操作成功！',
                      type: 'success'
                    })
                    this.isBad.push(item.commentCode)
                    this.getComments()
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        getComments () {
            util.request({
                method: 'get',
                interface: 'commentList',
                data: {
                    pageCode: this.$route.query.pageCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                    this.commentList = res.result.result
                    this.isPage = true
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        deleteComment (item) {
            if (item.status != '1') {
                return
            }
            
            util.request({
                method: 'post',
                interface: 'deleteComment',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    commentCode: item.commentCode
                }
            }).then(res => {
                if (res.result.success == '1') {
                    this.getComments()
                } else {
                    this.$message.error(res.result.message)
                }
            })
        }
    },
    filters: {
        getDateDiff
    },
    components: {
        imgList
    }
}
</script>
<style lang="scss">
.comment-box {
    .head-box {
        padding: 10px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        justify-content: space-between;

        .left {
            font-size: 18px;
            color: #000000;

            span {
                color: #F43530;
            }
        }

        .right {
            display: block;
            width: 28px;
            height: 28px;
            text-align: right;

            img {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin-top: 5px;
            }
        }
    }

    .response-nav {
        color: #20a0ff;
    }

    .comment-b {
        padding: 10px 0;
        display: flex;

        .avatar-box {
            width: 50px;
            height: 50px;
            background: url(/static/images/head-icon.png) center no-repeat;
            background-size: 100%;
            margin-right: 10px;

            img {
                display: block;
                width: 50px;
                height: 50px;
            }
        }

        .content-box {
            flex: 1;
            overflow: hidden;

            .title-box {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .title {
                    flex: 1;
                    font-weight: 400;
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                    word-wrap: break-word;
                    word-break: break-all;
                }

                .date-box {
                    font-size: 14px;
                    color: #888888;
                }
            }

            .des-box {
                font-size: 16px;
                line-height: 1.4;
                color: #666666;
                margin-top: 5px;
            }

            .imgs-box {
                margin-top: 10px;
            }
        }

        .response-box {
            margin-top: 10px;

            .top-box {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .response {
                    font-size: 16px;
                    color: #000000;
                }

                .comment-btn {
                    flex: 1;
                    text-align: right;
                    font-size: 14px;
                    color: #000000;
                    line-height: 1;

                    .btn-out-box {
                        display: inline-block;
                        padding: 5px 4px 0px;
                        height: 24px;
                        box-sizing: border-box;
                        overflow: hidden;
                    }

                    img {
                        float: left;
                        height: 16px;
                    }

                    .text {
                        float: right;
                        font-size: 15px;
                        margin-left: 5px;
                        line-height: 16px;
                    }
                }
            }

            .article-box {
                .weui-cells {
                    margin-top: 10px;

                    &:before {
                        border: none;
                    }
                }

                a {
                    display: flex;
                    align-items: center;
                }

                img {
                    display: block;
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                }

                .article-title-box {
                    flex: 1;
                    font-size: 14px;
                    color: #000000;
                }

                .weui-media-box {
                    padding: 10px 5px;
                }

                .weui-media-box_appmsg .weui-media-box__hd {
                    height: 40px;
                    line-height: 40px;
                }
            }

            .response-content {
                margin-top: 10px;
                padding: 10px 15px;
                background: #f3f3f3;
            }
        }
    }
}
</style>