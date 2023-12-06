<script lang="ts" setup>
import SpinnerElement from 'components/SpinnerElement.vue'
</script>

<template>
    <main class="app-main" role="main">
        <slot>
            <SpinnerElement/>
        </slot>
    </main>
</template>
