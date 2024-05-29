<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>

</template>

<script lang="ts" name="Person" setup>
import { ref, reactive, toRefs } from "vue"; // 对象响应式

let person = reactive({
    name: 'wwm',
    age: 18
})

let { name, age } = toRefs(person);


function changeName() {
    name.value += '~'
}

function changeAge() {
    age.value += 1
}

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

li {
    font-size: 25px;
}
</style>