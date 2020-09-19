import Cookies from 'js-cookie'

export default new class {
    get(preference) {
        return Cookies.get(preference);
    }

    set(preference, value) {
        Cookies.set(preference, value, {expires: 3000});
    }
};
