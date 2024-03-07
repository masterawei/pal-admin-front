import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index.vue";
import Config from "../components/config/Config.vue";
import Generation from "../components/config/Generation.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: "/index"
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/config',
            component: Config,
            meta:{
                showFather: true
            },
            children:[
                {
                    path: 'generation',
                    component: Generation,
                    meta:{
                        showFather: false
                    }
                }
            ]
        },

    ],

})
