<script lang="ts" setup>
import ChildrenComponent        from 'components/ChildrenComponent.vue'
import {provide, type Ref, ref} from 'vue'

// provide static value
provide<string>('path', '/project/')

// provide reactive value
const count = ref<number>(0)
provide<Ref<number>>('count', count)
</script>

<template>
    <children-component>
        <!--        <button @click="count++">+</button>-->
    </children-component>
</template>

