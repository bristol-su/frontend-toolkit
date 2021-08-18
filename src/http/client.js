import axios from 'axios';
import routes from './../routes/index';
import csrf from './../csrf/index';

const client = axios.create({
    baseURL: routes.module.moduleApiUrl()
});

client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (csrf.hasCsrf()) {
    client.defaults.headers.common['X-CSRF-TOKEN'] = csrf.csrf();
}


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
    if (window.hasOwnProperty('processErrorsFromAxios') && typeof window.processErrorsFromAxios === 'function') {
        window.processErrorsFromAxios(error);
    }
    return Promise.reject(error);
});

export default client;
