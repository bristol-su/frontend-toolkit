import WindowAccessor from '@/utils/WindowAccessor';

export default new class {
    /**
     * Checks if a control user exists from control or from the logged in user
     *
     * @returns {*}
     */
    hasUser() {
        return WindowAccessor.has(['user', 'id']) || WindowAccessor.has(['db_user', 'control_user']);
    }

    /**
     * Get a control user through control only
     *
     * @returns {*}
     */
    getControlUser() {
        return WindowAccessor.get(['user'], null);
    }

    /**
     * Get a control user from control or from the logged in user
     * @returns {*}
     */
    getUser() {
        let user = this.getControlUser();
        if(user === null) {
            return this.getControlUserFromDbUser();
        }
        return user;
    }

    /**
     * Get a data user from control or from the logged in user
     * @returns {*|null}
     */
    getDataUser() {
        return (this.hasUser() ? this.getUser().data : null);
    }

    /**
     * Get a control user through the logged in user
     *
     * @returns {*}
     */
    getControlUserFromDbUser() {
        return WindowAccessor.get(['db_user', 'control_user'], null);
    }

    /**
     * Get the database user
     * 0
     * @returns {*}
     */
    getAuthenticatedUser() {
        return WindowAccessor.get(['db_user'], null);
    }

    /**
     * Check if the current session is a guest (no user is logged in)
     *
     * @returns {boolean}
     */
    isGuest() {
        return !this.getAuthenticatedUser();
    }

    hasRole() {
        return WindowAccessor.has(['role', 'id']);
    }

    getRole() {
        return WindowAccessor.get(['role', 'id']);
    }

    hasGroup() {
        return WindowAccessor.has(['group', 'id']);
    }

    getGroup() {
        return WindowAccessor.get(['group', 'id']);
    }

    admin() {
        return WindowAccessor.get(['admin'], false)
    }
}
