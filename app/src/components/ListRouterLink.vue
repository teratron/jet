<script lang="ts" setup>
import {ref}        from 'vue'
import {RouterLink} from 'vue-router'
import {routes}     from '@/router'

const views = ref(routes)
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<template>
    <nav>
        <RouterLink
            v-for="item in views"
            :key="item.name"
            :to="item.path"
        >
            {{ capitalize(item.name) }}
        </RouterLink>
    </nav>
</template>
