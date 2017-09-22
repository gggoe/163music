<template>
    <div id="app">
        <mHeader></mHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import mHeader from './pages/m-header/index.vue'

    export default {
        name: 'app',
        components:{
            mHeader
        }
    }
</script>

<style lang="scss">

</style>
