import BaseResource from './../baseresource';

export default new class extends BaseResource{

    all(page, perPage) {
        return this.request('get', '/role-tag-category', null, {page: page, per_page: perPage});
    }

    delete(roleTagCategoryId) {
        return this.request('delete', '/role-tag-category/' + roleTagCategoryId);
    }

    get(roleTagCategoryId) {
        return this.request('get', '/role-tag-category/' + roleTagCategoryId);
    }

    update(roleTagCategoryId, attributes) {
        return this.request('patch', '/role-tag-category/' + roleTagCategoryId, attributes);
    }

    create(attributes) {
        return this.request('post', '/role-tag-category', attributes);
    }

    tags(roleTagCategoryId, page, perPage) {
        return this.request('get', '/role-tag-category/' + roleTagCategoryId + '/role-tag', null, {page: page, per_page: perPage});
    }

}
