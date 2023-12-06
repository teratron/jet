<script lang="ts" setup>
import BaseLayout from './BaseLayout.vue'
//import GridLayout from './GridLayout.vue'
//import DashboardLayout from './DashboardLayout.vue'
//import BlankLayout from './BlankLayout.vue'
</script>

<template>
    <BaseLayout>
        <slot/>
    </BaseLayout>
    <!--<GridLayout>
            <slot name="grid-layout"/>
        </GridLayout>-->
    <!--<BlankLayout :v-else-if="true"/>-->
    <!--<DashboardLayout name="dashboard-layout"/> name="base-layout"-->
</template>
