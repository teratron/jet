<script lang="ts" setup>
import IconSpinnerCircle from 'components/icons/IconSpinnerCircle.vue'
</script>

<template>
    <section class="app-container">
        <slot>
            <icon-spinner-circle color="green" height="24" width="24"/>
        </slot>
    </section>
</template>
