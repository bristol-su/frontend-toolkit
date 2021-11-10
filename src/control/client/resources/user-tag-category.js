import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/user-tag-category', null, {page: page, per_page: perPage});
    }

    delete(userTagCategoryId) {
        return this.request('delete', '/user-tag-category/' + userTagCategoryId);
    }

    get(userTagCategoryId) {
        return this.request('get', '/user-tag-category/' + userTagCategoryId);
    }

    update(userTagCategoryId, attributes) {
        return this.request('patch', '/user-tag-category/' + userTagCategoryId, attributes);
    }

    create(attributes) {
        return this.request('post', '/user-tag-category', attributes);
    }

    tags(userTagCategoryId, page, perPage) {
        return this.request('get', '/user-tag-category/' + userTagCategoryId + '/user-tag', null, {page: page, per_page: perPage});
    }

}
