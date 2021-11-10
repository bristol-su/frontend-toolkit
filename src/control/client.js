import ControlClass from '@bristol-su/control-js-api-client';
import routes from '../routes';
import httpBasic from '../http/basicClient';

export default new class {
    client() {
        return new ControlClass(routes.basic.baseApiUrl() + '/control', httpBasic);
    }

}
