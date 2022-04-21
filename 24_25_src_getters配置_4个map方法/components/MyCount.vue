<template>
  <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{schoolName}}学习{{course}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前和为奇数加</button>
        <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
    import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'
    export default {
        name:'MyCount',
        data() {
            return {
                n:1 // 用户选择的数据
            }
        },
        computed:{
            // 1. 靠程序员自己亲自去写计算属性
            /* sum(){
                return this.$store.state.sum
            },
            schoolName(){
                return this.$store.state.schoolName
            },
            course(){
                return this.$store.state.course
            }, */

            // 2.借助mapState生成计算属性， 从state中读取数据 （对象写法）
            // mapState接收参数返回的是一个对象，里面是不同的函数(自动生成的如上所示几个计算函数)
            // ...{x:1, y:2}, 将对象内每一个组key value都展开放进computed里
            // ...mapState({sum:'sum', schoolName:'schoolName', course:'course'}),
            
            // 3.借助mapState生成计算属性， 从state中读取数据 （数组写法）
            ...mapState(['sum', 'schoolName', 'course']),
            
            /*********************************************************** */
            
            bigSum(){
                return this.$store.getters.bigSum
            },
            // 同理 借助mapGetters生成计算属性， 从getters中读取数据
            // ...mapGetters({bigSum:'bigSum'}),  // 对象写法
            ...mapGetters(['bigSum'])   // 数组写法
        },
        methods:{
            // 前两个无业务逻辑可以直接调用commit  找到mutations
            /* increment(){
                this.$store.commit('JIA', this.n)
            },
            decrement(){
                this.$store.commit('JIAN', this.n)
            }, */

            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
            // 需要在模板调用时传入参数n,否者JIA收到的参数value会使event, 然后就会自动生成上面效果的代码
            ...mapMutations({increment:'JIA', decrement:'JIAN'}),  // 对象写法
            // ...mapMutations(['JIA', 'JIAN']),  // 数组写法 -- 需要键值同名
            
            /** **************************************************************** */

            // 后两个 ，一个判断，一个定时 得用dispatch 先找 actions解决
           /*  incrementOdd(){
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait(){
                this.$store.dispatch('wait', this.n)
            }, */

            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
            ...mapActions({incrementOdd:'jiaOdd', incrementWait:'wait'}),  // 对象写法
            // ...mapMutations(['jiaOdd', 'wait']), // 数组写法 -- 需要键值同名
        },
    }
</script>

<style>
    h1{
        margin: 15px;
    }
    h3{
        margin: 10px 0;
    }
    button{
        padding: 5px;
        margin-left: 5px;
    }
    select{
        padding: 5px;
    }
</style>