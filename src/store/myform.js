export default {
    state: {
        formId: null,
        liaisons: [],
        codes: [],
        time: 0,
    },
    getters: {
        liaisonList: state => state.liaisons,
        codeList: state => state.codes,
        timeNext: state => state.time,
    },
    mutations: {
        SET_LIAISONS: function(state, value) {
            state.liaisons = value;
        },
        REMOVE_LIAISONS: function(state) {
            state.liaisons = [];
        },
        SET_CODE_LIST: function(state, value) {
            state.codes = value;
        },
        SET_TIMENEXT: function(state) {
            state.time = 1;
            let time = setInterval(() => {
                state.time--;
                if (state.time === 0) {
                    clearInterval(time);
                }
            }, 1000);
        },
    },
    actions: {
        setLiaisons: function({ commit }, payload) {
            return new Promise(resolve => {
                commit("SET_LIAISONS", payload);
                resolve();
            });
        },
        removeLiaisons: function({ commit }) {
            return new Promise(resolve => {
                commit("REMOVE_LIAISONS");
                resolve();
            });
        },
        setCodeList: function({ commit }, payload) {
            return new Promise(resolve => {
                commit("SET_CODE_LIST", payload);
                resolve();
            });
        },
        setTimeNext: function({ commit }) {
            commit("SET_TIMENEXT");
        },
    },
};
