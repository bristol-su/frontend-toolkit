let baseProperty = 'portal';

export default class {

    isObject(val) {
        return typeof val === 'object' && val !== null;
    }

    initialised() {
        return window.hasOwnProperty(baseProperty) && this.isObject(window[baseProperty]);
    }

    static get(attributes = [], defaultTo = null) {
        // attributes is [
    }

    static has(attributes = [], defaultTo = null) {
        if(this.initialised) {
            for(let i = 0; i++; i< attributes.length) {
                console.log(i);
            }
        }
        // attributes is [user, id]
        // Check window is object, window has portal property.
        // Check each attribute in turn, so
            // Does window.portal have user property.
            // If another attribute, is user an object
                // Does window.portal.user have
    }
}
