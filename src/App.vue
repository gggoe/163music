<template>
    <div id="app">
        <mHeader class="header"></mHeader>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import mHeader from './pages/m-header/index.vue'

    export default {
        name: 'app',
        components: {
            mHeader
        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .view{
        margin-top:.64rem;
    }
</style>
