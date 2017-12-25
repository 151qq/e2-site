<template>
    <section class="appoint-detail-box page__bd">
        <div class="wx-area-img">
            <img :src="memberInfo.coverImg">
        </div>
        <div class="avatar-box">
            <div class="img-box">
                <img :src="memberInfo.avatar">
            </div>
            <div class="name-box">{{memberInfo.name}}</div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约时间</div>
                <div class="weui-cell__ft">2017-10-12 12:00 ~ 12:30</div>
            </div>
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">预约地址</div>
                <div class="weui-cell__ft">北京是西胡同</div>
            </router-link>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待</div>
                <div class="weui-cell__ft">爱谁谁</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">体验产品</div>
                <div class="weui-cell__ft">爱咋咋地</div>
            </div>
        </div>
        <div class="weui-cells__title">预约详情</div>
        <div class="weui-cells">
            <div class="wx-area-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
            </div>
        </div>
        <div class="wx-area-line"></div>

        <div class="imgs-box" v-if="appImgs.length">
            <img-list :img-list="appImgs"></img-list>
        </div>

        <div class="wx-area-line"></div>

        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in listData"
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

        <div v-if="!$route.query.state" class="weui-btn-area">
            <router-link class="weui-btn weui-btn_primary"
                    :to="{name: 'check-confirm'}">
                预约确认
            </router-link>
        </div>

        <div v-else class="wx-bottom-nav">
            <a class="wx-nav-item-20">
                修改
            </a>
            <router-link class="wx-nav-item"
                            :to="{name: 'page-confirm'}">
                预约接待汇报
            </router-link>
        </div>
    </section>
</template>
<script>
import imgList from '../common/imgList.vue'

export default {
    data () {
        return {
            memberInfo: {
                name: '爱咋咋地',
                tel: '1387762887',
                avatar: '/static/images/head-icon.png',
                coverImg: '/static/images/bench1.png'
            },
            listData: [
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
            appImgs: [
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png'
            ]
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
        imgList
    }
}
</script>
<style lang="scss">
.appoint-detail-box {
    .no-margin {
        margin-top: 0;
    }

    .avatar-box {
        position: relative;
        z-index: 10;
        height: 60px;
        overflow: hidden;
        margin-top: -40px;

        div {
            float: right;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        .img-box {
            width: 60px;
            height: 60px;
            border: 1px solid #E5E5E5;
            background: #ffffff;
            margin-right: 15px;
            box-sizing: border-box;
        }

        .name-box {
            font-size: 16px;
            line-height: 40px;
            margin-right: 20px;
            color: #ffffff;
        }
    }
}
</style>