<script lang="ts" setup>
import FooterContent from 'components/FooterContent.vue'
import AppContainer  from 'containers/AppContainer.vue'

const {container = false} = defineProps<{
    container?: boolean
}>()
</script>

<template>
    <footer class="app-footer" role="contentinfo">
        <app-container v-if="container" colorSpinner="white">
            <slot>
                <FooterContent/>
            </slot>
        </app-container>
        <slot v-else>
            <FooterContent/>
        </slot>
    </footer>
</template>
