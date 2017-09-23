<template>
    <div id="header">
        <div class="iconfont action">&#xe61d;</div>
        <div>
            <router-link to="/local" class="iconfont">&#xe600;</router-link>
            <router-link to="/online" class="iconfont">&#xe601;</router-link>
            <router-link to="/circle" class="iconfont">&#xe61e;</router-link>
        </div>
        <div class="iconfont action">&#xe607;</div>
    </div>
</template>
<script>
    import router from '../../router/index.js'

    export default {}

</script>
<style scoped>
    #header {
        height: .64rem;
        background-color: red;
        font-size: .26rem;
        line-height: .64rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    #header div, #header div * {
        display: inline-block;
        height: 100%;
    }

    .iconfont {
        padding: 0 .1rem;
        font-size: .26rem;
        color: #fff;
        opacity: .6;
    }

    .iconfont.action {
        opacity: 1;
    }

    #header .router-link-active {
        opacity: 1;
    }
</style>