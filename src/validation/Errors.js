import WindowAccessor from '../utils/WindowAccessor';
import ApiErrors from './ApiErrors';

export default new class {

    has(key) {
        return WindowAccessor.has(['server_validation_errors', key])
    }

    get(key) {
        return WindowAccessor.get(['server_validation_errors', key], [])
    }

    all() {
        return Object.assign(WindowAccessor.get(['server_validation_errors']), ApiErrors.all());
    }
}
