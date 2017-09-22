<template>
    <div id="onlineMusic" ref="onlineMusic">
        <div class="title">
            <router-link to="/online/music">
                <div @click="moveLine(5, $event)" v-bind:data="5">音乐</div>
            </router-link>
            <router-link to="/online/video">
                <div @click="moveLine(35, $event)" v-bind:data="35">视频</div>
            </router-link>
            <router-link to="/online/radioStation">
                <div @click="moveLine(65, $event)" v-bind:data="65">电台</div>
            </router-link>
            <div class="underline" ref="underline"></div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            moveLine: function (left, event) {
                left = parseFloat(window.getComputedStyle(this.$refs.onlineMusic, null).width) * left / 100;
                window.$move({
                    curEle: this.$refs.underline
                    , style: {left: left}
                    , time: 50
                });
                $('#onlineMusic .router-link-active').rippleria({
                    // aniamtion speed 动画速度
                    duration: 750,
                    // custom easing effect 动画方式
                    easing: 'ease-in'
                });

                // 随机颜色
                $('#onlineMusic .router-link-active').click(function (e) {
//                    e.preventDefault(); // 阻止默认事件

                    var randInt = function (min, max) {
                        var rand = min + Math.random() * (max - min);
                        rand = Math.round(rand);
                        return rand;
                    };

                    $(this).rippleria('changeColor',
                        'rgba(' + randInt(0, 200) + ',' + randInt(0, 200) + ',' + randInt(0, 200) + ',0.' + randInt(3, 5));
                });
            }
        }
        , mounted() {
            var onlineMusic = document.getElementById('onlineMusic'),
                curEle = onlineMusic.getElementsByClassName('router-link-active')[0],
                curLine = curEle.getElementsByTagName('div')[0];
            this.$refs.underline.style.left = curLine.getAttribute('data') + '%';
        }
    }
</script>
<style scoped>
    .title {
        position: relative;
        font-size: .16rem;
        line-height: .4rem;
        height: .4rem;
        padding: 0 5%;
        display: flex;
        justify-content: space-between;
    }

    .title a {
        text-align: center;
        width: 33%;
    }

    #onlineMusic .router-link-active {
        color: red;
    }

    .title .underline {
        position: absolute;
        width: 20%;
        height: .03rem;
        background-color: red;
        bottom: 0;
        left: 5%;
        margin: 0 5%;
    }
</style>