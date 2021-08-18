import environment from './../environment/index';
import WindowAccessor from '../utils/WindowAccessor';

export default new class {
    moduleUrl() {
        if(WindowAccessor.has('API_URL') && environment.activity.has() && environment.moduleInstance.has()) {
            return [
              WindowAccessor.get('API_URL'),
                (environment.authentication.admin() ? 'a' : 'p'),
                environment.activity.get().slug,
                environment.moduleInstance.get().slug,
                environment.moduleInstance.get().alias
              ].join('/');
        }
        return '';
    }
}
