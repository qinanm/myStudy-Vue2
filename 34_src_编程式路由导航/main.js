// vue读取main.js 会先把所有import先找出来读取 所以把执行语句放在import中间也不会比后面的import先执行
// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'
// 引入路由器插件
import VueRouter from 'vue-router'
// 引入创建的路由器
import router from './router'

//  关闭Vue的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})

// console.log(vm)