export default {
    state: {
        info: undefined,
        institution: undefined
    },
    getters: {
        info: state => state.info,
        currentUser: state => state.info.id,
        institutionList: function(state) {
            const arr = state.info.institutions.filter(item => item.id !== state.institution.id);
            return arr;
        },
        currentInstitution: state => state.institution
    },
    mutations: {
        SET_INFO_DATA: function(state, value) {
            state.info = value;
        },
        REMOVE_INFO_DATA: function(state) {
            state.info = undefined;
        },
        SET_CURRENT_INSTITUTION: function(state, value) {
            state.institution = state.info.institutions[value];
        }
    },
    actions: {
        setInfo: function({ state, commit }, payload) {
            return new Promise(async resolve => {
                commit("SET_INFO_DATA", payload);
                if (!state.institution) {
                    commit("SET_CURRENT_INSTITUTION", 0);
                }
                resolve();
            });
        },
        removeInfo: function({ commit }) {
            return new Promise(resolve => {
                commit("REMOVE_INFO_DATA");
                resolve();
            });
        },
        setCurrentInstitution: function({ commit }, payload) {
            return new Promise(async resolve => {
                commit("SET_CURRENT_INSTITUTION", payload);
                resolve();
            });
        }
    }
};
