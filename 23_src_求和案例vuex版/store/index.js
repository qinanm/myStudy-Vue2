// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex) // 引入vuex后vue多了一个store配置项可以配置

// 准备actions 用于响应组件中的动作  --- 业务逻辑都在这里写
const actions = {
    // jia(context, value) {
    //     // console.log('actions中的jia被调用了')
    //     // console.log(context, value)
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    wait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    },

}

// 准备mutations 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用了')
        // console.log(state, value);
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
}

// 准备state 用于存储数据
const state = {
    sum: 0,
}

// 创建store 并  暴露（导出 ）store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

// 暴露（导出 ）store
// export default store