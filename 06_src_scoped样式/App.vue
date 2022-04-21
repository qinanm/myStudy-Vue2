<template>
    <div>
        <my-school/>
        <hr/>
        <my-student/>
    </div>
</template>

<script>
    // 引入mystudent组件
    import MyStudent from './components/my-student.vue'
    // 引入myschool组件
    import MySchool from './components/my-school.vue'
    
    export default {
        name:'App',
        components:{MyStudent, MySchool}
    }
</script>

<style>

</style>