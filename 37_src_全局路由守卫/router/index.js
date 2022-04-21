// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引用组件
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes: [{
            path: '/about',
            component: MyAbout,
            meta: { title: '关于' }
        },
        {
            path: '/home',
            component: MyHome,
            meta: { title: '主页' },
            // 子路由组件path不用加斜杆，底层遍历的时候会自动加上
            children: [{
                    name: 'message',
                    path: 'message',
                    component: Message,
                    children: [{
                        name: 'detail',
                        path: 'detail',
                        component: Detail,
                        props($route) {
                            return { id: $route.query.id, title: $route.query.id }
                        },
                        meta: { title: '详情' },
                    }],
                    meta: { isAuth: true, title: '信息' }
                },
                {
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                }
            ]
        },
    ]
})

// 全局前置路由守卫  每次路由切换前就调用里面的回调函数 + 初始化时调用一次
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)

    // to.path判断 可以用to.name判断 替代 
    /* if (to.path === '/home/news' || to.path === '/home/message') {
        if (localStorage.getItem('school') === 'atguigu') {
            next() // 放行
        } else {
            alert('学校名不对，无权限查看')
        }
    } else {
        next()
    } */

    // 前面的判断方式 遇到条件多的不好判断，所以使用 通过给路由添加meta配置项的方式来判断
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next() // 放行
        } else {
            alert('学校名不对，无权限查看')
        }
    } else {
        next()
    }
})

// 后置路由守卫 -- 没有next 初始化的时候被调用，每次路由器切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || '硅谷系统'
})

export default router