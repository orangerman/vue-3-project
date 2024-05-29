<template>
    <h2 ref="title2">你好</h2>
    <button @click="showLog">点我输出你好h2</button>
    <hr />
    <Person ref="ren" />
</template>


<script lang="ts" setup name="App">
import { ref } from "vue";
import Person from './components/Person.vue';

let title2 = ref()
let ren = ref();

function showLog() {
    // console.log(title2.value)
    // 可以拿到组件的实例对象 但是无法获取对应的属性
    console.log(ren.value.b)
}



</script>
<style scoped></style>