<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="banner in bannersData">
            <img :src="banner.img" alt="">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        props: [
            'bannersData'
        ],
        data() {
            return {
                swiperOption: {
                    autoplay: 4000,
                    autoplayDisableOnInteraction: false, // 用户操作后是否继续自动轮播
                    loop: true, // 循环
                    pagination: '.swiper-pagination', // 分页器
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .swiper-pagination-bullet-active {
        background-color: red;
    }

    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: -0.1rem;
    }

    .swiper-container, .swiper-container img {
        height: 1.5rem;
        width: 100%;
    }


</style>