// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'


//  关闭Vue的生产提示
Vue.config.productionTip = false

// 创建一个x使所有组件都能看到  
// const Demo = Vue.extend({}) // 收到VueComponent
// const d = new Demo() // new了一个组件实例对象
// Vue.prototype.x = d

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 创建一个x使所有组件都能看到  --  更简单的方法
    // beforeCreate() {
    //     Vue.prototype.$bus = this // 标准写法 --- 全局事件总线  --- 全局所有的vc , vm都能看到它
    // }
})