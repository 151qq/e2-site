<template>
    <section class="comment-box">
        <div class="head-box">
            <span class="left">评论</span>
            <img class="right"
                    src="../../assets/images/edit-icon.png"
                    @click="showSubmit('1')">
        </div>
        <section class="comment-b"
                    v-for="(item, index) in commentList">
            <div class="avatar-box">
                <img :src="item.memberInfo.memberImage">
            </div>
            <div class="content-box">
                <div class="title-box">
                    <span class="title">{{item.memberInfo.memberName}}</span>
                    <div class="date-box">
                        {{commentFloor + 1}}楼 {{item.createTime | getDateDiff}}
                    </div>
                </div>
                <div class="des-box"
                     v-if="item.status == '1' && item.commentContent">{{item.commentContent}}</div>

                <div class="des-box"
                     v-if="item.status == '0'">该评论已被删除！！！</div>

                <div class="imgs-box" 
                     v-if="item.status == '1' && item.attachments && item.attachments.length">
                    <img-list :img-list="item.attachments"></img-list>
                </div>
                <div class="response-box">
                    <div class="top-box">
                        <span class="response"
                                v-if="item.responseComment && item.responseComment.commentContent">
                            作者回复
                        </span>
                        <div class="comment-btn">
                            <img src="../../assets/images/zan-icon.png">{{item.commentGoodJob}}
                            <img src="../../assets/images/nozan-icon.png">{{item.commentBadJob}}
                            <img src="../../assets/images/edit-icon.png"
                                 @click="showSubmit('2')"
                                 v-if="userInfo.oppenid && item.memberInfo.memberWechatOpenid != userInfo.oppenid">
                            <img src="../../assets/images/delete-icon.png"
                                 @click="deleteComment(item)"
                                 v-if="userInfo.oppenid && item.memberInfo.memberWechatOpenid == userInfo.oppenid">
                        </div>
                    </div>
                    <div class="response-content"
                            v-if="item.responseComment && item.responseComment.commentContent">
                        <div class="des-box"
                                v-if="item.responseComment.commentContent">
                            {{item.responseComment.commentContent}}
                        </div>
                        <div class="imgs-box"
                                v-if="item.responseComment.attachments && item.responseComment.attachments.length">
                            <img-list :img-list="item.responseComment.attachments"></img-list>
                        </div>
                        <!-- <div class="article-box"
                                v-if="item.responseComment.commentArticles && item.responseComment.commentArticles.length">
                            <router-link :to="article.href"
                                        v-for="(article, index) in item.responseComment.commentArticles">
                                <img :src="article.imgUrl">
                                <div class="article-title-box">
                                    {{article.title}}
                                </div>          
                            </router-link>
                        </div> -->
                        <!-- <div class="response-box">
                            <div class="top-box">
                                <span class="response"></span>
                                <div class="comment-btn">
                                    <img src="../../assets/images/zan-icon.png">{{item.zanNum}}
                                    <img src="../../assets/images/nozan-icon.png">{{item.hateNum}}
                                    <img src="../../assets/images/edit-icon.png">
                                    <img src="../../assets/images/delete-icon.png">
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import util from '../../utils/tools'
import imgList from './imgList.vue'
import {getDateDiff} from '../../assets/common/utils.js'

export default {
    props: ['commentUrl'],
    data () {
        return {
            commentList: [],
            userInfo: {}
        }
    },
    mounted () {
        this.userInfo = window.sessionStorage.getItem('userInfo')
        this.getComments()
    },
    methods: {
        showSubmit (type) {
            this.$router.push({
                name: this.commentUrl,
                query: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    appid: this.$route.query.appid,
                    pageCode: this.$route.query.pageCode,
                    commentType: type
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
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        deleteComment (item) {
            util.request({
                method: 'post',
                interface: 'deleteComment',
                data: {
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
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
            font-size: 18px;
            color: #000000;
        }

        .right {
            display: block;
            width: 18px;
            height: 18px;
        }
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
                font-size: 14px;
                line-height: 1.4;
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
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: #000000;

                    img {
                        display: inline-block;
                        height: 16px;
                        margin-left: 8px;
                    }
                }
            }

            .article-box {
                a {
                    display: flex;
                    margin-top: 10px;
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