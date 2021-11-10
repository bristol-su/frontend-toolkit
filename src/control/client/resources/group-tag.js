import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/group-tag', null, {page: page, per_page: perPage});
    }

    delete(groupTagId) {
        return this.request('delete', '/group-tag/' + groupTagId);
    }

    get(groupTagId) {
        return this.request('get', '/group-tag/' + groupTagId);
    }

    update(groupTagId, attributes) {
        return this.request('patch', '/group-tag/' + groupTagId, attributes);
    }

    create(attributes) {
        return this.request('post', '/group-tag', attributes);
    }

    groups(groupTagId, page, perPage) {
        return this.request('get', '/group-tag/' + groupTagId + '/group', null, {page: page, per_page: perPage});
    }

    tagGroup(groupTagId, groupId) {
        return this.request('patch', '/group-tag/' + groupTagId + '/group/' + groupId);
    }

    untagGroup(groupTagId, groupId) {
        return this.request('delete', '/group-tag/' + groupTagId + '/group/' + groupId);
    }

    category(groupTagId) {
        return this.request('get', '/group-tag/' + groupTagId + '/group-tag-category');
    }
}
