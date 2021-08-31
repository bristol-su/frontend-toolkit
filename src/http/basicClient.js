import axios from 'axios';
import routes from './../routes/index';
import csrf from './../csrf/index';
import ApiErrors from '../validation/ApiErrors';
import Vue from 'vue';

const basicClient = axios.create({
    baseURL: routes.basic.baseApiUrl()
});

basicClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (csrf.hasCsrf()) {
    basicClient.defaults.headers.common['X-CSRF-TOKEN'] = csrf.csrf();
}


basicClient.interceptors.request.use(function (config) {
    if (config.params === undefined) {
        config.params = {};
    }
    config.params = Object.assign(config.params, routes.query.getApiQueryParameters())
    return config;
}, function (error) {
    return Promise.reject(error);
});

basicClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 422 && error.response.data.hasOwnProperty('errors')) {
        ApiErrors.set(error.response.data.errors);
        Vue.prototype.$ui.eventBus.$emit('errors-updated');
    }
    return Promise.reject(error);
});

export default basicClient;
