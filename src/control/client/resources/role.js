import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/role', null, {page: page, per_page: perPage});
    }

    delete(roleId) {
        return this.request('delete', '/role/' + roleId);
    }

    get(roleId) {
        return this.request('get', '/role/' + roleId);
    }

    update(roleId, attributes) {
        return this.request('patch', '/role/' + roleId, attributes);
    }

    create(attributes) {
        return this.request('post', '/role', attributes);
    }

    tags(roleId, page, perPage) {
        return this.request('get', '/role/' + roleId + '/tag', null, {page: page, per_page: perPage});
    }

    tag(roleId, tagId) {
        return this.request('patch', '/role/' + roleId + '/tag/' + tagId);
    }

    untag(roleId, tagId) {
        return this.request('delete', '/role/' + roleId + '/tag/' + tagId);
    }

    users(roleId, page, perPage) {
        return this.request('get', '/role/' + roleId + '/user', null, {page: page, per_page: perPage});

    }

    addUser(roleId, userId) {
        return this.request('patch', '/role/' + roleId + '/user/' + userId);

    }

    removeUser(roleId, userId) {
        return this.request('delete', '/role/' + roleId + '/user/' + userId);

    }

    group(roleId) {
        return this.request('get', '/role/' + roleId + '/group');
    }

    position(roleId) {
        return this.request('get', '/role/' + roleId + '/position');
    }

}
