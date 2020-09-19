import Vue from 'vue';
import Vuetify from 'vuetify';

import settings from '@/settings/index';

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: settings.user.get('dark-mode') === 'true'
    }
}

export default new Vuetify(opts)
