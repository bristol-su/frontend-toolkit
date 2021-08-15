import WindowAccessor from './../utils/WindowAccessor';

export default new class {
    /**
     * Checks if a control user exists from control or from the logged in user
     *
     * @returns {*}
     */
    hasUser() {
        return WindowAccessor.has(['user', 'id']);
    }

    /**
     * Get a control user from control or from the logged in user
     * @returns {*}
     */
    getUser() {
        return WindowAccessor.get(['user'], null);
    }

    /**
     * Get a data user from control or from the logged in user
     * @returns {*|null}
     */
    getDataUser() {
        return (this.hasUser() ? this.getUser().data : null);
    }

    /**
     * Check if the current session is a guest (no user is logged in)
     *
     * @returns {boolean}
     */
    isGuest() {
        return !this.getUser();
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
