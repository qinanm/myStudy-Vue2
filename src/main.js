// vue读取main.js 会先把所有import先找出来读取 所以把执行语句放在import中间也不会比后面的import先执行
// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';


//  关闭Vue的生产提示
Vue.config.productionTip = false

// 应用ElementUI
// Vue.use(ElementUI)
// Vue.component(Button.name, Button);
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);


// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})

// console.log(vm)