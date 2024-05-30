import { createApp } from 'vue'; // 创建应用
import App from './App.vue'; // 根组件
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);
var pinia = createPinia();

// 安装插件
app.use(pinia);
// 安装路由器
app.use(router);
// 挂载应用
app.mount('#app');
