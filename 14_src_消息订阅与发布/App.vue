<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <MySchool/>
        <MyStudent/>
    </div>
</template>

<script>
    // 引入mystudent组件
    import MyStudent from './components/MyStudent.vue'
    // 引入myschool组件
    import MySchool from './components/MySchool.vue'
    
    export default {
        name:'App',
        components:{MyStudent, MySchool},
        data() {
            return {
                msg:'你好呀',
                name:''
            }
        },
    }
</script>

<style>
    .app{
        background-color: rgb(115, 119, 115);
        padding: 10px;
    }
</style>