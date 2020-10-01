import * as tools from '@/index';
import CsrfToken from '@/csrf/CsrfToken';

const VueInstaller = {
    install: function (Vue) {
        Vue.component('csrf-token', CsrfToken);

        Vue.prototype.$tools = tools;
    }
}

export default VueInstaller;
