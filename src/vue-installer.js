import * as tools from '@/index';
import CsrfToken from '@/csrf/CsrfToken';
import Translate from '@/translate/Translate';
import vuetify from '@/vuetify/index';

const VueInstaller = {
    install: function (Vue) {
        Vue.component('csrf-token', CsrfToken);
        Vue.component('translate', Translate);

        Vue.prototype.$tools = tools;
        Vue.prototype.$translator = tools.translate.translator;

    }
}

export {VueInstaller, vuetify};
