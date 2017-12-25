<template>
    <section class="point-box page__hd">
        <div class="weui-cells__title">基本信息</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">开始时间</div>
                <div class="weui-cell__ft">2017-09-09 19:28:09</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">结束时间</div>
                <div class="weui-cell__ft">2017-09-09 19:28:09</div>
            </div>
        </div>
        
        <detail-show :detail-data="detailData"></detail-show>

        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{name: 'marketPacket'}">
                红包
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{}">
                研讨
            </router-link>
            <router-link class="wx-nav-item-60"
                            :to="{name: 'comment-chat'}">
                未读汇报（2）
            </router-link>
        </div>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import detailShow from '../common/detailShow.vue'

export default {
    data () {
        return {
            detailData: {
                content: '我是详情',
                imgList: [
                    '/static/images/bench1.png',
                    '/static/images/bench1.png',
                    '/static/images/bench1.png'
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
                ]
            }
        }
    },
    methods: {
    },
    components: {
        detailShow
    }
}
</script>