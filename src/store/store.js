import Vue from 'vue'
import Vuex from 'vuex'

// export default function install(Vue, options) {
//     var store = new Store(Vue, options);
//
//     Vue.store = store;
//
//     Object.defineProperties(Vue.prototype, {
//         $store: {
//             get: function () {
//                 //
//
//                 return store;
//             }
//         }
//     });
// };

const store = new Vuex.Store({
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
})

export default store;
