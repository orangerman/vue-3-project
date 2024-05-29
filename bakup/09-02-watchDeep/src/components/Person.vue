<template>
    <div class="person">

        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
        <h2>汽车: {{ person.car.c1 }}</h2>
        <h2>汽车: {{ person.car.c2 }}</h2>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="changeFirstCar">修改第一台车</button>
        <button @click="changeTwoCar">修改第二台车</button>
        <button @click="changeCar">修改车</button>
        <hr />
    </div>

</template>

<script lang='ts' name='Person' setup>
import { ref, watch, reactive, VueElement } from 'vue'; // 对象响应式


let person = reactive({
    name: 'zhang-san',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})

function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age++
}

function changeFirstCar() {
    person.car.c1 = '奥迪'
}

function changeTwoCar() {
    person.car.c2 = '大众'

}

function changeCar() {
    person.car = {
        c1: '艾玛',
        c2: '雅迪'
    }
}

// 监视对象的某一个属性 基本数据类型
watch(() => person.name, (value) => {
    console.log(value)
})

// 监视对象的某一个属性 对象类型
// watch(() => person.car, (value) => {
//     console.log(value)
// },
//     { deep: true }
// )

// 监视对象的多个属性
watch([() => person.name, () => person.car], (newvalue, oldValue) => {
    console.log('person change', newvalue, oldValue)
},
    { deep: true }
)




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
