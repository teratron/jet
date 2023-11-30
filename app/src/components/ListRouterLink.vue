<script lang="ts" setup>
import {ref}        from 'vue'
import {RouterLink} from 'vue-router'
import {routes}     from '@/router'

const views = ref(routes)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<template>
    <nav>
        <RouterLink
            v-for="item in views"
            :to="item.path"
        >
            <li>{{ capitalize(item.name) }}</li>
        </RouterLink>
        <!--        <RouterLink to="/">Home</RouterLink>-->
        <!--        <RouterLink to="/about">About</RouterLink>-->
        <!--        <RouterLink to="/layout">Layout</RouterLink>-->
        <!--        <RouterLink to="/grid">Grid</RouterLink>-->
        <!--        <RouterLink to="/reset">Reset</RouterLink>-->
        <!--        <RouterLink to="/form">Form</RouterLink>-->
        <!--        <RouterLink to="/element">Element</RouterLink>-->
    </nav>
</template>
