import environment from './../environment/index';

export default new class {
    /**
     * Get the additional query parameters for a url for the web
     *
     * @returns {string|{}}
     */
    getWebQueryParameters() {
        let params = {};
        if(environment.authentication.hasUser()) {
            params.u = environment.authentication.getUser().id;
        }
        if(environment.authentication.hasGroup()) {
            params.g = environment.authentication.getGroup().id;
        }
        if(environment.authentication.hasRole()) {
            params.r = environment.authentication.getRole().id;
        }
        if(environment.activityInstance.has()) {
            params.a = environment.activityInstance.get().id;
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
        if(environment.authentication.hasUser()) {
            params.user_id = environment.authentication.getUser().id;
        }
        if(environment.authentication.hasGroup()) {
            params.group_id = environment.authentication.getGroup().id;
        }
        if(environment.authentication.hasRole()) {
            params.role_id = environment.authentication.getRole().id;
        }
        if(environment.activityInstance.has()) {
            params.activity_instance_id = environment.activityInstance.get().id;
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

        Object.entries(params).forEach(([key, value]) => {
            parsedUrl.searchParams.set(key, value);
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

        Object.entries(params).forEach(([key, value]) => {
            parsedUrl.searchParams.set(key, value);
        })
        return parsedUrl.toString();
    }
}
