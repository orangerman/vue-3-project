<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出H2这个元素</button>
        <!-- <button @click="changeHeight">水位加10</button> -->
    </div>

</template>

<script lang='ts' name='Person' setup>
import { ref, defineExpose } from 'vue'; // 对象响应式

// 创建一个 用于存储ref标记的元素
let title2 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog() {
    console.log(title2.value)
}

// 暴露给父组件
defineExpose({ a, b, c })
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
