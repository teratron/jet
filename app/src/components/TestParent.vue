<script setup>
import TestChildren from 'components/TestChildren.vue'
import {provide, ref} from 'vue'

// provide static value
provide('path', '/project/')

// provide reactive value
const count = ref(0)
provide('count', count)
</script>

<template>
    <test-children>
        <button @click="count++">+</button>
    </test-children>
</template>

