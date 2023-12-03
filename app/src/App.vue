<script lang="ts" setup>
import {RouterView}   from 'vue-router'
import LayoutSwitcher from '@/layouts/LayoutSwitcher.vue'
import '@/assets/scss/app.scss'
</script>

<template>
    <LayoutSwitcher>
        <RouterView/>
    </LayoutSwitcher>
</template>
