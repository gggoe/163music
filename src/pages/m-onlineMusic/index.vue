<template>
    <div id="onlineMusic">
        <div class="title">
            <router-link to="/online/music">音乐</router-link>
            <router-link to="/online/video">视频</router-link>
            <router-link to="/online/radioStation">电台</router-link>
        </div>
        <router-view></router-view>

    </div>
</template>
<script>

</script>
<style scoped>
    .title{
        font-size:.16rem;
        line-height:.4rem;
        height:.4rem;
        padding:0 5%;
        display:flex;
        justify-content: space-between;
    }
    .title *{
        text-align:center;
        width:30%;
    }
</style>