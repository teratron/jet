<script lang="ts" setup>
import SvgContainer from 'containers/SvgContainer.vue'

const {color = '#000'} = defineProps<{ color?: string }>()
</script>

<template>
    <svg-container title="loading-dots">
        <circle :fill="color" class="loading-dots" cx="4" cy="12" r="3"/>
        <circle :fill="color" class="loading-dots loading-dot-2" cx="12" cy="12" r="3"/>
        <circle :fill="color" class="loading-dots loading-dot-3" cx="20" cy="12" r="3"/>
    </svg-container>
</template>

<style lang="scss" scoped>
@keyframes spinner_dots {
    0%, 57.14% {
        animation-timing-function: cubic-bezier(.33, .66, .66, 1);
        transform:                 translate(0)
    }
    28.57% {
        animation-timing-function: cubic-bezier(.33, 0, .66, .33);
        transform:                 translateY(-6px)
    }
    to {
        transform: translate(0)
    }
}

.loading-dots {
    animation: spinner_dots 1.05s infinite;

    &.loading-dot-2 {
        animation-delay: .1s;
    }

    &.loading-dot-3 {
        animation-delay: .2s;
    }
}
</style>