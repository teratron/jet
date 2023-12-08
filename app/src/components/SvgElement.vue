<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: 'default',
        required: false
    },
    role: {
        type: String,
        default: 'presentation',
        required: false
    },
    color: {
        type: String,
        default: '#000000',
        required: false
    },
    width: {
        type: [Number, String],
        default: 18,
        required: false
    },
    height: {
        type: [Number, String],
        default: 18,
        required: false
    }
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
