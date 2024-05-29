<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel"> 查看联系手机号</button>
    </div>

</template>

<script lang="ts" name="Person" setup>
import { ref } from "vue";

let name = ref('fanzq'); // 此时let直接定义不是响应式
let age = ref(28);
let tel = '17262451104';

function changeName() {
    name.value = 'wwm'
}
function changeAge() {
    age.value++
}
function showTel() {
    alert(tel)
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
</style>