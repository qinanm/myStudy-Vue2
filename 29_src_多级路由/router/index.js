// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引用组件
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import Message from '../pages/Message'
import News from '../pages/News'

export default new VueRouter({
    routes: [{
            path: '/about',
            component: MyAbout
        },
        {
            path: '/home',
            component: MyHome,
            // 子路由组件path不用加斜杆，底层遍历的时候会自动加上
            children: [{
                    path: 'message',
                    component: Message
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        },
    ]
})