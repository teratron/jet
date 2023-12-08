<script lang="ts" setup>
import {ref}       from 'vue'
import IconWrite   from 'components/icons/IconWrite.vue'
import AspectRatio from 'components/AspectRatio.vue'

const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<template>
    <h1>{{ title }}</h1>
    <p>
        <icon-write color="red" height="24" width="24"/>
        HTML, CSS, SCSS, JavaScript Framework
    </p>
    <AspectRatio height="9" width="16"/>
    <AspectRatio
        aspect-ratio="2x1"
        background-color="blue"
        background-size="contain"
        background-width="50%"
    />
</template>
