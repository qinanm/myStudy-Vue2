<template>
    <div class="person">
        <h1>人员列表</h1>
        <br>
        <h3>count组件求和为：{{sum}}</h3>
        <br>
        <h3>列表中第一个人的名字是{{firstName}}</h3> 
        <br>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <button @click="addPersonRandom">随机添加一名字</button>
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
                // return this.$store.state.personList
                return this.$store.state.personOptions.personList
            },
            sum(){
                return this.$store.state.countOptions.sum
            },
            // ...mapState(['personList', 'sum'])  // 简写
            firstName(){
                return this.$store.getters['personOptions/firstPersonName']
            }
        },
        methods:{
            add(){
                const personObj = {
                    id: nanoid(),
                    name: this.name
                }
                // this.$store.state.personList.unshift(personObj)
                this.$store.commit('personOptions/ADD_PERSON', personObj)
                this.name = ''
            },
            addPersonWang(){
                const personObj = {
                    id: nanoid(),
                    name: this.name
                }
                // this.$store.state.personList.unshift(personObj)
                this.$store.dispatch('personOptions/addPersonWang', personObj)
                this.name = ''
            },
            addPersonRandom(){
                this.$store.dispatch('personOptions/addPersonServer')
                // this.name = ''
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