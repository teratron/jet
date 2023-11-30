<script lang="ts" setup>
import Container from './AppContainer.vue'
</script>

<template>
    <main id="app-main">
        <Container>
            <slot></slot>
        </Container>
    </main>
</template>
