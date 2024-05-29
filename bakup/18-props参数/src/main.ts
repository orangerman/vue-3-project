
import { createApp } from 'vue' // 创建应用
import App from './App.vue' // 根组件
import router from "@/router";

const app = createApp(App)
app.use(router)
app.mount('#app')
