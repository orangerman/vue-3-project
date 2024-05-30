<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>

</template>

<script lang='ts' name='LoveTalk' setup>
import { reactive } from 'vue'; // 对象响应式
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkStore } from '@/store/love_talk';

let talkList = reactive(useTalkStore().talkList)

async function getTalk() {
    let { data: { content: title } } = await axios
        .get('https://api.uomg.com/api/rand.qinghua?format=json')
    talkList.unshift({ id: nanoid(), title })
}

</script>

<style scoped>
.talk {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>