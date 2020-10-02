import WindowAccessor from '@/utils/WindowAccessor';

export default new class {
    /**
     * Checks if a control user exists from control or from the logged in user
     *
     * @returns {*}
     */
    has() {
        return WindowAccessor.has(['activity_instance', 'id']);
    }

    /**
     * Get a control user through control only
     *
     * @returns {*}
     */
    get() {
        return WindowAccessor.get(['activity_instance'], null);
    }

}
