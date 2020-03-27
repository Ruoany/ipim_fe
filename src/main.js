import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import lanData from "@/assets/i18n/index";
import moment from "moment";
import "ant-design-vue/dist/antd.less";
import "@/assets/icon/iconfont.css";
import User from "@/apis/user";

Vue.use(VueI18n);
Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

router.beforeEach(async (to, from, next) => {
    // const { meta } = to;
    // const { data } = await User.current();
    // const isValue = store.getters.info;
    // if(meta === 'index'){
    //     data?await store.dispatch('setInfo',data):await store.dispatch('setInfo',{});

    // }
    // if (meta.case === "personal" || meta.case === "form") {
    //     if (!store.getters.info) {

    //         console.log("獲取用戶信息", data);
    //         if (data) {
    //             await store.dispatch("setInfo", data);
    //             next();
    //             return;
    //         }
    //         next("/login");
    //     }
    // }
    // if (!store.getters.info) {
    // if (data) {
    //     await store.dispatch("setInfo", data);
    //     next();
    //     return;
    // }
    // }
    next();
});

const i18n = new VueI18n({
    locale: "zh",
    messages: lanData
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
