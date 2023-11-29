<script setup lang="ts">
import Container from './AppContainer.vue'
</script>

<template>
    <main id="app-main">
        <Container>
            <slot></slot>
        </Container>
    </main>
</template>