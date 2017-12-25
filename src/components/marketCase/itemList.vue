<template>
    <section class="case-article-list-box page__bd">
        <div class="weui-cells">
            <router-link class="weui-media-box weui-media-box_appmsg show-state-box"
                    v-for="(item, index) in listData"
                    :to="{name: 'case-detail', query: {id: item.id, state: item.state}}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.des}}</p>
                </div>
                <div class="weui-cell__ft" v-if="item.state == '0'"><span class="no-done">草稿</span></div>
                <div class="weui-cell__ft" v-if="item.state == '3'"><span class="has-done">结束</span></div>
                <div class="weui-cell__ft" v-if="item.state == '2'"><span class="is-doing">执行</span></div>
                <div class="weui-cell__ft" v-if="item.state == '1'"><span class="is-waiting">审核</span></div>
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            listData: []
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData () {
            var listDataITL = [
                {
                    id: 0,
                    imgUrl: '/static/images/detail1.png',
                    title: '爱谁谁爱啥啥',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    state: '0'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '不知道不明了',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    state: '1'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '你瞅啥，你看啥',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    state: '2'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '瞅你咋地',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    state: '3'
                }
            ]

            this.listData = listDataITL
            console.log(this.listData)
        }
    }
}
</script>
<style lang="scss">
.case-article-list-box {
    .weui-cells {
        margin-top: 0;
    }
}
</style>