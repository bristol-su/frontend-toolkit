export default new class {
    csrf() {
        return document.head.querySelector('meta[name="csrf-token"]').content
    }
}
