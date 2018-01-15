<template>
    <section class="paket-big-box" v-if="isShow.value">
        <div class="paket-bg" @click.self="isShow.value = false"></div>
        <a class="paket-con" :href="pathUrl">
            <img :src="iconUrl">
            <span>{{showText}}</span>
        </a>
    </section>
</template>
<script>
export default {
    props: ['isShow', 'pathUrl', 'showText'],
    data () {
        return {
            iconUrl: ''
        }
    },
    mounted () {
        this.iconUrl = '/static/images/paket_' + Math.floor(Math.random() * 4) + '.png'
    }
}
</script>
<style lang="scss">
.paket-big-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    .paket-bg {
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.9;
    }

    .paket-con {
        position: absolute;
        width: 100%;
        top: 45%;
        left: 0;
        transform: translateY(-50%);

        img {
            display: block;
            width: 120px;
            margin: auto;
        }

        span {
            display: block;
            font-size: 18px;
            text-align: center;
            color: #ffffff;
            line-height: 20px;
            margin-top: 20px;
        }
    }
}
</style>