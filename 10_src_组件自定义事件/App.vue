<template>
    <div class="app">
        <h1>{{msg}},学生姓名是{{name}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <MySchool :getSchoolName="getSchoolName"/>
        <hr/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第一种写法 使用 @ 或者 v-on  适合需求少使用） -->
        <!-- <MyStudent v-on:atguigu="getStudentName"/> -->
        <!-- <MyStudent @atguigu="getStudentName" @demo="testDemo"/> -->
        
        
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第二种写法 使用 ref 更灵活适合需求多使用, 这里(组件里)click被当成自定义事件，使用native保留原生事件） -->
        <MyStudent ref="student" @click.native="show"/>
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
        methods:{
            // 点击学校所在标签获得校名  子传父 父先给方法接收
            getSchoolName(schoolName){
                console.log('我是App组件，我获得了学校名',schoolName)
            },
            getStudentName(studentName){
                console.log('我是App组件，我获得了学生名',studentName)
                this.name = studentName
            },
            testDemo(){
                console.log('demo被调用了')
            },
            show(){
                alert('使用native保持原生事件')
            }
        },
        mounted(){
            this.$refs.student.$on('atguigu', this.getStudentName)

            // this.$refs.student.$once('atguigu', this.getStudentName)  // 绑定自定义事件  一次性
            
            // 第二种写法，直接写回调
            // this.$refs.student.$on('atguigu', studentName=>{
            //     // 这里需要指定箭头函数，因为普通函数的this指向的会使student组件而不是app组件
            //     console.log('我是App组件，我获得了学生名',studentName)
            //     this.name = studentName
            // })
        }
        
    }
</script>

<style>
    .app{
        background-color: rgb(147, 223, 137);
        padding: 10px;
    }
</style>