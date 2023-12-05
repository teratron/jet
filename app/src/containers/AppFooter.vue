<script lang="ts" setup>
import AppContainer  from '@/containers/AppContainer.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>

<template>
    <footer class="app-footer" role="contentinfo">
        <AppContainer>
            <slot name="footer">
                <FooterContent/>
            </slot>
        </AppContainer>
    </footer>
</template>
