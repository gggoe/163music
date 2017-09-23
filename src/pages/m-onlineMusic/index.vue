<template>
    <div id="onlineMusic" ref="onlineMusic">
        <div class="title">
            <div @click="moveLine(5)" v-bind:data="5" class="rippleria">
                <router-link to="/online/music">音乐</router-link>
            </div>
            <div @click="moveLine(35)" v-bind:data="35" class="rippleria">
                <router-link to="/online/video">视频</router-link>
            </div>
            <div @click="moveLine(65)" v-bind:data="65" class="rippleria">
                <router-link to="/online/radioStation">电台</router-link>
            </div>
            <div class="underline" ref="underline"></div>
        </div>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
    export default {
        mounted() {
            var onlineMusic = document.getElementById('onlineMusic'),
                curEle = onlineMusic.getElementsByClassName('router-link-active')[0],
                curLin = curEle.parentNode;
            this.$refs.underline.style.left = curLin.getAttribute('data') + '%';

            $('.rippleria').rippleria({
                duration: 750,
                easing: 'ease-in'
                , color: 'rgba(100,100,100,0.5)'
            });
            $('.rippleria').click(function () {
                console.log(111)
                var randInt = function (min, max) {
                    var rand = min + Math.random() * (max - min);
                    rand = Math.round(rand);
                    return rand;
                };

                $(this).rippleria('changeColor',
                    'rgba(' + randInt(0, 200) + ',' + randInt(0, 200) + ',' + randInt(0, 200) + ',0.' + randInt(3, 5));
            });
        },
        methods: {
            moveLine(left) {
                left = parseFloat(window.getComputedStyle(this.$refs.onlineMusic, null).width) * left / 100;
                window.$move({
                    curEle: this.$refs.underline
                    , style: {left: left}
                    , time: 50
                });
            }
        }
    }
</script>
<style scoped>
    .title {
        position: fixed;
        font-size: .16rem;
        line-height: .4rem;
        height: .4rem;
        padding: 0 5%;
        display: flex;
        justify-content: space-between;
        top: .64rem;
        left: 0;
        width: 90%;
        z-index: 99;
        background-color: #fff;
    }

    .title div {
        text-align: center;
        width: 33%;
    }

    #onlineMusic .router-link-active {
        color: red;
    }

    .title .underline {
        position: absolute;
        z-index: 0;
        width: 20%;
        height: .03rem;
        background-color: red;
        bottom: 0;
        left: 5%;
        margin: 0 5%;
    }

    .view {
        margin-top: 1.04rem;
    }
</style>