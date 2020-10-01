<template>
    <input type="hidden" name="_token" :value="csrf"/>
</template>

<script>
import Csrf from './index';

export default {
    name: "CsrfToken",
    computed: {
        csrf() {
            return Csrf.csrf();
        }
    }
}
</script>
