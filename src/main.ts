import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import('@/assets/main.css')
import router from "@/routes";
import store from './store/index';
const app = createApp(App);
app.use(router)
    .use(store)
    .mount("#app");
