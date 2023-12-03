<script lang="ts" setup>
import BaseLayout      from './BaseLayout.vue'
//import DashboardLayout from './DashboardLayout.vue'
//import BlankLayout     from './BlankLayout.vue'
</script>

<template>
    <BaseLayout>
        <slot/>
    </BaseLayout>
<!--    <BlankLayout :v-else-if="true"/>-->
<!--    <DashboardLayout name="dashboard-layout"/>-->
</template>
