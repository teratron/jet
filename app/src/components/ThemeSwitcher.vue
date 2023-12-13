<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import IconSun                from 'components/icons/IconSun.vue'
import IconMoon               from 'components/icons/IconMoon.vue'

const {size = 24} = defineProps<{ size?: string | number }>()
const isDark = ref(false)
const html = document.querySelector('html')!
//document.querySelectorAll('[data-theme="popover"]') // TODO:

watch(isDark, () => {
    html.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})

const pxSize = computed(() => size + 'px')
</script>

<template>
    <button type="button" @click="isDark = !isDark">
        <transition name="fade">
            <icon-moon v-if="isDark" :height="size" :width="size" color="black"/>
            <icon-sun v-else :height="size" :width="size" color="white"/>
        </transition>
    </button>
</template>

<style lang="scss" scoped>
button {
    background-color: transparent;
    display:          inline-flex;
    width:            v-bind(pxSize);
    height:           v-bind(pxSize);
    padding:          0;
    border:           0 none;
}

//.fade-enter-active,
//.fade-leave-active {
//    transition: opacity 0.5s ease;
//}

//.fade-enter-from,
//.fade-leave-to {
//    opacity: 0;
//}
</style>