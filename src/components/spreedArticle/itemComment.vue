<template>
    <section class="submit-box">
        <!-- <div class="weui-cell weui-cell_select weui-cell_select-after">
            <div class="weui-cell__hd">
                <label for="" class="weui-label">评论情绪</label>
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
                <label for="" class="weui-label">评论标注</label>
            </div>
            <div class="weui-cell__bd">
                <select class="weui-select">
                    <option value="1">中国</option>
                    <option value="2">美国</option>
                    <option value="3">英国</option>
                </select>
            </div>
        </div>
        <div class="wx-area-line"></div> -->
        <div class="weui-cells weui-cells_form no-line no-margin">
            <div class="weui-cell no-line">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea"
                                placeholder="这一刻的想法..."
                                rows="3"
                                v-model="commentData.commentContent"></textarea>
                    <!-- <div class="weui-textarea-counter"><span>{{fontNum}}</span>/{{totalFont}}</div> -->
                </div>
            </div>
        </div>
        <div class="weui-cell no-line">
            <div class="weui-uploader">
                <div class="weui-uploader__bd">
                     <ul class="weui-uploader__files" id="uploaderFiles">
                        <li class="weui-uploader__file"
                            v-for="(item, index) in imgList"
                            @click="showBigImg(index)">
                                <img :src="item">
                        </li>
                        <li @click="uploadImg" class="weui-uploader__input-box"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="submitComment">发布</a>
        </div>
        <delete-img :index="nowIndex"
                    :img-path="nowPath"
                    :is-show-img="isShowImg"
                    @deleteImg="deleteImg"></delete-img>
    </section>
</template>
<script>
import util from '../../utils/tools'
import jsSdk from '../../utils/jsSdk'
import deleteImg from '../common/deleteImg.vue'

export default {
    data () {
        return {
            commentData: {
                commentContent: '',
                attachments: []
            },
            nowIndex: '',
            nowPath: '',
            isShowImg: {
                value: false
            },
            userInfo: {},
            imgList: []
        }
    },
    mounted () {
        jsSdk.init()
    },
    methods: {
        uploadImg () {
            this.commentData.attachments = jsSdk.uploadImage()
        },
        submitComment () {
            this.userInfo = util.getUserInfo()

            if (this.userInfo && this.userInfo.nickname) {
                this.commentData.enterpriseCode = this.$route.query.enterpriseCode
                this.commentData.pageCode = this.$route.query.pageCode
                this.commentData.commentType = this.$route.query.commentType

                util.request({
                    method: 'post',
                    interface: 'submitComment',
                    data: this.commentData
                }).then(res => {
                    if (res.result.success == '1') {
                      this.$router.go(-1)
                    } else {
                      alert(res.result.message)
                    }
                })
            }
        },
        showBigImg (index) {
            this.nowIndex = index
            this.nowPath = this.imgList[index]
            this.isShowImg.value = true
        },
        deleteImg (index) {
            this.imgList.splice(index, 1)
        }
    },
    components: {
        deleteImg
    }
}
</script>
<style lang="scss">
.submit-box {
    background: #ffffff;

    .weui-cells {
        margin-top: 0;
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

    .weui-uploader__file {
        background: #e5e5e5;
        position: relative;
        overflow: hidden;

        img {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translate(0,-50%);
        }
    }
}
</style>