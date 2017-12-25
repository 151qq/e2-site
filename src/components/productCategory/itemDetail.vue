<template>
    <section class="article-detail-box">
        <div class="wx-area-title">
            {{base.title}}
            <div class="wx-area-des">编码：{{base.codeNum}}</div>
        </div>
        <div class="wx-area-img">
            <img :src="base.coverImg">
        </div>
        <div class="weui-cells__title">产品介绍</div>
        <div class="weui-cells">
            <div class="wx-area-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
            </div>
        </div>

        <div class="weui-cells__title">产品规格</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box"
                    v-for="(item, index) in specs">
                <div class="weui-cell__bd">{{item.name}}</div>
                <div class="weui-cell__ft">{{item.des}}</div>
            </div>
        </div>
        
        <div class="weui-cells__title">产品外观照片</div>
        <div class="weui-cells">
            <img-list :img-list="appearance" :more-path="appearancePath"></img-list>
        </div>
        <div class="weui-cells__title">优惠券</div>
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in fileList"
                    :to="{}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.des}}</p>
                </div>
            </router-link>
        </div>

        <div class="weui-cells__title">推荐搭配</div>
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in fileList"
                    :to="{}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.des}}</p>
                </div>
            </router-link>
        </div>

        <div class="wx-area-line"></div>
        <div class="comments-box">
            <comment :comment-url="'submit-comment'"></comment>
        </div>
    </section>
</template>
<script>
import imgList from '../common/imgList.vue'
import comment from '../common/comment.vue'

export default {
    data () {
        return {
            base: {
                title: '我是大三元产品',
                codeNum: '229938',
                coverImg: '/static/images/bench1.png'
            },
            specs: [
                {
                    "id": 0,
                    "name": "2017-18-21",
                    "des": "规格一说明"
                },
                {
                    "id": 1,
                    "name": "2017-18-21",
                    "des": "规格二说明"
                }
            ],
            fileList: [
                {
                    id: 0,
                    imgUrl: '/static/images/detail1.png',
                    title: '爱谁谁爱啥啥',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '不知道不明了',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '你瞅啥，你看啥',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '瞅你咋地',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                }
            ],
            appearance: [
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png'
            ],
            appearancePath: {
                name: 'product-img',
                query: {
                    type: 'appearance'
                }
            },
            aproductSpreedPath: {
                name: 'product-img',
                query: {
                    type: 'productSpreed'
                }
            }
        }
    },
    mounted () {
        // this.getData()
    },
    methods: {
        getData () {

        }
    },
    components: {
        imgList,
        comment
    }
}
</script>
<style lang="scss">
.article-detail-box {
    .wx-area-title {
        background: #ffffff;
        padding-top: 20px;
        margin-bottom: 0;
    }

    .wx-area-img {
        padding-top: 10px;
        background: #ffffff;
    }

    .comments-box {
        background: #ffffff;
        padding: 0 15px;
    }
}
</style>