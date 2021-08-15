import * as tools from './index';
import CsrfToken from './csrf/CsrfToken';
import UiKit from '@bristol-su/portal-ui-kit';

const VueInstaller = {
    install: function (Vue) {
        Vue.component('csrf-token', CsrfToken);

        Vue.prototype.$tools = tools;

        Vue.use(UiKit)
    }
}

export {VueInstaller};
