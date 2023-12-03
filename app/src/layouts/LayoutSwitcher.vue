<script lang="ts" setup>
import BaseLayout      from './BaseLayout.vue'
import DashboardLayout from './DashboardLayout.vue'
import BlankLayout     from './BlankLayout.vue'
</script>

<template>
    <BaseLayout :v-if="false"/>
    <BlankLayout :v-else-if="true"/>
    <DashboardLayout/>
</template>
