<template>
    <section class="paket-case-box page__bd">
        <div class="weui-cells">
            <div class="weui-media-box weui-media-box_appmsg show-message-box"
                    v-for="(item, index) in listData">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">
                        <span v-if="item.paket">红包 {{item.paket}} &nbsp;&nbsp;</span>
                        <span v-if="item.integral">积分 {{item.integral}} </span>
                    </p>
                </div>
                <div class="weui-cell__ft">{{item.date}}</div>
            </div>
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
                    paket: 22,
                    integral: 33,
                    date: '2017-02-09'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '不知道不明了',
                    paket: 22,
                    integral: '',
                    date: '2017-02-09'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '你瞅啥，你看啥',
                    paket: 22,
                    integral: '',
                    date: '2017-02-09'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '瞅你咋地',
                    paket: '',
                    integral: 33,
                    date: '2017-02-09'
                }
            ]

            this.listData = listDataITL
        }
    }
}
</script>
<style lang="scss">
.paket-case-box {
    .weui-cells {
        margin-top: 0;
    }

    .weui-media-box__desc {
        font-size: 16px;
        color: #000000;
        line-height: 1.6;
    }

    .weui-cell__ft {
        height: 45px;
        color: #999999;
        font-size: 14px;
    }
}
</style>