<script lang="ts" setup>
import AppSidebar from 'containers/AppSidebar.vue'
import AppHeader  from 'containers/AppHeader.vue'
import AppFooter  from 'containers/AppFooter.vue'
import AppMain    from 'containers/AppMain.vue'
</script>

<template>
    <AppSidebar>
        <AppHeader/>
        <slot/>
        <AppFooter/>
    </AppSidebar>
    <AppMain>
        <AppHeader/>
        <slot/>
        <AppFooter/>
    </AppMain>
</template>
