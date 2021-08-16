let baseProperty = 'portal';

export default new class {

    isObject(val) {
        return typeof val === 'object' && val !== null;
    }

    isInitialised() {
        return window.hasOwnProperty(baseProperty) && this.isObject(window[baseProperty]);
    }

    get(attributes = [], defaultTo = null) {
        if(!Array.isArray(attributes)) {
            attributes = [attributes];
        }
        if (this.has(attributes)) {
            return attributes.reduce((returnVal, attribute) => returnVal[attribute], window[baseProperty]);
        }
        return defaultTo;
    }

    has(attributes = []) {
        if(!Array.isArray(attributes)) {
            attributes = [attributes];
        }
        if (this.isInitialised()) {
            for (let i = 0; i < attributes.length; i++) {
                let testVal = window[baseProperty];
                for(let j = 0; j < i; j++) {
                    testVal = testVal[attributes[j]];
                }
                if(!this.isObject(testVal) || !testVal.hasOwnProperty(attributes[i])) {
                    return false;
                }
            }
        }
        return true;
    }
}
