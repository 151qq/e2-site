<template>
    <section>
        <div class="weui-cells__title">营销活动</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">营销指标</div>
                <div class="weui-cell__ft">23</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">新增销售</div>
                <div class="weui-cell__ft">21</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">微信推广文章数</div>
                <div class="weui-cell__ft">22篇</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">新增潜客</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{}">
                <div class="weui-cell__bd">新增外呼机会</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
        </div>
        <div class="weui-cells__title">外呼</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-noline'}">
                <div class="weui-cell__bd">新增预约</div>
                <div class="weui-cell__ft">23</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-noline'}">
                <div class="weui-cell__bd">预约接待</div>
                <div class="weui-cell__ft">21</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-noline'}">
                <div class="weui-cell__bd">体验良好</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-noline'}">
                <div class="weui-cell__bd">红包</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-noline'}">
                <div class="weui-cell__bd">积分</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
        </div>
        <div class="weui-cells__title">微信推广统计分析</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-wx'}">
                <div class="weui-cell__bd">推广文章数</div>
                <div class="weui-cell__ft">22次</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-wx'}">
                <div class="weui-cell__bd">阅读总数</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-wx'}">
                <div class="weui-cell__bd">阅读送优惠券</div>
                <div class="weui-cell__ft">22张</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-wx'}">
                <div class="weui-cell__bd">分享送优惠券</div>
                <div class="weui-cell__ft">22张</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-wx'}">
                <div class="weui-cell__bd">新增潜客</div>
                <div class="weui-cell__ft">22人</div>
            </router-link>
        </div>
        <div class="weui-cells__title">地面推广统计</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-push'}">
                <div class="weui-cell__bd">地推场数</div>
                <div class="weui-cell__ft">22场</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-push'}">
                <div class="weui-cell__bd">到场人数</div>
                <div class="weui-cell__ft">22人</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-push'}">
                <div class="weui-cell__bd">领优惠券</div>
                <div class="weui-cell__ft">22张</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-push'}">
                <div class="weui-cell__bd">领礼品</div>
                <div class="weui-cell__ft">22个</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-push'}">
                <div class="weui-cell__bd">新增潜客</div>
                <div class="weui-cell__ft">22人</div>
            </router-link>
        </div>
        <div class="weui-cells__title">微信推广渠道效率</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-spreed'}">
                <div class="weui-cell__bd">阅读中位数</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-spreed'}">
                <div class="weui-cell__bd">阅读领券中位数</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-spreed'}">
                <div class="weui-cell__bd">分享领券中位数</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access"
                            :to="{name: 'analyse-spreed'}">
                <div class="weui-cell__bd">新增潜客中位数</div>
                <div class="weui-cell__ft">22</div>
            </router-link>
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
        <div class="weui-cells__title">地推获客质量</div>
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