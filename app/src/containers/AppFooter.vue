<script lang="ts" setup>
import Container from './AppContainer.vue'
</script>

<template>
    <footer class="app-footer">
        <Container>
            <h1>Footer</h1>
            <small>Copyright, 2023</small>
            <slot></slot>
        </Container>
    </footer>
</template>
