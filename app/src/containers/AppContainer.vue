<script lang="ts" setup>
import SpinnerElement from 'components/SpinnerElement.vue'
</script>

<template>
    <section class="app-container">
        <slot>
            <SpinnerElement/>
        </slot>
    </section>
</template>
