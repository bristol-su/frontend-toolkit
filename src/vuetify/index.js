import Vuetify from 'vuetify';
import settings from '@/settings/index';
import 'vuetify/dist/vuetify.min.css'

const opts = {
    theme: {
        dark: settings.user.get('dark-mode') === 'true'
    }
}

export default new Vuetify(opts)
