<script lang="ts" setup>
import {computed}   from 'vue'
import SvgContainer from 'containers/SvgContainer.vue'

const props = defineProps({
    aspectRatio: {
        type: String,
        default: '1x1',
        required: false
    },
    backgroundImage: {
        type: String,
        default: 'media/android-chrome-512x512.png',
        required: false
    },
    backgroundColor: {
        type: String,
        default: 'transparent',
        required: false
    },
    backgroundSize: {
        type: String,
        default: 'cover',
        required: false
    },
    backgroundWidth: {
        type: String,
        default: '100%',
        required: false
    }
})

const parseRatio = computed(() => {
    let array = props.aspectRatio?.split('x')
    if (array.length === 2) {
        array = array.map(value => parseInt(value).toString())
        if (array.every(value => value !== 'NaN' && value !== 'Finite')) return array
    }
    return ['1', '1']
})

const imageUrl = computed(() => {
    return 'url(' + props.backgroundImage + ')'
})
</script>

<template>
    <SvgContainer
        :height="parseRatio[1]"
        :width="parseRatio[0]"
        role="img"
        title="aspect-ratio"
    >
        <path d=""/>
    </SvgContainer>
</template>

<style lang="scss" scoped>
svg {
    width:               v-bind(backgroundWidth);
    height:           auto;
    background-image:    v-bind(imageUrl);
    background-color: v-bind(backgroundColor);
    background-size:  v-bind(backgroundSize);
    background-position: center center;
    background-repeat:   no-repeat;
}
</style>