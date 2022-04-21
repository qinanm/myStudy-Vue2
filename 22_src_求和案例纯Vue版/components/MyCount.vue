<template>
  <div>
        <h1>当前求和为：{{sum}}</h1>
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
                sum:0,
                n:1 // 用户选择的数据
            }
        },
        methods:{
            increment(){
                this.sum += this.n
            },
            decrement(){
                this.sum -= this.n
            },
            incrementOdd(){
                if(this.sum%2){
                    this.sum += this.n
                }
            },
            incrementWait(){
                setTimeout(()=>{
                    this.sum += this.n
                }, 1000)
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