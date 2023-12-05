<script lang="ts" setup>
import AppHeader    from '@/containers/AppHeader.vue'
import AppFooter    from '@/containers/AppFooter.vue'
import AppMain      from '@/containers/AppMain.vue'
import AppContainer from '@/containers/AppContainer.vue'
</script>

<template>
    <AppHeader #header>
        <AppContainer>
            <slot/>
        </AppContainer>
    </AppHeader>
    <AppMain #default>
        <AppContainer>
            <slot/>
        </AppContainer>
    </AppMain>
    <AppFooter #footer>
        <AppContainer/>
    </AppFooter>
</template>
