import * as tools from '@/index';

const VueInstaller = {
    install: function (Vue) {
        Vue.prototype.$tools = tools;
    }
}

export default VueInstaller;
