<template>
    <section class="article-detail-box">
        <iframe class="wx-area-con" src=""></iframe>

        <div class="wx-area-line"></div>
        <div class="comments-box">
            <comment :comment-url="'article-comment'"></comment>
        </div>
        <div class="wx-bottom-nav">
            <router-link class="wx-nav-item"
                            :to="{name: 'off-shell'}">
                文章下架
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{}">
                关闭评论
            </router-link>
            <router-link class="wx-nav-item"
                            :to="{name: 'article-statistics'}">
                统计分析
            </router-link>
        </div>
    </section>
</template>
<script>
import comment from '../common/comment.vue'

export default {
    data () {
        return {
        }
    },
    mounted () {
        // this.getData()
    },
    methods: {
        getData () {
        }
    },
    components: {
        comment
    }
}
</script>
<style lang="scss">
.article-detail-box {
    .comments-box {
        padding: 0 15px;
    }
}
</style>