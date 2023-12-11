<script lang="ts" setup>
import SvgContainer from 'containers/SvgContainer.vue'

const {color = '#000'} = defineProps<{ color?: string }>()
</script>

<template>
    <svg-container title="spinner-bars">
        <rect :fill="color" class="spinner-bars" x="1"/>
        <rect :fill="color" class="spinner-bars spinner-bar-2" x="9"/>
        <rect :fill="color" class="spinner-bars spinner-bar-3" x="17"/>
    </svg-container>
</template>

<style lang="scss" scoped>
@keyframes spinner_bars {
    0% {
        height: 22px
    }
    93.75% {
        transform: translateY(5px);
        height:    14px;
        opacity:   .2
    }
}

.spinner-bars {
    animation:       spinner_bars .8s linear infinite;
    animation-delay: -.8s;
    width:           6px;
    transform:       translateY(1px);

    &.spinner-bar-2 {
        animation-delay: -.65s;

    }

    &.spinner-bar-3 {
        animation-delay: -.5s;
    }
}
</style>