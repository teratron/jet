<script lang="ts" setup>
import Container      from './AppContainer.vue'
import ListRouterLink from '../components/ListRouterLink.vue'
</script>

<template>
    <header id="app-header">
        <Container>
            <slot></slot>
            <ListRouterLink/>
        </Container>
    </header>
</template>

<style scoped>
#app-header nav {
    display:         flex;
    align-items:     center;
    flex-direction:  row;
    flex-wrap:       nowrap;
    justify-content: space-between;
}
</style>