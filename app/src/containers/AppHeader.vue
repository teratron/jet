<script lang="ts" setup>
import HeaderContent from 'components/HeaderContent.vue'
import AppContainer  from 'containers/AppContainer.vue'

const {container = false} = defineProps<{ container?: boolean }>()
</script>

<template>
    <header class="app-header" role="banner">
        <suspense>
            <app-container v-if="container" colorSpinner="white">
                <slot>
                    <header-content/>
                </slot>
            </app-container>
            <slot v-else>
                <header-content/>
            </slot>
        </suspense>
    </header>
</template>
