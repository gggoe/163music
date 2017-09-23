<template>
    <div id="music">
        <!-- 轮播图 -->
        <Swiper :bannersData="bannersData"></Swiper>
        <!-- nav -->
        <div class="nav">

        </div>
        <!-- 推荐歌单 -->
        <div>推荐歌单</div>
        <div>推荐歌单</div>
        <div>推荐歌单</div>

    </div>
</template>
<script>
    import Swiper from '../../../components/m-swiper/index.vue'
    import dummyData from '../../../diy/dummyData'

    export default {
        data() {
            return {
                bannersData: dummyData.bannersData
            }
        },
        components: {
            Swiper
        }
    }
</script>
<style scoped>

</style>