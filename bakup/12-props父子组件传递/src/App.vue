<template>
    <Person :personList="personList" />
</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { reactive } from "vue";
import type { Persons } from "@/types";

let personList = reactive<Persons>([
    { id: '1', name: '张三', age: 11 },
    { id: '2', name: '李四', age: 12 },
    { id: '3', name: '王五', age: 13, type: 1 }
])

console.log(personList)
</script>
<style scoped></style>