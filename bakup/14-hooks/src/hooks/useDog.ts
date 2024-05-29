import {  onMounted, reactive } from 'vue'; // 对象响应式
import axios from "axios";

export default function(){
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_13200.jpg'
    ])

    onMounted(()=>{
        console.log('onMounted add dog.....')
        getDog()
    })
    async function getDog() {
        try {
            const result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            console.error(error)
        }
    }
    return {dogList,getDog}
}


