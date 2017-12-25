<template>
    <section class="market-list-box page__bd">
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                    v-for="(item, index) in listData"
                    :to="{name: 'product-detail', query: {id: item.id}}">
                <div class="weui-cell__bd">{{item.title}}</div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <a class="weui-cell weui-cell_access"
                    v-for="(item, index) in listData"
                    :href="'http://www.baidu.com?id=' + item.id">
                <div class="weui-cell__bd">{{item.title}}</div>
                <div class="weui-cell__ft"></div>
            </a>
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
            var listDataTL = [
                {
                    id: 0,
                    title: '大三元产品'
                },
                {
                    id: 1,
                    title: '小四喜产品'
                }
            ]

            this.listData = listDataTL
        }
    }
}
</script>
<style lang="scss">
.market-list-box {
    .weui-cells {
        margin-top: 0;
    }
}
</style>