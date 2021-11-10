import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/group-tag-category', null, {page: page, per_page: perPage});
    }

    delete(groupTagCategoryId) {
        return this.request('delete', '/group-tag-category/' + groupTagCategoryId);
    }

    get(groupTagCategoryId) {
        return this.request('get', '/group-tag-category/' + groupTagCategoryId);
    }

    update(groupTagCategoryId, attributes) {
        return this.request('patch', '/group-tag-category/' + groupTagCategoryId, attributes);
    }

    create(attributes) {
        return this.request('post', '/group-tag-category', attributes);
    }

    tags(groupTagCategoryId, page, perPage) {
        return this.request('get', '/group-tag-category/' + groupTagCategoryId + '/group-tag', null, {page: page, per_page: perPage});
    }

}
