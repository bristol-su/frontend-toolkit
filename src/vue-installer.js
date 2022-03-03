import * as tools from './index';
import CsrfToken from './csrf/CsrfToken';
import UiKit from '@bristol-su/portal-ui-kit';
import Vuex from 'vuex'
import * as loading from './store/modules/loading';
import * as logics from './store/modules/logics';

export default {
    install: function (Vue, options = {}) {
        Vue.use(Vuex);

        const store = new Vuex.Store({
            modules: {
                loading: loading,
                logics: logics
            }
        });

        Vue.component('csrf-token', CsrfToken);

        Vue.prototype.$tools = tools;

        Vue.prototype.$http = tools.http;
        Vue.prototype.$httpBasic = tools.httpBasic;
        Vue.prototype.$isLoading = (name) => Vue.prototype.$loading.isLoading(name);

        Vue.prototype.$loading = {
            isLoading: (name) => store.getters['loading/isLoading'](name),
            startLoading: (name) => store.commit('loading/START_LOADING', {name: name}),
            stopLoading: (name) => store.commit('loading/STOP_LOADING', {name: name}),
        }
        Vue.prototype.$store = store;

        Vue.use(UiKit, {
            userSearcher: (search, page, perPage) => new Promise((resolve, reject) => {
                tools.control.client.user.getAllWhere({email: search}, page, perPage)
                  .then(response => resolve(response.data.data))
                  .catch(error => reject(error))
            }),
            loadLogics: () => {
                if(!store.getters['logics/loaded']) {
                    store.dispatch('logics/loadLogics');
                }
            },
            logics: () => {
                return store.getters['logics/logics']
            },
            errors: {
                all: () => tools.validation.errors.all(),
                has: (key) => tools.validation.errors.has(key),
                get: (key) => tools.validation.errors.get(key),
            },
            old: {
                all: () => tools.validation.oldInput.all(),
                has: (key) => tools.validation.oldInput.has(key),
                get: (key) => tools.validation.oldInput.get(key),
            },
            tinyMceKey: options.hasOwnProperty('tinyMceKey') ? options.tinyMceKey : null
        })
    }
}
