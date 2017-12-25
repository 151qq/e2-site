<template>
    <section>
        <div class="weui-cells__title">地面推广统计</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">到场人数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">领优惠券</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">领礼品</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <div class="weui-cells__title">地面推广效率</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">到场人数中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">领优惠券中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">领礼品中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增潜客中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <template v-for="item in activityData">
            <div class="weui-cells__title">{{item.name}}</div>
            <div class="weui-cells no-margin">
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">负责人</div>
                    <div class="weui-cell__ft">大忽悠</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">活动地址</div>
                    <div class="weui-cell__ft">朝哟昂</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">活动时间</div>
                    <div class="weui-cell__ft">2017～2018</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">到场人数</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">领优惠券</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">领礼品</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">新增潜客</div>
                    <div class="weui-cell__ft">556</div>
                </div>
            </div>
        </template>

        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{}">
                研讨
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'marketPacket'}">
                红包
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'marketTask'}">
                任务
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            activityData: [
                {
                    id: 0,
                    name: '什么什么活动'
                },
                {
                    id: 1,
                    name: '什么什么活动'
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