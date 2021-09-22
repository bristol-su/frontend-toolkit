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
        let serverErrors = WindowAccessor.get(['server_validation_errors'], {});
        if(Array.isArray(serverErrors)) {
            serverErrors = {};
        }
        return Object.assign(serverErrors, ApiErrors.all());
    }
}
