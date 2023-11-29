<script lang="ts" setup>
import Container from './AppContainer.vue'
</script>

<template>
    <header id="app-header">
        <Container>
            <h1>Jettix</h1>
            <slot></slot>
        </Container>
    </header>
</template>