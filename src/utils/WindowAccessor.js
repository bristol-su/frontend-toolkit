let baseProperty = 'portal';

export default new class {

    isObject(val) {
        return typeof val === 'object' && val !== null;
    }

    isInitialised() {
        return global.hasOwnProperty(baseProperty) && this.isObject(global[baseProperty]);
    }

    get(attributes = [], defaultTo = null) {
        if(!Array.isArray(attributes)) {
            attributes = [attributes];
        }
        if (this.has(attributes)) {
            return attributes.reduce((returnVal, attribute) => returnVal[attribute], global[baseProperty]);
        }
        return defaultTo;
    }

    has(attributes = []) {
        if(!Array.isArray(attributes)) {
            attributes = [attributes];
        }
        if (this.isInitialised()) {
            for (let i = 0; i < attributes.length; i++) { // Iterate through each of the attrbutes given
                let testVal = global[baseProperty]; // Get the base attribute
                for(let j = 0; j < i; j++) { // Iterate through each of the attributes given, starting with just the first, then the first and second etc.
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
