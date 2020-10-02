import WindowAccessor from '@/utils/WindowAccessor';

export default new class {
    get(key) {
        if(WindowAccessor.has(['site_settings', key])) {
            return WindowAccessor.get(['site_settings', key])
        }
        throw Error('Could not find setting ' + key);
    }
};
