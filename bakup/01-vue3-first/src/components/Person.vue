<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel"> 查看联系手机号</button>
    </div>

</template>

<script lang='ts'>
// 纯Vue2写法
export default {
    name: 'Person',
    // data() {
    //     return {
    //         name: 'fanzq',
    //         age: 28,
    //         tel: 17762451104
    //     }
    // },
    // methods: {
    //     showTel() {
    //         alert(this.tel)
    //     },
    //     changeName() {
    //         this.name = 'wmm'
    //     },
    //     changeAge() {
    //         this.age++
    //     }
    // },
    setup() {
        // 数据
        let name = 'fanzq'; // 此时let直接定义不是响应式
        let age = 28;
        let tel = '17262451104';


        function changeName() {
            name = 'wwm'
        }
        function changeAge() {
            age++
        }
        function showTel() {
            alert(tel)
        }

        return { name, age, tel, changeName, changeAge, showTel }

    }
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