<script lang="ts" setup>
import {RouterLink} from 'vue-router'
import {routes}     from '@/router'

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<template>
    <nav>
        <template
            v-for="item in routes"
            :key="item.name"
        >
            <RouterLink
                v-if="item.name !== 'NotFound'"
                :to="item.path"
            >
                {{ capitalize(item.name) }}
            </RouterLink>
        </template>
    </nav>
</template>
