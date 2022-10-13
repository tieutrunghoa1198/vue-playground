import { createLogger, createStore } from "vuex";
import { HomeStore } from "@/store/modules/home";
// @ts-ignore
const debug = process.env.NODE_ENV !== "production";
export default createStore({
  modules: {
    HomeStore,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
