<script lang="ts" setup>
import SvgContainer from 'containers/SvgContainer.vue'

const {color = '#000'} = defineProps<{
    color?: string
}>()
</script>

<template>
    <SvgContainer title="spinner-circle">
        <g>
            <circle
                :stroke="color"
                cx="50%"
                cy="50%"
                fill="none"
                r="7"
                stroke-linecap="round"
                stroke-width="3"
            />
        </g>
    </SvgContainer>
</template>

<style lang="scss" scoped>
@keyframes rotate_full {
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotate_pulse {
    0% {
        stroke-dasharray:  0 150;
        stroke-dashoffset: 0;
    }
    47.5% {
        stroke-dasharray:  42 150;
        stroke-dashoffset: -16;
    }
    95%, to {
        stroke-dasharray:  42 150;
        stroke-dashoffset: -43;
    }
}

svg {
    > g {
        transform-origin: center;
        transform-box:    stroke-box;
        animation:        rotate_full 2s linear infinite;

        > circle {
            animation: rotate_pulse 1.5s ease-out infinite;
        }
    }
}
</style>