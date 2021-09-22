import environment from './../environment/index';
import WindowAccessor from '../utils/WindowAccessor';

export default new class {
    baseApiUrl() {
        if(WindowAccessor.has('API_URL')) {
            return WindowAccessor.get('API_URL')
        }
        return '';
    }
    baseWebUrl() {
        if(WindowAccessor.has('APP_URL')) {
            return WindowAccessor.get('APP_URL')
        }
        return '';
    }
}
