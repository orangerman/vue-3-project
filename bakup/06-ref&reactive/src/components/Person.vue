<template>
    <div class="person">
        <h2>一辆{{ car.brand }} 车,价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改汽车</button>

        <br />
        <h2>游戏列表:</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGameName">修改游戏名字</button>
        <hr />
        <h2 @click="incrSum">
            求和:{{ sum }}
        </h2>


    </div>

</template>

<script lang="ts" name="Person" setup>
import { ref, reactive } from "vue"; // 对象响应式

let car = ref({ brand: '宝马', price: 100 })
// let car = reactive({ brand: '宝马', price: 100 })
let games = ref(
    [
        {
            id: 1,
            name: 'LOL'
        },
        {
            id: 2,
            name: 'wzry'
        }
    ]
)
let sum = ref(0);

function changePrice() {
    console.log(car)
    car.value.price += 10
    // car.price += 10
}

function changeCar() {
    console.log('changeCar')
    // car.value = { brand: '奔驰', price: 1000 }
    // reactive 会失去响应式，所以必须要使用 Object.assign
    // Object.assign(car, reactive({ brand: '奔驰', price: 1000 }))
}

function changeFirstGameName() {
    games.value[0].name = 'demo'
}

function incrSum() {
    sum.value++
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