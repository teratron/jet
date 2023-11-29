<script setup lang="ts">
import Container from './Container.vue'
</script>

<template>
    <header id="app-header">
        <Container>
            <h1>Jettix</h1>
            <slot></slot>
        </Container>
    </header>
</template>