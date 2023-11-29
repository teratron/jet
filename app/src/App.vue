<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header                   from './containers/Header.vue'
import Footer                   from './containers/Footer.vue'
import Main                     from './containers/Main.vue'
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
