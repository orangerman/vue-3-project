<template>

    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>

</template>

<script lang='ts' name='Home' setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

// onMounted(() => {
//     setTimeout(() => {
//         //在此处实现路由跳转
//         router.push('/news')
//     }, 3000);
// })
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>