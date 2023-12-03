<script lang="ts" setup>
import HeaderContent from '@/components/HeaderContent.vue'
</script>

<template>
    <header class="app-header">
        <slot>
            <HeaderContent/>
        </slot>
    </header>
</template>
