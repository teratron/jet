<script lang="ts" setup>
import SidebarContent from 'components/SidebarContent.vue'
</script>

<template>
    <aside class="app-sidebar">
        <slot name="sidebar">
            <SidebarContent/>
        </slot>
    </aside>
</template>
