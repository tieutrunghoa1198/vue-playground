import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HomePage from "@/components/home-page/home-page.vue";
import ListAll from "@/components/list-all/list-all.vue";
const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/list', name: 'list', component: ListAll },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
