<script lang="ts" setup>
import {ref, watch} from 'vue'
import IconSun      from 'components/icons/IconSun.vue'
import IconMoon     from 'components/icons/IconMoon.vue'

const isDark = ref(false)
const html = document.querySelector('html')!;

watch(isDark, () => {
    html.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})

</script>

<template>
    <button type="button" @click="isDark = !isDark">
        <icon-moon v-if="isDark" color="black" height="24" width="24"/>
        <icon-sun v-else color="white" height="24" width="24"/>
    </button>
</template>

<style lang="scss" scoped>
button {
    background-color: transparent;
    display: inline-flex;
    width:            24px;
    height:           24px;
    padding:          0;
    border:  0 none;
}
</style>