import Vue from 'vue';
import VueRouter from 'vue-router'
import App from '@/App'


Vue.use(VueRouter)

const router = new VueRouter({
    mode : "history",
    routes : [
        {path: '/', component: App },
        {path: '/first', component: () => import('@/pages/FirstChild') },
        {path: '/second', component: () => import('@/pages/SecondChild') },
        {path: '/third', component: () => import('@/pages/ThirdChild') },
    ]

})
export default router;

