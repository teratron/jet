<script lang="ts" setup>
import AppHeader from '@/containers/AppHeader.vue'
import AppFooter from '@/containers/AppFooter.vue'
import AppMain   from '@/containers/AppMain.vue'
</script>

<template>
    <AppHeader #header>
        <slot/>
    </AppHeader>
    <AppMain #main>
        <slot/>
    </AppMain>
    <AppFooter #footer>
        <slot/>
    </AppFooter>
</template>
