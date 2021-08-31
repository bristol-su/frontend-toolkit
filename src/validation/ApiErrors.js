export default new class {

    set(errors) {
        console.log('Setting API errors');
        console.log(errors);
        this.errors = errors;
    }

    all() {
        return this.errors ?? {};
    }
}
