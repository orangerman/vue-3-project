<template>

    <div class="news">
        <ul>
            <li v-for="news in newsList">
                <!-- 第一种 query传参 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}
                &title=${news.title}
                &content=${news.content}`" :key="news.id">{{ news.title }}</RouterLink> -->

                <!-- 第二次写法 -->
                <RouterLink :to="{
                    path: '/news/detail',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }" :key="news.id">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <div class="news-content">
            <RouterView />
        </div>
    </div>

</template>

<script lang='ts' name='News' setup>
import { ref, reactive } from 'vue'; // 对象响应式



const newsList = reactive([
    { id: '111', title: '世界上最大的鱼', content: '鱼' },
    { id: '111', title: '世界上最小的鱼', content: '鱼' },
    { id: '111', title: '世界上最大的乌龟', content: '鱼' }
])

</script>

<style scoped>
/* 新闻 */
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>