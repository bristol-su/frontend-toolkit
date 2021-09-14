import * as tools from './index';
import CsrfToken from './csrf/CsrfToken';
import UiKit from '@bristol-su/portal-ui-kit';
import Vuex from 'vuex'
import loading from './store/modules/loading'

export default {
    install: function (Vue) {
        Vue.use(Vuex);

        Vue.component('csrf-token', CsrfToken);

        Vue.prototype.$tools = tools;

        Vue.prototype.$http = tools.http;
        Vue.prototype.$httpBasic = tools.httpBasic;
        Vue.prototype.$isLoading = (name) => Vue.prototype.$store.getters.isLoading(name);

        Vue.prototype.$store = new Vuex.Store({});
        Vue.prototype.$store.registerModule('loading', loading);

        Vue.use(UiKit, {
            errors: {
                all: () => tools.validation.errors.all(),
                has: (key) => tools.validation.errors.has(key),
                get: (key) => tools.validation.errors.get(key),
            },
            old: {
                all: () => tools.validation.oldInput.all(),
                has: (key) => tools.validation.oldInput.has(key),
                get: (key) => tools.validation.oldInput.get(key),
            }
        })
    }
}
