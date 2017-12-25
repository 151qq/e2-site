<template>
    <section class="article-list-box page__bd">
        <template v-for="(item, index) in listData">
            <div class="weui-cells__title">{{item.year}}</div>
            <div class="weui-cells">
                <router-link class="weui-media-box weui-media-box_appmsg"
                        v-for="(article, index) in item.datas"
                        :to="{name: 'article-detail', query: {id: article.id}}">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src="article.imgUrl">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{article.title}}</h4>
                        <p class="weui-media-box__desc">{{article.des}}</p>
                    </div>
                </router-link>
            </div>
        </template>
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
                    year: '2017',
                    datas: [
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
                        }
                    ]
                },
                {
                    year: '2016',
                    datas: [
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
            ]

            this.listData = listDataITL
        }
    }
}
</script>
<style lang="scss">
.article-list-box {
}
</style>