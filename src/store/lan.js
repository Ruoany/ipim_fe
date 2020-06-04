export default {
    state: {
        lan: "zh",
    },
    getters: {
        lan: (state) => state.lan,
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
