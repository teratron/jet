<script lang="ts" setup>
import IconWrite      from 'components/icons/IconWrite.vue'
import AspectRatioBox from 'components/AspectRatioBox.vue'

const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
    <h1>{{ title }}</h1>
    <p>
        <icon-write color="red" height="24" width="24"/>
        HTML, CSS, SCSS, JavaScript Framework
    </p>
    <AspectRatioBox background-size="contain" height="9" width="16"/>
    <AspectRatioBox aspect-ratio="4x4" background-width="50%"/>
</template>
