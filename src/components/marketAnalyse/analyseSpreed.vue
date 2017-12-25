<template>
    <section>
        <template v-for="(item, index) in peopleData">
            <div v-if="index" class="wx-area-line"></div>
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
                    <div class="weui-cell__bd">阅读数</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">阅读领券数</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">分享领券数</div>
                    <div class="weui-cell__ft">556</div>
                </div>
                <div class="weui-cell weui-cell_access show-message-box">
                    <div class="weui-cell__bd">新增潜客数</div>
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