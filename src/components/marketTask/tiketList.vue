<template>
    <section class="tiket-page">
        <div class="tiket-box">
            <div class="tiket-list">
                券的列表
            </div>
            <div class="des-box">
                <p>说明：</p>
                感谢您的参加我们的活动，先领取优惠券，还有机会领取我们精心准备的礼品哦
            </div>
        </div>
        <div class="wx-area-line"></div>
        <div class="wx-small-link">
            小程序链接
        </div>

        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="/marketTask/userCheck">领取</a>
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
.tiket-page {
    background: #ffffff;

    .tiket-box {
        padding: 0 15px;

        .tiket-list {
            min-height: 150px;
        }

        .des-box {
            font-size: 16px;
            color: #999999;
            line-height: 1.8;

            p {
                color: #000000;
            }
        }
    }

    .wx-small-link {
        padding: 0 15px;
        min-height: 150px;
    }
}
</style>