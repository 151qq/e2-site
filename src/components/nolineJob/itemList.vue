<template>
    <section class="analyse-list-box page__bd">
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in listData"
                    :to="{name: 'noline-detail'}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.date}}</p>
                </div>
            </router-link>
        </div>
        <div class="wx-bottom-nav">
            <a class="wx-nav-item-20">
                券
            </a>
            <router-link class="wx-nav-item"
                            :to="{name: 'noline-list'}">
                外呼工作
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'log-list'}">
                外呼日志
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
                    date: '2017-09-08'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '不知道不明了',
                    date: '2017-09-08'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '你瞅啥，你看啥',
                    date: '2017-09-08'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '瞅你咋地',
                    date: '2017-09-08'
                }
            ]

            this.listData = listDataITL
            console.log(this.listData)
        }
    }
}
</script>