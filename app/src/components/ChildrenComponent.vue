<script setup>
import {inject} from 'vue'

const path = inject('path')
const count = inject('count')
const bar = inject('path', '/default-path')
</script>

<template>
    <div>
        {{ path }}
        {{ count }}
        {{ bar }}
        <slot/>
        <button @click="count++">+</button>
    </div>
</template>
