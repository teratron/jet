<script lang="ts" setup>
import Main   from '../containers/Main.vue'
import Footer from '../containers/Footer.vue'
import Header from '../containers/Header.vue'
import Button from '../components/Button.vue'

/*export default Home = {
    computed: {
        username() {
            // Скоро мы увидим, что такое `params`
            return this.$route.params.username
        }
    },
    methods: {
        goToDashboard() {
            if (isAuthenticated) {
                this.$router.push('/dashboard')
            } else {
                this.$router.push('/login')
            }
        }
    }
}*/
</script>

<template>
    <Header>Home</Header>
    <Main>
        <h1>Jettix</h1>
        <p>HTML, CSS, SCSS, JavaScript Framework</p>
        <Button/>
    </Main>
    <Footer></Footer>
</template>

<style scoped>

</style>