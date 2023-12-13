<script lang="ts" setup>
import SvgContainer from 'containers/SvgContainer.vue'

const {color = '#000'} = defineProps<{ color?: string }>()
</script>

<template>
    <svg-container title="loading-ball" view-box="0 0 24 24">
        <ellipse :fill="color" class="loading-ball" cx="12" cy="5" rx="4" ry="4"/>
    </svg-container>
</template>

<style lang="scss" scoped>
@keyframes loading_ball {
    0% {
        animation-timing-function: cubic-bezier(0.33, 0, .66, .33);
        cy:                        5px;
    }
    46.875% {
        cy: 20px;
        rx: 4px;
        ry: 4px;
    }
    50% {
        animation-timing-function: cubic-bezier(0.33, .66, .66, 1);
        cy:                        20.5px;
        rx:                        4.8px;
        ry:                        3px;
    }
    53.125% {
        rx: 4px;
        ry: 4px;
    }
    100% {
        cy: 5px;
    }
}

.loading-ball {
    animation: loading_ball .8s infinite;
}
</style>