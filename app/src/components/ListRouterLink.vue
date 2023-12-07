<script lang="ts">
import {RouterLink} from 'vue-router'
import {routes}     from '@/router'

//const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export default {
    data() {
        return {
            routes
        }
    },
    methods: {
        capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
    },
    /*filters: {
        capitalize
    },*/
    components: {
        RouterLink
    }
}
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
                <!--                {{ item.name | capitalize }}-->
            </RouterLink>
        </template>
    </nav>
</template>
