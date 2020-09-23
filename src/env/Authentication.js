import WindowAccessor from './WindowAccessor';

export default class {
    hasUser() {
        WindowAccessor.get(['user', 'id'], null);
        return window.portal.hasOwnProperty('user') && window.portal.user !== null && window.portal.user.hasOwnProperty('id');
    }

    getUser() {

    }

}
