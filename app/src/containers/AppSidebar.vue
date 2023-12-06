<script lang="ts" setup>
import SidebarContent from 'components/SidebarContent.vue'
</script>

<template>
    <aside class="app-sidebar">
        <slot>
            <SidebarContent/>
        </slot>
    </aside>
</template>
