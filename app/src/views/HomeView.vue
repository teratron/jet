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
    <div class="jx-scheme-primary">jx-scheme-primary</div>
    <div class="jx-scheme-primary-dark">jx-scheme-primary-dark</div>
    <div class="jx-scheme-primary-light">jx-scheme-primary-dark</div>
    <div class="jx-scheme-primary-border">jx-scheme-primary-border</div>
    <div class="jx-scheme-primary-border-dark">jx-scheme-primary-border-dark</div>
    <div class="jx-scheme-primary-border-light">jx-scheme-primary-border-dark</div>
    <div class="jx-scheme-primary-state">jx-scheme-primary-state</div>
</template>
