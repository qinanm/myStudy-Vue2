<template>
  <div>
      <h2 >学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <!-- 全局自定义指令可用 -->
      <input type="text" v-fbind:value="name">
  </div>
</template>

<script>

    export default {
        name:'my-student',
        data() {
            return {
                name:'张三',
                sex:'男',
            }
        },
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>