<template>
    <section class="task-list-box page__bd">
        <div class="weui-cells">
            <router-link class="weui-media-box weui-media-box_appmsg show-state-box"
                    v-for="(item, index) in listData"
                    :to="{name: item.type + '-detail', query: {id: item.id}}">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.imgUrl">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.date}}</p>
                </div>
                <div class="weui-cell__ft" v-if="item.state == '0'"><span class="no-done">待办</span></div>
                <div class="weui-cell__ft" v-if="item.state == '1'"><span class="has-done">完成</span></div>
            </router-link>
        </div>

        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{}">
                我的待办任务
            </router-link>
            <a class="wx-nav-item"
                @click="showSheet">
                新建任务
            </a>
            <router-link class="wx-nav-item"
                            :to="{name: 'assignment-task'}">
                我发布的任务
            </router-link>
        </div>

        <sheet :is-show-sheet="isShowSheet" :item-list="sheetList" :cb="creatTask"></sheet>
    </section>
</template>
<script>
import sheet from '../common/sheet.vue'

export default {
    data () {
        return {
            listData: [],
            isShowSheet: {
                value: false
            },
            sheetList: [
                {
                    label: '通用任务',
                    pathName: 'activity-task'
                },
                {
                    label: '编辑任务',
                    pathName: 'edit-task'
                },
                {
                    label: '推广任务',
                    pathName: 'spreed-task'
                },
                {
                    label: '地推任务',
                    pathName: 'push-task'
                },
                {
                    label: '营销活动方案设计任务',
                    pathName: 'design-task'
                }
            ]
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData () {
            var listDataITL = [
                {
                    id: 0,
                    imgUrl: '/static/images/detail1.png',
                    title: '通用任务',
                    date: '2017-09-09 上午 10:23',
                    state: '0',
                    type: 'activity'
                },
                {
                    id: 1,
                    imgUrl: '/static/images/detail1.png',
                    title: '编辑任务',
                    date: '2017-09-09 上午 10:23',
                    state: '0',
                    type: 'edit'
                },
                {
                    id: 2,
                    imgUrl: '/static/images/detail1.png',
                    title: '地推任务',
                    date: '2017-09-09 上午 10:23',
                    state: '1',
                    type: 'push'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '推广任务',
                    date: '2017-09-09 上午 10:23',
                    state: '1',
                    type: 'spreed'
                },
                {
                    id: 3,
                    imgUrl: '/static/images/detail1.png',
                    title: '营销活动方案设计任务',
                    date: '2017-09-09 上午 10:23',
                    state: '1',
                    type: 'design'
                }
            ]

            this.listData = listDataITL
        },
        showSheet () {
            this.isShowSheet.value = true
        },
        creatTask (item) {
            this.$router.push({name: item.pathName})
        }
    },
    components: {
        sheet
    }
}
</script>
<style lang="scss">
.task-list-box {
    .weui-cells {
        margin-top: 0;
    }
}
</style>