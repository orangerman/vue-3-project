import {defineStore} from 'pinia';
import type { TalkInter } from '@/types';
import {nanoid} from 'nanoid';



export const useTalkStore = defineStore('love_talk',{
    state(){
        return {
            talkList: [{id: nanoid(),title:'爱你每一天'}] as TalkInter[]
        }
    }
})

