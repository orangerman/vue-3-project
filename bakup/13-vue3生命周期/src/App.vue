<template>
    <Person v-if="isShow" />
</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { onBeforeMount, onMounted, ref } from "vue";

let isShow = ref(true)

onBeforeMount(() => {
    console.log('父组件=======》挂载前')
})

onMounted(() => {
    console.log('父组件=======》挂载完毕')
})


</script>
<style scoped></style>