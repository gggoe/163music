import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './public/reset.css'
import './public/index.css'




new Vue({
    el: '#app',
    render: h => h(App),
    router
});
