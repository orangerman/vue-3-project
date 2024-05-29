<template>

    <div class="person">
        <h2>当前求和为: {{ sum }}</h2>
        <button @click="add">加一</button>
    </div>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <button @click="getDog">再来一只小狗</button>


</template>
<script lang='ts' name='person' setup>
import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";

const { sum, add } = useSum()
const { dogList, getDog } = useDog()

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

img {
    height: 200px;
    margin-right: 10px;
}
</style>