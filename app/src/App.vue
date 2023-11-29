<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header                   from './containers/AppHeader.vue'
import Footer                   from './containers/AppFooter.vue'
import Main                     from './containers/AppMain.vue'
import './assets/scss/app.scss'
</script>

<template>
    <Header></Header>
    <Main>
        <h1>Jettix</h1>
        <p>HTML, CSS, SCSS, JavaScript Framework</p>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </Main>
    <Footer></Footer>
    <RouterView/>
</template>
