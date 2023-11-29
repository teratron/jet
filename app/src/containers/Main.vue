<script setup lang="ts">
import Container from './Container.vue'
</script>

<template>
    <main id="app-main">
        <Container>
            <slot></slot>
        </Container>
    </main>
</template>