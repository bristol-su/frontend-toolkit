import WindowAccessor from './../utils/WindowAccessor';

export default new class {
    has(key) {
        return WindowAccessor.has(['old_input', key]);
    }

    get(key, otherwise) {
        return WindowAccessor.get(['old_input', key], otherwise);
    }
}
