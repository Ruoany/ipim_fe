import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./zh";

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "zh",
    messages: { zh },
});

export default i18n;
