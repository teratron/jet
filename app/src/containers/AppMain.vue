<script lang="ts" setup>
import SpinnerElement from 'components/SpinnerElement.vue'
import AppContainer   from 'containers/AppContainer.vue'

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
            <spinner-element/>
        </slot>
    </main>
</template>
