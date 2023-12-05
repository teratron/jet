<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "test",
    data() {
        return {name: 0}
    }
})
</script>

<template>
    <div v-text="name"></div>
</template>

<style scoped>

</style>