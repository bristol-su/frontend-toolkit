import client from './client';

export default class {

    request(method, url, body, params)
    {
        return client.request({
            url: url,
            method: method,
            data: body,
            params: params,
        })
    }
}
