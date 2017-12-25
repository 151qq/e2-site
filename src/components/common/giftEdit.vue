<template>
    <section class="gift-box">
        <template v-for="(item, index) in giftData">
            <div class="wx-area-line" v-if="index"></div>
            <div class="weui-cells weui-cells_form no-margin">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea"
                                placeholder="请输入文本内容..."
                                rows="3"
                                v-model="item.content"></textarea>
                    </div>
                </div>

                <div class="weui-cell no-line">
                    <div class="weui-uploader">
                        <div class="weui-uploader__bd">
                             <ul class="weui-uploader__files" id="uploaderFiles">
                                <li class="weui-uploader__file"
                                    v-for="(itemImg, indexImg) in item.imgList"
                                    @click="showBigImg(index, indexImg)">
                                        <img :src="itemImg">
                                </li>
                                <li class="weui-uploader__input-box" @click="uploadImg"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        

        <a class="add-file-btn" @click="addGift">添加</a>

        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="saveDetail">确定</a>
        </div>
        <delete-img :index="nowIndex"
                    :img-path="nowPath"
                    :is-show-img="isShowImg"
                    @deleteImg="deleteImg"></delete-img>
    </section>
</template>
<script>
import tools from '../../utils/tools'
import deleteImg from './deleteImg.vue'
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            fontNum: 0,
            giftData: [
                {
                    content: '',
                    imgList: [
                        '/static/images/bench1.png',
                        '/static/images/bench1.png',
                        '/static/images/bench1.png'
                    ]
                }
            ],
            totalFont: 140,
            nowDataIndex: '',
            nowIndex: '',
            nowPath: '',
            isShowImg: {
                value: false
            }
        }
    },
    mounted () {
        var giftData = this.$store.getters.getGift
        if (giftData.length) {
            this.giftData = giftData.concat([])
        }
    },
    watch: {
        submitCotent () {
            this.fontNum = this.submitCotent.length
        }
    },
    methods: {
        ...mapActions([
          'setGift'
        ]),
        addGift () {
            var gift = {
                content: '',
                imgList: []
            }

            this.giftData.push(gift)
        },
        saveDetail () {
            console.log(this.$store)
            this.setGift(this.giftData)
            this.$router.go(-1)
        },
        uploadImg (e) {
            console.log(e)
            tools.upFile(e).then((res) => {
                if (res.result.success == '1') {
                    let imgUrl = res.result.result[0]
                    this.imgList.push(imgUrl)
                } else {

                }
            })
        },
        hiddenModal () {
            this.isShowModal.value = false
        },
        showBigImg (index, indexImg) {
            this.nowDataIndex = index
            this.nowIndex = indexImg
            this.nowPath = this.giftData[index].imgList[index]
            this.isShowImg.value = true
        },
        deleteImg (index) {
            this.giftData[this.nowDataIndex].imgList.splice(index, 1)
        }
    },
    components: {
        deleteImg
    }
}
</script>
<style lang="scss">
.gift-box {
    .add-file-btn {
        display: block;
        font-size: 16px;
        line-height: 2.5;
        text-align: center;
        margin: 10px 15px;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
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