<template>
    <section class="market-list-box page__bd">
        <div class="weui-cells no-margin">
            <router-link class="weui-cell weui-cell_access"
                    v-for="(item, index) in listData"
                    :to="{name: item.pathName, query: {enterpriseCode: item.enterpriseCode, appid: item.appid, pageCode: item.pageCode, templateCode: item.templateCode, userId: item.userId, openId: item.openId}}">
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
                    userId: '111111',
                    openId: '222222'
                }
            ]
        }
    },
    mounted () {
        console.log(this.$router)
    }
}
</script>