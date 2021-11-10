import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/role-tag', null, {page: page, per_page: perPage});
    }

    delete(roleTagId) {
        return this.request('delete', '/role-tag/' + roleTagId);
    }

    get(roleTagId) {
        return this.request('get', '/role-tag/' + roleTagId);
    }

    update(roleTagId, attributes) {
        return this.request('patch', '/role-tag/' + roleTagId, attributes);
    }

    create(attributes) {
        return this.request('post', '/role-tag', attributes);
    }

    roles(roleTagId, page, perPage) {
        return this.request('get', '/role-tag/' + roleTagId + '/role', null, {page: page, per_page: perPage});
    }

    tagRole(roleTagId, roleId) {
        return this.request('patch', '/role-tag/' + roleTagId + '/role/' + roleId);
    }

    untagRole(roleTagId, roleId) {
        return this.request('delete', '/role-tag/' + roleTagId + '/role/' + roleId);
    }

    category(roleTagId) {
        return this.request('get', '/role-tag/' + roleTagId + '/role-tag-category');
    }
}
