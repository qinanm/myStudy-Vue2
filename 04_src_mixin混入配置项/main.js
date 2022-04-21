// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'

// 引入全局混合 -- 所有vue实例和组件实例都得到这些方法
// import { mixin, mixin2 } from './mixin'
// Vue.mixin(mixin)
// Vue.mixin(mixin2)

//  关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})