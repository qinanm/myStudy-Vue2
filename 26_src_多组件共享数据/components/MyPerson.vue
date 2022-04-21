<template>
    <div class="person">
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name"> 
        <button @click="add">添加</button>
        <h3>count组件求和为：{{sum}}</h3>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    // import { mapState } from 'vuex'
    export default {
        name:'MyPerson',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            },
            // ...mapState(['personList', 'sum'])  // 简写
        },
        methods:{
            add(){
                const personObj = {
                    id: nanoid(),
                    name: this.name
                }
                // this.$store.state.personList.unshift(personObj)
                this.$store.commit('ADD_PERSON', personObj)
                this.name = ''
            }
        }
    }
</script>

<style scoped>
    .person{
        width: 20%;
        margin: 0 auto;
    }
</style>