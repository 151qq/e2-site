<template>
    <section class="article-list-box page__bd">
        <div class="weui-cells no-margin show-state-box">
            <!-- site.socialmarketingcloud.com  localhost:8890-->
            <template v-for="(item, index) in listData">
                <router-link class="weui-media-box weui-media-box_appmsg"
                    :to="{
                        name: 'product-detail',
                        query: {
                            enterpriseCode: userInfo.enterpriseCode,
                            agentId: $route.query.agentId,
                            pageCode: item.pageCode,
                            appid: item.pubWechatAppId,
                            templateCode: item.templateCode,
                            S: userInfo.userCode,
                            C: 'e2nochannel',
                            T: 'e2nospread'
                        }
                    }">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src="item.pageCover">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.pageTitle}}</h4>
                        <p class="weui-media-box__desc">{{item.pageAbstract}}</p>
                    </div>
                </router-link>
            </template>
        </div>
    </section>
</template>
<script>
import util from '../../utils/tools'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            listData: [],
            pageSize: 20,
            pageNumber: 1,
            total: 0,
            userId: ''
        }
    },
    mounted () {
        this.getList()
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        getList (type) {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                pageType: 'template_type_4',
                pageEditor: this.userInfo.userCode,
                pageSize: this.pageSize,
                pageNumber: this.pageNumber
            }

            util.request({
                method: 'post',
                interface: 'html5PageList',
                data: formData
            }).then(res => {
                if (res.result.success == '0') {
                    this.$message.error(res.result.message)
                    return
                }

                this.total = Number(res.result.total)
                if (!type) {
                    this.listData = res.result.result
                } else {
                    this.listData = this.listData.concat(res.result.result)
                }
            })
        }
    }
}
</script>
<style lang="scss">
.article-list-box {
}
</style>