<script lang="ts" setup>
import {computed} from 'vue'
import SvgElement from 'components/SvgElement.vue'

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

const ratio = computed(() => {
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
    <SvgElement :height="ratio[1]" :width="ratio[0]" role="img" title="aspect-ratio">
        <g>
            <path d=""/>
        </g>
    </SvgElement>
</template>

<style lang="scss" scoped>
svg {
    width:               v-bind(backgroundWidth);
    height:              auto;
    background-image:    v-bind(imageUrl);
    background-color:    transparent;
    background-position: center center;
    background-repeat:   no-repeat;
    background-size:     v-bind(backgroundSize);
}
</style>