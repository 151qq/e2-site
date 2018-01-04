<template>
    <section class="img-box-bg" v-show="isShowImg.value" @click.self="hiddenImg">
        <swiper :options="swiperOption" class="img-big-box" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in bigImgs"><img :src="item"></swiper-slide>
        </swiper>

        <div class="swiper-pagination"></div>
    </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: ['bigImgs', 'isShowImg', 'index'],
    data () {
        return {
            swiperOption: {
                direction: 'horizontal',
                mousewheelControl: true,
                observeParents: true,
                pagination : '.swiper-pagination'
            }
        }
    },
    methods: {
        hiddenImg () {
            this.isShowImg.value = false
        },
        stopHandle () {
            return false
        }
    },
    watch: {
        index () {
            this.$refs.mySwiper.swiper.slideTo(this.index)
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style lang="scss">
.img-box-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: 1000;

    .img-big-box {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translate(0,-50%);

        .swiper-slide {
            img {
                display: block;
                width: 100%;
            }
        }
    }

    .swiper-pagination {
        width: 100%;
        bottom: 20px;
        text-align: center;

      .swiper-pagination-bullet {
        display: inline-block;
        width: 0.6em;
        height: 0.6em;
        margin: 0 0.25em;
        background: #f0f0f0;
      }

      .swiper-pagination-bullet-active {
        background: #ffffff;
      }
    }
}
</style>