import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail',
                    // path: 'detail/:id/:title/:content?',
                    component: Detail,
                    // 第一种写法 props 只能实现params的方式
                    // props: true

                    // 第二种方式，可以自己决定传参 ,router.params || router.query
                    props(router) {
                        return router.query
                    }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
});

export default router;