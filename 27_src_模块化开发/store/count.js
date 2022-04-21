// 模块化开发
// 求和相关
export default {
    namespaced: true, // 注意命名空间要调成true,才能被调用
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        schoolName: '尚硅谷',
        course: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}