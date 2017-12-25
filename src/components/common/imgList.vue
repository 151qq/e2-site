<template>
    <div class="img-list-box">
        <section class="wx-img-list weui-grids">
            <template v-for="(item, index) in imgList">
                <img class="weui-grid"
                    :src="item"
                    @click="showBigImg(index)">
                <div class="margin-box" v-if="index % 3 != 2"></div>
            </template>
        </section>
        <router-link v-if="morePath"
            class="weui-cell weui-cell_access weui-cell_link"
            :to="morePath">
            <div class="weui-cell__bd">查看更多</div>
            <div class="weui-cell__ft"></div>
        </router-link>

        <show-big-img :big-imgs="imgList" :is-show-img="isShowImg" :index="index"></show-big-img>
    </div>  
    
</template>
<script>
import showBigImg from './showBigImg.vue'

export default {
    props: ['imgList', 'morePath'],
    data () {
        return {
            index: '',
            isShowImg: {
                value: false
            }
        }
    },
    methods: {
        showBigImg (index) {
            this.isShowImg.value = true
            this.index = index
        }
    },
    components: {
        showBigImg
    }
}
</script>
<style lang="scss">
.img-list-box {
    .wx-img-list {
        margin-bottom: 0 !important;

        .weui-grid {
            padding: 0;
        }
    }

    .weui-cell {
        padding: 10px 15px;

        &:before {
            border: none;
        }
    }

    .weui-grid {
        width: 33%;
        margin-bottom: 0.15em;
    }

    .margin-box {
        float: left;
        width: 0.5%;
        height: 1px;
    }
}
</style>