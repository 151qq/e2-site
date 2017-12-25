<template>
    <section class="packet-box page__hd">
        <div class="weui-cells no-margin">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" src="/static/images/detail1.png" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">微信昵称</h4>
                    <p class="weui-media-box__desc">总积分：2000分</p>
                </div>
            </a>
        </div>
        <div class="weui-cells no-margin">
            <div class="wx-cell">
                <div class="wx-left-cell">11月09日</div>
                <div class="wx-right-cell">
                    <div class="wx-cell-title">+2000</div>
                    <div class="wx-cell-des">完成爱咋咋地任务</div>
                </div>
            </div>
            <div class="wx-cell">
                <div class="wx-left-cell">11月09日</div>
                <div class="wx-right-cell">
                    <div class="wx-cell-title">+2000</div>
                    <div class="wx-cell-des">完成爱咋咋地任务</div>
                </div>
            </div>
        </div>
        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{}">
                赠送红包
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'gift-points'}">
                赠送积分
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style lang="scss">
.packet-box {
    .no-margin {
        margin-top: 0;
    }
}
</style>