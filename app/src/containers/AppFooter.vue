<script lang="ts" setup>
import FooterContent from 'components/FooterContent.vue'
import AppContainer  from 'containers/AppContainer.vue'

const {container = false} = defineProps<{ container?: boolean }>()
</script>

<template>
    <footer class="app-footer" role="contentinfo">
        <suspense>
            <app-container v-if="container" colorSpinner="white">
                <slot>
                    <footer-content/>
                </slot>
            </app-container>
            <slot v-else>
                <footer-content/>
            </slot>
        </suspense>
    </footer>
</template>
