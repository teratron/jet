<script lang="ts" setup>
import {computed} from 'vue'

interface Props {
    title?: string,
    role?: string,
    color?: string,
    width?: string | number,
    height?: string | number,
    viewBox?: string | number[]
}

const props = withDefaults(defineProps<Props>(), {
    title: 'default',
    role: 'presentation',
    color: '#000',
    width: 16,
    height: 16,
    viewBox: '0 0 16 16'
})

const viewBox = computed(() => {
    if (Array.isArray(props.viewBox)) {
        let box = ''
        for (const item of props.viewBox) box += item + ' '
        return box.trimEnd()
    }
    return props.viewBox
})
</script>

<template>
    <svg
        :aria-labelledby="props.title"
        :fill="props.color"
        :height="props.height"
        :role="props.role"
        :width="props.width"
        :viewBox="viewBox"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title :id="props.title" lang="en">{{props.title}}</title>
        <slot/>
    </svg>
</template>
