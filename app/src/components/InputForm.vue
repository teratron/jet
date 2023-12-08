<script lang="ts" setup>
const greeting = defineModel<string>('greetingName')
const farewell = defineModel<string>('farewellName')
const ignore = defineModel<string>()
</script>

<template>
    <input v-model="greeting" type="text" value=""/>
    <input v-model="farewell" type="text" value=""/>
    <input v-model="ignore" type="text" value=""/>
</template>
