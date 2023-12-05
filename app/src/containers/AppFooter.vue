<script lang="ts" setup>
import FooterContent from '@/components/FooterContent.vue'
</script>

<template>
    <footer class="app-footer" role="contentinfo">
        <slot name="footer">
            <FooterContent/>
        </slot>
    </footer>
</template>
