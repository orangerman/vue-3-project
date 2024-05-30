<template>

    <div class="count">
        <h2>当前求和为: {{ sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>

    </div>

</template>

<script lang='ts' name='Count' setup>
import { ref, toRef } from 'vue'; // 对象响应式
import { useCountStore } from '@/store/count';

let n = ref(1)
let sum = toRef(useCountStore(), "sum")
console.log(sum)

function add() {
    sum.value += n.value
}

function minus() {
    sum.value -= n.value
}

</script>

<style scoped>
.count {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>