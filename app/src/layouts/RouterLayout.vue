<script lang="ts" setup>
import GridLayout from './GridLayout.vue'
//import BaseLayout from './BaseLayout.vue'
//import DashboardLayout from './DashboardLayout.vue'
//import BlankLayout     from './BlankLayout.vue'
</script>

<template>
    <!--    <BaseLayout>
            <slot/>
        </BaseLayout>-->
    <GridLayout>
        <slot/>
    </GridLayout>
    <!--    <BlankLayout :v-else-if="true"/>-->
    <!--    <DashboardLayout name="dashboard-layout"/>-->
</template>
