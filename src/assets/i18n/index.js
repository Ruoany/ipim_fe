import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./zh";
import en from "./en";
import pt from "./pt";

const lanData = { zh, en, pt };
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "zh",
    messages: lanData,
});

export default i18n;
