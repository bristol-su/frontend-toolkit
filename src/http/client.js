import axios from 'axios';
import routes from './../routes/index';
import csrf from './../csrf/index';
import ApiErrors from '../validation/ApiErrors';
import Vue from 'vue';
import basicClient from '@bristol-su/frontend-toolkit/src/http/basicClient';

const client = axios.create({
    baseURL: routes.module.moduleApiUrl()
});

client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (csrf.hasCsrf()) {
    client.defaults.headers.common['X-CSRF-TOKEN'] = csrf.csrf();
}

let getRequestName = (config) => {
    if(config.hasOwnProperty('name')) {
        return config.name;
    }
    return config.method + ':' + config.baseURL + config.url;
}

// Set the request as loading
client.interceptors.request.use(function (config) {
    Vue.prototype.$loading.startLoading(getRequestName(config));
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add authentication credentials
client.interceptors.request.use(function (config) {
    if (config.params === undefined) {
        config.params = {};
    }
    config.params = Object.assign(config.params, routes.query.getApiQueryParameters())
    return config;
}, function (error) {
    return Promise.reject(error);
});

client.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error);
    if(error.response.status === 422 && error.response.data.hasOwnProperty('errors')) {
        ApiErrors.set(error.response.data.errors);
        Vue.prototype.$ui.eventBus.$emit('errors-updated');
    }
    return Promise.reject(error);
});

// Stop the request from loading
basicClient.interceptors.response.use(function (response) {
    Vue.prototype.$loading.stopLoading(getRequestName(response.config));
    return response;
}, function (error) {
    Vue.prototype.$loading.stopLoading(getRequestName(error.config));
    return Promise.reject(error);
});

export default client;
