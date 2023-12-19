<script lang="ts" setup>
</script>

<template>
    <h1>Colors</h1>

    <h2>Dominant</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-dominant">primary</div>
        <div class="jx-scheme-dominant-dark">primary dark</div>
        <div class="jx-scheme-dominant-light">primary light</div>
        <div class="jx-scheme-dominant-border">primary border</div>
        <div class="jx-scheme-dominant-border-dark">primary border dark</div>
        <div class="jx-scheme-dominant-border-light">primary border light</div>
        <div class="jx-scheme-dominant-state">primary state</div>
    </div>

    <h2>Primary</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-primary">primary</div>
        <div class="jx-scheme-primary-dark">primary dark</div>
        <div class="jx-scheme-primary-light">primary light</div>
        <div class="jx-scheme-primary-border">primary border</div>
        <div class="jx-scheme-primary-border-dark">primary border dark</div>
        <div class="jx-scheme-primary-border-light">primary border light</div>
        <div class="jx-scheme-primary-state">primary state</div>
    </div>

    <h2>Secondary</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-secondary">secondary</div>
        <div class="jx-scheme-secondary-dark">secondary dark</div>
        <div class="jx-scheme-secondary-light">secondary light</div>
        <div class="jx-scheme-secondary-border">secondary border</div>
        <div class="jx-scheme-secondary-border-dark">secondary border dark</div>
        <div class="jx-scheme-secondary-border-light">secondary border light</div>
        <div class="jx-scheme-secondary-state">secondary state</div>
    </div>

    <h2>Tertiary</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-tertiary">tertiary</div>
        <div class="jx-scheme-tertiary-dark">tertiary dark</div>
        <div class="jx-scheme-tertiary-light">tertiary light</div>
        <div class="jx-scheme-tertiary-border">tertiary border</div>
        <div class="jx-scheme-tertiary-border-dark">tertiary border dark</div>
        <div class="jx-scheme-tertiary-border-light">tertiary border light</div>
        <div class="jx-scheme-tertiary-state">tertiary state</div>
    </div>

    <h2>Accent</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-accent">accent</div>
        <div class="jx-scheme-accent-dark">accent dark</div>
        <div class="jx-scheme-accent-light">accent light</div>
        <div class="jx-scheme-accent-border">accent border</div>
        <div class="jx-scheme-accent-border-dark">accent border dark</div>
        <div class="jx-scheme-accent-border-light">accent border light</div>
        <div class="jx-scheme-accent-state">accent state</div>
    </div>

    <h2>Info</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-info">info</div>
        <div class="jx-scheme-info-dark">info dark</div>
        <div class="jx-scheme-info-light">info light</div>
        <div class="jx-scheme-info-border">info border</div>
        <div class="jx-scheme-info-border-dark">info border dark</div>
        <div class="jx-scheme-info-border-light">info border light</div>
        <div class="jx-scheme-info-state">info state</div>
    </div>

    <h2>Success</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-success">success</div>
        <div class="jx-scheme-success-dark">success dark</div>
        <div class="jx-scheme-success-light">success light</div>
        <div class="jx-scheme-success-border">success border</div>
        <div class="jx-scheme-success-border-dark">success border dark</div>
        <div class="jx-scheme-success-border-light">success border light</div>
        <div class="jx-scheme-success-state">success state</div>
    </div>

    <h2>Warning</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-warning">warning</div>
        <div class="jx-scheme-warning-dark">warning dark</div>
        <div class="jx-scheme-warning-light">warning light</div>
        <div class="jx-scheme-warning-border">warning border</div>
        <div class="jx-scheme-warning-border-dark">warning border dark</div>
        <div class="jx-scheme-warning-border-light">warning border light</div>
        <div class="jx-scheme-warning-state">warning state</div>
    </div>

    <h2>Error</h2>
    <div class="jx-grid-3 jx-gap-half">
        <div class="jx-scheme-error">error</div>
        <div class="jx-scheme-error-dark">error dark</div>
        <div class="jx-scheme-error-light">error light</div>
        <div class="jx-scheme-error-border">error border</div>
        <div class="jx-scheme-error-border-dark">error border dark</div>
        <div class="jx-scheme-error-border-light">error border light</div>
        <div class="jx-scheme-error-state">error state</div>
    </div>
</template>

<style lang="scss" scoped>
[class*="grid"] {
}

[class*="-border"] {
    border-width: 2px;
    border-style: solid;
}

[class$="-state"] {
    cursor: pointer;
}
</style>
