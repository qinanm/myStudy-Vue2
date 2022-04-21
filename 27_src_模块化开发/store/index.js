// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'
// 引入模块
import countOptions from './count'
import personOptions from './person'
// 使用插件
Vue.use(Vuex) // 引入vuex后vue多了一个store配置项可以配置


// 创建store 并  暴露（导出 ）store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }

})