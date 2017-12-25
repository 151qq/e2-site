<template>
    <section>
        <div class="weui-cells__title">外呼销售统计</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增外呼机会</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">实际外呼</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增预约</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <div class="weui-cells__title">外呼销售效率</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增外呼中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">实际外呼中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增预约中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <template v-for="item in peopleData">
            <div class="wx-area-line"></div>
            <div class="weui-cells no-margin">
                <div class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src="item.imgUrl">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.peopleNum}}人</h4>
                    </div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">新增外呼机会</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">实际外呼</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">新增预约</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">预约接待</div>
                    <div class="weui-cell__ft">556</div>
                </div>
            </div>
        </template>

        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{}">
                营销研讨
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'marketPacket'}">
                营销红包
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'marketTask'}">
                营销任务
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            peopleData: [
                {
                    id: 0,
                    peopleNum: 13,
                    imgUrl: '/static/images/detail1.png'
                },
                {
                    id: 1,
                    peopleNum: 13,
                    imgUrl: '/static/images/detail1.png'
                }
            ]
        }
    },
    mounted () {
        // this.getData()
    },
    methods: {
        getData () {
        }
    }
}
</script>
<style lang="scss">
</style>