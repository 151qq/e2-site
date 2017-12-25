<template>
    <section class="page__bd">
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg show-state-box"
                    v-for="(item, index) in listData"
                    :to="{name: 'appointment-customer', query: {id: item.id, state: item.state}}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.des}}</p>
                </div>
                <div class="weui-cell__ft" v-if="item.state == '0'"><span class="no-done">新增</span></div>
                <div class="weui-cell__ft" v-if="item.state == '3'"><span class="is-doing">已接</span></div>
                <div class="weui-cell__ft" v-if="item.state == '2'"><span class="has-done">过期</span></div>
                <div class="weui-cell__ft" v-if="item.state == '1'"><span class="is-waiting">审核</span></div>
            </router-link>
        </div>

        <div class="wx-bottom-nav">
            <a class="wx-nav-item">
                新预约
            </a>
            <a class="wx-nav-item">
                已接待
            </a>
            <a class="wx-nav-item">
                已过期
            </a>
            <router-link class="wx-nav-item"
                            :to="{name: 'appointment-confirm'}">
                新增预约
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
                    date: '2017-11-11',
                    state: '0'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '不知道不明了',
                    date: '2017-11-11',
                    state: '1'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '你瞅啥，你看啥',
                    date: '2017-11-11',
                    state: '2'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '瞅你咋地',
                    date: '2017-11-11',
                    state: '3'
                }
            ]

            this.listData = listDataITL
            console.log(this.listData)
        }
    }
}
</script>