<template>
    <div class="person">
        <h2>需求: 当水温达到60度 || 水位达到100 时发送请求</h2>
        <h2>当前水温: {{ temp }}°C</h2>
        <h2>当前水位: {{ height }}cm</h2>
        <button @click="changeTemp">水温加10</button>
        <button @click="changeHeight">水位加10</button>
    </div>

</template>

<script lang='ts' name='Person' setup>
import { ref, watch, watchEffect } from 'vue'; // 对象响应式

let temp = ref(20)
let height = ref(0)

function changeTemp() {
    temp.value += 10
}

function changeHeight() {
    height.value += 10
}

// wathc 实现监听多个数据
// watch([temp, height], (value) => {
//     let [newTemp, newHeight] = value
//     console.log(newTemp, newHeight)
//     if (newTemp >= 60 || newHeight >= 100) {
//         console.log(' Http Post To Server')
//     }
// },
//     { deep: true }
// )

watchEffect(() => {
    if (temp.value >= 60 || height.value >= 100) {
        console.log(' Http Post To Server')
    }
})

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
