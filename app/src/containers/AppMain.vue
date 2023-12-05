<script lang="ts" setup>
import SpinnerElement from 'components/SpinnerElement.vue'
</script>

<template>
    <main class="app-main" role="main">
        <slot name="main">
            <SpinnerElement/>
        </slot>
    </main>
</template>
