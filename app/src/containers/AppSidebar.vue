<script lang="ts" setup>
import SidebarContent from 'components/SidebarContent.vue'
</script>

<template>
    <aside class="app-sidebar">
        <slot>
            <sidebar-content/>
        </slot>
    </aside>
</template>
