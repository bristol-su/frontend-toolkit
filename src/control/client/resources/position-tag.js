import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/position-tag', null, {page: page, per_page: perPage});
    }

    delete(positionTagId) {
        return this.request('delete', '/position-tag/' + positionTagId);
    }

    get(positionTagId) {
        return this.request('get', '/position-tag/' + positionTagId);
    }

    update(positionTagId, attributes) {
        return this.request('patch', '/position-tag/' + positionTagId, attributes);
    }

    create(attributes) {
        return this.request('post', '/position-tag', attributes);
    }

    positions(positionTagId, page, perPage) {
        return this.request('get', '/position-tag/' + positionTagId + '/position', null, {page: page, per_page: perPage});
    }

    tagPosition(positionTagId, positionId) {
        return this.request('patch', '/position-tag/' + positionTagId + '/position/' + positionId);
    }

    untagPosition(positionTagId, positionId) {
        return this.request('delete', '/position-tag/' + positionTagId + '/position/' + positionId);
    }

    category(positionTagId) {
        return this.request('get', '/position-tag/' + positionTagId + '/position-tag-category');
    }
}
