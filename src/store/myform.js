export default {
    state: {
        formId: null,
        liaisons: [],
        time: 10,
    },
    getters: {
        liaisonList: (state) => state.liaisons,
        timeNext: (state) => state.time,
    },
    mutations: {
        SET_LIAISONS: function(state, value) {
            state.liaisons = value;
        },
        REMOVE_LIAISONS: function(state) {
            state.liaisons = [];
        },
        SET_TIMENEXT: function(state) {
            state.time = 10;
            let time = setInterval(() => {
                if (state.time > 0) {
                    state.time--;
                } else {
                    clearInterval(time);
                }
            }, 1000);
        },
    },
    actions: {
        setLiaisons: function({ commit }, payload) {
            return new Promise((resolve) => {
                commit("SET_LIAISONS", payload);
                resolve();
            });
        },
        removeLiaisons: function({ commit }) {
            return new Promise((resolve) => {
                commit("REMOVE_LIAISONS");
                resolve();
            });
        },
        setTimeNext: function({ commit }) {
            commit("SET_TIMENEXT");
        },
    },
};
