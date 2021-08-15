import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: portal.API_URL + '/' + (portal.admin ? 'a' : 'p') + '/' + portal.activity.slug + '/' + portal.module_instance.slug + '/' + portal.module_instance.alias
});

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axiosInstance.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

axiosInstance.interceptors.request.use(function (config) {
    if (config.params === undefined) {
        config.params = {};
    }
    if (portal.activityinstance !== null) {
        config.params['activity_instance_id'] = portal.activity_instance.id;
    }
    if (portal.group !== null) {
        config.params['group_id'] = portal.group.id;
    }
    if (portal.role !== null) {
        config.params['role_id'] = portal.role.id;
    }
    if (portal.user !== null) {
        config.params['user_id'] = portal.user.id;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (window.hasOwnProperty('processErrorsFromAxios') && typeof window.processErrorsFromAxios === 'function') {
        window.processErrorsFromAxios(error);
    }
    return Promise.reject(error);
});

export default axiosInstance;
