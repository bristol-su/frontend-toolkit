import Vue from 'vue';

export const namespaced = true;

export const state = {
    loading: []
}

export const mutations = {
    START_LOADING(state, payload) {
        state.loading.push(payload.name)
    },
    STOP_LOADING(state, payload) {
        state.loading.splice(state.loading.indexOf(payload.name), 1)
    }
}

export const actions = {
}

export const getters = {
    isLoading: (state) => (name) => {
        return state.loading.indexOf(name) !== -1;
    }
}
