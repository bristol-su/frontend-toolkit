import routes from './routes/index';
import environment from './environment/index';
import validation from './validation/index';
import utils from './utils/index';
import csrf from './csrf/index';
import http from './http/client';
import httpBasic from './http/basicClient';
import generator from './formGenerator/index';
import ControlClass from '@bristol-su/control-js-api-client';

const control = new ControlClass(routes.basic.baseApiUrl() + '/control', httpBasic);

export {
    csrf,
    environment,
    http,
    httpBasic,
    routes,
    utils,
    validation,
    generator,
    control
}
