<script lang="ts" setup>
import {ref}     from 'vue'
import InputForm from 'components/InputForm.vue'

const greeting = ref('')
const farewell = ref('')
const ignore = ref('')
</script>

<template>
    <h1>Select</h1>

    <input-form
        v-model="ignore"
        v-model:farewellName="farewell"
        v-model:greetingName="greeting"
    />
    <div>Greeting: {{ greeting }}</div>
    <div>Farewell: {{ farewell }}</div>
    <div>Ignore: {{ ignore }}</div>

    <!--<div class="dropdown select-custom">
        <div class="toggle">Option 3</div>
        <nav class="menu">
            <a class="item" href="/#">Option 1</a>
            <a class="item" href="/#">Option 2</a>
        </nav>
        <label>
            <select class="select-custom">
                <option>Option 1</option>
                <option>Option 2</option>
                <option selected>Option 3</option>
            </select>
        </label>
    </div>

    <div class="select-custom"></div>

    <label>
        <select class="select-custom">
            <option>Option 1</option>
            <option>Option 2</option>
            <option selected>Option 3</option>
        </select>
    </label>-->
</template>