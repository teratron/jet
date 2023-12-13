<script lang="ts" setup>
import SvgContainer from 'containers/SvgContainer.vue'

const {color = '#000'} = defineProps<{ color?: string }>()
</script>

<template>
    <svg-container title="loading-spinner" view-box="0 0 24 24">
        <g class="loading-spinner">
            <circle :stroke="color" cx="50%" cy="50%" r="9"/>
        </g>
    </svg-container>
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
        stroke-dashoffset: -56;
    }
}

.loading-spinner {
    animation:        rotate_full 2s linear infinite;
    transform-origin: center;
    transform-box:    stroke-box;

    > circle {
        animation:      rotate_pulse 1.5s ease-out infinite;
        fill:           none;
        stroke-width:   3px;
        stroke-linecap: round;
    }
}
</style>