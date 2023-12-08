<script lang="ts" setup>
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
</script>

<template>
    <svg
        :aria-labelledby="props.title"
        :height="props.height"
        :role="props.role"
        :width="props.width"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title :id="props.title" lang="en">{{props.title}}</title>
        <g :fill="props.color">
            <slot/>
        </g>
    </svg>
</template>
