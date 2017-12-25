<template>
    <section class="member-detail-box">
        <div class="wx-area-img">
            <img :src="memberInfo.coverImg">
        </div>
        <div class="avatar-box">
            <div class="img-box">
                <img :src="memberInfo.avatar">
            </div>
            <div class="name-box">{{memberInfo.name}}</div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">和您关系</div>
                <div class="weui-cell__ft">您的微信好友（昵称）的好友</div>
            </div>
        </div>
        <div class="weui-cells__title">基本信息</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">性别</div>
                <div class="weui-cell__ft">男</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">年纪</div>
                <div class="weui-cell__ft">爱谁谁</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">婚姻</div>
                <div class="weui-cell__ft">爱咋咋地</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">学历</div>
                <div class="weui-cell__ft">男</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">社会阶层</div>
                <div class="weui-cell__ft">爱谁谁</div>
            </div>
            <div class="weui-cell weui-cell_access show-message-box">
                <div class="weui-cell__bd">职业</div>
                <div class="weui-cell__ft">爱咋咋地</div>
            </div>
        </div>
        <div class="weui-cells__title">推荐策略</div>
        <div class="wx-area-text">
            高性价比产品
        </div>
        <div class="weui-cells__title">话术策略</div>
        <div class="wx-area-text">
            只接切入主题，即使对方持否定意见，也需要进一步解释
        </div>

        <div class="weui-cells__title">互动记录</div>
        <div class="wx-area-padding">
            <interactive-record></interactive-record>
        </div>
    </section>
</template>
<script>
import interactiveRecord from '../common/interactiveRecord.vue'

export default {
    data () {
        return {
            memberInfo: {
                name: '爱咋咋地',
                tel: '1387762887',
                avatar: '/static/images/head-icon.png',
                coverImg: '/static/images/bench1.png'
            }
        }
    },
    mounted () {
        // this.getData()
    },
    methods: {
        getData () {
        }
    },
    components: {
        interactiveRecord
    }
}
</script>
<style lang="scss">
.member-detail-box {
    background: #f8f8f8;

    .avatar-box {
        position: relative;
        z-index: 10;
        height: 60px;
        overflow: hidden;
        margin-top: -40px;

        div {
            float: right;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        .img-box {
            width: 60px;
            height: 60px;
            border: 1px solid #E5E5E5;
            background: #ffffff;
            margin-right: 15px;
            box-sizing: border-box;
        }

        .name-box {
            font-size: 16px;
            line-height: 40px;
            margin-right: 20px;
            color: #ffffff;
        }
    }
}
</style>