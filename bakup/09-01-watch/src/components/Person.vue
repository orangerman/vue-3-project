<template>
    <div class="person">
        <h1>情况一: 监视【ref】定义的【基本类型数据】</h1>
        <h2>当前求和为: {{ sumOne }}</h2>
        <button @click="changeSumOne">点我sum+1</button>
        <hr />

        <h1>情况二: 监视【ref】定义的【对象类型数据】</h1>
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="changePerson">点我改人</button>
        <hr />

        <h1>情况三: 监视【reactive】定义的【对象类型数据】</h1>
        <h2>姓名: {{ reactivePerson.name }}</h2>
        <h2>年龄: {{ reactivePerson.age }}</h2>
        <button @click="changeReactiveName">点我改名字</button>
        <button @click="changeReactiveAge">点我改年龄</button>
        <button @click="changeReactivePerson">点我改人</button>
        <hr />


    </div>

</template>

<script lang='ts' name='Person' setup>
import { ref, computed, watch, reactive } from 'vue'; // 对象响应式

let sumOne = ref(0)

function changeSumOne() {
    sumOne.value += 1
}

const stopWatch = watch(sumOne, (newValue, oldValue) => {
    console.log('sumOne变化了===>', newValue, oldValue)
    if (newValue > 2) {
        stopWatch();
    }
})

let person = ref({
    name: 'zhang-san',
    age: 18
})

function changeName() {
    person.value.name += '~'
}

function changeAge() {
    person.value.age++
}

function changePerson() {
    person.value = {
        name: 'li-si',
        age: 19
    }
}

// 监视的对象的地址值
// watch(person, (newValue, oldValue) => {
//     console.log('person ===>', newValue, oldValue)
// })

// 监视的对象的属性值
watch(person, (newValue, oldValue) => {
    console.log('person ===>', newValue, oldValue)
}, { deep: true })

// 简写 只用newValue
// watch(person, (value) => {
//     console.log('newPerson ===>', value)
// }, { deep: true })

let reactivePerson = reactive({
    name: 'JavaFan',
    age: 28
})


function changeReactiveName() {
    reactivePerson.name += '~'
}

function changeReactiveAge() {
    reactivePerson.age += 1
}

function changeReactivePerson() {
    Object.assign(reactivePerson, { name: 'Wwm', age: 18 })
}

//监视【reactive】定义的【对象类型数据】 默认开启深度监视
watch(reactivePerson, (newValue, oldValue) => {
    console.log('newPerson:', newValue, 'oldPerson:', oldValue)
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
