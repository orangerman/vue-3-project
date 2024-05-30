import {defineStore} from 'pinia';
import type {CountInter} from '@/types';

export const useCountStore = defineStore('count',{
    state(){
        return {
            sum: 6,
            demo: '12312'
        } as CountInter
    },
    // 用于响应组件中的动作
    actions:{
        increment(value:number){
            console.log('increment .....')
            this.sum += value
        }
    }
})

