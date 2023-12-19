<script lang="ts" setup>
import IconWrite       from 'components/icons/IconWrite.vue'
import ParentComponent from 'components/ParentComponent.vue'

const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
    <h1>{{ title }}</h1>
    <p>
        <icon-write color="red"/>
        HTML, CSS, SCSS, JavaScript Framework
    </p>
    <parent-component/>
</template>

<style scoped>
</style>
