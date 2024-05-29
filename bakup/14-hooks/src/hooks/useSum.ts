import { ref } from 'vue'; // 对象响应式

export default function () {
 let sum = ref(0)
function add() {
    sum.value++
}
return {sum,add}
}

