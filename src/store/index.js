import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuKey: ""
    },
    mutations: {
        setMenuKey: function(value) {
            this.state.menuKey = value;
        }
    },
    actions: {},
    modules: {}
});
