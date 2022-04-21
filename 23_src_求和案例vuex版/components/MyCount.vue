<template>
  <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数加</button>
        <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
    export default {
        name:'MyCount',
        data() {
            return {
                
                n:1 // 用户选择的数据
            }
        },
        methods:{
            // 前两个无业务逻辑可以直接调用commit  找到mutations
            increment(){
                this.$store.commit('JIA', this.n)
            },
            decrement(){
                this.$store.commit('JIAN', this.n)
            },
            // 后两个 ，一个判断，一个定时 得用dispatch 先找 actions解决
            incrementOdd(){
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait(){
                this.$store.dispatch('wait', this.n)
                // setTimeout(()=>{
                //     
                // }, 1000)
            }
        }
    }
</script>

<style>
    h1{
        margin: 15px;
    }
    button{
        padding: 5px;
        margin-left: 5px;
    }
    select{
        padding: 5px;
    }
</style>