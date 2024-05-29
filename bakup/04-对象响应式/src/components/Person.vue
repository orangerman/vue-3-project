<template>
    <div class="person">
        <h2>一辆{{ car.brand }} 车,价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>

        <br />
        <h2>游戏列表:</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGameName">修改游戏名字</button>
    </div>

</template>

<script lang="ts" name="Person" setup>
import { reactive } from "vue"; // 对象响应式

let car = reactive({ brand: '宝马', price: 100 })
let games = reactive(
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


function changePrice() {
    console.log(car)
    car.price += 10
}

function changeFirstGameName() {
    games[0].name = 'demo'
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
    font-size: 20px;
}
</style>