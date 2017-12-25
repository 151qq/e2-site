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
        <section class="weui-panel__bd">
            <router-link class="weui-media-box weui-media-box_appmsg"
                    v-for="(item, index) in listData"
                    :to="{}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <div class="weui-media-box__desc">{{item.des}}</div>
                </div>
                <div class="wx-date">{{item.date}}</div>
            </router-link>
        </section>
        <section class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">客户姓名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" placeholder="请输入">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">微信昵称</label></div>
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
                    <label for="" class="weui-label">经济状况</label>
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
                    <label for="" class="weui-label">沟通能力</label>
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
                    <label for="" class="weui-label">客户印象</label>
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
        <div class="btn-box">
            <a class="weui-btn weui-btn_primary">
                保存
            </a>
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
            listData: [
                {
                    id: 0,
                    imgUrl: '/static/images/head-icon.png',
                    title: '预约标题',
                    des: '没咋没咋啦',
                    date: '2017-12-11'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/head-icon.png',
                    title: '参与地推',
                    des: '没咋没咋啦',
                    date: '2017-12-11'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/head-icon.png',
                    title: '发表评论',
                    des: '没咋没咋啦',
                    date: '2017-12-11'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/head-icon.png',
                    title: '在线咨询',
                    des: '没咋没咋啦',
                    date: '2017-12-11'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/head-icon.png',
                    title: '购买商品',
                    des: '没咋没咋啦',
                    date: '2017-12-11'
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