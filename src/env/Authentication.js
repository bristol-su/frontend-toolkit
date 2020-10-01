import WindowAccessor from './WindowAccessor';

export default new class {
    hasUser() {
        return WindowAccessor.has(['user', 'id']) || WindowAccessor.has(['db_user', 'control_user']);
    }

    getUser() {
        let user = WindowAccessor.get(['user'], null);
        if(user === null) {
            return this.getControlUserFromDbUser();
        }
        return user;
    }

    getDataUser() {
        return (this.hasUser() ? this.getUser().data : null);
    }

    getControlUserFromDbUser() {
        return WindowAccessor.get(['db_user', 'control_user'], null);
    }

    getAuthenticatedUser() {
        return WindowAccessor.get(['db_user'], null);
    }

    isGuest() {
        return !this.getAuthenticatedUser();
    }

}
