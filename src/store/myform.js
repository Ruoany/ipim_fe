import Liaisons from "@/apis/liaison";

export default {
    state: {
        formId: null,
        liaisons: [],
        mission: {}
    },
    getters: {
        currentForm: state => state.formId,
        liaisonList: state => state.liaisons,
        MISSION: state => state.mission
    },
    mutations: {
        SET_FORM_ID: function(state, value) {
            state.formId = value;
        },
        REMOVE_FORM_ID: function(state) {
            state.formId = null;
        },
        SET_LIAISONS: async function(state, value) {
            const { data } = await Liaisons.get(value);
            state.liaisons = data.content;
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
                if (state.liaisons.length === 0) {
                    commit("SET_LIAISONS", payload);
                    resolve();
                } else {
                    resolve();
                }
            });
        }
    }
};
