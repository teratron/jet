<script lang="ts" setup>
import AppHeader    from 'containers/AppHeader.vue'
import AppFooter    from 'containers/AppFooter.vue'
import AppMain      from 'containers/AppMain.vue'
import AppContainer from 'containers/AppContainer.vue'
</script>

<template>
    <AppHeader>

    </AppHeader>
    <AppMain>
        <AppContainer>
            <slot/>
        </AppContainer>
    </AppMain>
    <AppFooter>
        <AppContainer/>
    </AppFooter>
</template>
