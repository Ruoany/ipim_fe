import Vue from "vue";
import App from "./App.vue";
import Antd, { message } from "ant-design-vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import lanData from "@/assets/i18n/index";
import moment from "moment";
import Crypto from "@/common/crypto";
import "ant-design-vue/dist/antd.less";
import "@/assets/icon/iconfont.css";

Vue.use(VueI18n);
Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.$crypto = Crypto;

router.beforeEach((to, from, next) => {
    const { meta } = to;
    const isLogin = sessionStorage.getItem("login");
    if (meta.case === "personal" || meta.case === "form") {
        if (!isLogin) {
            message.warning("請先登錄");
            next("/login");
        }
    }
    next();
});

const i18n = new VueI18n({
    locale: sessionStorage.getItem("language") ? sessionStorage.getItem("language") : "zh",
    messages: lanData
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
