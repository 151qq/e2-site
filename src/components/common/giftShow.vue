<template>
    <section class="gift-show-box">
        <div class="weui-cells__title">
            地推礼品
            <img class="edit-box"
                    v-if="isEdit"
                    src="../../assets/images/edit-icon.png"
                    @click="gotoEdit">
        </div>
        <div class="weui-cells no-margin" v-if="!giftData.length">
            <div class="weui-cell">
                <div class="null-box">
                    暂无详情内容，请编辑!
                </div>
            </div>
        </div>
        <template v-for="(item, index) in giftData">
            <div class="wx-area-line" v-if="index"></div>
            <div class="weui-cells weui-cells_form no-margin">
                <div class="weui-cell">
                    <div class="weui-cell__bd" v-if="item.content">
                        {{item.content}}
                    </div>
                    <div class="null-box" v-else>
                        暂无详情内容，请编辑!
                    </div>
                </div>

                <div class="weui-cell no-line" v-if="item.imgList && item.imgList.length">
                    <img-list :img-list="item.imgList"></img-list>
                </div>
            </div>
        </template>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import imgList from './imgList.vue'

export default {
    props: ['giftData', 'isEdit'],
    data () {
        return {
            fontNum: 0,
            nowIndex: '',
            nowPath: '',
            isShowImg: {
                value: false
            }
        }
    },
    methods: {
        gotoEdit () {
            this.$router.push({name: 'gift-edit'})
        }
    },
    components: {
        imgList
    }
}
</script>
<style lang="scss">
.gift-show-box {
    .edit-box {
        float: right;
        width: 16px;
        height: 16px;
    }

    .no-line {
        &:before {
            height: 0;
            border: none;
        }

        &:after, &:before {
            height: 0;
            border: none;
        }
    }
}
</style>