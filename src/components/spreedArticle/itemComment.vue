<template>
    <section class="submit-box">
        <template v-if="isPage">
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
                                    v-for="(item, index) in commentData.localIds"
                                    @click="showBigImg(index)">
                                        <img :src="item">
                                </li>
                                <li @click="chooseImage"
                                    v-if="commentData.localIds.length < 9"
                                    class="weui-uploader__input-box"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="weui-btn-area-next">
                <a class="weui-btn weui-btn_primary" @click="submitFn">发布</a>
                <a class="weui-btn backgroundGray" @click="gotoDetail">放弃</a>
            </div>
            <delete-img :index="nowIndex"
                        :img-path="nowPath"
                        :is-show-img="isShowImg"
                        @deleteImg="deleteImg"></delete-img>
        </template>
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
            isPage: false,
            commentData: {
                commentContent: '',
                attachments: [],
                localIds: []
            },
            nowIndex: '',
            nowPath: '',
            isShowImg: {
                value: false
            }
        }
    },
    mounted () {
        util.getUser(() => {
            this.isPage = true
            
            jsSdk.init()
            
            var types = ['enterprise_channel_open', 'enterprise_user_open']

            // 客户准备发表评论
            if (types.indexOf(this.userInfo.openType) < 0) {
                var logData = {
                    interactionType: 'memberTryComment',
                    interactionDesc: '客户准备发表评论',
                    primeObject: this.$route.query.pageCode
                }
                this.setLog(logData)
            }
        }, 'snsapi_userinfo')
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    methods: {
        setLog (data) {
            util.request({
                method: 'post',
                interface: 'customerGeneralLog',
                data: {
                    enterpriseCode: this.$route.query.enterpriseCode,
                    customerCode: this.userInfo.customerCode,
                    customerType: this.userInfo.customerType,
                    interactionType: data.interactionType,
                    interactionDesc: data.interactionDesc,
                    interactionPrimeObject: data.primeObject,
                    interactionSubObject: data.subObject,
                    interactionOtherObject: data.otherObject
                }
            }).then(res => {})
        },
        chooseImage () {
            jsSdk.chooseImage((localId ,serverId) => {
                this.commentData.localIds.push(localId)
                this.commentData.attachments.push(serverId)
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
                commentContent: this.commentData.commentContent,
                templateCode: this.$route.query.templateCode,
                attachments: this.commentData.attachments,
                C: this.$route.query.C,
                S: this.$route.query.S
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
                    window.ISCOMMENT = true
            
                    if (window.FROMPAGE.name) {
                        this.$router.go(-1)
                    } else {
                        var pathUrl = {
                            name: 'article-detail',
                            query: {
                                enterpriseCode: this.$route.query.enterpriseCode,
                                agentId: this.$route.query.agentId,
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
                        this.$router.replace(pathUrl)
                    }
                } else {
                    this.$message.error(res.result.message)
                }
            })
        },
        gotoDetail () {
            window.ISCOMMENT = false

            if (window.FROMPAGE.name) {
                this.$router.go(-1)
            } else {
                var pathUrl = {
                    name: 'article-detail',
                    query: {
                        enterpriseCode: this.$route.query.enterpriseCode,
                        agentId: this.$route.query.agentId,
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
                this.$router.replace(pathUrl)
            }
        },
        showBigImg (index) {
            this.nowIndex = index
            this.nowPath = this.commentData.localIds[index]
            this.isShowImg.value = true
        },
        deleteImg (index) {
            this.commentData.attachments.splice(index, 1)
            this.commentData.localIds.splice(index, 1)
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

    .backgroundGray {
        background: #abafaa;
    }

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