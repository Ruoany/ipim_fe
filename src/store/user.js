export default {
    state: {
        info: undefined,
        institution: undefined
    },
    getters: {
        info: state => state.info,
        currentUser: state => (state.info ? state.info.id : null),
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
            state.institution = state.info.institutions ? value : undefined;
        }
    },
    actions: {
        setInfo: function({ state, commit }, payload) {
            return new Promise(async resolve => {
                commit("SET_INFO_DATA", payload);
                if (!state.institution) {
                    const sId = parseInt(sessionStorage.getItem("institution"));
                    const value = sId
                        ? state.info.institutions.find(item => item.id === sId)
                        : state.info.institutions[0];
                    commit("SET_CURRENT_INSTITUTION", value);
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
