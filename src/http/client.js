import axios from 'axios';
import routes from './../routes/index';
import csrf from './../csrf/index';
import ApiErrors from '../validation/ApiErrors';
import Vue from 'vue';
import store from '../store/store';

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
    store.commit('loading', {name: getRequestName(config)});
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
    if(error.response.status === 422 && error.response.data.hasOwnProperty('errors')) {
        ApiErrors.set(error.response.data.errors);
        Vue.prototype.$ui.eventBus.$emit('errors-updated');
    }
    return Promise.reject(error);
});

// Stop the request from loading
client.interceptors.response.use(function (response) {
    store.commit('finishedLoading', {name: getRequestName(response.config)})
    return response;
}, function (error) {
    store.commit('finishedLoading', {name: getRequestName(error.config)})
    return Promise.reject(error);
});

export default client;
