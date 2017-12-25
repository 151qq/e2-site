<template>
    <section class="comment-chat-box">
        <div class="weui-cells__title">
            发表
            <img class="edit-box"
                    src="../../assets/images/edit-icon.png"
                    @click="showSubmit">
        </div>
        <section class="comment-b"
                    v-for="(item, index) in commentDatas">
            <div class="avatar-box">
                <img :src="item.author.avatar">
            </div>
            <div class="content-box">
                <div class="title-box">
                    <span class="title">{{item.author.name}}</span>
                    <div class="date-box">
                        {{index + 1}}楼 {{item.submitTime | getDateDiff}}
                    </div>
                </div>
                <div class="des-box" v-if="item.commentContent">{{item.commentContent}}</div>
                <div class="imgs-box" v-if="item.commentImgs.length">
                    <img-list :img-list="item.commentImgs"></img-list>
                </div>
                <div class="response-box">
                    <div class="top-box">
                        <span class="response"
                                v-if="item.responseComment && item.responseComment.author">作者回复</span>
                        <div class="comment-btn">
                            <img src="../../assets/images/zan-icon.png">{{item.zanNum}}
                            <img src="../../assets/images/nozan-icon.png">{{item.hateNum}}
                            <img src="../../assets/images/edit-icon.png" @click="showSubmit">
                            <img src="../../assets/images/delete-icon.png">
                        </div>
                    </div>
                    <div class="response-content"
                            v-if="item.responseComment && item.responseComment.author">
                        <div class="des-box"
                                v-if="item.responseComment.commentContent">
                            {{item.responseComment.commentContent}}
                        </div>
                        <div class="imgs-box"
                                v-if="item.responseComment.commentImgs.length">
                            <img-list :img-list="item.responseComment.commentImgs"></img-list>
                        </div>
                        <div class="article-box"
                                v-if="item.responseComment.commentArticles.length">
                            <router-link :to="article.href"
                                        v-for="(article, index) in item.responseComment.commentArticles">
                                <img :src="article.imgUrl">
                                <div class="article-title-box">
                                    {{article.title}}
                                </div>          
                            </router-link>
                        </div>
                        <div class="response-box">
                            <div class="top-box">
                                <span class="response"></span>
                                <div class="comment-btn">
                                    <img src="../../assets/images/zan-icon.png">{{item.zanNum}}
                                    <img src="../../assets/images/nozan-icon.png">{{item.hateNum}}
                                    <img src="../../assets/images/edit-icon.png" @click="showSubmit">
                                    <img src="../../assets/images/delete-icon.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <submit-comment :is-show-modal="isShowModal"></submit-comment>
    </section>
</template>
<script>
import imgList from './imgList.vue'
import {getDateDiff} from '../../assets/common/utils.js'
import submitComment from './submitComment.vue'

export default {
    data () {
        return {
            commentDatas: [
                {
                    id: 0,
                    author: {
                        name: '大家好，我是ms',
                        avatar: '/static/images/bench1.png'
                    },
                    zanNum: 11,
                    hateNum: 12,
                    commentContent: '其实吧，没什么想说的，哎，都不容呀！',
                    commentImgs: [
                        '/static/images/bench1.png',
                        '/static/images/bench1.png',
                        '/static/images/bench1.png',
                        '/static/images/bench1.png',
                        '/static/images/bench1.png'
                    ],
                    submitTime: '2017-11-20',
                    responseComment: {
                        id: 1,
                        author: {
                            name: '大家好，我是ms',
                            avatar: '/static/images/detail1.png'
                        },
                        commentContent: '其实吧，没什么想说的，哎，都不容呀！',
                        commentImgs: [
                            '/static/images/bench1.png',
                            '/static/images/bench1.png',
                            '/static/images/bench1.png',
                            '/static/images/bench1.png',
                            '/static/images/bench1.png'
                        ],
                        commentArticles: [
                            {
                                id: 0,
                                title: '咋啦，妹砸，被煮啦！',
                                imgUrl: '/static/images/detail1.png',
                                href: ''
                            },
                            {
                                id: 1,
                                title: '论妹砸被煮二三事！',
                                imgUrl: '/static/images/detail1.png',
                                href: ''
                            }
                        ],
                        submitTime: '2017-18-21'
                    }
                }
            ]
        }
    },
    methods: {
        showSubmit () {
            this.$router.push({name: 'submit-comment'})
        }
    },
    filters: {
        getDateDiff
    },
    components: {
        imgList,
        submitComment
    }
}
</script>
<style lang="scss">
.comment-chat-box {

    .edit-box {
        float: right;
        width: 16px;
        height: 16px;
    }

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
        background: #ffffff;
        padding: 10px 15px;
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