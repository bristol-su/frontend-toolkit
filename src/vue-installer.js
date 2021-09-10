import * as tools from './index';
import CsrfToken from './csrf/CsrfToken';
import UiKit from '@bristol-su/portal-ui-kit';

export default {
    install: function (Vue) {
        Vue.component('csrf-token', CsrfToken);

        Vue.prototype.$tools = tools;

        Vue.prototype.$http = tools.http;
        Vue.prototype.$httpBasic = tools.httpBasic;

        // On getting an error,
            // get the json from the response
            // Set it using

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
