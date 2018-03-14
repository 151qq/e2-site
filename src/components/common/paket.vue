<template>
    <section class="paket-big-box" v-if="isShow.value">
        <div class="paket-bg" @click.self="hiddenPaket"></div>
        <router-link class="paket-con"
                    v-if="!giftUrl"
                    :to="{
                        name: 'groupDetail',
                        query: {
                            enterpriseCode: $route.query.enterpriseCode,
                            couponGroupType: pathUrl,
                            appid: userInfo.appId
                        }
                    }">
            <img :src="iconUrl">
            <span>{{showText}}</span>
        </router-link>

        <a class="paket-con" :href="giftUrl" v-if="giftUrl">
            <img :src="iconUrl">
            <span>{{showText}}</span>
        </a>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['isShow', 'iconUrl', 'pathUrl', 'giftUrl', 'showText', 'hiddenPaket'],
    data () {
        return {}
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
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
            width: 100%;
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