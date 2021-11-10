import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/user-tag', null, {page: page, per_page: perPage});
    }

    delete(userTagId) {
        return this.request('delete', '/user-tag/' + userTagId);
    }

    get(userTagId) {
        return this.request('get', '/user-tag/' + userTagId);
    }

    update(userTagId, attributes) {
        return this.request('patch', '/user-tag/' + userTagId, attributes);
    }

    create(attributes) {
        return this.request('post', '/user-tag', attributes);
    }

    users(userTagId, page, perPage) {
        return this.request('get', '/user-tag/' + userTagId + '/user', null, {page: page, per_page: perPage});
    }

    tagUser(userTagId, userId) {
        return this.request('patch', '/user-tag/' + userTagId + '/user/' + userId);
    }

    untagUser(userTagId, userId) {
        return this.request('delete', '/user-tag/' + userTagId + '/user/' + userId);
    }

    category(userTagId) {
        return this.request('get', '/user-tag/' + userTagId + '/user-tag-category');
    }
}
