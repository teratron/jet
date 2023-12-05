<script lang="ts" setup>
import HeaderContent from '@/components/HeaderContent.vue'
</script>

<template>
    <header class="app-header" role="banner">
        <slot name="header">
            <HeaderContent/>
        </slot>
    </header>
</template>
