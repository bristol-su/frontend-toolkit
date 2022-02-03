import Vue from 'vue';
import * as tools from '../../index';

export const namespaced = true;

export const state = {
    loading: false,
    loaded: false,
    logics: []
}

export const mutations = {
    START_LOADING(state) {
        state.loading = true
    },
    STOP_LOADING(state) {
        state.loading = false;
        state.loaded = true;
    },
    SET_LOGICS(state, payload) {
        state.logics = payload;
    }
}

export const actions = {
    loadLogics(context) {
        context.commit('START_LOADING');
        tools.httpBasic.get(tools.routes.basic.baseApiUrl() + '/logic')
            .then(response => context.commit('SET_LOGICS', response.data))
            .catch(error => this.$notify.alert('There was a problem getting the logic: ' + error.message))
            .then(() => context.commit('STOP_LOADING'));
    }
}

export const getters = {
    loaded: (state) => {
        return state.loading || state.loaded;
    },
    logics: (state) => {
        return state.logics;
    }
}
