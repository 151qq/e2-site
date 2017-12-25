<template>
    <section class="detail-show-box">
        <div class="weui-cells__title">
            详情
            <img class="edit-box"
                    v-if="isEdit"
                    src="../../assets/images/edit-icon.png"
                    @click="gotoEdit">
        </div>
        <div class="weui-cells weui-cells_form no-margin">
            <div class="weui-cell">
                <div class="weui-cell__bd" v-if="detailData.content">
                    {{detailData.content}}
                </div>
                <div class="null-box" v-else>
                    暂无详情内容，请编辑!
                </div>
            </div>

            <div class="weui-cell no-line" v-if="detailData.imgList && detailData.imgList.length">
                <img-list :img-list="detailData.imgList"></img-list>
            </div>
        </div>
        <div class="weui-cells__title" v-if="detailData.fileList && detailData.fileList.length">附件</div>
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in detailData.fileList"
                    :to="{}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.des}}</p>
                </div>
            </router-link>
        </div>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import deleteImg from './deleteImg.vue'
import imgList from './imgList.vue'

export default {
    props: ['detailData', 'isEdit'],
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
            this.$router.push({name: 'detail-edit'})
        }
    },
    components: {
        imgList
    }
}
</script>
<style lang="scss">
.detail-show-box {
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