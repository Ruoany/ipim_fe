export default {
    state: {
        formId: null,
        liaisons: []
    },
    mutations: {
        SET_FORM_ID: function(state, value) {
            state.formId = value;
        },
        REMOVE_FORM_ID: function(state) {
            state.formId = null;
        },
        SET_LIAISONS: function(state, value) {
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
        setLiaisons: function({ commit }, payload) {
            commit("SET_LIAISONS", payload);
        }
    }
};
