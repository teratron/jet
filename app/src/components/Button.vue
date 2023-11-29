<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <button type="button" msg="">{{ msg }}</button>
</template>
