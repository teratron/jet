<script lang="ts" setup>
import AppHeader from 'containers/AppHeader.vue'
import AppFooter from 'containers/AppFooter.vue'
import AppMain   from 'containers/AppMain.vue'
</script>

<template>
    <app-header container/>
    <app-main container>
        <slot/>
    </app-main>
    <app-footer container/>
</template>
