<template>
    <section v-scroll-load="{showMore:showMore, isLoad: isLoad}">
        <div class="height-1"></div>
        <template v-for="(item, index) in listData">
            <div class="weui-cells__title">推荐文章</div>
            <div class="weui-cells no-line">
                <router-link class="weui-media-box weui-media-box_appmsg"
                        v-for="(item, index) in item.articles"
                        :to="{
                            name: 'article-detail',
                            query: {
                                enterpriseCode: $route.query.enterpriseCode,
                                agentId: $route.query.agentId,
                                pageCode: item.pageCode,
                                appid: item.pubWechatAppId,
                                templateCode: item.templateCode,
                                S: $route.query.S,
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
            </div>
        </template>
        <div class="null-page" v-if="!listData.length && isPage">
            暂无内容！
        </div>
    </section>
</template>
<script>
import util from '../../utils/tools'
import imgList from '../common/imgList.vue'

export default {
    data () {
        return {
            isPage: false,
            listData: [],
            pageSize: 20,
            pageNumber: 1,
            total: 0
        }
    },
    mounted () {
        this.getList()
    },
    computed: {
        isLoad () {
            return this.total > this.listData.length
        }
    },
    methods: {
        showMore (cb) {
            this.pageNumber++
            this.getList(cb)
        },
        getList (cb) {
            var formData = {
                enterpriseCode: this.$route.query.enterpriseCode,
                productCode: this.$route.query.productCode,
                pageNumber: this.pageNumber,
                pageSize: this.pageSize
            }

            util.request({
                method: 'get',
                interface: 'productParameterList',
                data: formData
            }).then(res => {
                if (res.result.success == '0') {
                    this.$message.error(res.result.message)
                    return
                }

                this.total = res.result.total
                this.isPage = true

                if (!cb) {
                    this.listData = imgList
                } else {
                    this.listData = this.listData.concat(imgList)
                }
            })
        }
    },
    components: {
        imgList
    }
}
</script>