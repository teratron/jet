<script lang="ts" setup>
import AppContainer      from 'containers/AppContainer.vue'
import IconSpinnerCircle from 'components/icons/IconSpinnerCircle.vue'

const {container = false} = defineProps<{
    container?: boolean
}>()
</script>

<template>
    <main class="app-main" role="main">
        <app-container v-if="container">
            <slot/>
        </app-container>
        <slot v-else>
            <icon-spinner-circle height="48" width="48"/>
        </slot>
    </main>
</template>

<style lang="scss" scoped>
.app-main {
    > svg[aria-labelledby="spinner-circle"] {
        $center:  calc(50% - 24px);
        display:  block;
        position: absolute;
        top:      $center;
        left:     $center;
    }
}
</style>