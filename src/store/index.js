import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import myform from "./myform";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
    modules: {
        myform
    }
});
