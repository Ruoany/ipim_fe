import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import user from "./user";
import myform from "./myform";
import lan from "./lan";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
    modules: {
        user,
        myform,
        lan,
    },
});
