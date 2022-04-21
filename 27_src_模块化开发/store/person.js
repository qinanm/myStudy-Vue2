import axios from "axios"
import { nanoid } from "nanoid"
// 人员相关
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('只能添加姓王的人')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                    console.log(response.data);
                },
                error => {
                    console.log('请求错误', error.message);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' },
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}