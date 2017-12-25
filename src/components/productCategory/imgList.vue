<template>
    <img-list :img-list="imgList"></img-list>
</template>
<script>
import imgList from '../common/imgList.vue'

export default {
    data () {
        return {
            imgList: [],
            appearance: [
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png',
                '/static/images/bench1.png'
            ],
            productSpreed: [
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png',
                '/static/images/img1.png'
            ]
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData () {
            this.imgList = this[this.$route.query.type]
        }
    },
    components: {
        imgList
    }
}
</script>
<style lang="scss">
</style>