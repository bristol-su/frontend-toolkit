import axios from 'axios';
import routes from './../routes/index';
import csrf from './../csrf/index';

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
    if (window.hasOwnProperty('processErrorsFromAxios') && typeof window.processErrorsFromAxios === 'function') {
        window.processErrorsFromAxios(error);
    }
    return Promise.reject(error);
});

export default basicClient;
