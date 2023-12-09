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

<style lang="scss" scoped>
.app-container {
    position: relative;

    > svg[aria-labelledby="spinner-circle"] {
        $center:  calc(50% - 12px);

        display:  block;
        position: absolute;
        top:      $center;
        left:     $center;
    }
}
</style>