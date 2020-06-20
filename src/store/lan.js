import zhTW from "ant-design-vue/lib/locale-provider/zh_TW";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
import ptPT from "ant-design-vue/lib/locale-provider/pt_PT";

export default {
    state: {
        lan: "zh",
    },
    getters: {
        lan: state => state.lan,
        locale: state => {
            switch (state.lan) {
                case "zh":
                    return zhTW;
                case "en":
                    return enUS;
                case "pt":
                    return ptPT;
                default:
                    return zhTW;
            }
        },
    },
    mutations: {
        SET_LAN: function(state, value) {
            state.lan = value;
        },
    },
    actions: {
        setLan: function({ commit }, value) {
            commit("SET_LAN", value);
        },
    },
};
