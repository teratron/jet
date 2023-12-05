<script lang="ts" setup>
import AppContainer  from '@/containers/AppContainer.vue'
import HeaderContent from '@/components/HeaderContent.vue'
</script>

<template>
    <header class="app-header" role="banner">
        <AppContainer>
            <slot name="header">
                <HeaderContent/>
            </slot>
        </AppContainer>
    </header>
</template>
