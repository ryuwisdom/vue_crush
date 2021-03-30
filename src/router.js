import Vue from 'vue';
import VueRouter from 'vue-router'
import App from '@/App'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/first',
            name: 'first',
            component: () => import("@/pages/First")
        },
        {
            path: '/second',
            name: 'second',
            component: () => import("@/pages/Second")
        }
        , {
            path: '/third',
            name: 'third',
            component: () => import("@/pages/Third")
        },
    ]

})
export default router;

