import env from './../env/index';

export default new class {
    /**
     * Get the additional query parameters for a url for the web
     *
     * @returns {string|{}}
     */
    getWebQueryParameters() {
        let params = {};
        if(env.authentication.hasUser()) {
            params.u = env.authentication.getUser();
        }
        if(env.authentication.hasGroup()) {
            params.g = env.authentication.getGroup();
        }
        if(env.authentication.hasRole()) {
            params.r = env.authentication.getRole();
        }
        if(env.activityInstance.has()) {
            params.a = env.activityInstance.get();
        }
        return params;
    }

    /**
     * Get the additional query parameters for a url for an API
     *
     * @returns {string|{}}
     */
    getApiQueryParameters() {
        let params = {};
        if(env.authentication.hasUser()) {
            params.user_id = env.authentication.getUser();
        }
        if(env.authentication.hasGroup()) {
            params.group_id = env.authentication.getGroup();
        }
        if(env.authentication.hasRole()) {
            params.role_id = env.authentication.getRole();
        }
        if(env.activityInstance.has()) {
            params.activity_instance_id = env.activityInstance.get();
        }
        return params;
    }

    /**
     * Add the query string to a url for a web
     *
     * @param url
     * @returns {string}
     */
    addQueryStringToWebUrl(url) {
        let parsedUrl = new URL(url);
        let params = this.getWebQueryParameters();

        Object.keys(params).each(key => {
            parsedUrl.searchParams.set(key, params[key]);
        })
        return parsedUrl.toString();
    }

    /**
     * Add the query string to a url for an api
     *
     * @param url
     * @returns {string}
     */
    addQueryStringToApiUrl(url) {
        let parsedUrl = new URL(url);
        let params = this.getWebQueryParameters();

        Object.keys(params).each(key => {
            parsedUrl.searchParams.set(key, params[key]);
        })
        return parsedUrl.toString();
    }
}
