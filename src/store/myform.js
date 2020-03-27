import Liaisons from "@/apis/liaison";

export default {
    state: {
        formId: null,
        liaisons: []
    },
    getters: {
        currentForm: state => state.formId,
        liaisonList: state => state.liaisons
    },
    mutations: {
        SET_FORM_ID: function(state, value) {
            state.formId = value;
        },
        REMOVE_FORM_ID: function(state) {
            state.formId = null;
        },
        SET_LIAISONS: async function(state, value) {
            state.liaisons = value;
        }
    },
    actions: {
        setFormId: function({ commit }, payload) {
            commit("SET_FORM_ID", payload);
        },
        removeFormId: function({ commit }) {
            commit("REMOVE_FORM_ID");
        },
        setLiaisons: function({ state, commit }, payload) {
            return new Promise(resolve => {
                commit("SET_LIAISONS", payload);
                resolve();
            });
        }
    }
};
