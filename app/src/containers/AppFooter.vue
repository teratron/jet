<script lang="ts" setup>
import FooterContent from '@/components/FooterContent.vue'
</script>

<template>
    <footer class="app-footer">
        <slot>
            <FooterContent/>
        </slot>
    </footer>
</template>
