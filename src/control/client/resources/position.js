import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/position', null, {page: page, per_page: perPage});
    }

    delete(positionId) {
        return this.request('delete', '/position/' + positionId);
    }

    get(positionId) {
        return this.request('get', '/position/' + positionId);
    }

    getAllWhere(attributes, page, perPage) {
        return this.request('get', '/position/search', {}, {
            ...attributes, per_page: perPage, page: page
        });
    }

    update(positionId, attributes) {
        return this.request('patch', '/position/' + positionId, attributes);
    }

    create(attributes) {
        return this.request('post', '/position', attributes);
    }

    tags(positionId, page, perPage) {
        return this.request('get', '/position/' + positionId + '/tag', null, {page: page, per_page: perPage});
    }

    tag(positionId, tagId) {
        return this.request('patch', '/position/' + positionId + '/tag/' + tagId);
    }

    untag(positionId, tagId) {
        return this.request('delete', '/position/' + positionId + '/tag/' + tagId);
    }

    roles(positionId, page, perPage) {
        return this.request('get', '/position/' + positionId + '/role', null, {page: page, per_page: perPage});

    }

}
