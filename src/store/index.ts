import { createLogger, createStore } from "vuex";
import { HomeStore } from "@/store/modules/home";
import { List } from "@/store/modules/listEmployee";
// @ts-ignore
const debug = process.env.NODE_ENV !== "production";
export default createStore({
  modules: {
    HomeStore,
    List
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
