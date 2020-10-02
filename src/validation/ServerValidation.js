import WindowAccessor from '../utils/WindowAccessor';

export default new class {

    has(key) {
        return WindowAccessor.has(['server_validation_errors', key])
    }

    get(key) {
        return WindowAccessor.get(['server_validation_errors', key], [])
    }

    all() {
        return WindowAccessor.get(['server_validation_errors']);
    }
}
