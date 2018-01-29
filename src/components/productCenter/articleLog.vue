<template>
    <div class="comments-box" v-if="isComments">
        <comment :comment-url="'product-comment'" @submitSuccess="submitSuccess"></comment>
    </div>
</template>
<script>
import util from '../../utils/tools'
import comment from '../common/comment.vue'
import {getDateDiff} from '../../assets/common/utils.js'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {}
    },
    components: {
        comment
    }
}
</script>
<style lang="scss">
.comments-box {
    padding: 0 15px;
}
</style>