<template>
    <div class="person">
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }} -- {{ person.age }}</li>
        </ul>
    </div>


</template>

<script lang='ts' name='Person' setup>
import type { Persons } from '@/types';
import { withDefaults } from "vue";
// 只接受 personList 没有类型
// defineProps(['personList'])

// personList 接受强类型
// defineProps<{ personList: Persons }>();


// 接收personList + 强类型 + 限制必要性(personList?) + 指定默认值
withDefaults(defineProps<{ personList?: Persons }>(),
    { personList: () => [{ id: '12312', name: 'okok', age: 18 }] })

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
