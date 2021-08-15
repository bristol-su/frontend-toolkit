import environment from './../environment/index';
import WindowAccessor from '../utils/WindowAccessor';
import {env} from 'webpack-cli/bin/.eslintrc';

export default new class {
    moduleUrl() {
        if(WindowAccessor.has('APP_URL') && environment.activity.has() && environment.moduleInstance.has()) {
            return [
              WindowAccessor.has('APP_URL'),
                (environment.authentication.admin() ? 'a' : 'p'),
                environment.activity.get().slug,
                environment.moduleInstance.get().slug,
                environment.moduleInstance.get().alias
              ].join('/');
        }
        throw new Error('The dependencies to generate the current module URL were not loaded globally');
    }
}
