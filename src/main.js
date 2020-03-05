import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import lanData from "@/assets/i18n/index";
import moment from "moment";

Vue.use(VueI18n);
Vue.use(Antd);
Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

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
