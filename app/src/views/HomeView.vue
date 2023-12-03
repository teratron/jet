<script lang="ts" setup>
//import {ref} from 'vue'

//const title = ref(import.meta.env.VITE_APP_TITLE)
const env = import.meta.env
</script>

<template>
    <h1>{{ env.VITE_APP_TITLE }}</h1>
    <p>HTML, CSS, SCSS, JavaScript Framework</p>
</template>
