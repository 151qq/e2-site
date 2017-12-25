<template>
    <section class="point-box page__hd">
        <div class="weui-cells__title">基本信息</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label for="" class="weui-label">开始时间</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="datetime-local" value="" placeholder="">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label for="" class="weui-label">结束时间</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="datetime-local" value="" placeholder="">
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">营销活动</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select">
                        <option value="1">中国</option>
                        <option value="2">美国</option>
                        <option value="3">英国</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">分享要求</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select">
                        <option value="1">中国</option>
                        <option value="2">美国</option>
                        <option value="3">英国</option>
                    </select>
                </div>
            </div>
        </div>
        
        <detail-show :detail-data="detailData" :is-edit="true"></detail-show>

        <div class="wx-bottom-nav">
            <a class="wx-nav-item" @click="saveDetail">
                提交
            </a>
        </div>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import detailShow from '../common/detailShow.vue'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
        }
    },
    mounted () {
        console.log(this.$store)
    },
    computed: {
        ...mapGetters({
            detailData: 'getDetail'
        })
    },
    methods: {
        saveDetail () {
            this.$router.push({name: 'activity-detail'})
        }
    },
    components: {
        detailShow
    }
}
</script>