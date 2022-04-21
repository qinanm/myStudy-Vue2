// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引用组件
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

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
                    name: 'message',
                    path: 'message',
                    component: Message,
                    children: [{
                        name: 'detail',
                        path: 'detail/:id/:title', // 后面两个是占位符，用于接收params参数
                        component: Detail,
                        // props的第一种写法 值为对象，该对象中所有key-value都会以props形式传给Detail组件
                        // props: { a: 1, b: 'hello' }   // 用的少，传递的是死数据

                        // props的第二种写法 值为布尔值。 若布尔值为真，则会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                        // props: true,

                        // props的第三种写法 值为函数
                        /* props($route) {
                            return { id: $route.query.id, title: $route.query.id }
                        } */
                        // 使用解构赋值-- 解构了两层
                        props({ query: { id, title } }) {
                            return { id, title }
                        }

                    }]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        },
    ]
})