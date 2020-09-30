import WindowAccessor from './WindowAccessor';

export default new class {
    hasUser() {
        WindowAccessor.get(['user', 'id'], null);
        return window.portal.hasOwnProperty('user') && window.portal.user !== null && window.portal.user.hasOwnProperty('id');
    }

    getUser() {

    }

    getAuthenticatedUser() {
        return WindowAccessor.get(['db_user'], null);
    }

    isGuest() {
        return !this.getAuthenticatedUser();
    }

}
