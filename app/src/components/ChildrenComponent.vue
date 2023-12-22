<script lang="ts" setup>
import {inject} from 'vue'

const path = inject<string>('path')
const count = inject<number>('count')
const bar = inject<string>('path', '/default-path')
</script>

<template>
    <div>
        {{ path }}
        {{ count }}
        {{ bar }}
        <slot/>
        <button @click="count!++">+</button>
    </div>
</template>
