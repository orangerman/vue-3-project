<template>

    <div class="person">
        <h2>当前求和为: {{ sum }}</h2>
        <button @click="add">加一</button>
    </div>

</template>

<script lang='ts' name='person' setup>
import {
    ref, onBeforeMount, onMounted, onBeforeUpdate,
    onUpdated, onBeforeUnmount, onUnmounted
} from 'vue'; // 对象响应式
let sum = ref(0)


function add() {
    sum.value++
}
console.log('创建')

onBeforeMount(() => {
    console.log('挂载前')
})

onMounted(() => {
    console.log('挂载完毕')
})

onBeforeUpdate(() => {
    console.log('更新前')
})

onUpdated(() => {
    console.log('更新完毕')
})

onBeforeUnmount(() => {
    console.log('卸载前')
})

onUnmounted(() => {
    console.log('卸载完毕')
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