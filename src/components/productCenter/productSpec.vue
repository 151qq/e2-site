<template>
    <section v-scroll-load="{showMore:showMore, isLoad: isLoad}">
        <div class="height-1"></div>
        <div class="weui-cells__title">产品规格</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box"
                    v-for="(item, index) in listData">
                <div class="weui-cell__bd">{{item.productParameterKey}}</div>
                <div class="weui-cell__ft">{{item.productParameterValue}}</div>
            </div>
        </div>
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