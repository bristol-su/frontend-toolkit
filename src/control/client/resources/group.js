import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/group', null, {page: page, per_page: perPage});
    }

    delete(groupId) {
        return this.request('delete', '/group/' + groupId);
    }

    get(groupId) {
        return this.request('get', '/group/' + groupId);
    }

    getAllWhere(attributes, page, perPage) {
        return this.request('get', '/group/search', {}, {
            ...attributes, per_page: perPage, page: page
        });
    }

    update(groupId, attributes) {
        return this.request('patch', '/group/' + groupId, attributes);
    }

    create(attributes) {
        return this.request('post', '/group', attributes);
    }

    tags(groupId, page, perPage) {
        return this.request('get', '/group/' + groupId + '/tag', null, {page: page, per_page: perPage});
    }

    tag(groupId, tagId) {
        return this.request('patch', '/group/' + groupId + '/tag/' + tagId);
    }

    untag(groupId, tagId) {
        return this.request('delete', '/group/' + groupId + '/tag/' + tagId);
    }

    users(groupId, page, perPage) {
        return this.request('get', '/group/' + groupId + '/user', null, {page: page, per_page: perPage});

    }

    addUser(groupId, userId) {
        return this.request('patch', '/group/' + groupId + '/user/' + userId);

    }

    removeUser(groupId, userId) {
        return this.request('delete', '/group/' + groupId + '/user/' + userId);

    }

    roles(groupId, page, perPage) {
        return this.request('get', '/group/' + groupId + '/role', null, {page: page, per_page: perPage});

    }

}
