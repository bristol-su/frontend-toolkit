<template>
    <div :class="{'v-skeleton-loader v-skeleton-loader--is-loading': isTranslating}">
        <span v-if="!isTranslating">
            {{displayText}}
        </span>
    </div>
</template>

<script>

export default {
    name: "Translate",

    props: {
        text: {
            required: false,
            type: String,
            default: null
        }
    },

    data() {
        return {
            translated: null,
            loading: false
        }
    },

    watch: {
        text(val) {
            this.translate(val);
        }
    },

    created() {
        this.translate(this.text);
    },

    methods: {
        translate(text) {
            this.loading = true;
            this.$tools.translate.translator.translate(text)
                .then(translation => this.translated = translation)
                .catch(error => console.log(error))
                .finally(() => this.loading = false);
        }
    },

    computed: {
        isTranslated() {
            return !this.isTranslating && this.translated !== null;
        },
        isTranslating() {
            return this.loading;
        },
        displayText() {
            if(this.isTranslated) {
                return this.translated;
            }
            return this.text;
        }
    }

}
</script>

<style scoped>
.translate-loading {

}
</style>
