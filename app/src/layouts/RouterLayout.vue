<script lang="ts" setup>
import BaseLayout from 'layouts/BaseLayout.vue'
//import GridLayout from 'layouts/GridLayout.vue'
//import DashboardLayout from 'layouts/DashboardLayout.vue'
//import BlankLayout from 'layouts/BlankLayout.vue'
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
