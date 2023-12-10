<script lang="ts" setup>
import SvgContainer from 'containers/SvgContainer.vue'

const {color = '#000'} = defineProps<{
    color?: string
}>()
</script>

<template>
    <SvgContainer title="spinner-dots">
        <circle :fill="color" class="spinner-dots" cx="4" cy="12" r="3"/>
        <circle :fill="color" class="spinner-dots spinner-dot-2" cx="12" cy="12" r="3"/>
        <circle :fill="color" class="spinner-dots spinner-dot-3" cx="20" cy="12" r="3"/>
    </SvgContainer>
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

.spinner-dots {
    animation: spinner_dots 1.05s infinite;

    &.spinner-dot-2 {
        animation-delay: .1s;
    }

    &.spinner-dot-3 {
        animation-delay: .2s;
    }
}
</style>