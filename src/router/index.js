import Vue from 'vue'
import Router from 'vue-router'

import Online from '../pages/m-onlineMusic/index.vue'
import Local from '../pages/m-localMusic/index.vue'
import Circle from '../pages/m-musicCircle/index.vue'

import Music from '../pages/m-onlineMusic/music/index.vue'
import Video from '../pages/m-onlineMusic/video/index.vue'
import RadioStation from '../pages/m-onlineMusic/radioStation/index.vue'

Vue.use(Router);

const routes = [
    {
        path: '/online'
        , component: Online
        , children: [
        {path: '/online/music', component: Music}
        , {path: '/online/video', component: Video}
        , {path: '/online/radioStation', component: RadioStation}
        ,{path:'/',redirect:'/online/music'},
    ]
    },
    {path: '/local', component: Local},
    {path: '/circle', component: Circle},
    {path:'*',redirect:'/online/music'},
];

export default new Router({
    routes
    // ,linkActiveClass:'my-active'
})