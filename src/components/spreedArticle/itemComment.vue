<template>
    <section class="submit-box">
        <div class="weui-cell weui-cell_select weui-cell_select-after">
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
        <div class="wx-area-line"></div>
        <div class="weui-cells weui-cells_form no-line">
            <div class="weui-cell no-line">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea"
                                placeholder="这一刻的想法..."
                                rows="3"
                                v-model="submitCotent"></textarea>
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
        <div class="weui-cells__title">附件</div>
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in fileList"
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
        <a class="add-file-btn">添加附件</a>
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
            fontNum: 0,
            submitCotent: '',
            imgData: {},
            fileList: [
                {
                    id: 0,
                    imgUrl: '/static/images/detail1.png',
                    title: '爱谁谁爱啥啥',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '不知道不明了',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                }
            ],
            totalFont: 140,
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
    watch: {
        submitCotent () {
            this.fontNum = this.submitCotent.length
        }
    },
    methods: {
        uploadImg () {
            this.imgData = jsSdk.uploadImage()
        },
        submitComment () {
            this.userInfo = util.getUserInfo()

            if (this.userInfo && this.userInfo.nickname) {
                util.request({
                    method: 'post',
                    interface: 'submitComment',
                    data: {
                        enterpriseCode: this.$route.query.enterpriseCode,
                        openid: this.userInfo.openid
                    }
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