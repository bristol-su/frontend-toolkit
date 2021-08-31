export default new class {

    set(errors) {
        this.errors = errors;
    }

    all() {
        return this.errors ?? {};
    }
}
