export default {
    state: {
        info: undefined,
        institution: undefined,
        isChange: true,
    },
    getters: {
        info: state => state.info,
        currentUser: state => (state.info ? state.info.id : null),
        currentAccount: state => (state.info ? state.info.account : null),
        institutionList: state => {
            if (state.info && Array.isArray(state.info.institutions)) {
                const arr = state.info.institutions.filter(item => item.id !== state.institution.id);
                return arr;
            }
            return [];
        },
        currentInstitution: state => state.institution,
        isChange: state => state.isChange,
    },
    mutations: {
        SET_INFO_DATA: function(state, value) {
            state.info = value;
        },
        REMOVE_INFO_DATA: function(state) {
            state.info = undefined;
        },
        SET_CURRENT_INSTITUTION: function(state, value) {
            state.institution = value;
        },
        REMOVE_CURRENT_INSTITUTION: function(state) {
            state.institution = undefined;
        },
        SET_INSTITUTION_CHANGE_TRUE: function(state) {
            state.isChange = true;
        },
        SET_INSTITUTION_CHANGE_FALSE: function(state) {
            state.isChange = false;
        },
    },
    actions: {
        setInfo: function({ state, commit }, payload) {
            return new Promise(async resolve => {
                commit("SET_INFO_DATA", payload);
                if (!state.institution) {
                    const sId = sessionStorage.getItem("institution");
                    const value = sId
                        ? payload.institutions.find(item => item.id === parseInt(sId))
                        : payload.institutions
                        ? payload.institutions[0]
                        : undefined;
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
                commit("REMOVE_LIAISONS");
                commit("SET_CURRENT_INSTITUTION", payload);
                resolve();
            });
        },
        removeCurrentInstitution: function({ commit }) {
            return new Promise(async resolve => {
                commit("REMOVE_CURRENT_INSTITUTION");
                resolve();
            });
        },
        setChangeTrue: function({ commit }) {
            return new Promise(async resolve => {
                commit("SET_INSTITUTION_CHANGE_TRUE");
                resolve();
            });
        },
        setChangeFalse: function({ commit }) {
            return new Promise(async resolve => {
                commit("SET_INSTITUTION_CHANGE_FALSE");
                resolve();
            });
        },
        clear: function({ commit }) {
            return new Promise(async resolve => {
                commit("REMOVE_INFO_DATA");
                commit("REMOVE_CURRENT_INSTITUTION");
                resolve();
            });
        },
    },
};
