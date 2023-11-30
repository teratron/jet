<script lang="ts" setup>
import {ref} from 'vue'

const groceryList = ref([
    {id: 0, text: 'Vegetables'},
    {id: 1, text: 'Cheese'},
    {id: 2, text: 'Whatever else humans are supposed to eat'}
])
</script>

<template>
    <h1>Jettix</h1>
    <p>HTML, CSS, SCSS, JavaScript Framework</p>
    <ol>
        <li
            v-for="item in groceryList"
            :key="item.id"
        >
            {{ item.text }}
        </li>
    </ol>
</template>
