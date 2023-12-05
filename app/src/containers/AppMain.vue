<script lang="ts" setup>
import AppContainer  from '@/containers/AppContainer.vue'
</script>

<template>
    <main class="app-main" role="main">
        <AppContainer>
            <slot name="main"/>
        </AppContainer>
    </main>
</template>
