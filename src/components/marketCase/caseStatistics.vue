<template>
    <section>
        <div class="weui-cells__title">券营销活动基本统计</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-date'}">
                <div class="weui-cell__bd">活动进度</div>
                <div class="weui-cell__ft">第21天</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">微信推广文章数</div>
                <div class="weui-cell__ft">22篇</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-paket'}">
                <div class="weui-cell__bd">红包</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-paket'}">
                <div class="weui-cell__bd">积分</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
        </div>
        <div class="weui-cells__title">微信推广基本统计</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-wxspreed'}">
                <div class="weui-cell__bd">阅读总数</div>
                <div class="weui-cell__ft">22次</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-wxspreed'}">
                <div class="weui-cell__bd">阅读送优惠券</div>
                <div class="weui-cell__ft">22张</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-wxspreed'}">
                <div class="weui-cell__bd">分享送优惠券</div>
                <div class="weui-cell__ft">22张</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-wxspreed'}">
                <div class="weui-cell__bd">新增潜客</div>
                <div class="weui-cell__ft">22人</div>
            </router-link>
        </div>
        <div class="weui-cells__title">地面推广基本统计</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-pushspreed'}">
                <div class="weui-cell__bd">到场人数</div>
                <div class="weui-cell__ft">22人</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-pushspreed'}">
                <div class="weui-cell__bd">领优惠券</div>
                <div class="weui-cell__ft">22张</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-pushspreed'}">
                <div class="weui-cell__bd">领礼品</div>
                <div class="weui-cell__ft">22个</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-pushspreed'}">
                <div class="weui-cell__bd">新增潜客</div>
                <div class="weui-cell__ft">22人</div>
            </router-link>
        </div>
        <div class="weui-cells__title">外呼销售基本统计</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-noline'}">
                <div class="weui-cell__bd">新增外呼机会</div>
                <div class="weui-cell__ft">22次</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-noline'}">
                <div class="weui-cell__bd">实际外呼</div>
                <div class="weui-cell__ft">22次</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-noline'}">
                <div class="weui-cell__bd">新增预约</div>
                <div class="weui-cell__ft">22次</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'case-noline'}">
                <div class="weui-cell__bd">预约接待</div>
                <div class="weui-cell__ft">22次</div>
            </router-link>
        </div>
        <div class="weui-cells__title">微信推广渠道效率</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">阅读中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">阅读领券中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">分享领券中位数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增潜客中位数</div>
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
        <div class="weui-cells__title">微信获客率（取中位数）</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">阅读领券/阅读总数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">分享领券/阅读总数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增潜客/阅读总数</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <div class="weui-cells__title">地推获客率</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">领券/到场总数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">领礼品/到场总数</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增潜客/到场总数</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <div class="weui-cells__title">微信获客质量</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">外呼机会/新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增预约/新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待/新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <div class="weui-cells__title">地推推广获客质量</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">外呼机会/新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增预约/新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待/新增潜客</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>
        <div class="weui-cells__title">外呼销售转换率</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">实际外呼/新增外呼机会</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">新增预约/实际外呼</div>
                <div class="weui-cell__ft">556</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">预约接待/新增预约</div>
                <div class="weui-cell__ft">556</div>
            </div>
        </div>

        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{name: 'stop-activity'}">
                终止活动
            </router-link>
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