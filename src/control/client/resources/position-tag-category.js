import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/position-tag-category', null, {page: page, per_page: perPage});
    }

    delete(positionTagCategoryId) {
        return this.request('delete', '/position-tag-category/' + positionTagCategoryId);
    }

    get(positionTagCategoryId) {
        return this.request('get', '/position-tag-category/' + positionTagCategoryId);
    }

    update(positionTagCategoryId, attributes) {
        return this.request('patch', '/position-tag-category/' + positionTagCategoryId, attributes);
    }

    create(attributes) {
        return this.request('post', '/position-tag-category', attributes);
    }

    tags(positionTagCategoryId, page, perPage) {
        return this.request('get', '/position-tag-category/' + positionTagCategoryId + '/position-tag', null, {page: page, per_page: perPage});
    }

}
