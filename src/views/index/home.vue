<template>
    <section class="market-list-box page__bd">
        <div class="weui-cells no-margin">
            <router-link class="weui-cell weui-cell_access"
                    v-for="(item, index) in listData"
                    :to="{name: item.pathName, query: {enterpriseCode: item.enterpriseCode}}">
                <div class="weui-cell__bd">{{item.title}}</div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            listData: [
                {
                    title: '营销活动',
                    pathName: 'marketCase',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '营销任务',
                    pathName: 'marketTask',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '外呼工作',
                    pathName: 'nolineJob',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '在线预约',
                    pathName: 'onlineBooking',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '推广文章',
                    pathName: 'spreedArticle',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '产品中心',
                    pathName: 'productCategory',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '营销分析',
                    pathName: 'marketAnalyse',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                },
                {
                    title: '营销红包',
                    pathName: 'marketPacket',
                    enterpriseCode: 'joneslanglasalle.com.cn'
                }
            ]
        }
    }
}
</script>