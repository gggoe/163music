import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './public/reset.css'
import './public/index.css'
import './public/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
