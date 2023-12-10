<script lang="ts" setup>
import {ref}    from 'vue'
import IconSun  from 'components/icons/IconSun.vue'
import IconMoon from 'components/icons/IconMoon.vue'

const isDark = ref(false)
</script>

<template>
    <button type="button" @click="isDark = !isDark">
        <icon-sun v-if="isDark" color="white" height="24" width="24"/>
        <icon-moon v-else color="black" height="24" width="24"/>
    </button>
    <!--<teleport :data-tmeme="isDark ? 'dark' : 'light'" to='html'></teleport>-->
</template>

<style lang="scss" scoped>
button {
    background-color: transparent;
    border:           0 none;
    display:          inline-block;
    width:            24px;
    height:           24px;
    padding:          0;
}
</style>