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

// router.beforeEach(async (to, from, next) => {
//     if (!store.getters.info) {
//         const data = await User.current();
//         console.log("獲取用戶信息", data);
//         if (!data) {
//             next("/login");
//             return;
//         }
//         await store.dispatch("setInfo", data);
//     }
//     next();
// });

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
