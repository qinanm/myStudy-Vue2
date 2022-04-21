<template>
  <div class="count">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{schoolName}}学习{{course}}</h3>
        <h3>person组件的总人数{{personList.length}}</h3>
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
            // 3.借助mapState生成计算属性， 从state中读取数据 （数组写法）
            ...mapState('countOptions',['sum', 'schoolName', 'course']),
            ...mapState('personOptions',['personList']),

            // 同理 借助mapGetters生成计算属性， 从getters中读取数据
            ...mapGetters('countOptions',['bigSum'])   // 数组写法
        },
        methods:{
            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
            ...mapMutations('countOptions',{increment:'JIA', decrement:'JIAN'}),  // 对象写法

            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
            ...mapActions('countOptions',{incrementOdd:'jiaOdd', incrementWait:'wait'}),  // 对象写法
        },
    }
</script>

<style scoped>
    .count{
        width: 20%;
        margin: 0 auto;
    }
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