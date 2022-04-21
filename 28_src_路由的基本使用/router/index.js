// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引用组件
import MyAbout from '../pages/MyAbout.vue'
import MyHome from '../pages/MyHome.vue'

export default new VueRouter({
    routes: [{
            path: '/about',
            component: MyAbout
        },
        {
            path: '/home',
            component: MyHome
        }
    ]
})