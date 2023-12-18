<script setup>
import ChildrenComponent from 'components/ChildrenComponent.vue'
import {provide, ref} from 'vue'

// provide static value
provide('path', '/project/')

// provide reactive value
const count = ref(0)
provide('count', count)
</script>

<template>
    <children-component>
        <button @click="count++">+</button>
    </children-component>
</template>

