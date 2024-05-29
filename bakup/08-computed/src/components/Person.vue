<template>
    <div class="person">
        姓: <input type="text" v-model="firstName"><br>
        名: <input type="text" v-model="lastName"><br>
        全名: <span>{{ fullName }}</span>
        <button @click="changeFullName">修改全名</button>
    </div>

</template>

<script lang='ts' name='Person' setup>
import { ref, computed } from 'vue'; // 对象响应式


let firstName = ref('zhang')

let lastName = ref('san')

// 不可写
// let fullName = computed(() => {
//     return firstName.value.slice(0, 1).toUpperCase() +
//         firstName.value.slice(1).toLowerCase() + '-' + lastName.value
// })

let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() +
            firstName.value.slice(1).toLowerCase() + '-' + lastName.value
    },
    set(val) {
        const [str1, str2] = val.split('-')
        console.log(`fullName set ${val}`)
        firstName.value = str1
        lastName.value = str2
    }
})



// 修改全名
function changeFullName() {
    fullName.value = 'li-si'
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
</style>
