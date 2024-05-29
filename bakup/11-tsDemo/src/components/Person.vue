<template>
    <div class="person">



    </div>

</template>

<script lang='ts' name='Person' setup>
import { ref, defineExpose } from 'vue';
import { type PersonInter, type Persons } from '@/types'

let person: PersonInter = {
    id: '123123',
    name: '张三',
    age: 11
}

let personList: Array<PersonInter> = [
    { id: '1', name: '张三', age: 11 },
    { id: '2', name: '李四', age: 12 },
    { id: '3', name: '王五', age: 13 }
]

let personList1: Persons = [
    { id: '1', name: '张三', age: 11 },
    { id: '2', name: '李四', age: 12 },
    { id: '3', name: '王五', age: 13 }
]


</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
