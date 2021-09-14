import Vue from 'vue';

export const namespaced = true;

export const state = {
    loading: {}
}

export const mutations = {
    START_LOADING(state, payload) {
        Vue.set(state, payload.name, true)
    },
    STOP_LOADING(state, payload) {
        Vue.set(state, payload.name, false)
    }
}

export const actions = {
}

export const getters = {
    isLoading: (state) => (name) => {
        return state.loading.hasOwnProperty(name) && state.loading[name] === true
    }
}
