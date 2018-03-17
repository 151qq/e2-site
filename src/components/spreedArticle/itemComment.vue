<template>
    <section class="submit-box">
        <div class="height-1"></div>
        <div class="weui-cells no-margin no-line">
            <div class="weui-cell weui-cell_access no-center">
                <div class="weui-cell__hd"><label class="weui-label">评论内容</label></div>
                <div class="weui-cell__bd">
                   <textarea class="weui-textarea"
                        placeholder="请输入文字"
                        :rows="commentData.commentContent ? 3 : 1"
                        v-model="commentData.commentContent"></textarea>
                </div>
            </div>       
        </div>

        <div class="wx-area-line"></div>
        <div class="weui-cells no-margin no-line">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd"><label class="weui-label">本地图片</label></div>
                <div class="weui-cell__bd wx-placeholder">
                   最多可以选择9张图片
                </div>
            </div>
        </div>
        <div class="weui-cells no-margin">
            <div class="weui-cell no-line">
                <div class="weui-uploader">
                    <div class="weui-uploader__bd">
                         <ul class="weui-uploader__files" id="uploaderFiles">
                            <li class="weui-uploader__file"
                                v-for="(item, index) in commentData.attachments"
                                @click="showBigImg(index)">
                                    <img :src="item">
                            </li>
                            <li @click="chooseImage"
                                v-if="commentData.attachments.length < 9"
                                class="weui-uploader__input-box"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="btn-height-box"></div>
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
import { mapGetters } from 'vuex'

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
            serverIdList: []
        }
    },
    mounted () {
        util.getUser(() => {
            jsSdk.init()
        }, 'snsapi_userinfo')
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        setLog (interfaceName ,customerType, interactionType, code) {
            util.request({
                method: 'post',
                interface: interfaceName,
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    customerCode: this.userInfo.customerCode,
                    customerType: customerType,
                    userCode: this.$route.query.S,
                    interactionType: interactionType,
                    interactionObjectCode: code
                }
            }).then(res => {})
        },
        chooseImage () {
            var num = 9 - this.commentData.attachments.length
            jsSdk.chooseImage(num ,(localIds) => {
                this.commentData.attachments = this.commentData.attachments.concat(localIds).splice(0, 9)
            })
        },
        submitComment () {
            jsSdk.uploadImgs(this.commentData.attachments, (serverIdList) => {
                this.serverIdList = this.serverIdList.concat(serverIdList).splice(0, 9)
                this.submitFn()
            })
        },
        submitFn () {
            var formData = {
                appId: this.$route.query.appid,
                enterpriseCode: this.$route.query.enterpriseCode,
                pageCode: this.$route.query.pageCode,
                commentType: this.$route.query.commentType,
                commentFloor: this.$route.query.commentFloor,
                memberCode: this.userInfo.memberInfo.memberCode,
                attachments: this.serverIdList,
                commentContent: this.commentData.commentContent
            }

            if (this.$route.query.commentTitle) {
                formData.commentTitle = this.$route.query.commentTitle
            }

            util.request({
                method: 'post',
                interface: 'publishComment',
                data: formData
            }).then(res => {
                if (res.result.success == '1') {
                    var pathUrl = {
                        name: 'article-detail',
                        query: {
                            enterpriseCode: this.$route.query.enterpriseCode,
                            appid: this.$route.query.appid,
                            pageCode: this.$route.query.pageCode,
                            templateCode: this.$route.query.templateCode,
                            S: this.$route.query.S,
                            sShareTo: this.$route.query.sShareTo,
                            C: this.$route.query.C,
                            cShareTo: this.$route.query.cShareTo,
                            spreadType: this.$route.query.spreadType,
                            T: this.$route.query.T,
                            tShareTo: this.$route.query.tShareTo
                        }
                    }
                    window.ISCOMMENT = true

                    var types = ['enterprise_channel_open', 'enterprise_user_open']

                    if (types.indexOf(this.userInfo.openType) < 0) {
                        this.setLog('customerGeneralLog', '1', 'memberCommentRate', res.result.result.commentCode)
                    }

                    this.$router.replace(pathUrl)
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        showBigImg (index) {
            this.nowIndex = index
            this.nowPath = this.commentData.attachments[index]
            this.isShowImg.value = true
        },
        deleteImg (index) {
            this.commentData.attachments.splice(index, 1)
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