<script lang="ts" setup>
import AppHeader from '@/containers/AppHeader.vue'
import AppFooter from '@/containers/AppFooter.vue'
import AppMain   from '@/containers/AppMain.vue'
</script>

<template>
    <AppHeader #header>
        <slot/>
    </AppHeader>
    <AppMain #default>
        <slot/>
    </AppMain>
    <AppFooter #footer>
        <slot/>
    </AppFooter>
</template>

<style scoped>
.app-header,
.app-footer,
.app-main {
    width:     100%;
    max-width: 800px;
}
</style>