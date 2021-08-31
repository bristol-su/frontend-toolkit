import axios from 'axios';
import routes from './../routes/index';
import csrf from './../csrf/index';
import ApiErrors from '../validation/ApiErrors';

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
    console.log(error);
    console.log('^ is defined in the frontend toolkit, http client & basic client')
    if(error.code === 422) {
        ApiErrors.set(error.content);
    }
    return Promise.reject(error);
});

export default client;
