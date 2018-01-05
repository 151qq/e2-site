<template>
    <section class="market-list-box page__bd">
        <div class="weui-cells no-margin">
            <router-link class="weui-cell weui-cell_access"
                    v-for="(item, index) in listData"
                    :to="{name: item.pathName, query: {enterpriseCode: item.enterpriseCode, appid: item.appid, pageCode: item.pageCode, templateCode: item.templateCode, pageType: item.pageType, S: item.S, C: item.C, T: item.T}}">
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
                    title: '推广文章',
                    pathName: 'article-detail',
                    enterpriseCode: '20171225151720001',
                    appid: 'wx8b8c3ab0670be56f',
                    pageCode: '20171218200506884621',
                    templateCode: '20171218150821701481',
                    pageType: 'propagate_article',
                    S: '15164369647',
                    C: 'e2nochannel',
                    T: 'e2nospread'
                }
            ]
        }
    },
    mounted () {
        console.log(this.$router)
    }
}
</script>