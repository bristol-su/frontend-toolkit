import axios from 'axios';
import routes from './../routes/index';
import environment from './../environment/index';
import csrf from './../csrf/index';

const client = axios.create({
    baseURL: routes.module.moduleUrl()
});

client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (csrf.hasCsrf()) {
    client.defaults.headers.common['X-CSRF-TOKEN'] = csrf.csrf();
}


client.interceptors.request.use(function (config) {
    if (config.params === undefined) {
        config.params = {};
    }
    if (environment.activityInstance.has()) {
        config.params['activity_instance_id'] = environment.activityInstance.get().id;
    }
    if (environment.authentication.hasUser()) {
        config.params['user_id'] = environment.authentication.getUser().id;
    }
    if (environment.authentication.hasGroup()) {
        config.params['group_id'] = environment.authentication.getGroup().id;
    }
    if (environment.authentication.hasRole()) {
        config.params['role_id'] = environment.authentication.getRole().id;
    }
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
