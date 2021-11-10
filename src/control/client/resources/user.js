import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/user', null, {page: page, per_page: perPage});
    }

    delete(userId) {
        return this.request('delete', '/user/' + userId);
    }

    get(userId) {
        return this.request('get', '/user/' + userId);
    }

    getAllWhere(attributes, page, perPage) {
        return this.request('get', '/user/search', {}, {
            ...attributes, per_page: perPage, page: page
        });
    }

    update(userId, attributes) {
        return this.request('patch', '/user/' + userId, attributes);
    }

    create(attributes) {
        return this.request('post', '/user', attributes);
    }

    tags(userId, page, perPage) {
        return this.request('get', '/user/' + userId + '/tag', null, {page: page, per_page: perPage});
    }

    tag(userId, tagId) {
        return this.request('patch', '/user/' + userId + '/tag/' + tagId);
    }

    untag(userId, tagId) {
        return this.request('delete', '/user/' + userId + '/tag/' + tagId);
    }

    roles(userId, page, perPage) {
        return this.request('get', '/user/' + userId + '/role', null, {page: page, per_page: perPage});

    }

    addRole(userId, roleId) {
        return this.request('patch', '/user/' + userId + '/role/' + roleId);

    }

    removeRole(userId, roleId) {
        return this.request('delete', '/user/' + userId + '/role/' + roleId);

    }

    groups(userId, page, perPage) {
        return this.request('get', '/user/' + userId + '/group', null, {page: page, per_page: perPage});
    }

    addGroup(userId, groupId) {
        return this.request('patch', '/user/' + userId + '/group/' + groupId);

    }

    removeGroup(userId, groupId) {
        return this.request('delete', '/user/' + userId + '/group/' + groupId);

    }

}
