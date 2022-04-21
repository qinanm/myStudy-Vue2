<template>
    <div>
        <!-- <my-student name="李四" sex="女" age="18"/> -->
        <!-- v-bind: 可以使age接收的是双引号内部值,是整型 -->
        <my-student name="王五" sex="男" :age="19"/>
    </div>
</template>

<script>
    // 引入mystudent组件
    import MyStudent from './components/my-student.vue'
    
    export default {
        name:'App',
        components:{MyStudent}
    }
</script>

<style>

</style>