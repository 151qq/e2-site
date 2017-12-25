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
        <section class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">外呼方式</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">外呼结果</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">客户姓名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" placeholder="请输入">
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">客户性别</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="0">男</option>
                        <option value="1">女</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">客户年龄</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">教育背景</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">社会阶层</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">客户职业</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">沟通特征</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
        </section>
        <div class="weui-cells__title">预约记录</div>
        <div class="weui-cells no-margin">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in listData"
                    :to="{name: 'noline-detail'}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.date}}</p>
                </div>
            </router-link>
        </div>
        <div class="weui-cells__title">内容</div>
        <div class="weui-cells weui-cells_form no-margin">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入文本内容..." rows="3"></textarea>
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
                            <li class="weui-uploader__input-box" @click="uploadImg"></li>
                        </ul>
                    </div>
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
            <router-link class="weui-btn weui-btn_primary"
                    :to="{}">
                提交
            </router-link>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            memberInfo: {
                name: '爱咋咋地',
                tel: '1387762887',
                avatar: '/static/images/head-icon.png',
                coverImg: '/static/images/bench1.png'
            },
            imgList: [
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png'
            ],
            listData: [
                {
                    id: 0,
                    imgUrl: '/static/images/head-icon.png',
                    title: '预约标题',
                    date: '2017-12-11'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/head-icon.png',
                    title: '参与地推',
                    date: '2017-12-11'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/head-icon.png',
                    title: '发表评论',
                    date: '2017-12-11'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/head-icon.png',
                    title: '在线咨询',
                    date: '2017-12-11'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/head-icon.png',
                    title: '购买商品',
                    date: '2017-12-11'
                }
            ],
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
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '你瞅啥，你看啥',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '瞅你咋地',
                    des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
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
.member-detail-box {
    background: #f8f8f8;

    .btn-box {
        margin-top: 15px;
        padding: 0 15px;
    }

    .weui-cells {
        margin-top: 0;
    }

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

    .weui-media-box_appmsg {
        padding-right: 5.6em;
        position: relative;

        .weui-media-box__hd {
            width: 50px;
            height: 50px;
        }

        .weui-media-box__thumb {
            width: 50px;
            height: 50px;
        }

        .wx-date {
            position: absolute;
            width: 5.6em;
            text-align: right;
            right: 15px;
            top: 15px;
            font-size: 0.8em;
            color: #888888;
        }
    }
}
</style>