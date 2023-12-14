<script lang="ts" setup>
import IconWrite  from 'components/icons/IconWrite.vue'
import TestParent from 'components/TestParent.vue'

const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
    <h1>{{ title }}</h1>
    <p>
        <icon-write color="red"/>
        HTML, CSS, SCSS, JavaScript Framework
    </p>
    <test-parent></test-parent>
</template>
