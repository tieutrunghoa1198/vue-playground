import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
