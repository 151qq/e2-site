<template>
    <section class="sheet-box" @click.self="hiddenSheet">
        <div class="weui-mask"
            :class="isShowSheet.value ? 'show-box' : ''"></div>
        <div class="weui-actionsheet"
                :class="isShowSheet.value ? 'weui-actionsheet_toggle' : ''">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell"
                        @click="cb(item)"
                        v-for="(item, index) in itemList">{{item.label}}</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" @click="hiddenSheet">取消</div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['isShowSheet', 'itemList', 'cb'],
    data () {
        return {}
    },
    methods: {
        hiddenSheet () {
            this.isShowSheet.value = false
        }
    }
}
</script>
<style lang="scss">
.sheet-box {
    .weui-mask {
        opacity: 0;
        display: none;
    }

    .show-box {
        opacity: 1;
        display: block;
    }
}
</style>