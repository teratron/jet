<script lang="ts" setup>
import {computed} from 'vue'

interface Props {
    title?: string,
    role?: string,
    color?: string,
    width?: number | string,
    height?: number | string,
}

const props = withDefaults(defineProps<Props>(), {
    title: 'default',
    role: 'presentation',
    color: '#000',
    width: 18,
    height: 18
})

const viewBox = computed(() => '0 0 ' + props.width + ' ' + props.height)
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
