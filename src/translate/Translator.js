import NamedRoutes from '@/routes/NamedRoutes';
import Client from '@/http/baseClient';

export default new class {
    translate(text) {
        return new Promise((resolve, reject) => {
            Client.post(NamedRoutes.path('translator.translate'), {line: text})
              .then(response => resolve(response.data))
              .catch(error => reject(error));
        })
    }
}
