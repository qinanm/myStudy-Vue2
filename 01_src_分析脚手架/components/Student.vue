// 结构
<template>
    <div class="demo">
        <h2>学生姓名{{name}}</h2>
        <h2>学生年龄{{age}}</h2>
    </div>
</template>

// 交互
<script>
    export default {
        name:'my-student',
        data() {
            return {
                name:'柒楠',
                age:22
            }
        },
    }
</script>