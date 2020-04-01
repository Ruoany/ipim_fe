export default {
    state: {
        formId: null,
        liaisons: []
    },
    getters: {
        liaisonList: state => state.liaisons
    },
    mutations: {
        SET_LIAISONS: function(state, value) {
            state.liaisons = value;
        },
        REMOVE_LIAISONS: function(state) {
            state.liaisons = [];
        }
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
        }
    }
};
