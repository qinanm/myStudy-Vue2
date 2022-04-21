// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'


//  关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})