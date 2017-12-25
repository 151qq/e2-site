<template>
    <section class="record-box">
        <section class="comment-b"
                    v-for="(item, index) in commentDatas">
            <div class="date-box">
                {{item.date}}
            </div>
            <div class="content-box">
                <div class="title-box">
                    <span class="title">{{item.operation}}</span>
                </div>
                <div class="des-box" v-if="item.commentContent">{{item.commentContent}}</div>
                <div class="imgs-box" v-if="item.commentImgs && item.commentImgs.length">
                    <img-list :img-list="item.commentImgs"></img-list>
                </div>
                <div class="article-box"
                        v-if="item.commentArticles && item.commentArticles.length">
                    <router-link :to="article.href"
                                v-for="(article, index) in item.commentArticles">
                        <img :src="article.imgUrl">
                        <div class="article-title-box">
                            {{article.title}}
                        </div>          
                    </router-link>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import imgList from './imgList.vue'

export default {
    props: ['commentUrl'],
    data () {
        return {
            commentDatas: [
                {
                    id: 0,
                    date: '2012-11-12',
                    operation: '你噶哈了',
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
                    ]
                },
                {
                    id: 0,
                    date: '2012-11-12',
                    operation: '你噶哈了',
                    commentContent: '其实吧，没什么想说的，哎，都不容呀！',
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
                    ]
                },
                {
                    id: 0,
                    date: '2012-11-12',
                    operation: '你噶哈了',
                    commentContent: '其实吧，没什么想说的，哎，都不容呀！',
                }
            ]
        }
    },
    methods: {
    },
    components: {
        imgList
    }
}
</script>
<style lang="scss">
.record-box {
    padding-bottom: 20px;

    .comment-b {
        padding: 10px 0;
        display: flex;

        .date-box {
            width: 90px;
            font-size: 14px;
            line-height: 1.6;
            color: #000000;
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
                    font-size: 14px;
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
        }
    }
}
</style>