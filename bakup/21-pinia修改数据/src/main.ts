
import { createApp } from 'vue' // 创建应用
import App from './App.vue' // 根组件
import {createPinia} from 'pinia';


const app = createApp(App)
var pinia = createPinia()
app.use(pinia)
app.mount('#app')
