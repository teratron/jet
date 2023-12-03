<script lang="ts" setup>
import ListRouterLink from './ListRouterLink.vue'
</script>

<template :class="app-header">
    <slot>
        <ListRouterLink/>
    </slot>
</template>
