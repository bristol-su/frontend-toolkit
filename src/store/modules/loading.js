import Vue from 'vue';

const loading = {
    namespaced: true,
    state: {
        loading: {}
    },
    mutations: {
        loading(state, payload) {
            Vue.set(state, payload.name, true)
        },
        finishedLoading(state, payload) {
            Vue.set(state, payload.name, false)
        }
    },
    computed: {
        isLoading: (state) => (name) => {
            return state.loading.hasOwnProperty(name) && state.loading[name] === true
        }
    }
}
